import { HomepageBlock, updateHomepageLayout, getHomepageLayout } from "./homepageLayout"
import { saveLayoutSnapshot } from "./layoutHistory"

interface LayoutVariant {
  id: string
  label: string
  layout: HomepageBlock[]
  impressions: number
  conversions: number
  cr?: number
}

const variants: LayoutVariant[] = []

export function trackLayoutPerformance(id: string, impressions: number, conversions: number) {
  const v = variants.find((v) => v.id === id)
  if (v) {
    v.impressions += impressions
    v.conversions += conversions
  }
}

export function addLayoutVariant(id: string, label: string, layout: HomepageBlock[]) {
  variants.push({ id, label, layout, impressions: 0, conversions: 0 })
}

export function promoteTopLayout(minImpressions = 50, minCR = 0.2): string {
  const eligible = variants.filter((v) => v.impressions >= minImpressions)
  if (eligible.length === 0) return "No layout variants meet promotion criteria"

  const best = [...eligible].sort(
    (a, b) => b.conversions / b.impressions - a.conversions / a.impressions
  )[0]

  updateHomepageLayout(best.layout)
  saveLayoutSnapshot(`Promoted: ${best.label}`, best.layout, "auto-promotion")

  const auditEntry = {
    actor: "layout-promoter",
    action: "layout_promoted",
    target: best.id,
    meta: {
      label: best.label,
      impressions: best.impressions,
      conversions: best.conversions,
      cr: best.conversions / best.impressions
    }
  }

  return `✅ Promoted layout "${best.label}" with ${(best.conversions / best.impressions * 100).toFixed(1)}% CR`
}

export function listLayoutVariants(): LayoutVariant[] {
  return [...variants].map((v) => ({
    ...v,
    cr: v.impressions > 0 ? v.conversions / v.impressions : 0
  }))
}
