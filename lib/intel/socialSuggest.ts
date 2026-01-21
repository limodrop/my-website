import { getRecentEvents } from "../analytics/extended"

interface SocialStats {
  postId: string
  lang: string
  city: string
  service: string
  fleet: string
  likes: number
  clicks: number
  shares: number
}

export function suggestSocialOverrides(): {
  underperformers: SocialStats[]
  topPerformers: SocialStats[]
} {
  const events = getRecentEvents(1000)
  const map = new Map<string, SocialStats>()

  for (const e of events) {
    const { postId, lang, citySlug, serviceType, fleetType } = e.meta || {}
    if (!postId) continue
    const key = `${postId}|${lang}|${citySlug}|${serviceType}|${fleetType}`

    if (!map.has(key)) {
      map.set(key, {
        postId,
        lang,
        city: citySlug || "unknown",
        service: serviceType || "unknown",
        fleet: fleetType || "unknown",
        likes: 0,
        clicks: 0,
        shares: 0
      })
    }

    const stats = map.get(key)!
    if (e.type === "social_like") stats.likes++
    if (e.type === "social_click") stats.clicks++
    if (e.type === "social_share") stats.shares++
  }

  const all = Array.from(map.values())
  const withScore = all.map((s) => ({
    ...s,
    engagement: s.likes + s.clicks + s.shares
  }))

  const underperformers = withScore
    .filter((s) => s.engagement < 3)
    .sort((a, b) => a.engagement - b.engagement)

  const topPerformers = withScore
    .filter((s) => s.engagement > 10)
    .sort((a, b) => b.engagement - a.engagement)

  return { underperformers, topPerformers }
}
