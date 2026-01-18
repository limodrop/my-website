"use client"

import { useState } from "react"
import { listRuleAudit } from "@/lib/intel/overrideRuleAudit"

export default function OverrideRuleAuditPanel() {
  const [log] = useState(listRuleAudit())

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Override Rule Audit Log</h3>

      {log.length === 0 ? (
        <p className="text-xs text-gray-500">No rule audit entries yet.</p>
      ) : (
        <ul className="space-y-2 text-xs">
          {log.map((e, i) => (
            <li key={i} className="border p-2 rounded">
              <div>
                <strong>{e.ruleId}</strong> — {e.action} by {e.actor}
              </div>
              <div className="text-gray-500">
                {new Date(e.timestamp).toLocaleString()}
              </div>
              {e.meta && (
                <pre className="bg-gray-50 mt-1 p-2 rounded border overflow-x-auto">
                  {JSON.stringify(e.meta, null, 2)}
                </pre>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
