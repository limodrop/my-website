import { SocialContext, ScheduledPost } from "./types"
import { makeId, now } from "./utils"

export interface SocialPost {
  id: string
  lang: string
  city: string
  service: string
  fleet: string
  content: string
  scheduledAt: number
  status: "scheduled" | "sent"
}

const socialStore: SocialPost[] = []

export function socialScheduler(ctx: SocialContext): ScheduledPost[] {
  const posts: ScheduledPost[] = []

  if (ctx.season === "winter") {
    posts.push({
      id: makeId("post"),
      platform: "instagram",
      lang: ctx.lang,
      scheduledFor: now() + 1000 * 60 * 60 * 24,
      content: `❄️ Winter travel made easy. Book your airport ride in ${ctx.city} today!`,
      tags: ["#WinterTravel", "#PDX", "#Chauffeur"],
      context: ctx,
      source: "rule"
    })
  }

  if (ctx.service === "wine") {
    posts.push({
      id: makeId("post"),
      platform: "facebook",
      lang: ctx.lang,
      scheduledFor: now() + 1000 * 60 * 60 * 48,
      content: `🍷 Explore Oregon wine country in style. Private tours now available from ${ctx.city}.`,
      tags: ["#WineTour", "#OregonWines", "#LuxuryRide"],
      context: ctx,
      source: "rule"
    })
  }

  return posts
}

export function listScheduledPosts(): SocialPost[] {
  return socialStore
    .filter((p) => p.status === "scheduled")
    .sort((a, b) => a.scheduledAt - b.scheduledAt)
}

export function reschedulePost(id: string, newTime: number) {
  const post = socialStore.find((p) => p.id === id)
  if (post) post.scheduledAt = newTime
}

export function deletePost(id: string) {
  const i = socialStore.findIndex((p) => p.id === id)
  if (i !== -1) socialStore.splice(i, 1)
}
