"use client"

import { useState } from "react"
import { listLayoutHistory } from "@/lib/layout/layoutHistory"
import { exportLayoutSnapshot } from "@/lib/layout/layoutExport"

export default function LayoutExportPanel() {
  const history = listLayoutHistory()
  const [selectedId, setSelectedId] = useState("")
  const [json, setJson] = useState("")

  function exportSnapshot() {
    const out = exportLayoutSnapshot(selectedId)
    if (out) setJson(out)
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Layout Snapshot Export</h3>

      <label className="flex flex-col">
        Select Snapshot
        <select
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Choose snapshot</option>
          {history.map((h) => (
            <option key={h.id} value={h.id}>
              {h.label} — {new Date(h.timestamp).toLocaleString()}
            </option>
          ))}
        </select>
      </label>

      <button
        onClick={exportSnapshot}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Export to JSON
      </button>

      {json && (
        <textarea
          className="w-full h-64 border p-2 font-mono text-xs mt-4"
          value={json}
          readOnly
        />
      )}
    </div>
  )
}
