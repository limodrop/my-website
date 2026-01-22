"use client"

import { useState } from "react"
import { listOverrides, setRuleOverride } from "@/lib/admin/overrides"

export default function RuleOverridePanel() {
  const [engine, setEngine] = useState<"pricing" | "messaging" | "social">("pricing")
  const [ruleId, setRuleId] = useState("")
  const [contextKey, setContextKey] = useState("")
  const [overrideOutput, setOverrideOutput] = useState("")
  const [overrides, setOverrides] = useState(listOverrides())

  function applyOverride() {
    try {
      const parsed = JSON.parse(overrideOutput)
      setRuleOverride(engine, ruleId, contextKey, parsed)
      setOverrides(listOverrides())
    } catch (e) {
      alert("Invalid JSON")
    }
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Rule Overrides</h3>

      <div className="grid grid-cols-3 gap-4">
        <label className="flex flex-col">
          Engine
          <select
            value={engine}
            onChange={(e) => setEngine(e.target.value as any)}
            className="border p-2 rounded"
          >
            <option value="pricing">Pricing</option>
            <option value="messaging">Messaging</option>
            <option value="social">Social</option>
          </select>
        </label>

        <label className="flex flex-col">
          Rule ID
          <input
            type="text"
            value={ruleId}
            onChange={(e) => setRuleId(e.target.value)}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Context Key
          <input
            type="text"
            value={contextKey}
            onChange={(e) => setContextKey(e.target.value)}
            className="border p-2 rounded"
            placeholder="e.g. city=portland"
          />
        </label>
      </div>

      <label className="flex flex-col">
        Override Output (JSON)
        <textarea
          value={overrideOutput}
          onChange={(e) => setOverrideOutput(e.target.value)}
          className="border p-2 rounded font-mono"
          rows={4}
        />
      </label>

      <button
        onClick={applyOverride}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Apply Override
      </button>

      <div className="mt-6">
        <h4 className="font-semibold mb-2">Active Overrides</h4>
        <ul className="space-y-2">
          {overrides.map((o) => (
            <li key={`${o.engine}:${o.contextKey}`} className="border p-2 rounded">
              <strong>{o.engine}</strong> — {o.ruleId} — {o.contextKey}
              <pre className="text-xs mt-1 bg-gray-50 p-2 rounded overflow-x-auto">
                {JSON.stringify(o.overrideOutput, null, 2)}
              </pre>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
