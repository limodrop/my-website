import { PriceMessagingContext, PriceMessagingResult, RuleTrace } from "./types"
import { makeId, now } from "./utils"

export function priceMessagingEngine(ctx: PriceMessagingContext): PriceMessagingResult {
  const messages = []
  const trace: RuleTrace[] = []

  if (ctx.season === "winter") {
    messages.push("Winter rates in effect")
    trace.push({ ruleId: "season=winter", matched: true, reason: "Winter season", output: "Winter rates in effect" })
  }

  if (ctx.city === "portland") {
    messages.push("Includes PDX airport pickup")
    trace.push({ ruleId: "city=portland", matched: true, reason: "City is Portland", output: "Includes PDX airport pickup" })
  }

  if (ctx.fleet === "suv") {
    messages.push("Luxury SUV upgrade included")
    trace.push({ ruleId: "fleet=suv", matched: true, reason: "Fleet is SUV", output: "Luxury SUV upgrade included" })
  }

  if (ctx.service === "wine") {
    messages.push("Includes 6-hour wine tour")
    trace.push({ ruleId: "service=wine", matched: true, reason: "Wine tour service", output: "Includes 6-hour wine tour" })
  }

  return {
    id: makeId("price-msg"),
    context: ctx,
    messages,
    label: messages.length > 0 ? messages[0] : "Flat rate pricing",
    generatedAt: now(),
    source: "rule",
    ruleTrace: trace
  }
}
