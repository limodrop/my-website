"use client"

import { useState } from "react"
import { listGitLayoutFiles } from "@/lib/layout/gitSync"
import { diffGitLayout } from "@/lib/layout/gitDiff"

export default function LayoutGitDiffPanel() {
  const [selectedFile, setSelectedFile] = useState("")
  const [diff, setDiff] = useState<any[]>([])

  function runDiff() {
    const out = diffGitLayout(selectedFile)
    if (out) setDiff(out)
  }

  const files = listGitLayoutFiles()

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Layout Git Diff Viewer</h3>

      <label className="flex flex-col">
        Select Git Snapshot
        <select
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Choose file</option>
          {files.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </label>

      <button
        onClick={runDiff}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Compare to Current Layout
      </button>

      {diff.length > 0 && (
        <table className="w-full text-xs mt-4 border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2">Block</th>
              <th className="p-2">Git</th>
              <th className="p-2">Current</th>
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
