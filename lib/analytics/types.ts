export interface AnalyticsEvent {
  id: string
  type: "page_view" | "cta_click" | "booking" | "error"
  path: string
  sessionId: string
  timestamp: number
  meta?: Record<string, any>
}
