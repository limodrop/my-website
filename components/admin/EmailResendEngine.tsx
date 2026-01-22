"use client"

import { useState } from "react"
import {
  listEmailCampaigns,
  getNonOpeners,
  generateResendVariant
} from "@/lib/intel/email"

export default function EmailResendEngine() {
  const [campaigns, setCampaigns] = useState(listEmailCampaigns())
  const [resends, setResends] = useState<any[]>([])

  function handleResend(id: string) {
    const variant = generateResendVariant(id)
    if (variant) {
      setResends([...resends, variant])
    }
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Email Resend Engine</h3>

      <ul className="space-y-4">
        {campaigns.map((c) => {
          const nonOpeners = getNonOpeners(c.id)
          return (
            <li key={c.id} className="border p-4 rounded">
              <div className="flex justify-between items-center">
                <div>
                  <strong>{c.subject}</strong>
                  <div className="text-xs text-gray-600">
                    {c.city}, {c.service}, {c.season}, {c.lang} — Non-openers: {nonOpeners}
                  </div>
                </div>
                <button
                  onClick={() => handleResend(c.id)}
                  className="px-3 py-1 bg-black text-white text-xs rounded"
                >
                  Generate Resend
                </button>
              </div>
            </li>
          )
        })}
      </ul>

      {resends.length > 0 && (
        <div className="mt-6">
          <h4 className="font-semibold mb-2">Generated Resend Variants</h4>
          <ul className="space-y-2">
            {resends.map((r) => (
              <li key={r.id} className="border p-2 rounded">
                <div className="text-xs text-gray-600 mb-1">
                  {r.city}, {r.service}, {r.season}, {r.lang}
                </div>
                <p className="text-sm font-medium">{r.subject}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
