"use client"

import { useState } from "react"
import { getOverrideCoverageGaps } from "@/lib/intel/overrideCoverage"

export default function OverrideCoveragePanel() {
  const [gaps] = useState(getOverrideCoverageGaps())

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Override Rule Coverage Report</h3>

      <table className="w-full text-xs border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">City</th>
            <th className="p-2">Service</th>
            <th className="p-2">Lang</th>
            <th className="p-2">Has Rule</th>
          </tr>
        </thead>
        <tbody>
          {gaps.map((g, i) => (
            <tr key={i} className="border-t">
              <td className="p-2">{g.city}</td>
              <td className="p-2">{g.service}</td>
              <td className="p-2">{g.lang}</td>
              <td className="p-2">
                {g.hasRule ? "✅" : <span className="text-red-600">❌</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
