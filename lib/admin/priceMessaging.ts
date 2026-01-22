import { PriceMessageRule } from "./priceMessaging.types"

export const mockPriceMessages: PriceMessageRule[] = [
  {
    id: "msg-1",
    city: "portland",
    service: "airport",
    fleet: "suv",
    season: "winter",
    label: "Winter SUV Special",
    messages: ["Includes PDX pickup", "Free 15-min wait time"]
  },
  {
    id: "msg-2",
    city: "beaverton",
    service: "corporate",
    fleet: "sedan",
    season: "summer",
    label: "Executive Summer Rate",
    messages: ["Flat rate", "Priority pickup"]
  }
]
