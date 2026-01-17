import { CityServiceMatch, CityServiceMatchContext } from "./types"
import { makeId, now } from "./utils"

export function cityServiceEngine(
  ctx: CityServiceMatchContext
): CityServiceMatch {
  let primaryServices = ["airport"]
  let secondaryServices = ["corporate", "wine"]

  if (ctx.citySlug === "portland") primaryServices = ["airport", "corporate"]
  if (ctx.citySlug === "hillsboro") primaryServices = ["corporate"]
  if (ctx.citySlug === "vancouver") primaryServices = ["airport", "wine"]

  return {
    id: makeId("city-service"),
    context: ctx,
    primaryServices,
    secondaryServices,
    reason: "Rule-based city-service mapping",
    generatedAt: now(),
    source: "rule"
  }
}
