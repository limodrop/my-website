import { OverrideRule, listOverrideRules } from "./overrideRules"

export interface RuleMatchResult {
  matched: boolean
  rule?: OverrideRule
  reason: string
}

export function testOverrideRuleMatch(
  channel: "email" | "cta" | "social",
  lang: string,
  city: string,
  service: string,
  confidence: number
): RuleMatchResult {
  const rules = listOverrideRules()

  const match = rules.find(
    (r) =>
      r.channel === channel &&
      r.lang === lang &&
      r.city === city &&
      r.service === service &&
      confidence >= r.minConfidence
  )

  if (match) {
    return {
      matched: true,
      rule: match,
      reason: `Matched rule ${match.id} with minConfidence ${match.minConfidence}`
    }
  }

  return {
    matched: false,
    reason: "No rule matched all conditions"
  }
}
