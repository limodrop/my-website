"use client"

import { useState } from "react"
import { testOverrideRuleMatch } from "@/lib/intel/overrideRuleMatch"

export default function OverrideRuleTester() {
  const [form, setForm] = useState({
    channel: "cta",
    lang: "en",
    city: "Portland",
    service: "airport",
    confidence: 82
  })

  const [result, setResult] = useState<any>(null)

  function run() {
    const out = testOverrideRuleMatch(
      form.channel as any,
      form.lang,
      form.city,
      form.service,
      form.confidence
    )
    setResult(out)
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Override Rule Tester</h3>

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
        Test Rule Match
      </button>

      {result && (
        <div className="mt-4 text-xs bg-gray-50 p-3 rounded border space-y-1">
          <div>
            <strong>Matched:</strong> {result.matched ? "✅ Yes" : "❌ No"}
          </div>
          <div>
            <strong>Reason:</strong> {result.reason}
          </div>
          {result.rule && (
            <div>
              <strong>Rule:</strong> {result.rule.id} — minConfidence:{" "}
              {result.rule.minConfidence}, autoApprove:{" "}
              {result.rule.autoApprove ? "✅" : "❌"}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
