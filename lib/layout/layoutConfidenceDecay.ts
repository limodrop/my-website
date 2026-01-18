import { HomepageBlock } from "./homepageLayout"
import { listLayoutVariants } from "./layoutPerformance"

const lastUsedTimestamps: Record<string, number> = {}

export function recordLayoutUsage(variantId: string) {
  lastUsedTimestamps[variantId] = Date.now()
}

function scoreBlock(block: HomepageBlock): number {
  const typeScore = {
    hero: 1.2,
    testimonial: 1.1,
    fleet: 1.0,
    cta: 1.3,
    faq: 0.9,
    blog: 0.8
  }

  return typeScore[block.type as keyof typeof typeScore] || 1.0
}

export function getDecayedConfidenceScores(): {
  id: string
  label: string
  baseScore: number
  lastUsed: string
  decayedScore: number
}[] {
  const now = Date.now()
  const variants = listLayoutVariants()

  return variants.map((v) => {
    const structureScore = v.layout.reduce((sum, b) => sum + scoreBlock(b), 0)
    const cr = v.impressions > 0 ? v.conversions / v.impressions : 0
    const base = Math.round((structureScore + cr * 10) * 10) / 10

    const last = lastUsedTimestamps[v.id] || 0
    const days = last ? Math.floor((now - last) / 86400000) : 999
    const decayFactor = Math.max(0.5, 1 - days * 0.01)
    const decayed = Math.round(base * decayFactor * 10) / 10

    return {
      id: v.id,
      label: v.label,
      baseScore: base,
      lastUsed: last ? new Date(last).toLocaleDateString() : "never",
      decayedScore: decayed
    }
  })
}
