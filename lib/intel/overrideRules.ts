export interface OverrideRule {
  id: string
  channel: "email" | "cta" | "social"
  lang: string
  city: string
  service: string
  minConfidence: number
  autoApprove: boolean
}

const rules: OverrideRule[] = [
  {
    id: "rule-1",
    channel: "cta",
    lang: "en",
    city: "Portland",
    service: "airport",
    minConfidence: 75,
    autoApprove: true
  }
]

export function listOverrideRules(): OverrideRule[] {
  return [...rules]
}

export function addOverrideRule(rule: OverrideRule) {
  rules.push(rule)
}

export function deleteOverrideRule(id: string) {
  const i = rules.findIndex((r) => r.id === id)
  if (i >= 0) rules.splice(i, 1)
}
