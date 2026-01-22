import { listAuditLog } from "./audit"

interface OverridePattern {
  channel: "cta" | "email" | "social" | "promo"
  lang: string
  city: string
  service: string
  action: string
  count: number
}

export function learnOverridePatterns(): OverridePattern[] {
  const log = listAuditLog()
  const patterns: Record<string, OverridePattern> = {}

  for (const entry of log) {
    if (!entry.action.startsWith("override_")) continue
    const { lang, city, service } = entry.meta || {}
    const key = `${entry.action}|${lang}|${city}|${service}`

    if (!patterns[key]) {
      patterns[key] = {
        channel: entry.action.split("_")[1] as any,
        lang: lang || "any",
        city: city || "any",
        service: service || "any",
        action: entry.action,
        count: 0
      }
    }

    patterns[key].count++
  }

  return Object.values(patterns).sort((a, b) => b.count - a.count)
}
