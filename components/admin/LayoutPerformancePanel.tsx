"use client"

import { useState } from "react"
import { promoteTopLayout } from "@/lib/layout/layoutPerformance"

export default function LayoutPerformancePanel() {
  const [log, setLog] = useState("")

  function run() {
    const msg = promoteTopLayout()
    setLog(msg)
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Layout Performance Promotion</h3>

      <button
        onClick={run}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Promote Best Layout
      </button>

      {log && (
        <div className="mt-4 text-xs bg-gray-50 p-2 rounded border">{log}</div>
      )}
    </div>
  )
}
