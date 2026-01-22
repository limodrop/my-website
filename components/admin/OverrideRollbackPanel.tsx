"use client"

import { useState } from "react"
import { getRollbackCandidates, rollbackOverride } from "@/lib/intel/rollback"

export default function OverrideRollbackPanel() {
  const [candidates, setCandidates] = useState(getRollbackCandidates())
  const [rolledBack, setRolledBack] = useState<string[]>([])

  function handleRollback(id: string) {
    const c = candidates.find((x) => x.id === id)
    if (c && rollbackOverride(c)) {
      setRolledBack([...rolledBack, id])
    }
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Override Rollback Engine</h3>

      {candidates.length === 0 && (
        <p className="text-gray-500">No underperforming overrides found.</p>
      )}

      <ul className="space-y-2">
        {candidates.map((c) => (
          <li key={c.id} className="border p-2 rounded">
            <div className="text-xs text-gray-600">
              {c.type.toUpperCase()} — {c.metric}
            </div>
            <div className="text-xs">
              {c.target} — Before: {c.before.toFixed(1)} → After:{" "}
              {c.after.toFixed(1)}
              <span className="text-red-600 ml-2">Δ {c.delta.toFixed(1)}</span>
            </div>
            {!rolledBack.includes(c.id) ? (
              <button
                onClick={() => handleRollback(c.id)}
                className="mt-2 px-3 py-1 bg-red-100 text-red-800 rounded text-xs"
              >
                Roll Back
              </button>
            ) : (
              <div className="text-green-600 text-xs mt-2">Rolled back</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
