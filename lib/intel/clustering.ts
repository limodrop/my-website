import { makeId, now } from "./utils"

export function clusteringEngine() {
  return {
    id: makeId("cluster"),
    clusters: {
      travel: ["airport", "long_distance"],
      leisure: ["wine"],
      business: ["corporate"]
    },
    reason: "Static clustering rules",
    generatedAt: now(),
    source: "rule"
  }
}
