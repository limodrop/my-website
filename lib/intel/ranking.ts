import { makeId, now } from "./utils"

export function rankingEngine() {
  return {
    id: makeId("ranking"),
    items: ["airport", "corporate", "wine"],
    reason: "Static ranking rules",
    generatedAt: now(),
    source: "rule"
  }
}
