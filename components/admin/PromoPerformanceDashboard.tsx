"use client"

import { useState } from "react"
import { listPromotions, getPromoStats } from "@/lib/intel/promotions"

export default function PromoPerformanceDashboard() {
  const [promos] = useState(listPromotions())
  const [stats] = useState(getPromoStats())

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Promo Performance Dashboard</h3>

      {promos.length === 0 && <p className="text-gray-500">No promotions found.</p>}

      <table className="w-full text-xs border mt-2">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">Promo</th>
            <th className="p-2 border">City</th>
            <th className="p-2 border">Service</th>
            <th className="p-2 border">Lang</th>
            <th className="p-2 border">Impr.</th>
            <th className="p-2 border">Clicks</th>
            <th className="p-2 border">Conv.</th>
            <th className="p-2 border">Likes</th>
            <th className="p-2 border">Shares</th>
            <th className="p-2 border">CTR</th>
            <th className="p-2 border">Conv Rate</th>
          </tr>
        </thead>
        <tbody>
          {promos.map((p) => {
            const s = stats.find((s) => s.promoId === p.id) || {
              impressions: 0,
              clicks: 0,
              conversions: 0,
              likes: 0,
              shares: 0
            }
            const ctr = s.impressions > 0 ? (s.clicks / s.impressions) * 100 : 0
            const conv = s.clicks > 0 ? (s.conversions / s.clicks) * 100 : 0

            return (
              <tr key={p.id}>
                <td className="p-2 border">{p.title}</td>
                <td className="p-2 border">{p.city || "—"}</td>
                <td className="p-2 border">{p.service || "—"}</td>
                <td className="p-2 border">{p.lang || "—"}</td>
                <td className="p-2 border">{s.impressions}</td>
                <td className="p-2 border">{s.clicks}</td>
                <td className="p-2 border">{s.conversions}</td>
                <td className="p-2 border">{s.likes}</td>
                <td className="p-2 border">{s.shares}</td>
                <td className="p-2 border">{ctr.toFixed(1)}%</td>
                <td className="p-2 border">{conv.toFixed(1)}%</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
