import { scoreOverrideSuggestion } from "./overrideScore"

export interface OverrideSimulation {
  id: string
  channel: "email" | "cta" | "social"
  target: string
  original: string
  proposed: string
  lang: string
  city: string
  service: string
  confidence: number
}

export function simulateOverride(
  channel: "email" | "cta" | "social",
  target: string,
  original: string,
  proposed: string,
  lang: string,
  city: string,
  service: string
): OverrideSimulation {
  const score = scoreOverrideSuggestion(channel, target, lang, city, service)

  return {
    id: `sim-${Math.random().toString(36).slice(2, 8)}`,
    channel,
    target,
    original,
    proposed,
    lang,
    city,
    service,
    confidence: score.confidence
  }
}
