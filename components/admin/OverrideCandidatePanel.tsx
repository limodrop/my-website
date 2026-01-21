"use client"

import { useState } from "react"
import { generateOverrideCandidates } from "@/lib/intel/overrideCandidates"

export default function OverrideCandidatePanel() {
  const [form, setForm] = useState({
    channel: "cta",
    target: "cta-123",
    lang: "en",
    city: "Portland",
    service: "airport"
  })

  const [candidates, setCandidates] = useState<any[]>([])

  function run() {
    const out = generateOverrideCandidates(
      form.channel as any,
      form.target,
      form.lang,
      form.city,
      form.service
    )
    setCandidates(out)
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Override Candidate Generator</h3>

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
      </div>

      <button
        onClick={run}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Generate Candidates
      </button>

      {candidates.length > 0 && (
        <div className="mt-4 space-y-2">
          {candidates.map((c, i) => (
            <div key={i} className="border p-2 rounded text-xs bg-gray-50">
              <div><strong>{c.text}</strong></div>
              <div className="text-gray-600">Tone: {c.tone}</div>
              <div className="text-gray-600">Confidence: {c.confidence}%</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
