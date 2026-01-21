"use client"

import { useState } from "react"
import { exportCampaignData } from "@/lib/intel/export"

export default function CampaignExportPanel() {
  const [format, setFormat] = useState<"csv" | "json">("csv")
  const [output, setOutput] = useState("")

  function runExport() {
    const data = exportCampaignData(format)
    setOutput(data)
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Campaign Export</h3>

      <div className="flex gap-4 items-center">
        <label className="flex flex-col">
          Format
          <select
            value={format}
            onChange={(e) => setFormat(e.target.value as any)}
            className="border p-2 rounded"
          >
            <option value="csv">CSV</option>
            <option value="json">JSON</option>
          </select>
        </label>

        <button
          onClick={runExport}
          className="px-4 py-2 bg-black text-white rounded mt-5"
        >
          Export
        </button>
      </div>

      {output && (
        <div className="mt-4">
          <textarea
            value={output}
            readOnly
            rows={20}
            className="w-full border p-2 font-mono text-xs"
          />
        </div>
      )}
    </div>
  )
}
