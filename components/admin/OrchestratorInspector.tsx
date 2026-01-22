"use client"

import { useEffect, useState } from "react"
import { mockContext } from "@/lib/admin/orchestrator"

export default function OrchestratorInspector() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    fetch("/api/intelligence/orchestrator", {
      method: "POST",
      body: JSON.stringify(mockContext),
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => res.json())
      .then((json) => setData(json.data))
  }, [])

  return (
    <div className="p-4 bg-white rounded shadow text-sm">
      <h3 className="text-lg font-semibold mb-2">Full Engine Output</h3>
      {data ? (
        <pre className="whitespace-pre-wrap text-xs text-gray-800">
          {JSON.stringify(data, null, 2)}
        </pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
