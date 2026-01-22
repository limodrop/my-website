import { listEmailCampaigns, getEmailStats } from "./email"
import { suggestCtaOverrides } from "./ctaSuggest"
import { suggestSocialOverrides } from "./socialSuggest"
import { getPromoStats, listPromotions } from "./promotions"

export function exportCampaignData(format: "csv" | "json") {
  const rows: any[] = []

  // Email
  for (const e of listEmailCampaigns()) {
    const s = getEmailStats(e.id)
    rows.push({
      type: "email",
      id: e.id,
      subject: e.subject,
      city: e.city,
      service: e.service,
      lang: e.lang,
      opens: s.opens,
      clicks: s.clicks,
      conversions: s.conversions,
      open_rate: ((s.opens / 1000) * 100).toFixed(1),
      ctr: s.opens > 0 ? ((s.clicks / s.opens) * 100).toFixed(1) : "0",
      conv_rate:
        s.clicks > 0 ? ((s.conversions / s.clicks) * 100).toFixed(1) : "0"
    })
  }

  // CTA
  for (const c of suggestCtaOverrides().topPerformers) {
    rows.push({
      type: "cta",
      id: c.ctaId,
      city: c.city,
      service: c.service,
      lang: c.lang,
      views: c.views,
      clicks: c.clicks,
      conversions: c.conversions,
      ctr: c.views > 0 ? ((c.clicks / c.views) * 100).toFixed(1) : "0",
      conv_rate: c.clicks > 0 ? ((c.conversions / c.clicks) * 100).toFixed(1) : "0"
    })
  }

  // Social
  for (const s of suggestSocialOverrides().topPerformers) {
    rows.push({
      type: "social",
      id: s.postId,
      city: s.city,
      service: s.service,
      lang: s.lang,
      likes: s.likes,
      clicks: s.clicks,
      shares: s.shares,
      engagement: s.likes + s.clicks + s.shares
    })
  }

  // Promo
  for (const p of getPromoStats()) {
    const meta = listPromotions().find((x) => x.id === p.promoId)
    rows.push({
      type: "promo",
      id: p.promoId,
      city: meta?.city,
      service: meta?.service,
      lang: meta?.lang,
      impressions: p.impressions,
      clicks: p.clicks,
      conversions: p.conversions,
      ctr: p.impressions > 0 ? ((p.clicks / p.impressions) * 100).toFixed(1) : "0",
      conv_rate: p.clicks > 0 ? ((p.conversions / p.clicks) * 100).toFixed(1) : "0"
    })
  }

  if (format === "json") {
    return JSON.stringify(rows, null, 2)
  }

  const headers = Object.keys(rows[0] || {})
  const csv = [
    headers.join(","),
    ...rows.map((r) =>
      headers.map((h) => JSON.stringify(r[h] ?? "")).join(",")
    )
  ].join("\n")

  return csv
}
