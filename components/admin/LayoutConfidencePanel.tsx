"use client"

import { useState } from "react"
import { estimateLayoutConfidence } from "@/lib/layout/layoutConfidence"

export default function LayoutConfidencePanel() {
  const [scores, setScores] = useState(estimateLayoutConfidence())

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Layout Variant Confidence Scores</h3>

      <table className="w-full text-xs border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">Label</th>
            <th className="p-2">Score</th>
            <th className="p-2">Impr.</th>
            <th className="p-2">Conv.</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((s, i) => (
            <tr key={i} className="border-t">
              <td className="p-2">{s.label}</td>
              <td className="p-2">{s.score}</td>
              <td className="p-2">{s.impressions}</td>
              <td className="p-2">{s.conversions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
