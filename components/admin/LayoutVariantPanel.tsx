"use client"

import { useState } from "react"
import { listLayoutVariants, addLayoutVariant } from "@/lib/layout/layoutVariants"

export default function LayoutVariantPanel() {
  const [variants, setVariants] = useState(listLayoutVariants())
  const [form, setForm] = useState({
    label: "",
    rules: {
      city: "",
      service: "",
      lang: "",
      intent: "",
      source: ""
    }
  })

  function submit() {
    const layout = variants[0].layout.map((b) => ({ ...b })) // clone default
    addLayoutVariant({ label: form.label, rules: form.rules, layout })
    setVariants(listLayoutVariants())
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Layout Variant Rules</h3>

      <div className="grid grid-cols-2 gap-4">
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
          City
          <input
            type="text"
            value={form.rules.city}
            onChange={(e) => setForm({ ...form, rules: { ...form.rules, city: e.target.value } })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Service
          <input
            type="text"
            value={form.rules.service}
            onChange={(e) => setForm({ ...form, rules: { ...form.rules, service: e.target.value } })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Language
          <input
            type="text"
            value={form.rules.lang}
            onChange={(e) => setForm({ ...form, rules: { ...form.rules, lang: e.target.value } })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Intent
          <select
            value={form.rules.intent}
            onChange={(e) => setForm({ ...form, rules: { ...form.rules, intent: e.target.value } })}
            className="border p-2 rounded"
          >
            <option value="">Any</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>

        <label className="flex flex-col">
          Source
          <input
            type="text"
            value={form.rules.source}
            onChange={(e) => setForm({ ...form, rules: { ...form.rules, source: e.target.value } })}
            className="border p-2 rounded"
          />
        </label>
      </div>

      <button
        onClick={submit}
        className="px-4 py-2 bg-black text-white rounded mt-4"
      >
        Add Variant
      </button>

      <div className="mt-6">
        <h4 className="font-semibold mb-2">Active Variants</h4>
        <ul className="space-y-2">
          {variants.map((v) => (
            <li key={v.id} className="border p-2 rounded text-xs">
              <strong>{v.label}</strong> → {Object.entries(v.rules).filter(([_, val]) => val).map(([k, v]) => `${k}: ${v}`).join(", ")}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
