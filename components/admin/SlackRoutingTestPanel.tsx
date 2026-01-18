"use client"

import { useState } from "react"
import { sendRoutedSlackAlert } from "@/lib/intel/overrideSlackRouter"

export default function SlackRoutingTestPanel() {
  const [form, setForm] = useState({
    city: "Portland",
    service: "airport"
  })
  const [log, setLog] = useState("")

  async function send() {
    await sendRoutedSlackAlert(
      form.city,
      form.service,
      "🔔 Routed Alert",
      `This is a test alert for ${form.city}/${form.service}`,
      { confidence: 82 }
    )
    setLog("✅ Sent routed alert to Slack")
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Slack Alert Router Tester</h3>

      <div className="grid grid-cols-2 gap-4">
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
        onClick={send}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Send Routed Alert
      </button>

      {log && <div className="text-xs bg-gray-50 p-2 rounded border">{log}</div>}
    </div>
  )
}
