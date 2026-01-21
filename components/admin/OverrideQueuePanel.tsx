"use client"

import { useState } from "react"
import { listOverrideQueue, actOnOverride } from "@/lib/intel/overrideQueue"

export default function OverrideQueuePanel() {
  const [queue, setQueue] = useState(listOverrideQueue())
  const [reviewer, setReviewer] = useState("admin@example.com")

  function handleAction(id: string, approve: boolean) {
    actOnOverride(id, reviewer, approve)
    setQueue(listOverrideQueue())
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Override Approval Queue</h3>

      <label className="flex flex-col">
        Reviewer Email
        <input
          type="email"
          value={reviewer}
          onChange={(e) => setReviewer(e.target.value)}
          className="border p-2 rounded"
        />
      </label>

      <ul className="space-y-2">
        {queue.map((r) => (
          <li key={r.id} className="border p-2 rounded">
            <div className="text-xs text-gray-600">
              {r.channel.toUpperCase()} — {r.city}, {r.service}, {r.lang}
            </div>
            <div className="text-xs">
              <strong>Proposed:</strong> {r.proposed}
              <br />
              <strong>Submitted by:</strong> {r.submittedBy}
              <br />
              <strong>Status:</strong>{" "}
              <span
                className={
                  r.status === "approved"
                    ? "text-green-600"
                    : r.status === "rejected"
                    ? "text-red-600"
                    : "text-yellow-600"
                }
              >
                {r.status}
              </span>
            </div>
            {r.status === "pending" && (
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => handleAction(r.id, true)}
                  className="px-3 py-1 bg-green-100 text-green-800 rounded text-xs"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleAction(r.id, false)}
                  className="px-3 py-1 bg-red-100 text-red-800 rounded text-xs"
                >
                  Reject
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
