"use client"

import { useState } from "react"
import { runOverrideExpiry } from "@/lib/override/expiryEngine"

export default function OverrideExpiryPanel() {
  const [log, setLog] = useState<string[]>([])

  function run() {
    const out = runOverrideExpiry()
    setLog(out)
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Override Expiry Engine</h3>

      <button
        onClick={run}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Run Expiry Sweep
      </button>

      {log.length > 0 && (
        <div className="mt-4 space-y-2">
          {log.map((l, i) => (
            <div key={i} className="text-xs bg-gray-50 p-2 rounded border">
              {l}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
