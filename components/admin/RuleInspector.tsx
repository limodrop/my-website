"use client"

import { useEffect, useState } from "react"
import { mockContext } from "@/lib/admin/orchestrator"
import { RuleTrace } from "@/lib/intel/types"

export default function RuleInspector() {
  const [trace, setTrace] = useState<RuleTrace[]>([])

  useEffect(() => {
    fetch("/api/intelligence/pricing", {
      method: "POST",
      body: JSON.stringify(mockContext),
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => res.json())
      .then((json) => setTrace(json.data.ruleTrace || []))
  }, [])

  return (
    <div className="p-4 bg-white rounded shadow text-sm">
      <h3 className="text-lg font-semibold mb-2">Rule Inspector</h3>
      {trace.length > 0 ? (
        <ul className="space-y-2">
          {trace.map((r) => (
            <li key={r.ruleId} className="border p-2 rounded">
              <strong>{r.ruleId}</strong> — {r.matched ? "Matched" : "Skipped"}
              <br />
              <span className="text-xs text-gray-600">{r.reason}</span>
              {r.output && (
                <div className="text-xs text-gray-800 mt-1">
                  Output: {JSON.stringify(r.output)}
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No rule trace available.</p>
      )}
    </div>
  )
}
