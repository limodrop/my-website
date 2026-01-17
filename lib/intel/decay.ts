import { ContentDecay, ContentDecayContext } from "./types"
import { makeId, now } from "./utils"

export function decayEngine(ctx: ContentDecayContext): ContentDecay {
  let score = 0
  let reason = "Content is fresh"

  const ageDays = (now() - ctx.lastUpdated) / (1000 * 60 * 60 * 24)

  if (ageDays > 30) score += 20
  if (ageDays > 90) score += 40
  if (ageDays > 180) score += 60

  if (ctx.traffic30d < 100) score += 20
  if (ctx.traffic30d < 20) score += 40

  if (ctx.rankScore < 50) score += 20
  if (ctx.rankScore < 20) score += 40

  let decayLevel: ContentDecay["decayLevel"] = "none"
  let action = "none"

  if (score > 80) {
    decayLevel = "critical"
    action = "refresh_immediately"
    reason = "Severe decay"
  } else if (score > 60) {
    decayLevel = "high"
    action = "refresh_soon"
    reason = "High decay"
  } else if (score > 40) {
    decayLevel = "medium"
    action = "review"
    reason = "Moderate decay"
  } else if (score > 20) {
    decayLevel = "low"
    action = "monitor"
    reason = "Minor decay"
  }

  return {
    id: makeId("decay"),
    context: ctx,
    decayLevel,
    score,
    action,
    reason,
    generatedAt: now(),
    source: "rule"
  }
}
