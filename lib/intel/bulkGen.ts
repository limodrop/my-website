import { PromotionContext } from "./types"
import { generateSocialPost } from "./socialGen"
import { generateEmailCampaign } from "./email"
import { addPromotion } from "./promotions"
import { makeId, now } from "./utils"

export interface BulkContext {
  cities: string[]
  services: string[]
  fleets: string[]
  langs: string[]
  season: string
}

export function runBulkGeneration(ctx: BulkContext) {
  const results = []

  for (const city of ctx.cities) {
    for (const service of ctx.services) {
      for (const fleet of ctx.fleets) {
        for (const lang of ctx.langs) {
          const base: PromotionContext = {
            city,
            service,
            fleet,
            lang,
            season: ctx.season as any
          }

          // Generate social
          const social = generateSocialPost(base)

          // Generate email
          const email = generateEmailCampaign(base)

          // Generate promo
          const promo = addPromotion({
            title: `${ctx.season} ${city} ${service} Deal`,
            message: `🚗 Save big on ${service} rides in ${city} this ${ctx.season}!`,
            city,
            service,
            fleet,
            season: ctx.season,
            lang,
            active: true,
            expiresAt: now() + 7 * 86400_000
          })

          results.push({ city, service, fleet, lang, social, email, promo })
        }
      }
    }
  }

  return results
}
