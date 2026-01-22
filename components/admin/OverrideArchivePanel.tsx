"use client"

import { useState } from "react"
import { listExpiredOverrides, restoreExpiredOverride } from "@/lib/override/expiryEngine"

export default function OverrideArchivePanel() {
  const [expired, setExpired] = useState(listExpiredOverrides())
  const [log, setLog] = useState("")

  function restore(target: string, variant: string) {
    const msg = restoreExpiredOverride(target, variant)
    setLog(msg)
    setExpired(listExpiredOverrides())
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Expired Overrides Archive</h3>

      {expired.length === 0 ? (
        <p className="text-xs text-gray-500">No expired overrides found.</p>
      ) : (
        <ul className="space-y-2">
          {expired.map((e, i) => (
            <li key={i} className="border p-2 rounded text-xs">
              <div><strong>{e.variant}</strong> → {e.target}</div>
              <div className="text-gray-500">Reason: {e.reason}</div>
              <button
                onClick={() => restore(e.target, e.variant)}
                className="mt-2 px-3 py-1 bg-green-100 text-green-800 rounded"
              >
                Restore
              </button>
            </li>
          ))}
        </ul>
      )}

      {log && <div className="text-xs bg-gray-50 p-2 rounded border">{log}</div>}
    </div>
  )
}
