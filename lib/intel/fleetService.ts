import { FleetServiceMatch, FleetServiceMatchContext } from "./types"
import { makeId, now } from "./utils"

export function fleetServiceEngine(
  ctx: FleetServiceMatchContext
): FleetServiceMatch {
  let primaryFleet = "sedan"
  const secondaryFleets = ["suv", "sprinter"]

  if (ctx.serviceType === "airport") primaryFleet = "suv"
  if (ctx.serviceType === "wine") primaryFleet = "sedan"
  if (ctx.serviceType === "corporate") primaryFleet = "sedan"
  if (ctx.serviceType === "long_distance") primaryFleet = "suv"

  return {
    id: makeId("fleet-service"),
    context: ctx,
    primaryFleet,
    secondaryFleets,
    reason: "Rule-based fleet selection",
    generatedAt: now(),
    source: "rule"
  }
}
