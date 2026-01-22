"use client"

import { useEffect, useState } from "react"
import { MultiPageContext } from "@/lib/intel/types"
import { mockContext } from "@/lib/admin/mockContext"
import SnapshotCard from "./SnapshotCard"

export default function SnapshotViewer() {
  const [snapshot, setSnapshot] = useState<any>(null)

  useEffect(() => {
    fetch("/api/intelligence/orchestrator", {
      method: "POST",
      body: JSON.stringify(mockContext),
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => res.json())
      .then((json) => setSnapshot(json.data))
  }, [])

  if (!snapshot) return <p>Loading snapshot...</p>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {Object.entries(snapshot).map(([key, value]) => (
        <SnapshotCard key={key} label={key} data={value} />
      ))}
    </div>
  )
}
