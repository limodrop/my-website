"use client"

import { useState, useEffect } from "react"
import {
  trainOverrideConfidenceModel,
  scoreOverrideSuggestion
} from "@/lib/intel/overrideScore"

export default function OverrideConfidencePanel() {
  const [scores, setScores] = useState<any[]>([])

  useEffect(() => {
    trainOverrideConfidenceModel()
  }, [])

  function runScoring() {
    const examples = [
      {
        channel: "email",
        target: "email-123",
        lang: "en",
        city: "Portland",
        service: "airport"
      },
      {
        channel: "cta",
        target: "cta-456",
        lang: "es",
        city: "Seattle",
        service: "wedding"
      },
      {
        channel: "social",
        target: "post-789",
        lang: "fr",
        city: "Portland",
        service: "brewery"
      }
    ]

    const results = examples.map((e) =>
      scoreOverrideSuggestion(
        e.channel as any,
        e.target,
        e.lang,
        e.city,
        e.service
      )
    )

    setScores(results)
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Override Confidence Scoring</h3>

      <button
        onClick={runScoring}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Score Suggestions
      </button>

      <ul className="space-y-2 mt-4">
        {scores.map((s) => (
          <li key={s.id} className="border p-2 rounded">
            <div className="text-xs text-gray-600">
              {s.channel.toUpperCase()} — {s.metric}
            </div>
            <div className="text-xs">
              {s.target} ({s.city}, {s.service}, {s.lang}) → Confidence:{" "}
              <span
                className={s.confidence >= 60 ? "text-green-600" : "text-red-600"}
              >
                {s.confidence}%
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
