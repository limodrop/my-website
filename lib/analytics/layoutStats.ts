import { SessionProfile } from "../intel/sessionProfile"

interface LayoutView {
  variant: string
  city: string
  service: string
  lang: string
  intent: string
  timestamp: number
  clicks: number
  conversions: number
}

const layoutViews: LayoutView[] = []

export function recordLayoutView(variant: string, profile: SessionProfile) {
  layoutViews.push({
    variant,
    city: profile.city,
    service: profile.service,
    lang: profile.lang,
    intent: profile.intent,
    timestamp: Date.now(),
    clicks: 0,
    conversions: 0
  })
}

export function recordLayoutClick(variant: string) {
  const latest = [...layoutViews].reverse().find((v) => v.variant === variant)
  if (latest) latest.clicks += 1
}

export function recordLayoutConversion(variant: string) {
  const latest = [...layoutViews].reverse().find((v) => v.variant === variant)
  if (latest) latest.conversions += 1
}

export function getLayoutStats(): Record<string, any> {
  const grouped: Record<string, LayoutView[]> = {}

  for (const v of layoutViews) {
    if (!grouped[v.variant]) grouped[v.variant] = []
    grouped[v.variant].push(v)
  }

  const stats: Record<string, any> = {}

  for (const [variant, views] of Object.entries(grouped)) {
    const total = views.length
    const clicks = views.reduce((sum, v) => sum + v.clicks, 0)
    const conversions = views.reduce((sum, v) => sum + v.conversions, 0)

    stats[variant] = {
      views: total,
      clicks,
      conversions,
      ctr: total > 0 ? (clicks / total) * 100 : 0,
      convRate: clicks > 0 ? (conversions / clicks) * 100 : 0
    }
  }

  return stats
}
