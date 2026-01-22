import { PromotionContext } from "./types"
import { getPromotions } from "./promotions"
import { makeId, now } from "./utils"

export interface SocialPost {
  id: string
  lang: string
  city: string
  service: string
  fleet: string
  content: string
  scheduledAt: number
  status: "scheduled" | "sent"
}

const socialStore: SocialPost[] = []

export function generateSocialPost(ctx: PromotionContext): SocialPost {
  const promos = getPromotions(ctx)
  const promo = promos[0]

  const content = promo
    ? `${promo.message} 🚗 Book now: https://oregontowncar.com/${ctx.lang}/services/${ctx.service} #${ctx.city} #${ctx.service}`
    : `Need a ride in ${ctx.city}? Try our ${ctx.fleet} for your next ${ctx.service} trip. 🚘 Book now: https://oregontowncar.com/${ctx.lang}/services/${ctx.service}`

  const post: SocialPost = {
    id: makeId("post"),
    lang: ctx.lang,
    city: ctx.city,
    service: ctx.service,
    fleet: ctx.fleet,
    content,
    scheduledAt: now() + 3600_000, // default 1 hour from now
    status: "scheduled"
  }

  socialStore.push(post)
  return post
}

export function listSocialPosts(): SocialPost[] {
  return socialStore
}
