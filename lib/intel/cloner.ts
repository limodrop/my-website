import { EmailCampaign, emailStore } from "./email"
import { SocialPost, socialStore } from "./socialGen"
import { Promotion } from "./types"
import { makeId, now } from "./utils"

// Access to stores
const promoStore: Promotion[] = []

export function cloneEmail(id: string, overrides: Partial<EmailCampaign>): EmailCampaign | null {
  const original = emailStore.find((e) => e.id === id)
  if (!original) return null
  const clone = {
    ...original,
    ...overrides,
    id: makeId("email"),
    subject: `[${overrides.lang?.toUpperCase() || "CLONE"}] ${original.subject}`,
    createdAt: now(),
    status: "draft"
  }
  emailStore.push(clone)
  return clone
}

export function cloneSocial(id: string, overrides: Partial<SocialPost>): SocialPost | null {
  const original = socialStore.find((s) => s.id === id)
  if (!original) return null
  const clone = {
    ...original,
    ...overrides,
    id: makeId("post"),
    content: original.content.replace(original.city, overrides.city || original.city),
    scheduledAt: now() + 3600_000
  }
  socialStore.push(clone)
  return clone
}

export function clonePromo(id: string, overrides: Partial<Promotion>): Promotion | null {
  const original = promoStore.find((p) => p.id === id)
  if (!original) return null
  const clone = {
    ...original,
    ...overrides,
    id: makeId("promo"),
    title: `[${overrides.lang?.toUpperCase() || "CLONE"}] ${original.title}`,
    active: true,
    expiresAt: now() + 7 * 86400_000
  }
  promoStore.push(clone)
  return clone
}
