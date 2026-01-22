import { listAuditLog } from "./audit"

interface OverrideFeature {
  channel: "email" | "cta" | "social"
  lang: string
  city: string
  service: string
  metric: string
  delta: number
}

interface ScoredOverride {
  id: string
  channel: string
  target: string
  lang: string
  city: string
  service: string
  metric: string
  confidence: number
}

const trainingData: OverrideFeature[] = []

export function trainOverrideConfidenceModel() {
  const log = listAuditLog()

  for (const entry of log) {
    if (!entry.action.startsWith("override_")) continue
    const channel = entry.action.split("_")[1] as "email" | "cta" | "social"
    const meta = entry.meta || {}
    const {
      lang = "any",
      city = "any",
      service = "any",
      preCTR = 0,
      postCTR = 0
    } = meta
    const delta = postCTR - preCTR
    const metric = channel === "social" ? "engagement" : "ctr"

    trainingData.push({ channel, lang, city, service, metric, delta })
  }
}

export function scoreOverrideSuggestion(
  channel: "email" | "cta" | "social",
  target: string,
  lang: string,
  city: string,
  service: string
): ScoredOverride {
  const metric = channel === "social" ? "engagement" : "ctr"

  const similar = trainingData.filter(
    (d) =>
      d.channel === channel &&
      (d.lang === lang || d.lang === "any") &&
      (d.city === city || d.city === "any") &&
      (d.service === service || d.service === "any") &&
      d.metric === metric
  )

  const positive = similar.filter((d) => d.delta > 0).length
  const total = similar.length
  const confidence = total > 0 ? (positive / total) * 100 : 50

  return {
    id: `score-${target}`,
    channel,
    target,
    lang,
    city,
    service,
    metric,
    confidence: Math.round(confidence)
  }
}
