"use client"

import { mockRules } from "@/lib/admin/rules"

export default function RuleList() {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-lg font-semibold mb-2">Existing Rules</h3>
      <ul className="space-y-2">
        {mockRules.map((r) => (
          <li key={r.id} className="border p-2 rounded">
            <strong>{r.engine}</strong>: {r.key} {r.condition} {r.value}
          </li>
        ))}
      </ul>
    </div>
  )
}
