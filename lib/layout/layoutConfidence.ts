import { HomepageBlock } from "./homepageLayout"
import { listLayoutVariants } from "./layoutPerformance"

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

export function estimateLayoutConfidence(): {
  id: string
  label: string
  score: number
  impressions: number
  conversions: number
}[] {
  const variants = listLayoutVariants()

  return variants.map((v) => {
    const structureScore = v.layout.reduce((sum, b) => sum + scoreBlock(b), 0)
    const cr = v.impressions > 0 ? v.conversions / v.impressions : 0
    const score = Math.round((structureScore + cr * 10) * 10) / 10

    return {
      id: v.id,
      label: v.label,
      score,
      impressions: v.impressions,
      conversions: v.conversions
    }
  })
}
