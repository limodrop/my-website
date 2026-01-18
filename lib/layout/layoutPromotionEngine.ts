import { getDecayedConfidenceScores, recordLayoutUsage } from "./layoutConfidenceDecay"
import { updateHomepageLayout } from "./homepageLayout"
import { loadVariantById } from "./layoutVariantGit"
import { saveLayoutSnapshot } from "./layoutHistory"
import { recordAudit } from "../intel/audit"

export function promoteTopLayoutVariant(threshold = 12): string {
  const scores = getDecayedConfidenceScores()
  const top = scores
    .filter((s) => s.decayedScore >= threshold)
    .sort((a, b) => b.decayedScore - a.decayedScore)[0]

  if (!top) return "❌ No variant meets the promotion threshold"

  const variant = loadVariantById(top.id)
  if (!variant) return `❌ Failed to load variant ${top.id}`

  updateHomepageLayout(variant.layout)
  recordLayoutUsage(top.id)
  saveLayoutSnapshot(`Promoted: ${variant.label}`, variant.layout, "promotion")
  recordAudit({
    actor: "auto-promoter",
    action: "layout_promoted",
    target: top.id,
    meta: { label: variant.label, score: top.decayedScore }
  })

  return `✅ Promoted layout "${variant.label}" (score: ${top.decayedScore})`
}
