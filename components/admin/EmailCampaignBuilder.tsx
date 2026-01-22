"use client"

import { useState } from "react"
import { generateEmailCampaign } from "@/lib/intel/email"
import { PromotionContext } from "@/lib/intel/types"
import { EmailCampaign } from "@/lib/intel/email"

export default function EmailCampaignBuilder() {
  const [ctx, setCtx] = useState<PromotionContext>({
    lang: "en",
    city: "Portland",
    service: "airport",
    fleet: "suv",
    season: "winter"
  })

  const [campaign, setCampaign] = useState<EmailCampaign | null>(null)

  function generate() {
    const result = generateEmailCampaign(ctx)
    setCampaign(result)
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Email Campaign Generator</h3>

      <div className="grid grid-cols-3 gap-4">
        <label className="flex flex-col">
          Language
          <select
            value={ctx.lang}
            onChange={(e) => setCtx({ ...ctx, lang: e.target.value })}
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
            value={ctx.city}
            onChange={(e) => setCtx({ ...ctx, city: e.target.value })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Service
          <input
            type="text"
            value={ctx.service}
            onChange={(e) => setCtx({ ...ctx, service: e.target.value })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Fleet
          <input
            type="text"
            value={ctx.fleet}
            onChange={(e) => setCtx({ ...ctx, fleet: e.target.value })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Season
          <select
            value={ctx.season}
            onChange={(e) => setCtx({ ...ctx, season: e.target.value })}
            className="border p-2 rounded"
          >
            <option value="winter">Winter</option>
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="fall">Fall</option>
          </select>
        </label>
      </div>

      <button
        onClick={generate}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Generate Email
      </button>

      {campaign && (
        <div className="mt-6 space-y-2">
          <h4 className="font-semibold">Subject</h4>
          <p className="text-sm">{campaign.subject}</p>

          <h4 className="font-semibold mt-4">HTML Preview</h4>
          <div
            className="prose border p-4 bg-gray-50 rounded"
            dangerouslySetInnerHTML={{ __html: campaign.html }}
          />
        </div>
      )}
    </div>
  )
}
