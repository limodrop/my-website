"use client"

import { useState } from "react"
import { suggestCtaOverrides } from "@/lib/intel/ctaSuggest"

export default function CtaOverrideSuggester() {
  const [data, setData] = useState<ReturnType<typeof suggestCtaOverrides> | null>(null)

  function runSuggestions() {
    const result = suggestCtaOverrides()
    setData(result)
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">CTA Override Suggestions</h3>

      <button
        onClick={runSuggestions}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Analyze Performance
      </button>

      {data && (
        <>
          <div>
            <h4 className="font-semibold mt-4">🚨 Underperforming CTAs</h4>
            <ul className="space-y-2 mt-2">
              {data.underperformers.map((c) => (
                <li key={c.ctaId + c.city + c.service} className="border p-2 rounded">
                  <strong>{c.ctaId}</strong> — {c.city}, {c.service}, {c.fleet}, {c.lang}
                  <div className="text-xs text-gray-600">
                    Views: {c.views}, Clicks: {c.clicks}, Conversions: {c.conversions}  
                    &nbsp;|&nbsp; CTR: {(c.clicks / c.views * 100 || 0).toFixed(1)}%  
                    &nbsp;|&nbsp; Conv: {(c.conversions / c.clicks * 100 || 0).toFixed(1)}%
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mt-6">🏆 Top Performing CTAs</h4>
            <ul className="space-y-2 mt-2">
              {data.topPerformers.map((c) => (
                <li key={c.ctaId + c.city + c.service} className="border p-2 rounded">
                  <strong>{c.ctaId}</strong> — {c.city}, {c.service}, {c.fleet}, {c.lang}
                  <div className="text-xs text-gray-600">
                    Views: {c.views}, Clicks: {c.clicks}, Conversions: {c.conversions}  
                    &nbsp;|&nbsp; CTR: {(c.clicks / c.views * 100 || 0).toFixed(1)}%  
                    &nbsp;|&nbsp; Conv: {(c.conversions / c.clicks * 100 || 0).toFixed(1)}%
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  )
}
