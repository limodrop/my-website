import { getOverrideCoverageGaps } from "./overrideCoverage"
import { OverrideRule, addOverrideRule } from "./overrideRules"

let counter = 1000

export function generateMissingOverrideRules(): OverrideRule[] {
  const gaps = getOverrideCoverageGaps().filter((g) => !g.hasRule)

  const generated: OverrideRule[] = gaps.map((g) => ({
    id: `auto-${counter++}`,
    channel: "cta",
    lang: g.lang,
    city: g.city,
    service: g.service,
    minConfidence: 70,
    autoApprove: false
  }))

  return generated
}

export function applyGeneratedOverrideRules(rules: OverrideRule[]): string[] {
  const messages: string[] = []

  for (const r of rules) {
    addOverrideRule(r)
    messages.push(`✅ Added rule ${r.id} — ${r.city} / ${r.service} / ${r.lang}`)
  }

  return messages
}
