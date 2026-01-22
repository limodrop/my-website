export interface PriceMessageRule {
  id: string
  city: string
  service: string
  fleet: string
  season: "winter" | "spring" | "summer" | "fall"
  label: string
  messages: string[]
}
