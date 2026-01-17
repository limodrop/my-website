import { BookingIntentContext, BookingIntentPrediction, IntentLevel } from "./types"
import { makeId, now } from "./utils"

export function bookingIntentEngine(
  ctx: BookingIntentContext
): BookingIntentPrediction {
  let score = 0
  let reason = "Low engagement"

  if (ctx.device === "desktop") score += 10
  if (ctx.season === "winter" && ctx.serviceType === "airport") score += 20
  if (ctx.season === "summer" && ctx.serviceType === "wine") score += 20
  if (ctx.geoCountry === "US") score += 5

  let intent: IntentLevel = "low"
  if (score > 80) intent = "very_high"
  else if (score > 60) intent = "high"
  else if (score > 30) intent = "medium"

  return {
    id: makeId("booking-intent"),
    context: ctx,
    intent,
    score,
    reason,
    generatedAt: now(),
    source: "rule"
  }
}
