import { analyticsStore } from "./track"
import { AnalyticsEvent } from "./types"

export function getRecentEvents(limit = 100): AnalyticsEvent[] {
  return analyticsStore.slice(-limit).reverse()
}
