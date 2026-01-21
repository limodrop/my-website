"use client"

import { useState } from "react"
import { simulateOverride } from "@/lib/intel/sandbox"

export default function OverrideSandboxPanel() {
  const [form, setForm] = useState({
    channel: "email",
    target: "email-123",
    original: "Your ride is ready",
    proposed: "🚗 Book your winter ride now",
    lang: "en",
    city: "Portland",
    service: "airport"
  })

  const [result, setResult] = useState<any>(null)

  function runSim() {
    const sim = simulateOverride(
      form.channel as any,
      form.target,
      form.original,
      form.proposed,
      form.lang,
      form.city,
      form.service
    )
    setResult(sim)
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Override Simulation Sandbox</h3>

      <div className="grid grid-cols-2 gap-4">
        <label className="flex flex-col">
          Channel
          <select
            value={form.channel}
            onChange={(e) => setForm({ ...form, channel: e.target.value })}
            className="border p-2 rounded"
          >
            <option value="email">Email</option>
            <option value="cta">CTA</option>
            <option value="social">Social</option>
          </select>
        </label>

        <label className="flex flex-col">
          Target ID
          <input
            type="text"
            value={form.target}
            onChange={(e) => setForm({ ...form, target: e.target.value })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col col-span-2">
          Original Text
          <input
            type="text"
            value={form.original}
            onChange={(e) => setForm({ ...form, original: e.target.value })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col col-span-2">
          Proposed Override
          <input
            type="text"
            value={form.proposed}
            onChange={(e) => setForm({ ...form, proposed: e.target.value })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Language
          <select
            value={form.lang}
            onChange={(e) => setForm({ ...form, lang: e.target.value })}
            className="border p-2 rounded"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
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
      </div>

      <button
        onClick={runSim}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Simulate Override
      </button>

      {result && (
        <div className="mt-4 border p-3 bg-gray-50 rounded">
          <div className="text-xs text-gray-600 mb-1">
            {result.channel.toUpperCase()}
          </div>
          <div className="text-xs mb-1">
            {result.city}, {result.service}, {result.lang}
          </div>
          <div className="text-xs">
            <strong>Original:</strong> {result.original}
            <br />
            <strong>Proposed:</strong> {result.proposed}
            <br />
            <strong>Confidence:</strong>{" "}
            <span
              className={
                result.confidence >= 60 ? "text-green-600" : "text-red-600"
              }
            >
              {result.confidence}%
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
