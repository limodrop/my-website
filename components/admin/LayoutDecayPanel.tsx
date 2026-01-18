"use client"

import { useState } from "react"
import { getDecayedConfidenceScores } from "@/lib/layout/layoutConfidenceDecay"

export default function LayoutDecayPanel() {
  const [rows, setRows] = useState(getDecayedConfidenceScores())

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Layout Confidence Decay</h3>

      <table className="w-full text-xs border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">Label</th>
            <th className="p-2">Base</th>
            <th className="p-2">Last Used</th>
            <th className="p-2">Decayed</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t">
              <td className="p-2">{r.label}</td>
              <td className="p-2">{r.baseScore}</td>
              <td className="p-2">{r.lastUsed}</td>
              <td className="p-2">{r.decayedScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
