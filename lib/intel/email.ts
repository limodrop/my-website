import { PromotionContext, Promotion } from "./types"
import { getPromotions } from "./promotions"
import { makeId, now } from "./utils"

export interface EmailCampaign {
  id: string
  lang: string
  city: string
  service: string
  season: string
  subject: string
  html: string
  createdAt: number
  scheduledAt?: number
  status: "draft" | "scheduled" | "sent"
}

const emailStore: EmailCampaign[] = []

export function generateEmailCampaign(ctx: PromotionContext): EmailCampaign {
  const promos = getPromotions(ctx)
  const promo = promos[0]

  const subject = promo
    ? `${promo.title} — ${promo.message}`
    : `Plan your ${ctx.service} in ${ctx.city} this ${ctx.season}`

  const html = `
    <h1>${promo?.title || "Your next ride awaits"}</h1>
    <p>${promo?.message || `Book your ${ctx.service} in ${ctx.city} this ${ctx.season}.`}</p>
    <p><a href="https://oregontowncar.com/${ctx.lang}/services/${ctx.service}" style="background:#000;color:#fff;padding:10px 20px;text-decoration:none;border-radius:4px;">Book Now</a></p>
  `

  const campaign: EmailCampaign = {
    id: makeId("email"),
    lang: ctx.lang,
    city: ctx.city,
    service: ctx.service,
    season: ctx.season,
    subject,
    html,
    createdAt: now(),
    status: "draft"
  }

  emailStore.push(campaign)
  return campaign
}

export function listEmailCampaigns(): EmailCampaign[] {
  return emailStore
}

export function scheduleEmail(id: string, timestamp: number) {
  const c = emailStore.find((e) => e.id === id)
  if (c) {
    c.scheduledAt = timestamp
    c.status = "scheduled"
  }
}

export interface EmailEvent {
  campaignId: string
  type: "open" | "click" | "conversion"
  timestamp: number
}

const emailEvents: EmailEvent[] = []

export function recordEmailEvent(event: EmailEvent) {
  emailEvents.push(event)
}

export function getEmailStats(campaignId: string) {
  const events = emailEvents.filter((e) => e.campaignId === campaignId)
  const opens = events.filter((e) => e.type === "open").length
  const clicks = events.filter((e) => e.type === "click").length
  const conversions = events.filter((e) => e.type === "conversion").length
  return { opens, clicks, conversions }
}

export function getNonOpeners(campaignId: string): number {
  const opens = emailEvents.filter((e) => e.campaignId === campaignId && e.type === "open").length
  return 1000 - opens // assume 1000 sent
}

export function generateResendVariant(originalId: string): EmailCampaign | null {
  const original = emailStore.find((c) => c.id === originalId)
  if (!original) return null

  const subject = `[Reminder] ${original.subject}`
  const html = original.html.replace("Book now", "Still thinking? Book now")

  const variant: EmailCampaign = {
    ...original,
    id: makeId("email"),
    subject,
    html,
    createdAt: now(),
    status: "draft"
  }

  emailStore.push(variant)
  return variant
}
