import { getTopOverrides } from "../analytics/overrideLeaderboard"

export function runOverrideAutoPromotion({
  minImpressions = 20,
  minCR = 0.15
} = {}): string[] {
  const top = getTopOverrides({ limit: 50 })
  const promoted: string[] = []

  for (const o of top) {
    if (o.impressions >= minImpressions && o.cr >= minCR) {
      promoted.push(`✅ Promoted "${o.variant}" for ${o.target} (${(o.cr * 100).toFixed(1)}% CR)`)

      const auditEntry = {
        actor: "auto-promoter",
        action: "override_promoted",
        target: o.target,
        meta: {
          variant: o.variant,
          channel: o.channel,
          rule: o.rule,
          impressions: o.impressions,
          conversions: o.conversions,
          cr: o.cr
        }
      }
    }
  }

  return promoted.length > 0 ? promoted : ["No variants met promotion thresholds"]
}
