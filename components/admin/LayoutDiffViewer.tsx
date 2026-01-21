"use client"

import { useState } from "react"
import { listLayoutHistory } from "@/lib/layout/layoutHistory"
import { diffLayouts } from "@/lib/layout/layoutDiff"

export default function LayoutDiffViewer() {
  const history = listLayoutHistory()
  const [fromId, setFromId] = useState("")
  const [toId, setToId] = useState("")
  const [diff, setDiff] = useState<any[]>([])

  function runDiff() {
    const from = history.find((h) => h.id === fromId)
    const to = history.find((h) => h.id === toId)
    if (from && to) {
      setDiff(diffLayouts(from.layout, to.layout))
    }
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Layout Diff Viewer</h3>

      <div className="grid grid-cols-2 gap-4">
        <label className="flex flex-col">
          From Snapshot
          <select
            value={fromId}
            onChange={(e) => setFromId(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="">Select</option>
            {history.map((h) => (
              <option key={h.id} value={h.id}>
                {h.label} — {new Date(h.timestamp).toLocaleString()}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col">
          To Snapshot
          <select
            value={toId}
            onChange={(e) => setToId(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="">Select</option>
            {history.map((h) => (
              <option key={h.id} value={h.id}>
                {h.label} — {new Date(h.timestamp).toLocaleString()}
              </option>
            ))}
          </select>
        </label>
      </div>

      <button
        onClick={runDiff}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Compare Layouts
      </button>

      {diff.length > 0 && (
        <table className="w-full text-xs mt-4 border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2">Block</th>
              <th className="p-2">From</th>
              <th className="p-2">To</th>
              <th className="p-2">Changed</th>
            </tr>
          </thead>
          <tbody>
            {diff.map((d, i) => (
              <tr key={i} className="border-t">
                <td className="p-2">{d.label}</td>
                <td className="p-2">{d.from ? "✅" : "—"}</td>
                <td className="p-2">{d.to ? "✅" : "—"}</td>
                <td className="p-2">{d.changed ? "🔄" : ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
