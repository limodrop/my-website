"use client"

import { useState } from "react"
import { getHomepageLayout, updateHomepageLayout } from "@/lib/layout/homepageLayout"

export default function HomepageLayoutPanel() {
  const [blocks, setBlocks] = useState(getHomepageLayout())

  function toggle(id: string) {
    const updated = blocks.map((b) =>
      b.id === id ? { ...b, enabled: !b.enabled } : b
    )
    setBlocks(updated)
    updateHomepageLayout(updated)
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Homepage Layout Editor</h3>
      <ul className="space-y-2">
        {blocks.map((b) => (
          <li key={b.id} className="flex items-center justify-between border p-2 rounded">
            <span>{b.label}</span>
            <button
              onClick={() => toggle(b.id)}
              className={`px-3 py-1 rounded text-xs ${
                b.enabled ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"
              }`}
            >
              {b.enabled ? "Enabled" : "Disabled"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
