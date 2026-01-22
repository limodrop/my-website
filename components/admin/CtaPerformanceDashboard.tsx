"use client"

import { useState } from "react"
import { getRecentEvents } from "@/lib/analytics/extended"
import { AnalyticsEvent } from "@/lib/analytics/types"

interface CtaStats {
  ctaId: string
  views: number
  clicks: number
  conversions: number
}

export default function CtaPerformanceDashboard() {
  const [rows, setRows] = useState<CtaStats[]>([])

  function runDashboard() {
    const events = getRecentEvents(1000)
    const map = new Map<string, CtaStats>()

    for (const e of events) {
      const ctaId = e.meta?.ctaId
      if (!ctaId) continue

      if (!map.has(ctaId)) {
        map.set(ctaId, { ctaId, views: 0, clicks: 0, conversions: 0 })
      }

      const stats = map.get(ctaId)!
      if (e.type === "page_view") stats.views++
      if (e.type === "cta_click") stats.clicks++
      if (e.type === "booking_redirect" || e.type === "conversion") stats.conversions++
    }

    setRows(Array.from(map.values()))
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">CTA Performance Dashboard</h3>

      <button
        onClick={runDashboard}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Load CTA Stats
      </button>

      {rows.length > 0 && (
        <table className="w-full text-xs mt-4 border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">CTA ID</th>
              <th className="p-2 border">Views</th>
              <th className="p-2 border">Clicks</th>
              <th className="p-2 border">Conversions</th>
              <th className="p-2 border">CTR</th>
              <th className="p-2 border">Conv Rate</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const ctr = r.views > 0 ? (r.clicks / r.views) * 100 : 0
              const conv = r.clicks > 0 ? (r.conversions / r.clicks) * 100 : 0
              return (
                <tr key={r.ctaId}>
                  <td className="p-2 border font-mono">{r.ctaId}</td>
                  <td className="p-2 border">{r.views}</td>
                  <td className="p-2 border">{r.clicks}</td>
                  <td className="p-2 border">{r.conversions}</td>
                  <td className="p-2 border">{ctr.toFixed(1)}%</td>
                  <td className="p-2 border">{conv.toFixed(1)}%</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}
