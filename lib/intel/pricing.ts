import { PricingContext, PricingResult, RuleTrace } from "./types"
import { makeId, now } from "./utils"

export function pricingEngine(ctx: PricingContext): PricingResult {
  let base = 100
  const trace: RuleTrace[] = []

  if (ctx.city === "portland") {
    base += 20
    trace.push({ ruleId: "city=portland", matched: true, reason: "City is Portland", output: 20 })
  }

  if (ctx.service === "airport") {
    base += 30
    trace.push({ ruleId: "service=airport", matched: true, reason: "Service is airport", output: 30 })
  }

  if (ctx.fleet === "suv") {
    base += 40
    trace.push({ ruleId: "fleet=suv", matched: true, reason: "Fleet is SUV", output: 40 })
  }

  if (ctx.season === "winter") {
    base += 10
    trace.push({ ruleId: "season=winter", matched: true, reason: "Winter surcharge", output: 10 })
  }

  return {
    id: makeId("pricing"),
    context: ctx,
    basePrice: base,
    currency: "USD",
    reason: "Rule-based pricing",
    generatedAt: now(),
    source: "rule",
    ruleTrace: trace
  }
}
