"use client"

import { useState } from "react"
import { LocaleContext } from "@/lib/admin/locale"

export default function LocaleSelector({
  onChange
}: {
  onChange: (ctx: LocaleContext) => void
}) {
  const [ctx, setCtx] = useState<LocaleContext>({
    lang: "en",
    geoCountry: "US",
    citySlug: "portland",
    season: "winter"
  })

  function update<K extends keyof LocaleContext>(key: K, value: LocaleContext[K]) {
    const next = { ...ctx, [key]: value }
    setCtx(next)
    onChange(next)
  }

  return (
    <div className="grid grid-cols-4 gap-4 text-sm bg-white p-4 rounded shadow">
      <label className="flex flex-col">
        Language
        <select
          value={ctx.lang}
          onChange={(e) => update("lang", e.target.value as any)}
          className="border p-2 rounded"
        >
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
        </select>
      </label>

      <label className="flex flex-col">
        Country
        <input
          type="text"
          value={ctx.geoCountry}
          onChange={(e) => update("geoCountry", e.target.value)}
          className="border p-2 rounded"
        />
      </label>

      <label className="flex flex-col">
        City
        <input
          type="text"
          value={ctx.citySlug}
          onChange={(e) => update("citySlug", e.target.value)}
          className="border p-2 rounded"
        />
      </label>

      <label className="flex flex-col">
        Season
        <select
          value={ctx.season}
          onChange={(e) => update("season", e.target.value as any)}
          className="border p-2 rounded"
        >
          <option value="winter">Winter</option>
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
          <option value="fall">Fall</option>
        </select>
      </label>
    </div>
  )
}
