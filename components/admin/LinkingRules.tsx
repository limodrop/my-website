"use client"

import { mockLinks } from "@/lib/admin/relationships"

export default function LinkingRules() {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-lg font-semibold mb-2">Cross-Page Linking Rules</h3>
      <ul className="space-y-2 text-sm">
        {mockLinks.map((r) => (
          <li key={r.id} className="border p-2 rounded">
            <strong>{r.entityType}</strong> <code>{r.entityId}</code> →{" "}
            {r.related.join(", ")}
            <br />
            <span className="text-xs text-gray-600">{r.reason}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
