import { getEmailStats, listEmailCampaigns } from "./email"
import { suggestCtaOverrides } from "./ctaSuggest"
import { suggestSocialOverrides } from "./socialSuggest"
import { getPromoStats } from "./promotions"

export function generateDigest(): string {
  const emails = listEmailCampaigns().slice(-3)
  const ctas = suggestCtaOverrides().underperformers.slice(0, 3)
  const socials = suggestSocialOverrides().underperformers.slice(0, 3)
  const promos = getPromoStats().slice(0, 3)

  let out = `📊 *Daily Campaign Digest*\n\n`

  out += `📧 *Email Campaigns*\n`
  for (const e of emails) {
    const s = getEmailStats(e.id)
    const open = ((s.opens / 1000) * 100).toFixed(1)
    const ctr = s.opens > 0 ? ((s.clicks / s.opens) * 100).toFixed(1) : "0"
    const conv = s.clicks > 0 ? ((s.conversions / s.clicks) * 100).toFixed(1) : "0"
    out += `• ${e.subject} — Open: ${open}%, CTR: ${ctr}%, Conv: ${conv}%\n`
  }

  out += `\n🚨 *Underperforming CTAs*\n`
  for (const c of ctas) {
    const ctr = ((c.clicks / c.views) * 100 || 0).toFixed(1)
    const conv = ((c.conversions / c.clicks) * 100 || 0).toFixed(1)
    out += `• ${c.ctaId} (${c.city}, ${c.service}) — CTR: ${ctr}%, Conv: ${conv}%\n`
  }

  out += `\n📉 *Weak Social Posts*\n`
  for (const p of socials) {
    const total = p.likes + p.clicks + p.shares
    out += `• ${p.postId} (${p.city}, ${p.service}) — Engagement: ${total}\n`
  }

  out += `\n🏷️ *Promo Stats*\n`
  for (const p of promos) {
    const ctr = p.impressions > 0 ? ((p.clicks / p.impressions) * 100).toFixed(1) : "0"
    const conv = p.clicks > 0 ? ((p.conversions / p.clicks) * 100).toFixed(1) : "0"
    out += `• ${p.promoId} — CTR: ${ctr}%, Conv: ${conv}%\n`
  }

  return out
}
