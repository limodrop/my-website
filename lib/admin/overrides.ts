type RuleOverrideKey = string // e.g. "pricing:city=portland"

interface RuleOverride {
  ruleId: string
  engine: "pricing" | "messaging" | "social"
  contextKey: string // e.g. "city=portland"
  overrideOutput: any
}

const overrideStore: Record<RuleOverrideKey, RuleOverride> = {}

export function setRuleOverride(
  engine: RuleOverride["engine"],
  ruleId: string,
  contextKey: string,
  overrideOutput: any
) {
  const key = `${engine}:${contextKey}`
  overrideStore[key] = { engine, ruleId, contextKey, overrideOutput }
}

export function getRuleOverride(
  engine: RuleOverride["engine"],
  contextKey: string
): RuleOverride | null {
  const key = `${engine}:${contextKey}`
  return overrideStore[key] || null
}

export function listOverrides(): RuleOverride[] {
  return Object.values(overrideStore)
}
