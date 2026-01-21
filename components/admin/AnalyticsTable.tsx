"use client"

import { useEffect, useState } from "react"
import { AnalyticsEvent } from "@/lib/analytics/types"

export default function AnalyticsTable() {
  const [events, setEvents] = useState<AnalyticsEvent[]>([])

  useEffect(() => {
    fetch("/api/admin/analytics")
      .then((res) => res.json())
      .then((json) => setEvents(json.data))
  }, [])

  return (
    <div className="overflow-x-auto text-sm bg-white p-4 rounded shadow">
      <table className="min-w-full">
        <thead>
          <tr className="text-left border-b">
            <th className="p-2">Type</th>
            <th className="p-2">Path</th>
            <th className="p-2">Session</th>
            <th className="p-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {events.map((e) => (
            <tr key={e.id} className="border-b">
              <td className="p-2">{e.type}</td>
              <td className="p-2">{e.path}</td>
              <td className="p-2">{e.sessionId}</td>
              <td className="p-2">
                {new Date(e.timestamp).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
