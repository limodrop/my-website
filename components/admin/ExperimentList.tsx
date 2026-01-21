"use client"

import { mockExperiments } from "@/lib/admin/experiments"

export default function ExperimentList() {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-lg font-semibold mb-2">Active A/B Tests</h3>
      <ul className="space-y-2">
        {mockExperiments.map((exp) => (
          <li key={exp.id} className="border p-2 rounded">
            <strong>{exp.name}</strong> — {exp.condition} → [{exp.variants.join(", ")}]
          </li>
        ))}
      </ul>
    </div>
  )
}
