"use client"

import { useState } from "react"
import { getOverrideStats } from "@/lib/analytics/overrideStats"

export default function OverridePerformancePanel() {
  const [data, setData] = useState(getOverrideStats())

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Override Performance Dashboard</h3>

      <table className="w-full text-xs border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">Target</th>
            <th className="p-2">Variant</th>
            <th className="p-2">Channel</th>
            <th className="p-2">Rule</th>
            <th className="p-2">Impr.</th>
            <th className="p-2">Clicks</th>
            <th className="p-2">CTR</th>
            <th className="p-2">Conv.</th>
            <th className="p-2">CR</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i} className="border-t">
              <td className="p-2 font-mono">{d.target}</td>
              <td className="p-2">{d.variant}</td>
              <td className="p-2">{d.channel}</td>
              <td className="p-2 text-gray-500">{d.rule}</td>
              <td className="p-2">{d.impressions}</td>
              <td className="p-2">{d.clicks}</td>
              <td className="p-2">
                {d.impressions > 0 ? ((d.clicks / d.impressions) * 100).toFixed(1) + "%" : "—"}
              </td>
              <td className="p-2">{d.conversions}</td>
              <td className="p-2">
                {d.clicks > 0 ? ((d.conversions / d.clicks) * 100).toFixed(1) + "%" : "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
