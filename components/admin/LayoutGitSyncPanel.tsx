"use client"

import { useState } from "react"
import { listLayoutHistory } from "@/lib/layout/layoutHistory"
import { pushLayoutToGit, pullLayoutFromGit, listGitLayoutFiles } from "@/lib/layout/gitSync"

export default function LayoutGitSyncPanel() {
  const history = listLayoutHistory()
  const [log, setLog] = useState("")
  const [files, setFiles] = useState(listGitLayoutFiles())
  const [selectedId, setSelectedId] = useState("")
  const [selectedFile, setSelectedFile] = useState("")

  function push() {
    const msg = pushLayoutToGit(selectedId)
    setLog(msg)
    setFiles(listGitLayoutFiles())
  }

  function pull() {
    const msg = pullLayoutFromGit(selectedFile)
    setLog(msg)
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Layout Git Sync</h3>

      <div className="grid grid-cols-2 gap-4">
        <label className="flex flex-col">
          Push Snapshot
          <select
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="">Select snapshot</option>
            {history.map((h) => (
              <option key={h.id} value={h.id}>
                {h.label} — {new Date(h.timestamp).toLocaleString()}
              </option>
            ))}
          </select>
          <button onClick={push} className="mt-2 px-3 py-1 bg-black text-white rounded">
            Push to Git
          </button>
        </label>

        <label className="flex flex-col">
          Pull from Git
          <select
            value={selectedFile}
            onChange={(e) => setSelectedFile(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="">Select file</option>
            {files.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
          <button onClick={pull} className="mt-2 px-3 py-1 bg-green-700 text-white rounded">
            Import Layout
          </button>
        </label>
      </div>

      {log && <div className="text-xs bg-gray-50 p-2 rounded border">{log}</div>}
    </div>
  )
}
