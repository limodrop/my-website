import { makeId, now } from "./utils"

export function sitemapPriorityEngine() {
  return {
    id: makeId("sitemap-priority"),
    priorities: {
      "/": 1.0,
      "/services/airport": 0.9,
      "/services/corporate": 0.8,
      "/cities/portland": 0.7
    },
    reason: "Static sitemap priority rules",
    generatedAt: now(),
    source: "rule"
  }
}
