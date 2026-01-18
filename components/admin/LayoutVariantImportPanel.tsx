"use client"

import { useState } from "react"
import {
  listGitVariantFiles,
  importLayoutVariantFromGit
} from "@/lib/layout/layoutVariantGit"

export default function LayoutVariantImportPanel() {
  const [files, setFiles] = useState(listGitVariantFiles())
  const [selected, setSelected] = useState("")
  const [log, setLog] = useState("")

  function run() {
    const msg = importLayoutVariantFromGit(selected)
    setLog(msg)
    setFiles(listGitVariantFiles())
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Layout Variant Importer</h3>

      <label className="flex flex-col">
        Select Git Variant File
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
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
        onClick={run}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Import Variant
      </button>

      {log && <div className="text-xs bg-gray-50 p-2 rounded border">{log}</div>}
    </div>
  )
}
