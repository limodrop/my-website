"use client"

import { mockPriceMessages } from "@/lib/admin/priceMessaging"

export default function PriceMessageList() {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-lg font-semibold mb-2">Messaging Rules</h3>
      <ul className="space-y-2">
        {mockPriceMessages.map((r) => (
          <li key={r.id} className="border p-2 rounded">
            {r.city} / {r.service} / {r.fleet} / {r.season} → {r.label}
            <br />
            <span className="text-xs text-gray-600">
              {r.messages.join(" • ")}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
