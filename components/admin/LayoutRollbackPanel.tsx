"use client"

import { useState } from "react"
import { listLayoutHistory, restoreLayoutSnapshot } from "@/lib/layout/layoutHistory"

export default function LayoutRollbackPanel() {
  const [history, setHistory] = useState(listLayoutHistory())
  const [log, setLog] = useState("")

  function restore(id: string) {
    const msg = restoreLayoutSnapshot(id)
    setLog(msg)
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Layout Rollback History</h3>

      <ul className="space-y-2">
        {history.map((h) => (
          <li key={h.id} className="border p-2 rounded text-xs">
            <div><strong>{h.label}</strong> — {new Date(h.timestamp).toLocaleString()}</div>
            <div className="text-gray-500">Source: {h.source}</div>
            <button
              onClick={() => restore(h.id)}
              className="mt-2 px-3 py-1 bg-red-100 text-red-800 rounded"
            >
              Restore
            </button>
          </li>
        ))}
      </ul>

      {log && (
        <div className="mt-4 text-xs bg-gray-50 p-2 rounded border">{log}</div>
      )}
    </div>
  )
}
