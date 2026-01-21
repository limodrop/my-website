import { ScheduledPost } from "@/lib/intel/types"

export const mockScheduledPosts: ScheduledPost[] = [
  {
    id: "post-1",
    platform: "instagram",
    lang: "en",
    scheduledFor: Date.now() + 1000 * 60 * 60 * 24,
    content: "❄️ Winter rides in Portland — book now!",
    tags: ["#WinterTravel", "#PDX", "#Chauffeur"],
    context: {
      city: "portland",
      service: "airport",
      fleet: "suv",
      season: "winter",
      lang: "en"
    },
    source: "rule"
  }
]
