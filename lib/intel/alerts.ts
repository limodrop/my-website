import { suggestCtaOverrides } from "./ctaSuggest"
import { listPromotions } from "./promotions"
import { listAuditLog } from "./audit"
import { sendToSlack } from "./deliver"

export async function runSlackAlerts(webhookUrl: string): Promise<string[]> {
  const messages: string[] = []

  // Underperforming CTAs
  const badCtas = suggestCtaOverrides().underperformers.filter((c) => {
    const ctr = (c.clicks / c.views) * 100
    return ctr < 1.0
  })

  for (const cta of badCtas) {
    messages.push(
      `⚠️ *Low CTR CTA* — ${cta.ctaId} (${cta.city}, ${cta.service}) → CTR ${(
        (cta.clicks / cta.views) *
        100
      ).toFixed(1)}%`
    )
  }

  // Expired promos
  const now = Date.now()
  const expired = listPromotions().filter(
    (p) => p.expiresAt && p.expiresAt < now
  )

  for (const p of expired) {
    messages.push(
      `⏰ *Expired Promo* — ${p.title} (${p.city}, ${p.service}) expired on ${new Date(
        p.expiresAt!
      ).toLocaleDateString()}`
    )
  }

  // Failed overrides
  const failed = listAuditLog().filter((e) => {
    return (
      e.action.startsWith("override_") &&
      e.meta?.preCTR &&
      e.meta?.postCTR &&
      e.meta.postCTR < e.meta.preCTR
    )
  })

  for (const f of failed) {
    messages.push(
      `🔁 *Override Regressed* — ${f.target} (${f.meta.city}, ${
        f.meta.service
      }) → CTR dropped from ${f.meta.preCTR}% to ${f.meta.postCTR}%`
    )
  }

  // Send to Slack
  for (const msg of messages) {
    await sendToSlack(webhookUrl, msg)
  }

  return messages
}
