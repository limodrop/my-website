import { getRecentEvents } from "../analytics/extended"

interface CtaStats {
  ctaId: string
  lang: string
  city: string
  service: string
  fleet: string
  views: number
  clicks: number
  conversions: number
}

export function suggestCtaOverrides(): {
  underperformers: CtaStats[]
  topPerformers: CtaStats[]
} {
  const events = getRecentEvents(1000)
  const map = new Map<string, CtaStats>()

  for (const e of events) {
    const { ctaId, lang, citySlug, serviceType, fleetType } = e.meta || {}
    if (!ctaId) continue
    const key = `${ctaId}|${lang}|${citySlug}|${serviceType}|${fleetType}`

    if (!map.has(key)) {
      map.set(key, {
        ctaId,
        lang,
        city: citySlug || "unknown",
        service: serviceType || "unknown",
        fleet: fleetType || "unknown",
        views: 0,
        clicks: 0,
        conversions: 0
      })
    }

    const stats = map.get(key)!
    if (e.type === "page_view") stats.views++
    if (e.type === "cta_click") stats.clicks++
    if (e.type === "booking_redirect" || e.type === "conversion") stats.conversions++
  }

  const all = Array.from(map.values())
  const withCtr = all.map((s) => ({
    ...s,
    ctr: s.views > 0 ? s.clicks / s.views : 0,
    conv: s.clicks > 0 ? s.conversions / s.clicks : 0
  }))

  const underperformers = withCtr
    .filter((s) => s.ctr < 0.05 || s.conv < 0.1)
    .sort((a, b) => a.conv - b.conv)

  const topPerformers = withCtr
    .filter((s) => s.ctr > 0.1 && s.conv > 0.2)
    .sort((a, b) => b.conv - a.conv)

  return { underperformers, topPerformers }
}
