"use client"

import { useState } from "react"
import {
  listApprovalQueue,
  approveLayout,
  rejectLayout
} from "@/lib/layout/layoutApprovalQueue"

export default function LayoutApprovalQueuePanel() {
  const [queue, setQueue] = useState(listApprovalQueue())
  const [log, setLog] = useState("")

  function approve(id: string) {
    const msg = approveLayout(id, "admin")
    setLog(msg)
    setQueue(listApprovalQueue())
  }

  function reject(id: string) {
    const msg = rejectLayout(id, "admin")
    setLog(msg)
    setQueue(listApprovalQueue())
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Layout Approval Queue</h3>

      {queue.length === 0 ? (
        <p className="text-xs text-gray-500">No pending layouts.</p>
      ) : (
        <ul className="space-y-2 text-xs">
          {queue.map((q) => (
            <li key={q.id} className="border p-2 rounded">
              <div>
                <strong>{q.label}</strong> — submitted by {q.submittedBy}
              </div>
              <div className="text-gray-500">Status: {q.status}</div>
              {q.status === "pending" && (
                <div className="space-x-2 mt-2">
                  <button
                    onClick={() => approve(q.id)}
                    className="px-3 py-1 bg-green-700 text-white rounded"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => reject(q.id)}
                    className="px-3 py-1 bg-red-700 text-white rounded"
                  >
                    Reject
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}

      {log && <div className="text-xs bg-gray-50 p-2 rounded border">{log}</div>}
    </div>
  )
}
