"use client"

import { useState } from "react"
import { listEmailCampaigns, getEmailStats } from "@/lib/intel/email"

export default function EmailPerformanceTracker() {
  const [campaigns, setCampaigns] = useState(listEmailCampaigns())

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Email Performance Tracker</h3>

      {campaigns.length === 0 && <p className="text-gray-500">No campaigns yet.</p>}

      <ul className="space-y-4">
        {campaigns.map((c) => {
          const stats = getEmailStats(c.id)
          const openRate = stats.opens > 0 ? (stats.opens / 1000) * 100 : 0 // assume 1000 sent
          const ctr = stats.opens > 0 ? (stats.clicks / stats.opens) * 100 : 0
          const conv = stats.clicks > 0 ? (stats.conversions / stats.clicks) * 100 : 0

          return (
            <li key={c.id} className="border p-4 rounded">
              <div className="text-sm font-medium">{c.subject}</div>
              <div className="text-xs text-gray-600 mb-2">
                {c.city}, {c.service}, {c.season}, {c.lang}
              </div>
              <div className="text-xs">
                Opens: {stats.opens} — Clicks: {stats.clicks} — Conversions: {stats.conversions}
              </div>
              <div className="text-xs text-gray-600">
                Open Rate: {openRate.toFixed(1)}% — CTR: {ctr.toFixed(1)}% — Conv Rate: {conv.toFixed(1)}%
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
