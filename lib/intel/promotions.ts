import { Promotion, PromotionContext } from "./types"
import { makeId, now } from "./utils"

const promoStore: Promotion[] = [
  {
    id: "promo1",
    title: "Winter Special",
    message: "❄️ 10% off all airport rides in Portland this winter!",
    city: "portland",
    service: "airport",
    season: "winter",
    lang: "en",
    active: true,
    expiresAt: now() + 7 * 86400_000
  },
  {
    id: "promo2",
    title: "Tour de Vinos",
    message: "🍷 Descuento especial en tours de vino en Beaverton este verano",
    city: "beaverton",
    service: "wine",
    season: "summer",
    lang: "es",
    active: true,
    expiresAt: now() + 14 * 86400_000
  }
]

export function getPromotions(ctx: PromotionContext): Promotion[] {
  const current = now()
  return promoStore.filter((p) => {
    if (!p.active) return false
    if (p.expiresAt && p.expiresAt < current) return false
    if (p.city && p.city !== ctx.city) return false
    if (p.service && p.service !== ctx.service) return false
    if (p.fleet && p.fleet !== ctx.fleet) return false
    if (p.season && p.season !== ctx.season) return false
    if (p.lang && p.lang !== ctx.lang) return false
    return true
  })
}

export function addPromotion(p: Omit<Promotion, "id">): Promotion {
  const promo = { ...p, id: makeId("promo") }
  promoStore.push(promo)
  return promo
}

export function listPromotions(): Promotion[] {
  return promoStore
}

export function expireOldPromotions() {
  const current = now()
  for (const p of promoStore) {
    if (p.expiresAt && p.expiresAt < current) {
      p.active = false
    }
  }
}

interface PromoStats {
  promoId: string
  impressions: number
  clicks: number
  conversions: number
  likes: number
  shares: number
}

const promoStatsStore: Record<string, PromoStats> = {}

export function recordPromoEvent(promoId: string, type: "impression" | "click" | "conversion" | "like" | "share") {
  if (!promoStatsStore[promoId]) {
    promoStatsStore[promoId] = {
      promoId,
      impressions: 0,
      clicks: 0,
      conversions: 0,
      likes: 0,
      shares: 0
    }
  }

  const stats = promoStatsStore[promoId]
  if (type === "impression") stats.impressions++
  if (type === "click") stats.clicks++
  if (type === "conversion") stats.conversions++
  if (type === "like") stats.likes++
  if (type === "share") stats.shares++
}

export function getPromoStats(): PromoStats[] {
  return Object.values(promoStatsStore)
}
