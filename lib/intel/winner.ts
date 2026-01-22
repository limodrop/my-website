import { getEmailStats, listEmailCampaigns } from "./email"
import { suggestCtaOverrides } from "./ctaSuggest"
import { suggestSocialOverrides } from "./socialSuggest"
import { getPromoStats } from "./promotions"

export interface Winner {
  id: string
  type: "email" | "cta" | "social" | "promo"
  label: string
  score: number
}

export function detectWinners(): Winner[] {
  const winners: Winner[] = []

  const emails = listEmailCampaigns()
  let bestEmail = null
  let bestEmailScore = 0
  for (const e of emails) {
    const s = getEmailStats(e.id)
    const score = (s.conversions || 0) + (s.clicks || 0) * 0.5 + (s.opens || 0) * 0.1
    if (score > bestEmailScore) {
      bestEmail = e
      bestEmailScore = score
    }
  }
  if (bestEmail) {
    winners.push({
      id: bestEmail.id,
      type: "email",
      label: bestEmail.subject,
      score: bestEmailScore
    })
  }

  const ctas = suggestCtaOverrides().topPerformers
  if (ctas.length > 0) {
    const top = ctas[0]
    const score = top.conversions + top.clicks * 0.5 + top.views * 0.1
    winners.push({
      id: top.ctaId,
      type: "cta",
      label: top.ctaId,
      score
    })
  }

  const socials = suggestSocialOverrides().topPerformers
  if (socials.length > 0) {
    const top = socials[0]
    const score = top.likes + top.clicks + top.shares
    winners.push({
      id: top.postId,
      type: "social",
      label: top.postId,
      score
    })
  }

  const promos = getPromoStats()
  if (promos.length > 0) {
    const top = promos.reduce((a, b) => {
      const aScore = a.conversions + a.clicks * 0.5 + a.impressions * 0.1
      const bScore = b.conversions + b.clicks * 0.5 + b.impressions * 0.1
      return aScore > bScore ? a : b
    })
    const score = top.conversions + top.clicks * 0.5 + top.impressions * 0.1
    winners.push({
      id: top.promoId,
      type: "promo",
      label: top.promoId,
      score
    })
  }

  return winners
}
