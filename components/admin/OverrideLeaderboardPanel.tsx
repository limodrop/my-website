"use client"

import { useState } from "react"
import { getTopOverrides } from "@/lib/analytics/overrideLeaderboard"

export default function OverrideLeaderboardPanel() {
  const [filters, setFilters] = useState({
    channel: "",
    city: "",
    service: ""
  })

  const data = getTopOverrides({
    channel: filters.channel || undefined,
    city: filters.city || undefined,
    service: filters.service || undefined
  })

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Override Leaderboard</h3>

      <div className="grid grid-cols-3 gap-4">
        <label className="flex flex-col">
          Channel
          <select
            value={filters.channel}
            onChange={(e) => setFilters({ ...filters, channel: e.target.value })}
            className="border p-2 rounded"
          >
            <option value="">All</option>
            <option value="cta">CTA</option>
            <option value="email">Email</option>
            <option value="social">Social</option>
          </select>
        </label>

        <label className="flex flex-col">
          City
          <input
            type="text"
            value={filters.city}
            onChange={(e) => setFilters({ ...filters, city: e.target.value })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Service
          <input
            type="text"
            value={filters.service}
            onChange={(e) => setFilters({ ...filters, service: e.target.value })}
            className="border p-2 rounded"
          />
        </label>
      </div>

      <table className="w-full text-xs border mt-4">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">Target</th>
            <th className="p-2">Variant</th>
            <th className="p-2">Channel</th>
            <th className="p-2">CTR</th>
            <th className="p-2">CR</th>
            <th className="p-2">Conversions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i} className="border-t">
              <td className="p-2 font-mono">{d.target}</td>
              <td className="p-2">{d.variant}</td>
              <td className="p-2">{d.channel}</td>
              <td className="p-2">{(d.ctr * 100).toFixed(1)}%</td>
              <td className="p-2">{(d.cr * 100).toFixed(1)}%</td>
              <td className="p-2">{d.conversions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
