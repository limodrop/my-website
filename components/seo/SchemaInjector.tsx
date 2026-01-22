"use client"

import Head from "next/head"
import {
  generateServiceSchema,
  generateLocalBusinessSchema,
  generateArticleSchema
} from "@/lib/seo/schema"

export function SchemaInjector({
  type,
  lang,
  path,
  city,
  service,
  title,
  date
}: {
  type: "service" | "business" | "article"
  lang: string
  path: string
  city?: string
  service?: string
  title?: string
  date?: string
}) {
  const url = `https://oregontowncar.com/${lang}${path}`

  const schema =
    type === "service"
      ? generateServiceSchema({ lang, city: city || "", service: service || "", url })
      : type === "business"
      ? generateLocalBusinessSchema({ lang, city: city || "", url })
      : generateArticleSchema({ lang, title: title || "", date: date || "", url })

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  )
}
