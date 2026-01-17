import { MultiPageContext } from "./types"
import { bookingIntentEngine } from "./bookingIntent"
import { decayEngine } from "./decay"
import { nbaEngine } from "./nba"
import { personalizationEngine } from "./personalization"
import { fleetServiceEngine } from "./fleetService"
import { cityServiceEngine } from "./cityService"
import { crossPageEngine } from "./crossPage"
import { rankingEngine } from "./ranking"
import { clusteringEngine } from "./clustering"
import { sitemapPriorityEngine } from "./sitemapPriority"

export async function orchestrator(ctx: MultiPageContext) {
  return {
    bookingIntent: bookingIntentEngine({
      sessionId: ctx.sessionId,
      lang: ctx.lang,
      device: ctx.device,
      geoCountry: ctx.geoCountry,
      season: ctx.season
    }),

    decay: decayEngine({
      pageSlug: "home",
      lastUpdated: Date.now() - 1000 * 60 * 60 * 24 * 120,
      traffic30d: 50,
      rankScore: 40,
      season: ctx.season,
      lang: ctx.lang
    }),

    nba: nbaEngine(ctx),
    personalization: personalizationEngine(ctx),

    fleetService: fleetServiceEngine({
      serviceType: "airport",
      lang: ctx.lang,
      geoCountry: ctx.geoCountry,
      season: ctx.season
    }),

    cityService: cityServiceEngine({
      citySlug: "portland",
      lang: ctx.lang,
      geoCountry: ctx.geoCountry,
      season: ctx.season
    }),

    crossPage: crossPageEngine({
      entityType: "service",
      entityId: "airport",
      lang: ctx.lang,
      geoCountry: ctx.geoCountry,
      season: ctx.season
    }),

    ranking: rankingEngine(),
    clustering: clusteringEngine(),
    sitemapPriority: sitemapPriorityEngine()
  }
}
