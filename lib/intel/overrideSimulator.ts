import { OverrideRule, listOverrideRules } from "./overrideRules"

export interface SimulationInput {
  channel: "cta" | "email" | "social"
  lang: string
  city: string
  service: string
  confidence: number
}

export interface SimulationResult {
  rule: OverrideRule
  matched: boolean
  reason: string
}

export function simulateOverrideRules(input: SimulationInput): SimulationResult[] {
  const rules = listOverrideRules()

  return rules.map((r) => {
    const matched =
      r.channel === input.channel &&
      r.lang === input.lang &&
      r.city === input.city &&
      r.service === input.service &&
      input.confidence >= r.minConfidence

    const reason = matched
      ? `✅ Matched (minConfidence ${r.minConfidence})`
      : `❌ Not matched — ${
          r.channel !== input.channel
            ? "channel mismatch"
            : r.lang !== input.lang
            ? "language mismatch"
            : r.city !== input.city
            ? "city mismatch"
            : r.service !== input.service
            ? "service mismatch"
            : input.confidence < r.minConfidence
            ? `confidence ${input.confidence} < ${r.minConfidence}`
            : "unknown"
        }`

    return { rule: r, matched, reason }
  })
}
