import { AnalyticsEvent } from "./types"

export const analyticsStore: AnalyticsEvent[] = []

export function trackEvent(event: AnalyticsEvent) {
  analyticsStore.push(event)
}

export function getRecentEvents(limit = 20): AnalyticsEvent[] {
  return analyticsStore.slice(-limit).reverse()
}
