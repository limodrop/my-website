"use client"

import { useState } from "react"
import { assignLayoutVariant } from "@/lib/layout/layoutABTest"

export default function LayoutABTestPanel() {
  const [sessionId, setSessionId] = useState("")
  const [variant, setVariant] = useState<any>(null)

  function run() {
    const v = assignLayoutVariant(sessionId)
    setVariant(v)
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Layout A/B Testing Engine</h3>

      <label className="flex flex-col">
        Session ID
        <input
          type="text"
          value={sessionId}
          onChange={(e) => setSessionId(e.target.value)}
          className="border p-2 rounded"
        />
      </label>

      <button
        onClick={run}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Assign Variant
      </button>

      {variant && (
        <div className="text-xs bg-gray-50 p-2 rounded border mt-4">
          Assigned: <strong>{variant.label}</strong> (ID: {variant.id})
        </div>
      )}
    </div>
  )
}
