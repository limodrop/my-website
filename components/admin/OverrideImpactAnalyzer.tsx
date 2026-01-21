"use client"

import { useState } from "react"
import { analyzeOverrideImpact } from "@/lib/intel/overrideImpact"

export default function OverrideImpactAnalyzer() {
  const [rows, setRows] = useState(analyzeOverrideImpact())

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Override Impact Analyzer</h3>

      <p className="text-xs text-gray-600">
        This compares pre- and post-override performance to help you evaluate
        override effectiveness.
      </p>

      <table className="w-full text-xs border mt-2">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">Type</th>
            <th className="p-2 border">Target</th>
            <th className="p-2 border">Metric</th>
            <th className="p-2 border">Before</th>
            <th className="p-2 border">After</th>
            <th className="p-2 border">Δ</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id}>
              <td className="p-2 border">{r.type}</td>
              <td className="p-2 border font-mono">{r.target}</td>
              <td className="p-2 border">{r.metric}</td>
              <td className="p-2 border">{r.before.toFixed(1)}</td>
              <td className="p-2 border">{r.after.toFixed(1)}</td>
              <td
                className={`p-2 border ${
                  r.delta >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {r.delta.toFixed(1)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
