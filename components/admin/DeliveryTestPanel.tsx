"use client"

import { useState } from "react"
import { sendToSlack, sendEmail } from "@/lib/intel/deliver"

export default function DeliveryTestPanel() {
  const [slackUrl, setSlackUrl] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState(
    "📊 Test message from Oregon Town Car AI system."
  )
  const [status, setStatus] = useState("")

  async function testSlack() {
    const ok = await sendToSlack(slackUrl, message)
    setStatus(ok ? "✅ Slack sent" : "❌ Slack failed")
  }

  async function testEmail() {
    const ok = await sendEmail(email, "Test Digest", message)
    setStatus(ok ? "✅ Email sent" : "❌ Email failed")
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Delivery Test Panel</h3>

      <label className="flex flex-col">
        Message
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-2 rounded"
        />
      </label>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="flex flex-col">
            Slack Webhook URL
            <input
              type="text"
              value={slackUrl}
              onChange={(e) => setSlackUrl(e.target.value)}
              className="border p-2 rounded"
            />
          </label>
          <button
            onClick={testSlack}
            className="px-4 py-2 bg-black text-white rounded"
          >
            Send to Slack
          </button>
        </div>

        <div className="space-y-2">
          <label className="flex flex-col">
            Email Address
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 rounded"
            />
          </label>
          <button
            onClick={testEmail}
            className="px-4 py-2 bg-black text-white rounded"
          >
            Send Email
          </button>
        </div>
      </div>

      {status && <div className="text-sm text-gray-700">{status}</div>}
    </div>
  )
}
