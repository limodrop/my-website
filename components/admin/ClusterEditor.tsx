"use client"

import { mockClusters } from "@/lib/admin/relationships"

export default function ClusterEditor() {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-lg font-semibold mb-2">Content Clusters</h3>
      <ul className="space-y-2 text-sm">
        {Object.entries(mockClusters).map(([cluster, items]) => (
          <li key={cluster} className="border p-2 rounded">
            <strong>{cluster}</strong>: {items.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  )
}
