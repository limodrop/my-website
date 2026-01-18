import { simulateOverrideRules } from "../lib/intel/overrideSimulator"
import { getOverrideCoverageGaps } from "../lib/intel/overrideCoverage"
import { getStaleRules } from "../lib/intel/overrideRuleDecay"

const cities = ["Portland", "Beaverton", "Salem"]
const services = ["airport", "wedding", "wine", "corporate"]
const langs = ["en", "es", "fr"]
const confidence = 80

function runSimulation() {
  console.log("🔍 Simulating override rules across all city/service/lang combinations...\n")

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

        console.log(
          `🧪 ${city}/${service}/${lang} — matched ${matched.length} of ${results.length} rules`
        )
      }
    }
  }

  console.log("\n📉 Checking override coverage gaps...")
  const gaps = getOverrideCoverageGaps().filter((g) => !g.hasRule)
  for (const g of gaps) {
    console.log(`❌ Missing rule: ${g.city} / ${g.service} / ${g.lang}`)
  }

  console.log("\n🕰️ Checking stale rules...")
  const stale = getStaleRules(30)
  for (const s of stale) {
    console.log(`⚠️ Stale rule: ${s.rule.id} — last used: ${s.lastUsed}`)
  }

  console.log("\n✅ Override simulation complete.")
}

runSimulation()
