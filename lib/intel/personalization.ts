import { MultiPageContext, MultiPageProfile } from "./types"
import { makeId, now } from "./utils"
import { bookingIntentEngine } from "./bookingIntent"

export function personalizationEngine(
  ctx: MultiPageContext
): MultiPageProfile {
  const booking = bookingIntentEngine({
    sessionId: ctx.sessionId,
    lang: ctx.lang,
    device: ctx.device,
    geoCountry: ctx.geoCountry,
    season: ctx.season
  })

  const interests = []
  if (ctx.season === "winter") interests.push("airport")
  if (ctx.season === "summer") interests.push("wine")

  return {
    id: makeId("profile"),
    context: ctx,
    intent: booking.intent,
    interests,
    preferredCity: ctx.geoCountry === "US" ? "portland" : undefined,
    preferredFleet: "suv",
    recommendedServices: interests,
    recommendedCities: ["portland"],
    ctaStrength: booking.intent === "high" ? "strong" : "normal",
    promo: ctx.season === "winter" ? "winter_travel" : undefined,
    generatedAt: now(),
    source: "rule"
  }
}
