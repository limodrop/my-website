"use client"

import { useState } from "react"
import { runBulkGeneration } from "@/lib/intel/bulkGen"

export default function BulkCampaignGenerator() {
  const [cities, setCities] = useState("Portland,Seattle")
  const [services, setServices] = useState("airport,wedding")
  const [fleets, setFleets] = useState("suv,sedan")
  const [langs, setLangs] = useState("en,es")
  const [season, setSeason] = useState("winter")
  const [results, setResults] = useState<any[]>([])

  function run() {
    const ctx = {
      cities: cities.split(",").map((s) => s.trim()),
      services: services.split(",").map((s) => s.trim()),
      fleets: fleets.split(",").map((s) => s.trim()),
      langs: langs.split(",").map((s) => s.trim()),
      season
    }

    const output = runBulkGeneration(ctx)
    setResults(output)
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Bulk Campaign Generator</h3>

      <div className="grid grid-cols-2 gap-4">
        <label className="flex flex-col">
          Cities (comma-separated)
          <input
            type="text"
            value={cities}
            onChange={(e) => setCities(e.target.value)}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Services
          <input
            type="text"
            value={services}
            onChange={(e) => setServices(e.target.value)}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Fleets
          <input
            type="text"
            value={fleets}
            onChange={(e) => setFleets(e.target.value)}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Languages
          <input
            type="text"
            value={langs}
            onChange={(e) => setLangs(e.target.value)}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Season
          <select
            value={season}
            onChange={(e) => setSeason(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="winter">Winter</option>
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="fall">Fall</option>
          </select>
        </label>
      </div>

      <button
        onClick={run}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Generate Matrix
      </button>

      {results.length > 0 && (
        <div className="mt-6">
          <h4 className="font-semibold mb-2">
            Generated {results.length} Campaigns
          </h4>
          <ul className="space-y-2">
            {results.map((r, i) => (
              <li key={i} className="border p-2 rounded">
                <div className="text-xs text-gray-600 mb-1">
                  {r.city}, {r.service}, {r.fleet}, {r.lang}
                </div>
                <div className="text-xs">
                  📧 Email: {r.email.subject}
                  <br />
                  📢 Social: {r.social.content.slice(0, 60)}...
                  <br />
                  🏷️ Promo: {r.promo.title}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
