"use client"

import { useState } from "react"
import { exportLayoutVariantsToGit } from "@/lib/layout/layoutVariantGit"

export default function LayoutVariantGitExportPanel() {
  const [log, setLog] = useState<string[]>([])

  function run() {
    const out = exportLayoutVariantsToGit()
    setLog(out)
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Layout Variant Git Export</h3>

      <button
        onClick={run}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Export Variants to Git
      </button>

      {log.length > 0 && (
        <ul className="mt-4 space-y-2 text-xs">
          {log.map((l, i) => (
            <li key={i} className="border p-2 rounded">{l}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
