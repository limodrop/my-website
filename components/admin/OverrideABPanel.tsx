"use client"

import { useState } from "react"
import { createABTest, promoteABWinner } from "@/lib/ab/overrideAB"

export default function OverrideABPanel() {
  const [form, setForm] = useState({
    target: "cta-123",
    channel: "cta",
    variants: ["Book now", "Reserve your ride", "Your SUV awaits"]
  })

  const [log, setLog] = useState("")

  function create() {
    createABTest(form.target, form.channel as any, form.variants)
    setLog("✅ A/B test created")
  }

  function promote() {
    const msg = promoteABWinner(form.target)
    setLog(msg)
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Override A/B Testing</h3>

      <label className="flex flex-col">
        Target ID
        <input
          type="text"
          value={form.target}
          onChange={(e) => setForm({ ...form, target: e.target.value })}
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
          <option value="email">Email</option>
          <option value="cta">CTA</option>
          <option value="social">Social</option>
        </select>
      </label>

      <label className="flex flex-col">
        Variants (comma-separated)
        <input
          type="text"
          value={form.variants.join(", ")}
          onChange={(e) =>
            setForm({ ...form, variants: e.target.value.split(",").map((v) => v.trim()) })
          }
          className="border p-2 rounded"
        />
      </label>

      <div className="flex gap-4">
        <button onClick={create} className="px-4 py-2 bg-black text-white rounded">
          Create A/B Test
        </button>
        <button onClick={promote} className="px-4 py-2 bg-green-600 text-white rounded">
          Promote Winner
        </button>
      </div>

      {log && <div className="text-xs bg-gray-50 p-2 rounded border">{log}</div>}
    </div>
  )
}
