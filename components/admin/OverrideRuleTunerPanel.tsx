"use client"

import { useState } from "react"
import { getRuleTuningSuggestions } from "@/lib/intel/overrideRuleTuner"

export default function OverrideRuleTunerPanel() {
  const [suggestions, setSuggestions] = useState(getRuleTuningSuggestions())

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Override Rule Confidence Tuner</h3>

      {suggestions.length === 0 ? (
        <p className="text-xs text-gray-500">No tuning suggestions yet.</p>
      ) : (
        <table className="w-full text-xs border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2">Rule</th>
              <th className="p-2">Current</th>
              <th className="p-2">Suggested</th>
              <th className="p-2">Matches</th>
              <th className="p-2">Misses</th>
            </tr>
          </thead>
          <tbody>
            {suggestions.map((s, i) => (
              <tr key={i} className="border-t">
                <td className="p-2">{s.ruleId}</td>
                <td className="p-2">{s.current}</td>
                <td className="p-2">{s.suggested}</td>
                <td className="p-2">{s.matches}</td>
                <td className="p-2">{s.misses}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
