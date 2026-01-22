"use client"

import { useState } from "react"
import { suggestSocialOverrides } from "@/lib/intel/socialSuggest"

export default function SocialOverrideSuggester() {
  const [data, setData] = useState<ReturnType<typeof suggestSocialOverrides> | null>(null)

  function runSuggestions() {
    const result = suggestSocialOverrides()
    setData(result)
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Social Override Suggestions</h3>

      <button
        onClick={runSuggestions}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Analyze Social Posts
      </button>

      {data && (
        <>
          <div>
            <h4 className="font-semibold mt-4">📉 Underperforming Posts</h4>
            <ul className="space-y-2 mt-2">
              {data.underperformers.map((p) => (
                <li key={p.postId + p.city + p.service} className="border p-2 rounded">
                  <strong>{p.postId}</strong> — {p.city}, {p.service}, {p.fleet}, {p.lang}
                  <div className="text-xs text-gray-600">
                    Likes: {p.likes}, Clicks: {p.clicks}, Shares: {p.shares}  
                    &nbsp;|&nbsp; Engagement: {p.engagement}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mt-6">🔥 Top Performing Posts</h4>
            <ul className="space-y-2 mt-2">
              {data.topPerformers.map((p) => (
                <li key={p.postId + p.city + p.service} className="border p-2 rounded">
                  <strong>{p.postId}</strong> — {p.city}, {p.service}, {p.fleet}, {p.lang}
                  <div className="text-xs text-gray-600">
                    Likes: {p.likes}, Clicks: {p.clicks}, Shares: {p.shares}  
                    &nbsp;|&nbsp; Engagement: {p.engagement}
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
