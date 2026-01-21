"use client"

import { useState } from "react"
import {
  generateServiceSchema,
  generateLocalBusinessSchema,
  generateArticleSchema
} from "@/lib/seo/schema"

export default function SchemaPreview() {
  const [type, setType] = useState<"service" | "business" | "article">("service")
  const [lang, setLang] = useState("en")
  const [city, setCity] = useState("Portland")
  const [service, setService] = useState("airport")
  const [title, setTitle] = useState("Winter Travel Tips")
  const [date, setDate] = useState("2026-01-10")
  const [path, setPath] = useState("/services/airport")

  const url = `https://oregontowncar.com/${lang}${path}`

  const schema =
    type === "service"
      ? generateServiceSchema({ lang, city, service, url })
      : type === "business"
      ? generateLocalBusinessSchema({ lang, city, url })
      : generateArticleSchema({ lang, title, date, url })

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <div className="grid grid-cols-3 gap-4">
        <label className="flex flex-col">
          Type
          <select
            value={type}
            onChange={(e) => setType(e.target.value as any)}
            className="border p-2 rounded"
          >
            <option value="service">Service</option>
            <option value="business">LocalBusiness</option>
            <option value="article">Article</option>
          </select>
        </label>

        <label className="flex flex-col">
          Language
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </label>

        <label className="flex flex-col">
          City
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border p-2 rounded"
          />
        </label>

        {type === "service" && (
          <label className="flex flex-col col-span-1">
            Service
            <input
              type="text"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="border p-2 rounded"
            />
          </label>
        )}

        {type === "article" && (
          <>
            <label className="flex flex-col col-span-1">
              Title
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 rounded"
              />
            </label>
            <label className="flex flex-col col-span-1">
              Date
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border p-2 rounded"
              />
            </label>
          </>
        )}

        <label className="flex flex-col col-span-2">
          Path
          <input
            type="text"
            value={path}
            onChange={(e) => setPath(e.target.value)}
            className="border p-2 rounded"
          />
        </label>
      </div>

      <div className="bg-gray-50 p-4 rounded font-mono text-xs whitespace-pre-wrap">
        {JSON.stringify(schema, null, 2)}
      </div>
    </div>
  )
}
