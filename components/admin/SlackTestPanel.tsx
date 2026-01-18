"use client"

import { useState } from "react"
import { sendOverrideSlackAlert } from "@/lib/intel/overrideSlack"

export default function SlackTestPanel() {
  const [log, setLog] = useState("")

  async function send() {
    await sendOverrideSlackAlert("🔔 Test Alert", "This is a test override alert", {
      city: "Portland",
      service: "airport",
      confidence: 82
    })
    setLog("✅ Sent test alert to Slack")
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Slack Alert Tester</h3>

      <button
        onClick={send}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Send Test Alert
      </button>

      {log && <div className="text-xs bg-gray-50 p-2 rounded border">{log}</div>}
    </div>
  )
}
