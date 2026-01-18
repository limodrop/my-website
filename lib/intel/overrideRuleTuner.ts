import { OverrideRule, listOverrideRules } from "./overrideRules"

interface RuleStats {
  ruleId: string
  matches: number
  misses: number
}

const ruleStats: Record<string, RuleStats> = {}

export function recordRuleMatch(ruleId: string, matched: boolean) {
  if (!ruleStats[ruleId]) {
    ruleStats[ruleId] = { ruleId, matches: 0, misses: 0 }
  }
  if (matched) {
    ruleStats[ruleId].matches++
  } else {
    ruleStats[ruleId].misses++
  }
}

export function getRuleTuningSuggestions(): {
  ruleId: string
  current: number
  suggested: number
  matches: number
  misses: number
}[] {
  const rules = listOverrideRules()

  return rules
    .filter((r) => ruleStats[r.id])
    .map((r) => {
      const stats = ruleStats[r.id]
      const total = stats.matches + stats.misses
      const cr = total > 0 ? stats.matches / total : 0
      let suggested = r.minConfidence

      if (cr < 0.2 && r.minConfidence > 50) {
        suggested = r.minConfidence - 5
      } else if (cr > 0.8 && r.minConfidence < 95) {
        suggested = r.minConfidence + 5
      }

      return {
        ruleId: r.id,
        current: r.minConfidence,
        suggested,
        matches: stats.matches,
        misses: stats.misses
      }
    })
}
