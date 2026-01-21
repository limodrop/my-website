import { listAuditLog } from "./audit"
import { getEmailStats, emailStore } from "./email"
import { suggestCtaOverrides } from "./ctaSuggest"
import { suggestSocialOverrides } from "./socialSuggest"

export interface RollbackCandidate {
  id: string
  type: "email" | "cta" | "social"
  target: string
  before: number
  after: number
  delta: number
  metric: string
  meta: any
}

export function getRollbackCandidates(): RollbackCandidate[] {
  const log = listAuditLog()
  const candidates: RollbackCandidate[] = []

  for (const entry of log) {
    if (!entry.action.startsWith("override_")) continue
    const type = entry.action.split("_")[1] as "email" | "cta" | "social"
    const target = entry.target
    const meta = entry.meta || {}

    let before = 0
    let after = 0
    let metric = ""

    if (type === "email") {
      const stats = getEmailStats(target)
      before = meta?.preClickRate || 0
      after = stats.opens > 0 ? (stats.clicks / stats.opens) * 100 : 0
      metric = "CTR"
    }

    if (type === "cta") {
      const cta = suggestCtaOverrides().topPerformers.find((c) => c.ctaId === target)
      before = meta?.preCTR || 0
      after = cta ? (cta.clicks / cta.views) * 100 : 0
      metric = "CTR"
    }

    if (type === "social") {
      const post = suggestSocialOverrides().topPerformers.find((p) => p.postId === target)
      before = meta?.preEngagement || 0
      after = post ? post.likes + post.clicks + post.shares : 0
      metric = "Engagement"
    }

    const delta = after - before
    if (delta < 0) {
      candidates.push({ id: entry.id, type, target, before, after, delta, metric, meta })
    }
  }

  return candidates
}

export function rollbackOverride(candidate: RollbackCandidate): boolean {
  if (candidate.type === "email") {
    const email = emailStore.find((e) => e.id === candidate.target)
    if (email && candidate.meta?.originalSubject) {
      email.subject = candidate.meta.originalSubject
      return true
    }
  }

  // Extend for CTA and social if needed
  return false
}
