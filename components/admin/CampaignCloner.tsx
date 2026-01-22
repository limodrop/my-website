"use client"

import { useState } from "react"
import { cloneEmail, cloneSocial, clonePromo } from "@/lib/intel/cloner"

export default function CampaignCloner() {
  const [type, setType] = useState<"email" | "social" | "promo">("email")
  const [id, setId] = useState("")
  const [lang, setLang] = useState("es")
  const [city, setCity] = useState("Seattle")
  const [service, setService] = useState("wedding")
  const [fleet, setFleet] = useState("sprinter")
  const [result, setResult] = useState<any>(null)

  function handleClone() {
    const overrides = { lang, city, service, fleet }

    const cloned =
      type === "email"
        ? cloneEmail(id, overrides)
        : type === "social"
        ? cloneSocial(id, overrides)
        : clonePromo(id, overrides)

    setResult(cloned)
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Campaign Cloning + Localization</h3>

      <div className="grid grid-cols-3 gap-4">
        <label className="flex flex-col">
          Type
          <select
            value={type}
            onChange={(e) => setType(e.target.value as any)}
            className="border p-2 rounded"
          >
            <option value="email">Email</option>
            <option value="social">Social</option>
            <option value="promo">Promo</option>
          </select>
        </label>

        <label className="flex flex-col">
          Original ID
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="border p-2 rounded"
          />
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

        <label className="flex flex-col">
          Service
          <input
            type="text"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Fleet
          <input
            type="text"
            value={fleet}
            onChange={(e) => setFleet(e.target.value)}
            className="border p-2 rounded"
          />
        </label>
      </div>

      <button
        onClick={handleClone}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Clone Campaign
      </button>

      {result && (
        <div className="mt-4 border p-3 bg-gray-50 rounded">
          <div className="text-xs text-gray-600 mb-1">
            Cloned {type} → {result.id}
          </div>
          <pre className="text-xs whitespace-pre-wrap">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}
