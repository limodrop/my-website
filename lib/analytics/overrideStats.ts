interface OverrideStat {
  target: string
  variant: string
  channel: "email" | "cta" | "social"
  rule: string
  impressions: number
  clicks: number
  conversions: number
}

const stats: OverrideStat[] = []

export function recordOverrideImpression(
  target: string,
  variant: string,
  channel: "email" | "cta" | "social",
  rule: string
) {
  const entry = stats.find(
    (s) => s.target === target && s.variant === variant && s.channel === channel
  )
  if (entry) {
    entry.impressions += 1
  } else {
    stats.push({ target, variant, channel, rule, impressions: 1, clicks: 0, conversions: 0 })
  }
}

export function recordOverrideClick(target: string, variant: string) {
  const entry = stats.find((s) => s.target === target && s.variant === variant)
  if (entry) entry.clicks += 1
}

export function recordOverrideConversion(target: string, variant: string) {
  const entry = stats.find((s) => s.target === target && s.variant === variant)
  if (entry) entry.conversions += 1
}

export function getOverrideStats(): OverrideStat[] {
  return stats
}
