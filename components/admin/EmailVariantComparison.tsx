"use client"

import { useState } from "react"
import { listEmailCampaigns, getEmailStats } from "@/lib/intel/email"

export default function EmailVariantComparison() {
  const [campaigns] = useState(listEmailCampaigns())
  const [aId, setAId] = useState("")
  const [bId, setBId] = useState("")

  const a = campaigns.find((c) => c.id === aId)
  const b = campaigns.find((c) => c.id === bId)

  const aStats = a ? getEmailStats(a.id) : null
  const bStats = b ? getEmailStats(b.id) : null

  function renderStats(label: string, stats: any) {
    const openRate = stats.opens > 0 ? (stats.opens / 1000) * 100 : 0
    const ctr = stats.opens > 0 ? (stats.clicks / stats.opens) * 100 : 0
    const conv = stats.clicks > 0 ? (stats.conversions / stats.clicks) * 100 : 0

    return (
      <div className="bg-gray-50 p-4 rounded">
        <h4 className="font-semibold mb-2">{label}</h4>
        <p>Opens: {stats.opens}</p>
        <p>Clicks: {stats.clicks}</p>
        <p>Conversions: {stats.conversions}</p>
        <p className="text-xs text-gray-600">
          Open Rate: {openRate.toFixed(1)}% — CTR: {ctr.toFixed(1)}% — Conv Rate: {conv.toFixed(1)}%
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Email A/B Variant Comparison</h3>

      <div className="grid grid-cols-2 gap-4">
        <label className="flex flex-col">
          Variant A (campaignId)
          <select
            value={aId}
            onChange={(e) => setAId(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="">Select</option>
            {campaigns.map((c) => (
              <option key={c.id} value={c.id}>
                {c.subject}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col">
          Variant B (campaignId)
          <select
            value={bId}
            onChange={(e) => setBId(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="">Select</option>
            {campaigns.map((c) => (
              <option key={c.id} value={c.id}>
                {c.subject}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        {a && aStats && renderStats(`Variant A: ${a.subject}`, aStats)}
        {b && bStats && renderStats(`Variant B: ${b.subject}`, bStats)}
      </div>
    </div>
  )
}
