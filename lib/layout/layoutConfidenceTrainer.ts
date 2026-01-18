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

export function trainConfidenceWeights(): {
  label: string
  impressions: number
  conversions: number
  cr: number
  structureScore: number
  adjustedScore: number
}[] {
  const variants = listLayoutVariants()

  return variants.map((v) => {
    const structureScore = v.layout.reduce((sum, b) => sum + scoreBlock(b), 0)
    const cr = v.impressions > 0 ? v.conversions / v.impressions : 0
    const adjusted = Math.round((structureScore + cr * 10) * 10) / 10

    return {
      label: v.label,
      impressions: v.impressions,
      conversions: v.conversions,
      cr,
      structureScore: Math.round(structureScore * 10) / 10,
      adjustedScore: adjusted
    }
  })
}
