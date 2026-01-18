"use client"

import { useState } from "react"
import { defineLayoutVariant } from "@/lib/layout/layoutABTest"
import { getHomepageLayout } from "@/lib/layout/homepageLayout"

export default function LayoutVariantEditor() {
  const [form, setForm] = useState({
    id: "",
    label: "",
    weight: 1
  })
  const [log, setLog] = useState("")

  function save() {
    if (!form.id || !form.label) {
      setLog("❌ ID and label are required")
      return
    }

    const layout = getHomepageLayout()
    defineLayoutVariant(form.id, form.label, layout, form.weight)
    setLog(`✅ Registered variant "${form.label}" with weight ${form.weight}`)
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Layout Variant Editor</h3>

      <div className="grid grid-cols-3 gap-4">
        <label className="flex flex-col">
          Variant ID
          <input
            type="text"
            value={form.id}
            onChange={(e) => setForm({ ...form, id: e.target.value })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Label
          <input
            type="text"
            value={form.label}
            onChange={(e) => setForm({ ...form, label: e.target.value })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Weight
          <input
            type="number"
            value={form.weight}
            onChange={(e) =>
              setForm({ ...form, weight: parseInt(e.target.value) })
            }
            className="border p-2 rounded"
          />
        </label>
      </div>

      <button
        onClick={save}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Save Variant
      </button>

      {log && <div className="text-xs bg-gray-50 p-2 rounded border">{log}</div>}
    </div>
  )
}
