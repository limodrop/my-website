"use client"

import { useState } from "react"
import { getRecentEvents } from "@/lib/analytics/extended"
import { AnalyticsEvent } from "@/lib/analytics/types"

export default function AnalyticsFilters() {
  const [filters, setFilters] = useState({
    lang: "all",
    geoCountry: "",
    citySlug: "",
    serviceType: "",
    fleetType: "",
    ctaId: ""
  })

  const [events, setEvents] = useState<AnalyticsEvent[]>([])

  async function runQuery() {
    const data = getRecentEvents(100).filter((e) => {
      return (
        (filters.lang === "all" || e.meta?.lang === filters.lang) &&
        (!filters.geoCountry || e.meta?.geoCountry === filters.geoCountry) &&
        (!filters.citySlug || e.meta?.citySlug === filters.citySlug) &&
        (!filters.serviceType || e.meta?.serviceType === filters.serviceType) &&
        (!filters.fleetType || e.meta?.fleetType === filters.fleetType) &&
        (!filters.ctaId || e.meta?.ctaId === filters.ctaId)
      )
    })

    setEvents(data)
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4 text-sm bg-white p-4 rounded shadow">
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
          Country
          <input
            type="text"
            value={filters.geoCountry}
            onChange={(e) =>
              setFilters({ ...filters, geoCountry: e.target.value })
            }
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          City
          <input
            type="text"
            value={filters.citySlug}
            onChange={(e) =>
              setFilters({ ...filters, citySlug: e.target.value })
            }
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Service
          <input
            type="text"
            value={filters.serviceType}
            onChange={(e) =>
              setFilters({ ...filters, serviceType: e.target.value })
            }
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Fleet
          <input
            type="text"
            value={filters.fleetType}
            onChange={(e) =>
              setFilters({ ...filters, fleetType: e.target.value })
            }
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          CTA ID
          <input
            type="text"
            value={filters.ctaId}
            onChange={(e) =>
              setFilters({ ...filters, ctaId: e.target.value })
            }
            className="border p-2 rounded"
          />
        </label>
      </div>

      <button
        onClick={runQuery}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Filter Events
      </button>

      {events.length > 0 && (
        <div className="text-sm bg-white p-4 rounded shadow">
          <h4 className="font-semibold mb-2">Filtered Events ({events.length})</h4>
          <ul className="space-y-2">
            {events.map((e) => (
              <li key={e.id} className="border p-2 rounded">
                <strong>{e.type}</strong> — {e.path} — {e.sessionId}
                <br />
                <span className="text-xs text-gray-600">
                  {new Date(e.timestamp).toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
