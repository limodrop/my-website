"use client"

import { useState } from "react"
import { getRecentEvents } from "@/lib/analytics/extended"

type ComboKey = string

interface ComboStats {
  city: string
  fleet: string
  service: string
  likes: number
  clicks: number
  shares: number
}

export default function SocialEngagementHeatmap() {
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
        map.set(key, { city, fleet, service, likes: 0, clicks: 0, shares: 0 })
      }

      const stats = map.get(key)!
      if (e.type === "social_like") stats.likes++
      if (e.type === "social_click") stats.clicks++
      if (e.type === "social_share") stats.shares++
    }

    setRows(Array.from(map.values()))
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Social Engagement Heatmap</h3>

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
              <th className="p-2 border">Likes</th>
              <th className="p-2 border">Clicks</th>
              <th className="p-2 border">Shares</th>
              <th className="p-2 border">Engagement</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const engagement = r.likes + r.clicks + r.shares
              return (
                <tr key={`${r.city}-${r.fleet}-${r.service}`}>
                  <td className="p-2 border">{r.city}</td>
                  <td className="p-2 border">{r.fleet}</td>
                  <td className="p-2 border">{r.service}</td>
                  <td className="p-2 border">{r.likes}</td>
                  <td className="p-2 border">{r.clicks}</td>
                  <td className="p-2 border">{r.shares}</td>
                  <td className="p-2 border font-semibold">{engagement}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}
