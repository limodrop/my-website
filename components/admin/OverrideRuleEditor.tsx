"use client"

import { useState } from "react"
import {
  listOverrideRules,
  addOverrideRule,
  deleteOverrideRule
} from "@/lib/intel/overrideRules"

export default function OverrideRuleEditor() {
  const [rules, setRules] = useState(listOverrideRules())
  const [form, setForm] = useState({
    id: "",
    channel: "cta",
    lang: "en",
    city: "Portland",
    service: "airport",
    minConfidence: 75,
    autoApprove: true
  })

  function add() {
    if (!form.id) return
    addOverrideRule({ ...form })
    setRules(listOverrideRules())
  }

  function remove(id: string) {
    deleteOverrideRule(id)
    setRules(listOverrideRules())
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Override Rule Editor</h3>

      <div className="grid grid-cols-3 gap-4">
        <label className="flex flex-col">
          Rule ID
          <input
            type="text"
            value={form.id}
            onChange={(e) => setForm({ ...form, id: e.target.value })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Channel
          <select
            value={form.channel}
            onChange={(e) => setForm({ ...form, channel: e.target.value })}
            className="border p-2 rounded"
          >
            <option value="cta">CTA</option>
            <option value="email">Email</option>
            <option value="social">Social</option>
          </select>
        </label>

        <label className="flex flex-col">
          Language
          <input
            type="text"
            value={form.lang}
            onChange={(e) => setForm({ ...form, lang: e.target.value })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          City
          <input
            type="text"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Service
          <input
            type="text"
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Min Confidence
          <input
            type="number"
            value={form.minConfidence}
            onChange={(e) =>
              setForm({ ...form, minConfidence: parseInt(e.target.value) })
            }
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Auto-Approve
          <select
            value={form.autoApprove ? "yes" : "no"}
            onChange={(e) =>
              setForm({ ...form, autoApprove: e.target.value === "yes" })
            }
            className="border p-2 rounded"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
      </div>

      <button
        onClick={add}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Add Rule
      </button>

      <ul className="mt-4 space-y-2 text-xs">
        {rules.map((r) => (
          <li key={r.id} className="border p-2 rounded">
            <div>
              <strong>{r.id}</strong> — {r.channel} / {r.lang} / {r.city} / {r.service}
            </div>
            <div className="text-gray-500">
              Min Confidence: {r.minConfidence} — Auto-Approve:{" "}
              {r.autoApprove ? "✅" : "❌"}
            </div>
            <button
              onClick={() => remove(r.id)}
              className="mt-2 px-3 py-1 bg-red-100 text-red-800 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
