"use client"

import { useState } from "react"
import {
  generateMissingOverrideRules,
  applyGeneratedOverrideRules
} from "@/lib/intel/overrideRuleGenerator"

export default function OverrideRuleGeneratorPanel() {
  const [suggested, setSuggested] = useState<any[]>([])
  const [log, setLog] = useState<string[]>([])

  function generate() {
    const out = generateMissingOverrideRules()
    setSuggested(out)
    setLog([])
  }

  function apply() {
    const msgs = applyGeneratedOverrideRules(suggested)
    setLog(msgs)
    setSuggested([])
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Override Rule Generator</h3>

      <button
        onClick={generate}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Suggest Missing Rules
      </button>

      {suggested.length > 0 && (
        <div className="space-y-2">
          <ul className="text-xs space-y-1">
            {suggested.map((r, i) => (
              <li key={i} className="border p-2 rounded">
                {r.id} — {r.city} / {r.service} / {r.lang} — minConfidence:{" "}
                {r.minConfidence}
              </li>
            ))}
          </ul>

          <button
            onClick={apply}
            className="px-3 py-1 bg-green-700 text-white rounded"
          >
            Apply All
          </button>
        </div>
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
