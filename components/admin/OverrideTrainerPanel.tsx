"use client"

import { useState } from "react"
import { learnOverridePatterns } from "@/lib/intel/overrideTrainer"

export default function OverrideTrainerPanel() {
  const [patterns, setPatterns] = useState(learnOverridePatterns())

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Override Suggestion Trainer</h3>

      <p className="text-xs text-gray-600">
        Based on past admin override actions, these are the most common override patterns by channel, language, city, and service.
      </p>

      <table className="w-full text-xs border mt-2">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">Channel</th>
            <th className="p-2 border">Lang</th>
            <th className="p-2 border">City</th>
            <th className="p-2 border">Service</th>
            <th className="p-2 border">Action</th>
            <th className="p-2 border">Count</th>
          </tr>
        </thead>
        <tbody>
          {patterns.map((p, i) => (
            <tr key={i}>
              <td className="p-2 border">{p.channel}</td>
              <td className="p-2 border">{p.lang}</td>
              <td className="p-2 border">{p.city}</td>
              <td className="p-2 border">{p.service}</td>
              <td className="p-2 border">{p.action}</td>
              <td className="p-2 border">{p.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
