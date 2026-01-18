import { simulateOverrideRules } from "../lib/intel/overrideSimulator"
import { getOverrideCoverageGaps } from "../lib/intel/overrideCoverage"
import { getStaleRules, deleteStaleRules } from "../lib/intel/overrideRuleDecay"
import { getDecayedConfidenceScores, recordLayoutUsage } from "../lib/layout/layoutConfidenceDecay"
import { promoteTopLayoutVariant } from "../lib/layout/layoutPromotionEngine"
import { sendRoutedSlackAlert } from "../lib/intel/overrideSlackRouter"

const cities = ["Portland", "Beaverton", "Salem"]
const services = ["airport", "wedding", "wine", "corporate"]
const langs = ["en", "es", "fr"]
const confidence = 80

async function orchestrate() {
  console.log("🧠 Running full intelligence orchestrator...\n")

  // 1. Simulate override rules
  for (const city of cities) {
    for (const service of services) {
      for (const lang of langs) {
        const input = {
          channel: "cta",
          lang,
          city,
          service,
          confidence
        }

        const results = simulateOverrideRules(input)
        const matched = results.filter((r) => r.matched)

        if (matched.length > 0) {
          await sendRoutedSlackAlert(
            city,
            service,
            "✅ Override Match",
            `${matched.length} rules matched for ${city}/${service}/${lang}`,
            { confidence, matched: matched.map((r) => r.id) }
          )
        }
      }
    }
  }

  // 2. Report coverage gaps
  const gaps = getOverrideCoverageGaps().filter((g) => !g.hasRule)
  for (const g of gaps) {
    await sendRoutedSlackAlert(
      g.city,
      g.service,
      "❌ Missing Override Rule",
      `No override rule for ${g.city}/${g.service}/${g.lang}`,
      g
    )
  }

  // 3. Expire stale rules
  const stale = getStaleRules(30)
  if (stale.length > 0) {
    const deleted = deleteStaleRules(30)
    for (const msg of deleted) {
      await sendRoutedSlackAlert("global", "override", "🗑️ Stale Rule Deleted", msg)
    }
  }

  // 4. Promote top layout
  const promoMsg = promoteTopLayoutVariant()
  await sendRoutedSlackAlert("global", "layout", "🚀 Layout Promotion", promoMsg)

  // 5. Score decay report
  const scores = getDecayedConfidenceScores()
  const top = scores.sort((a, b) => b.decayedScore - a.decayedScore)[0]
  if (top) {
    await sendRoutedSlackAlert(
      "global",
      "layout",
      "📊 Top Layout Variant",
      `Top variant: ${top.label} (score: ${top.decayedScore})`,
      top
    )
  }

  console.log("\n✅ Orchestration complete.")
}

orchestrate()
