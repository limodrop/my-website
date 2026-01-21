"use client"

import { useState } from "react"
import { generateDigest } from "@/lib/intel/digest"

export default function DigestConfigPanel() {
  const [digest, setDigest] = useState("")

  function runDigest() {
    const result = generateDigest()
    setDigest(result)
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Slack / Email Digest</h3>

      <button
        onClick={runDigest}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Generate Digest
      </button>

      {digest && (
        <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded text-sm">
          {digest}
        </pre>
      )}
    </div>
  )
}
