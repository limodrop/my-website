"use client"

import { useState } from "react"
import { simulateOverrideRules } from "@/lib/intel/overrideSimulator"

export default function OverrideSimulationPanel() {
  const [form, setForm] = useState({
    channel: "cta",
    lang: "en",
    city: "Portland",
    service: "airport",
    confidence: 80
  })

  const [results, setResults] = useState<any[]>([])

  function run() {
    const out = simulateOverrideRules(form)
    setResults(out)
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Override Simulation Engine</h3>

      <div className="grid grid-cols-2 gap-4">
        <label className="flex flex-col">
          Channel
          <select
            value={form.channel}
            onChange={(e) => setForm({ ...form, channel: e.target.value })}
            className="border p-2 rounded"
          >
            <option value="cta">CTA</option>
            <option value="email">Email</option>
            <option value="social">Social</option>
          </select>
        </label>

        <label className="flex flex-col">
          Language
          <input
            type="text"
            value={form.lang}
            onChange={(e) => setForm({ ...form, lang: e.target.value })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          City
          <input
            type="text"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Service
          <input
            type="text"
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Confidence
          <input
            type="number"
            value={form.confidence}
            onChange={(e) =>
              setForm({ ...form, confidence: parseInt(e.target.value) })
            }
            className="border p-2 rounded"
          />
        </label>
      </div>

      <button
        onClick={run}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Simulate All Rules
      </button>

      {results.length > 0 && (
        <ul className="mt-4 space-y-2 text-xs">
          {results.map((r, i) => (
            <li key={i} className="border p-2 rounded">
              <div>
                <strong>{r.rule.id}</strong> — {r.rule.channel} / {r.rule.lang} /{" "}
                {r.rule.city} / {r.rule.service}
              </div>
              <div className="text-gray-500">{r.reason}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
