import { scoreOverrideSuggestion } from "./overrideScore"
import { recordAudit } from "./audit"

export interface AutoApprovalRule {
  id: string
  channel: "email" | "cta" | "social"
  metric: "ctr" | "engagement"
  lang: string
  city: string
  service: string
  minConfidence: number
}

const rules: AutoApprovalRule[] = []

export function listAutoApprovalRules(): AutoApprovalRule[] {
  return rules
}

export function addAutoApprovalRule(rule: Omit<AutoApprovalRule, "id">) {
  rules.push({ ...rule, id: `rule-${Math.random().toString(36).slice(2, 8)}` })
}

export function checkAutoApproval(
  channel: "email" | "cta" | "social",
  target: string,
  lang: string,
  city: string,
  service: string
): boolean {
  const score = scoreOverrideSuggestion(channel, target, lang, city, service)
  const metric = channel === "social" ? "engagement" : "ctr"

  const match = rules.find(
    (r) =>
      r.channel === channel &&
      r.metric === metric &&
      (r.lang === lang || r.lang === "any") &&
      (r.city === city || r.city === "any") &&
      (r.service === service || r.service === "any")
  )

  if (match && score.confidence >= match.minConfidence) {
    recordAudit({
      actor: "auto-approver",
      action: `auto_approved_${channel}`,
      target,
      meta: { confidence: score.confidence, rule: match }
    })
    return true
  }

  return false
}
