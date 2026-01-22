import { BlogContext, BlogPostDraft } from "@/lib/admin/blog.types"
import { makeId, now } from "./utils"

export function blogTopicEngine(ctx: BlogContext): string[] {
  const { city, service, season, lang } = ctx

  const base = {
    en: [
      `Top 5 ${service} tips in ${city}`,
      `Why ${city} loves our ${service} service`,
      `How to book a ${service} in ${city} this ${season}`
    ],
    es: [
      `5 consejos para ${service} en ${city}`,
      `Por qué ${city} elige nuestro servicio de ${service}`,
      `Cómo reservar un ${service} en ${city} este ${season}`
    ],
    fr: [
      `5 conseils pour ${service} à ${city}`,
      `Pourquoi ${city} choisit notre service de ${service}`,
      `Comment réserver un ${service} à ${city} en ${season}`
    ]
  }

  return base[lang] || []
}

export function blogWriterEngine(ctx: BlogContext, topic: string): BlogPostDraft {
  const html = `<p>This is a localized blog post about <strong>${topic}</strong> in ${ctx.city} (${ctx.lang}).</p>
  <ul>
    <li>Tip 1: Book early during ${ctx.season}</li>
    <li>Tip 2: Choose the right fleet for your ${ctx.service} needs</li>
    <li>Tip 3: Enjoy premium service in ${ctx.city}</li>
  </ul>`

  return {
    id: makeId("blog"),
    lang: ctx.lang,
    city: ctx.city,
    service: ctx.service,
    season: ctx.season,
    title: topic,
    html,
    createdAt: now(),
    status: "draft"
  }
}
