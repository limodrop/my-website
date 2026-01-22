import { getOverrideStats } from "./overrideStats"

export function getTopOverrides({
  channel,
  city,
  service,
  limit = 10
}: {
  channel?: string
  city?: string
  service?: string
  limit?: number
}) {
  const all = getOverrideStats()

  const filtered = all.filter((s) => {
    return (
      (!channel || s.channel === channel) &&
      (!city || s.rule.includes(city)) &&
      (!service || s.rule.includes(service))
    )
  })

  const scored = filtered.map((s) => ({
    ...s,
    ctr: s.impressions > 0 ? s.clicks / s.impressions : 0,
    cr: s.clicks > 0 ? s.conversions / s.clicks : 0
  }))

  return scored
    .sort((a, b) => b.cr - a.cr)
    .slice(0, limit)
}
