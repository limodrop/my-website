export interface SessionProfile {
  city: string
  service: string
  fleet: string
  lang: string
  intent: "low" | "medium" | "high"
  source: string
}

export function inferSessionProfile(req: Request): SessionProfile {
  const url = new URL(req.url)
  const params = url.searchParams

  const city = params.get("city") || geoLookup(req.headers.get("x-forwarded-for")) || "Portland"
  const service = params.get("service") || inferServiceFromReferrer(req.headers.get("referer")) || "airport"
  const fleet = params.get("fleet") || "suv"
  const lang = params.get("lang") || inferLangFromHeaders(req.headers.get("accept-language")) || "en"
  const source = params.get("utm_source") || "direct"

  const intent = params.has("book") || source === "email" || source === "retargeting"
    ? "high"
    : source === "google" || source === "organic"
    ? "medium"
    : "low"

  return { city, service, fleet, lang, intent, source }
}

function geoLookup(ip: string | null): string | null {
  if (!ip) return null
  if (ip.startsWith("66.")) return "Portland"
  if (ip.startsWith("73.")) return "Seattle"
  return null
}

function inferServiceFromReferrer(ref: string | null): string | null {
  if (!ref) return null
  if (ref.includes("wedding")) return "wedding"
  if (ref.includes("brewery")) return "brewery"
  if (ref.includes("corporate")) return "executive"
  return null
}

function inferLangFromHeaders(header: string | null): string | null {
  if (!header) return null
  if (header.startsWith("es")) return "es"
  if (header.startsWith("fr")) return "fr"
  return "en"
}
