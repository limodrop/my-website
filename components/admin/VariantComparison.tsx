"use client"

import { useState } from "react"
import { getRecentEvents } from "@/lib/analytics/extended"
import { AnalyticsEvent } from "@/lib/analytics/types"

export default function VariantComparison() {
  const [filters, setFilters] = useState({
    lang: "all",
    citySlug: "",
    serviceType: "",
    fleetType: ""
  })

  const [variantA, setVariantA] = useState("cta-v1")
  const [variantB, setVariantB] = useState("cta-v2")

  const [results, setResults] = useState<{
    [variant: string]: { views: number; clicks: number; conversions: number }
  }>({})

  function runComparison() {
    const events = getRecentEvents(1000).filter((e) => {
      return (
        (filters.lang === "all" || e.meta?.lang === filters.lang) &&
        (!filters.citySlug || e.meta?.citySlug === filters.citySlug) &&
        (!filters.serviceType || e.meta?.serviceType === filters.serviceType) &&
        (!filters.fleetType || e.meta?.fleetType === filters.fleetType)
      )
    })

    const variants = [variantA, variantB]
    const data: any = {}

    for (const v of variants) {
      const vEvents = events.filter((e) => e.meta?.ctaId === v)
      const views = vEvents.filter((e) => e.type === "page_view").length
      const clicks = vEvents.filter((e) => e.type === "cta_click").length
      const conversions = vEvents.filter((e) => e.type === "booking_redirect" || e.type === "conversion").length
      data[v] = { views, clicks, conversions }
    }

    setResults(data)
  }

  function renderStats(label: string, stats: any) {
    const ctr = stats.views > 0 ? (stats.clicks / stats.views) * 100 : 0
    const conv = stats.clicks > 0 ? (stats.conversions / stats.clicks) * 100 : 0

    return (
      <div className="bg-gray-50 p-4 rounded">
        <h4 className="font-semibold mb-2">{label}</h4>
        <p>Views: {stats.views}</p>
        <p>CTA Clicks: {stats.clicks}</p>
        <p>Conversions: {stats.conversions}</p>
        <p className="text-xs text-gray-600">
          CTR: {ctr.toFixed(1)}% — Conversion Rate: {conv.toFixed(1)}%
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">A/B Variant Comparison</h3>

      <div className="grid grid-cols-3 gap-4">
        <label className="flex flex-col">
          Variant A (ctaId)
          <input
            type="text"
            value={variantA}
            onChange={(e) => setVariantA(e.target.value)}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Variant B (ctaId)
          <input
            type="text"
            value={variantB}
            onChange={(e) => setVariantB(e.target.value)}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Language
          <select
            value={filters.lang}
            onChange={(e) => setFilters({ ...filters, lang: e.target.value })}
            className="border p-2 rounded"
          >
            <option value="all">All</option>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </label>

        <label className="flex flex-col">
          City
          <input
            type="text"
            value={filters.citySlug}
            onChange={(e) => setFilters({ ...filters, citySlug: e.target.value })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Service
          <input
            type="text"
            value={filters.serviceType}
            onChange={(e) => setFilters({ ...filters, serviceType: e.target.value })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Fleet
          <input
            type="text"
            value={filters.fleetType}
            onChange={(e) => setFilters({ ...filters, fleetType: e.target.value })}
            className="border p-2 rounded"
          />
        </label>
      </div>

      <button
        onClick={runComparison}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Compare Variants
      </button>

      <div className="grid grid-cols-2 gap-4 mt-6">
        {results[variantA] && renderStats(`Variant A: ${variantA}`, results[variantA])}
        {results[variantB] && renderStats(`Variant B: ${variantB}`, results[variantB])}
      </div>
    </div>
  )
}
