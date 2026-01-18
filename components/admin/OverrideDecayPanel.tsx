"use client"

import { useState } from "react"
import {
  getStaleRules,
  deleteStaleRules
} from "@/lib/intel/overrideRuleDecay"

export default function OverrideDecayPanel() {
  const [threshold, setThreshold] = useState(30)
  const [stale, setStale] = useState(getStaleRules(threshold))
  const [log, setLog] = useState<string[]>([])

  function refresh() {
    setStale(getStaleRules(threshold))
    setLog([])
  }

  function purge() {
    const msgs = deleteStaleRules(threshold)
    setLog(msgs)
    setStale(getStaleRules(threshold))
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Override Rule Decay Engine</h3>

      <label className="flex flex-col">
        Stale Threshold (days)
        <input
          type="number"
          value={threshold}
          onChange={(e) => setThreshold(parseInt(e.target.value))}
          className="border p-2 rounded w-32"
        />
      </label>

      <button
        onClick={refresh}
        className="px-3 py-1 bg-gray-200 rounded"
      >
        Refresh Stale Rules
      </button>

      {stale.length > 0 ? (
        <div className="space-y-2">
          <ul className="text-xs space-y-1">
            {stale.map((s, i) => (
              <li key={i} className="border p-2 rounded">
                {s.rule.id} — {s.rule.city} / {s.rule.service} / {s.rule.lang} — last used:{" "}
                {s.lastUsed}
              </li>
            ))}
          </ul>

          <button
            onClick={purge}
            className="px-3 py-1 bg-red-700 text-white rounded"
          >
            Delete All Stale Rules
          </button>
        </div>
      ) : (
        <p className="text-xs text-gray-500">No stale rules found.</p>
      )}

      {log.length > 0 && (
        <ul className="text-xs mt-4 space-y-1">
          {log.map((l, i) => (
            <li key={i} className="border p-2 rounded">{l}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
