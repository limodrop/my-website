import { getOverrideStats } from "../analytics/overrideStats"

interface ExpiryResult {
  target: string
  variant: string
  reason: string
}

const expired: ExpiryResult[] = []

export function runOverrideExpiry({
  maxAgeDays = 30,
  minCR = 0.05,
  minImpressions = 20
} = {}): string[] {
  const now = Date.now()
  const stats = getOverrideStats()
  const messages: string[] = []

  for (const s of stats) {
    const ageDays = (now - (s as any).timestamp || now) / (1000 * 60 * 60 * 24)
    const cr = s.clicks > 0 ? s.conversions / s.clicks : 0

    if (
      s.impressions >= minImpressions &&
      (ageDays > maxAgeDays || cr < minCR)
    ) {
      expired.push({ target: s.target, variant: s.variant, reason: cr < minCR ? "Low CR" : "Expired" })

      const auditEntry = {
        actor: "auto-expirer",
        action: "override_expired",
        target: s.target,
        meta: {
          variant: s.variant,
          channel: s.channel,
          rule: s.rule,
          impressions: s.impressions,
          conversions: s.conversions,
          cr,
          reason: cr < minCR ? "Low CR" : "Expired"
        }
      }

      messages.push(`🗑️ Expired "${s.variant}" for ${s.target} (${cr < minCR ? "CR too low" : "Too old"})`)
    }
  }

  return messages.length > 0 ? messages : ["No overrides met expiry criteria"]
}

export function listExpiredOverrides(): ExpiryResult[] {
  return [...expired].reverse()
}

export function restoreExpiredOverride(target: string, variant: string): string {
  const entry = expired.find((e) => e.target === target && e.variant === variant)
  if (!entry) return "❌ Override not found in archive"

  const auditEntry = {
    actor: "admin",
    action: "override_restored",
    target,
    meta: { variant, reason: entry.reason }
  }

  return `✅ Restored override "${variant}" for ${target}`
}
