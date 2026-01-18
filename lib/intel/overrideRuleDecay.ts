import { OverrideRule, listOverrideRules, deleteOverrideRule } from "./overrideRules"

const lastMatchTimestamps: Record<string, number> = {}

export function recordRuleUsage(ruleId: string) {
  lastMatchTimestamps[ruleId] = Date.now()
}

export function getStaleRules(thresholdDays = 30): { rule: OverrideRule; lastUsed: string }[] {
  const now = Date.now()
  const rules = listOverrideRules()

  return rules
    .filter((r) => {
      const last = lastMatchTimestamps[r.id]
      return !last || now - last > thresholdDays * 86400000
    })
    .map((r) => ({
      rule: r,
      lastUsed: lastMatchTimestamps[r.id]
        ? new Date(lastMatchTimestamps[r.id]).toLocaleDateString()
        : "never"
    }))
}

export function deleteStaleRules(thresholdDays = 30): string[] {
  const stale = getStaleRules(thresholdDays)
  const messages: string[] = []

  for (const s of stale) {
    deleteOverrideRule(s.rule.id)
    messages.push(`🗑️ Deleted stale rule ${s.rule.id} (last used: ${s.lastUsed})`)
  }

  return messages
}
