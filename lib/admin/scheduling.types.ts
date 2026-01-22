export interface ScheduledPost {
  id: string
  platform: "instagram" | "facebook" | "email"
  lang: string
  scheduledFor: number
  content: string
  tags: string[]
  context: {
    city: string
    service: string
    fleet: string
    season: string
    lang: string
  }
  source: "rule"
}
