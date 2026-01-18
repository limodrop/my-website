import { testOverrideRuleMatch } from "./overrideRuleMatch"

export interface ExplainInput {
  channel: "cta" | "email" | "social"
  lang: string
  city: string
  service: string
  confidence: number
}

export function explainOverrideSelection(input: ExplainInput) {
  const result = testOverrideRuleMatch(
    input.channel,
    input.lang,
    input.city,
    input.service,
    input.confidence
  )

  return {
    ...result,
    context: input
  }
}
