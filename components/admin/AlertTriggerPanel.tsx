"use client"

import { useState } from "react"
import { runSlackAlerts } from "@/lib/intel/alerts"

export default function AlertTriggerPanel() {
  const [webhook, setWebhook] = useState("")
  const [logs, setLogs] = useState<string[]>([])

  async function run() {
    const out = await runSlackAlerts(webhook)
    setLogs(out)
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Slack Alert Triggers</h3>

      <label className="flex flex-col">
        Slack Webhook URL
        <input
          type="text"
          value={webhook}
          onChange={(e) => setWebhook(e.target.value)}
          className="border p-2 rounded"
        />
      </label>

      <button
        onClick={run}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Run Alerts
      </button>

      {logs.length > 0 && (
        <div className="mt-4 space-y-2">
          {logs.map((l, i) => (
            <div key={i} className="text-xs bg-gray-50 p-2 rounded border">
              {l}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
