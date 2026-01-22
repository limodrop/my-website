"use client"

import { useState } from "react"
import { getLayoutStats } from "@/lib/analytics/layoutStats"

export default function LayoutAnalyticsPanel() {
  const [stats, setStats] = useState(getLayoutStats())

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Layout Variant Analytics</h3>

      <table className="w-full text-xs border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">Variant</th>
            <th className="p-2">Views</th>
            <th className="p-2">Clicks</th>
            <th className="p-2">CTR</th>
            <th className="p-2">Conversions</th>
            <th className="p-2">Conv Rate</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(stats).map(([variant, s]: any) => (
            <tr key={variant} className="border-t">
              <td className="p-2 font-mono">{variant}</td>
              <td className="p-2">{s.views}</td>
              <td className="p-2">{s.clicks}</td>
              <td className="p-2">{s.ctr.toFixed(1)}%</td>
              <td className="p-2">{s.conversions}</td>
              <td className="p-2">{s.convRate.toFixed(1)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
