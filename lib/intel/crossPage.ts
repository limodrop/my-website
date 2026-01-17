import { CrossPageContext, CrossPageRecommendation } from "./types"
import { makeId, now } from "./utils"

export function crossPageEngine(
  ctx: CrossPageContext
): CrossPageRecommendation {
  const related = []

  if (ctx.entityType === "service") related.push("airport", "corporate")
  if (ctx.entityType === "city") related.push("portland", "beaverton")
  if (ctx.entityType === "fleet") related.push("suv", "sedan")
  if (ctx.entityType === "blog") related.push("airport", "wine")

  return {
    id: makeId("cross-page"),
    context: ctx,
    related,
    reason: "Rule-based cross-page relationships",
    generatedAt: now(),
    source: "rule"
  }
}
