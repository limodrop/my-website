"use client"

import { useState } from "react"
import { listEmailCampaigns, scheduleEmail } from "@/lib/intel/email"

export default function EmailCampaignScheduler() {
  const [campaigns, setCampaigns] = useState(listEmailCampaigns())

  function handleSchedule(id: string, date: string) {
    const ts = new Date(date).getTime()
    scheduleEmail(id, ts)
    setCampaigns(listEmailCampaigns())
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Email Campaign Scheduler</h3>

      {campaigns.length === 0 && <p className="text-gray-500">No campaigns yet.</p>}

      <ul className="space-y-4">
        {campaigns.map((c) => (
          <li key={c.id} className="border p-4 rounded">
            <div className="flex justify-between items-center">
              <div>
                <strong>{c.subject}</strong>
                <div className="text-xs text-gray-600">
                  {c.city}, {c.service}, {c.season}, {c.lang} — Status: {c.status}
                </div>
              </div>
              <div className="flex items-center gap-2">
                {c.status === "draft" && (
                  <>
                    <input
                      type="datetime-local"
                      onChange={(e) => handleSchedule(c.id, e.target.value)}
                      className="border p-1 rounded text-xs"
                    />
                    <button
                      onClick={() => handleSchedule(c.id, new Date().toISOString())}
                      className="px-2 py-1 bg-black text-white text-xs rounded"
                    >
                      Send Now
                    </button>
                  </>
                )}
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(c.html)
                    alert("HTML copied to clipboard")
                  }}
                  className="px-2 py-1 bg-gray-100 text-xs rounded"
                >
                  Copy HTML
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(c.subject)
                    alert("Subject copied to clipboard")
                  }}
                  className="px-2 py-1 bg-gray-100 text-xs rounded"
                >
                  Copy Subject
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
