"use client"

import { useState } from "react"
import { listAuditLog } from "@/lib/intel/audit"

export default function AdminAuditLog() {
  const [entries] = useState(listAuditLog())

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Admin Audit Log</h3>

      {entries.length === 0 && <p className="text-gray-500">No actions recorded yet.</p>}

      <ul className="space-y-2">
        {entries.map((e) => (
          <li key={e.id} className="border p-2 rounded">
            <div className="text-xs text-gray-600">
              {new Date(e.timestamp).toLocaleString()} — {e.actor}
            </div>
            <div>
              <strong>{e.action}</strong> → <code>{e.target}</code>
            </div>
            {e.meta && (
              <pre className="text-xs bg-gray-50 p-2 rounded mt-1 overflow-x-auto">
                {JSON.stringify(e.meta, null, 2)}
              </pre>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
