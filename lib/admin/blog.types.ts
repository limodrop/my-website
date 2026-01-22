export interface BlogContext {
  lang: "en" | "es" | "fr"
  city: string
  service: string
  season: "winter" | "spring" | "summer" | "fall"
}

export interface BlogPostDraft {
  id: string
  lang: string
  city: string
  service: string
  season: string
  title: string
  html: string
  createdAt: number
  status: "draft" | "published"
}
