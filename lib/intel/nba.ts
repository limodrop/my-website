import { NBAContext, NBAResult, NextBestAction } from "./types"
import { makeId, now } from "./utils"
import { bookingIntentEngine } from "./bookingIntent"
import { decayEngine } from "./decay"

export function nbaEngine(ctx: NBAContext): NBAResult {
  const booking = bookingIntentEngine({
    sessionId: ctx.sessionId,
    lang: ctx.lang,
    device: ctx.device,
    geoCountry: ctx.geoCountry,
    season: ctx.season
  })

  const decay = decayEngine({
    pageSlug: "home",
    lastUpdated: now() - 1000 * 60 * 60 * 24 * 120,
    traffic30d: 50,
    rankScore: 40,
    season: ctx.season,
    lang: ctx.lang
  })

  let action: NextBestAction = "show_soft_cta"
  let target: string | undefined = undefined
  let reason = "Default soft CTA"

  if (booking.intent === "very_high" || booking.intent === "high") {
    action = "show_strong_cta"
    target = "book_now"
    reason = "High booking intent"
  }

  if (decay.decayLevel === "critical") {
    action = "refresh_content"
    target = "home"
    reason = "Critical content decay"
  }

  return {
    id: makeId("nba"),
    context: ctx,
    action,
    target,
    reason,
    generatedAt: now(),
    source: "rule"
  }
}
