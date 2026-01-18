import { HomepageBlock } from "./homepageLayout"
import { addLayoutVariant, trackLayoutPerformance } from "./layoutPerformance"

interface ABTestVariant {
  id: string
  label: string
  layout: HomepageBlock[]
  weight: number
}

const variants: ABTestVariant[] = []

export function defineLayoutVariant(
  id: string,
  label: string,
  layout: HomepageBlock[],
  weight: number
) {
  variants.push({ id, label, layout, weight })
  addLayoutVariant(id, label, layout)
}

export function assignLayoutVariant(sessionId: string): ABTestVariant | null {
  if (variants.length === 0) return null

  const totalWeight = variants.reduce((sum, v) => sum + v.weight, 0)
  const hash = Array.from(sessionId).reduce((acc, c) => acc + c.charCodeAt(0), 0)
  const r = hash % totalWeight

  let cumulative = 0
  for (const v of variants) {
    cumulative += v.weight
    if (r < cumulative) return v
  }

  return variants[0]
}

export function recordLayoutConversion(sessionId: string) {
  const variant = assignLayoutVariant(sessionId)
  if (variant) {
    trackLayoutPerformance(variant.id, 0, 1)
  }
}

export function recordLayoutImpression(sessionId: string) {
  const variant = assignLayoutVariant(sessionId)
  if (variant) {
    trackLayoutPerformance(variant.id, 1, 0)
  }
}
