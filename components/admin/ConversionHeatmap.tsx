"use client"

import { useState } from "react"
import { getRecentEvents } from "@/lib/analytics/extended"
import { AnalyticsEvent } from "@/lib/analytics/types"

type ComboKey = string

interface ComboStats {
  city: string
  fleet: string
  service: string
  views: number
  clicks: number
  conversions: number
}

export default function ConversionHeatmap() {
  const [rows, setRows] = useState<ComboStats[]>([])

  function runHeatmap() {
    const events = getRecentEvents(1000)

    const map = new Map<ComboKey, ComboStats>()

    for (const e of events) {
      const city = e.meta?.citySlug || "unknown"
      const fleet = e.meta?.fleetType || "unknown"
      const service = e.meta?.serviceType || "unknown"
      const key = `${city}|${fleet}|${service}`

      if (!map.has(key)) {
        map.set(key, { city, fleet, service, views: 0, clicks: 0, conversions: 0 })
      }

      const stats = map.get(key)!
      if (e.type === "page_view") stats.views++
      if (e.type === "cta_click") stats.clicks++
      if (e.type === "booking_redirect" || e.type === "conversion") stats.conversions++
    }

    setRows(Array.from(map.values()))
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Conversion Heatmap</h3>

      <button
        onClick={runHeatmap}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Generate Heatmap
      </button>

      {rows.length > 0 && (
        <table className="w-full text-xs mt-4 border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">City</th>
              <th className="p-2 border">Fleet</th>
              <th className="p-2 border">Service</th>
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
                <tr key={`${r.city}-${r.fleet}-${r.service}`}>
                  <td className="p-2 border">{r.city}</td>
                  <td className="p-2 border">{r.fleet}</td>
                  <td className="p-2 border">{r.service}</td>
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
