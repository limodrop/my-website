"use client"

import { useState } from "react"
import { detectWinners } from "@/lib/intel/winner"

export default function WinnerDetectionPanel() {
  const [winners, setWinners] = useState(detectWinners())

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Auto-Winner Promotion Engine</h3>

      <button
        onClick={() => setWinners(detectWinners())}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Detect Winners
      </button>

      <ul className="space-y-2 mt-4">
        {winners.map((w) => (
          <li key={w.id} className="border p-2 rounded">
            <div className="text-xs text-gray-600">{w.type.toUpperCase()}</div>
            <div className="font-medium">{w.label}</div>
            <div className="text-xs text-gray-500">Score: {w.score.toFixed(1)}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
