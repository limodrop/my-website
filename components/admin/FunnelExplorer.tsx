"use client"

import { useState } from "react"
import { getRecentEvents } from "@/lib/analytics/extended"
import { AnalyticsEvent } from "@/lib/analytics/types"

export default function FunnelExplorer() {
  const [filters, setFilters] = useState({
    lang: "all",
    citySlug: "",
    serviceType: "",
    fleetType: "",
    ctaId: ""
  })

  const [funnel, setFunnel] = useState<{
    views: number
    ctaClicks: number
    conversions: number
  }>({ views: 0, ctaClicks: 0, conversions: 0 })

  function runFunnel() {
    const events = getRecentEvents(500).filter((e) => {
      return (
        (filters.lang === "all" || e.meta?.lang === filters.lang) &&
        (!filters.citySlug || e.meta?.citySlug === filters.citySlug) &&
        (!filters.serviceType || e.meta?.serviceType === filters.serviceType) &&
        (!filters.fleetType || e.meta?.fleetType === filters.fleetType) &&
        (!filters.ctaId || e.meta?.ctaId === filters.ctaId)
      )
    })

    const views = events.filter((e) => e.type === "page_view").length
    const ctaClicks = events.filter((e) => e.type === "cta_click").length
    const conversions = events.filter((e) => e.type === "booking_redirect" || e.type === "conversion").length

    setFunnel({ views, ctaClicks, conversions })
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Funnel Explorer</h3>

      <div className="grid grid-cols-3 gap-4">
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

        <label className="flex flex-col">
          CTA ID
          <input
            type="text"
            value={filters.ctaId}
            onChange={(e) => setFilters({ ...filters, ctaId: e.target.value })}
            className="border p-2 rounded"
          />
        </label>
      </div>

      <button
        onClick={runFunnel}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Run Funnel
      </button>

      <div className="mt-6 space-y-2">
        <div className="bg-gray-50 p-4 rounded">
          <p><strong>Page Views:</strong> {funnel.views}</p>
          <p><strong>CTA Clicks:</strong> {funnel.ctaClicks}</p>
          <p><strong>Conversions:</strong> {funnel.conversions}</p>
        </div>

        <div className="text-xs text-gray-600">
          CTR: {funnel.views > 0 ? ((funnel.ctaClicks / funnel.views) * 100).toFixed(1) : "0"}%  
          &nbsp;|&nbsp;  
          Conversion Rate: {funnel.ctaClicks > 0 ? ((funnel.conversions / funnel.ctaClicks) * 100).toFixed(1) : "0"}%
        </div>
      </div>
    </div>
  )
}
