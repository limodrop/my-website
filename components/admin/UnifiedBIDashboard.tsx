"use client"

import { useState } from "react"
import { getRecentEvents } from "@/lib/analytics/extended"
import { getEmailStats, listEmailCampaigns } from "@/lib/intel/email"
import { getPromoStats, listPromotions } from "@/lib/intel/promotions"
import { suggestCtaOverrides } from "@/lib/intel/ctaSuggest"
import { suggestSocialOverrides } from "@/lib/intel/socialSuggest"

export default function UnifiedBIDashboard() {
  const [view, setView] = useState<"email" | "cta" | "social" | "promo">("email")

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Unified BI Dashboard</h3>

      <div className="flex gap-4">
        {["email", "cta", "social", "promo"].map((v) => (
          <button
            key={v}
            onClick={() => setView(v as any)}
            className={`px-3 py-1 rounded ${
              view === v ? "bg-black text-white" : "bg-gray-100"
            }`}
          >
            {v.toUpperCase()}
          </button>
        ))}
      </div>

      {view === "email" && <EmailBI />}
      {view === "cta" && <CtaBI />}
      {view === "social" && <SocialBI />}
      {view === "promo" && <PromoBI />}
    </div>
  )
}

function EmailBI() {
  const campaigns = listEmailCampaigns()
  return (
    <table className="w-full text-xs border mt-2">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="p-2 border">Subject</th>
          <th className="p-2 border">City</th>
          <th className="p-2 border">Service</th>
          <th className="p-2 border">Lang</th>
          <th className="p-2 border">Opens</th>
          <th className="p-2 border">Clicks</th>
          <th className="p-2 border">Conv</th>
          <th className="p-2 border">Open Rate</th>
          <th className="p-2 border">CTR</th>
          <th className="p-2 border">Conv Rate</th>
        </tr>
      </thead>
      <tbody>
        {campaigns.map((c) => {
          const s = getEmailStats(c.id)
          const openRate = (s.opens / 1000) * 100
          const ctr = s.opens > 0 ? (s.clicks / s.opens) * 100 : 0
          const conv = s.clicks > 0 ? (s.conversions / s.clicks) * 100 : 0
          return (
            <tr key={c.id}>
              <td className="p-2 border">{c.subject}</td>
              <td className="p-2 border">{c.city}</td>
              <td className="p-2 border">{c.service}</td>
              <td className="p-2 border">{c.lang}</td>
              <td className="p-2 border">{s.opens}</td>
              <td className="p-2 border">{s.clicks}</td>
              <td className="p-2 border">{s.conversions}</td>
              <td className="p-2 border">{openRate.toFixed(1)}%</td>
              <td className="p-2 border">{ctr.toFixed(1)}%</td>
              <td className="p-2 border">{conv.toFixed(1)}%</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function CtaBI() {
  const { underperformers, topPerformers } = suggestCtaOverrides()
  const all = [...topPerformers, ...underperformers]
  return (
    <table className="w-full text-xs border mt-2">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="p-2 border">CTA ID</th>
          <th className="p-2 border">City</th>
          <th className="p-2 border">Service</th>
          <th className="p-2 border">Lang</th>
          <th className="p-2 border">Views</th>
          <th className="p-2 border">Clicks</th>
          <th className="p-2 border">Conv</th>
          <th className="p-2 border">CTR</th>
          <th className="p-2 border">Conv Rate</th>
        </tr>
      </thead>
      <tbody>
        {all.map((c) => {
          const ctr = c.views > 0 ? (c.clicks / c.views) * 100 : 0
          const conv = c.clicks > 0 ? (c.conversions / c.clicks) * 100 : 0
          return (
            <tr key={c.ctaId + c.city + c.service}>
              <td className="p-2 border font-mono">{c.ctaId}</td>
              <td className="p-2 border">{c.city}</td>
              <td className="p-2 border">{c.service}</td>
              <td className="p-2 border">{c.lang}</td>
              <td className="p-2 border">{c.views}</td>
              <td className="p-2 border">{c.clicks}</td>
              <td className="p-2 border">{c.conversions}</td>
              <td className="p-2 border">{ctr.toFixed(1)}%</td>
              <td className="p-2 border">{conv.toFixed(1)}%</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function SocialBI() {
  const { underperformers, topPerformers } = suggestSocialOverrides()
  const all = [...topPerformers, ...underperformers]
  return (
    <table className="w-full text-xs border mt-2">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="p-2 border">Post ID</th>
          <th className="p-2 border">City</th>
          <th className="p-2 border">Service</th>
          <th className="p-2 border">Lang</th>
          <th className="p-2 border">Likes</th>
          <th className="p-2 border">Clicks</th>
          <th className="p-2 border">Shares</th>
          <th className="p-2 border">Engagement</th>
        </tr>
      </thead>
      <tbody>
        {all.map((p) => (
          <tr key={p.postId + p.city + p.service}>
            <td className="p-2 border font-mono">{p.postId}</td>
            <td className="p-2 border">{p.city}</td>
            <td className="p-2 border">{p.service}</td>
            <td className="p-2 border">{p.lang}</td>
            <td className="p-2 border">{p.likes}</td>
            <td className="p-2 border">{p.clicks}</td>
            <td className="p-2 border">{p.shares}</td>
            <td className="p-2 border font-semibold">
              {p.likes + p.clicks + p.shares}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function PromoBI() {
  const promos = listPromotions()
  const stats = getPromoStats()
  return (
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
  )
}
