"use client"

import { useState } from "react"
import { importLayoutFromJSON } from "@/lib/layout/layoutImport"

export default function LayoutImportPanel() {
  const [json, setJson] = useState("")
  const [log, setLog] = useState("")

  function runImport() {
    const msg = importLayoutFromJSON(json)
    setLog(msg)
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Layout Import from JSON</h3>

      <textarea
        className="w-full h-64 border p-2 font-mono text-xs"
        placeholder="Paste exported layout JSON here..."
        value={json}
        onChange={(e) => setJson(e.target.value)}
      />

      <button
        onClick={runImport}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Import Layout
      </button>

      {log && <div className="text-xs bg-gray-50 p-2 rounded border">{log}</div>}
    </div>
  )
}
