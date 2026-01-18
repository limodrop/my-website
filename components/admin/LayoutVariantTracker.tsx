"use client"

import { useState } from "react"
import { listLayoutVariants } from "@/lib/layout/layoutPerformance"

export default function LayoutVariantTracker() {
  const [variants, setVariants] = useState(listLayoutVariants())

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Layout Variant Tracker</h3>

      <table className="w-full text-xs border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">Label</th>
            <th className="p-2">Impr.</th>
            <th className="p-2">Conv.</th>
            <th className="p-2">CR</th>
          </tr>
        </thead>
        <tbody>
          {variants.map((v, i) => (
            <tr key={i} className="border-t">
              <td className="p-2">{v.label}</td>
              <td className="p-2">{v.impressions}</td>
              <td className="p-2">{v.conversions}</td>
              <td className="p-2">
                {v.cr > 0 ? (v.cr * 100).toFixed(1) + "%" : "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
