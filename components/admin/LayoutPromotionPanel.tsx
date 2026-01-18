"use client"

import { useState } from "react"
import { promoteTopLayoutVariant } from "@/lib/layout/layoutPromotionEngine"

export default function LayoutPromotionPanel() {
  const [log, setLog] = useState("")

  function run() {
    const msg = promoteTopLayoutVariant()
    setLog(msg)
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Layout Auto-Promotion</h3>

      <button
        onClick={run}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Promote Top Variant
      </button>

      {log && <div className="text-xs bg-gray-50 p-2 rounded border">{log}</div>}
    </div>
  )
}
