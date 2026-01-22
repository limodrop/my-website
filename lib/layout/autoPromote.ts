import { listLayoutVariants } from "./layoutVariants"
import { getLayoutStats } from "../analytics/layoutStats"
import { updateHomepageLayout } from "./homepageLayout"

export function runLayoutAutoPromotion(): string[] {
  const stats = getLayoutStats()
  const variants = listLayoutVariants()
  const messages: string[] = []

  const best = Object.entries(stats)
    .filter(([_, s]: any) => s.views >= 10)
    .sort((a: any, b: any) => b[1].convRate - a[1].convRate)[0]

  if (!best) return ["No eligible variants found"]

  const [variantId, data] = best
  const variant = variants.find((v) => v.id === variantId)
  if (!variant) return ["Top variant not found"]

  updateHomepageLayout(variant.layout)

  const auditEntry = {
    actor: "auto-promoter",
    action: "layout_promoted",
    target: variantId,
    meta: {
      views: data.views,
      clicks: data.clicks,
      conversions: data.conversions,
      convRate: data.convRate
    }
  }

  messages.push(`✅ Promoted layout variant "${variant.label}" (CR: ${data.convRate.toFixed(1)}%)`)
  return messages
}
