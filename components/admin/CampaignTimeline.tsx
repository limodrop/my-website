"use client"

import { useState } from "react"
import { listEmailCampaigns } from "@/lib/intel/email"
import { listSocialPosts } from "@/lib/intel/socialGen"
import { listPromotions } from "@/lib/intel/promotions"

type TimelineItem = {
  id: string
  label: string
  type: "email" | "social" | "promo"
  start: number
  end: number
  meta: string
}

export default function CampaignTimeline() {
  const [items, setItems] = useState<TimelineItem[]>(() => {
    const emails = listEmailCampaigns().map((e) => ({
      id: e.id,
      label: e.subject,
      type: "email" as const,
      start: e.scheduledAt || e.createdAt,
      end: (e.scheduledAt || e.createdAt) + 2 * 3600_000,
      meta: `${e.city}, ${e.service}, ${e.lang}`
    }))

    const socials = listSocialPosts().map((s) => ({
      id: s.id,
      label: s.content.slice(0, 40) + "...",
      type: "social" as const,
      start: s.scheduledAt,
      end: s.scheduledAt + 2 * 3600_000,
      meta: `${s.city}, ${s.service}, ${s.lang}`
    }))

    const promos = listPromotions()
      .filter((p) => p.active && p.expiresAt)
      .map((p) => ({
        id: p.id,
        label: p.title,
        type: "promo" as const,
        start: Date.now(),
        end: p.expiresAt!,
        meta: `${p.city}, ${p.service}, ${p.lang}`
      }))

    return [...emails, ...socials, ...promos]
  })

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm overflow-x-auto">
      <h3 className="text-lg font-semibold">Campaign Timeline</h3>

      <div className="min-w-[800px]">
        <table className="w-full text-xs border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">Type</th>
              <th className="p-2 border">Label</th>
              <th className="p-2 border">Meta</th>
              <th className="p-2 border">Start</th>
              <th className="p-2 border">End</th>
              <th className="p-2 border">Duration</th>
            </tr>
          </thead>
          <tbody>
            {items
              .sort((a, b) => a.start - b.start)
              .map((i) => (
                <tr key={i.id}>
                  <td className="p-2 border">{i.type}</td>
                  <td className="p-2 border">{i.label}</td>
                  <td className="p-2 border">{i.meta}</td>
                  <td className="p-2 border">{new Date(i.start).toLocaleString()}</td>
                  <td className="p-2 border">{new Date(i.end).toLocaleString()}</td>
                  <td className="p-2 border">
                    {Math.round((i.end - i.start) / 3600_000)} hrs
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
