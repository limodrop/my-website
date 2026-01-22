"use client"

import { useState } from "react"
import {
  listAutoApprovalRules,
  addAutoApprovalRule
} from "@/lib/intel/autoApprove"

export default function AutoApprovalRulesPanel() {
  const [rules, setRules] = useState(listAutoApprovalRules())
  const [form, setForm] = useState({
    channel: "email",
    metric: "ctr",
    lang: "any",
    city: "any",
    service: "any",
    minConfidence: 70
  })

  function submit() {
    addAutoApprovalRule(form)
    setRules(listAutoApprovalRules())
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Override Auto-Approval Rules</h3>

      <div className="grid grid-cols-3 gap-4">
        <label className="flex flex-col">
          Channel
          <select
            value={form.channel}
            onChange={(e) => setForm({ ...form, channel: e.target.value })}
            className="border p-2 rounded"
          >
            <option value="email">Email</option>
            <option value="cta">CTA</option>
            <option value="social">Social</option>
          </select>
        </label>

        <label className="flex flex-col">
          Metric
          <select
            value={form.metric}
            onChange={(e) => setForm({ ...form, metric: e.target.value })}
            className="border p-2 rounded"
          >
            <option value="ctr">CTR</option>
            <option value="engagement">Engagement</option>
          </select>
        </label>

        <label className="flex flex-col">
          Min Confidence (%)
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
      </div>

      <button
        onClick={submit}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Add Rule
      </button>

      <div className="mt-6">
        <h4 className="font-semibold mb-2">Active Rules</h4>
        <ul className="space-y-2">
          {rules.map((r) => (
            <li key={r.id} className="border p-2 rounded text-xs">
              {r.channel.toUpperCase()} — {r.metric} ≥ {r.minConfidence}%
              <br />→ {r.lang}, {r.city}, {r.service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
