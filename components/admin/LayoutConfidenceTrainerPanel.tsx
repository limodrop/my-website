"use client"

import { useState } from "react"
import { trainConfidenceWeights } from "@/lib/layout/layoutConfidenceTrainer"

export default function LayoutConfidenceTrainerPanel() {
  const [rows, setRows] = useState(trainConfidenceWeights())

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Layout Confidence Trainer</h3>

      <table className="w-full text-xs border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">Label</th>
            <th className="p-2">Impr.</th>
            <th className="p-2">Conv.</th>
            <th className="p-2">CR</th>
            <th className="p-2">Structure</th>
            <th className="p-2">Score</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t">
              <td className="p-2">{r.label}</td>
              <td className="p-2">{r.impressions}</td>
              <td className="p-2">{r.conversions}</td>
              <td className="p-2">{(r.cr * 100).toFixed(1)}%</td>
              <td className="p-2">{r.structureScore}</td>
              <td className="p-2">{r.adjustedScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
