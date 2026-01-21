"use client"

import { useState } from "react"
import { MultiPageContext } from "@/lib/intel/types"
import { engines } from "@/lib/dev/engines"

export default function EngineTester() {
  const [context, setContext] = useState<MultiPageContext>({
    sessionId: "test-session",
    lang: "en",
    geoCountry: "US",
    season: "winter",
    device: "desktop"
  })

  const [output, setOutput] = useState<any>(null)
  const [engine, setEngine] = useState("orchestrator")

  async function runTest() {
    const res = await fetch(`/api/intelligence/${engine}`, {
      method: "POST",
      body: JSON.stringify(context),
      headers: { "Content-Type": "application/json" }
    })
    const json = await res.json()
    setOutput(json.data)
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <label className="flex flex-col">
          Engine
          <select
            value={engine}
            onChange={(e) => setEngine(e.target.value)}
            className="border p-2 rounded"
          >
            {engines.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col">
          Device
          <select
            value={context.device}
            onChange={(e) =>
              setContext({ ...context, device: e.target.value as any })
            }
            className="border p-2 rounded"
          >
            <option value="desktop">Desktop</option>
            <option value="mobile">Mobile</option>
          </select>
        </label>

        <label className="flex flex-col">
          Country
          <input
            type="text"
            value={context.geoCountry}
            onChange={(e) =>
              setContext({ ...context, geoCountry: e.target.value })
            }
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Season
          <select
            value={context.season}
            onChange={(e) =>
              setContext({ ...context, season: e.target.value as any })
            }
            className="border p-2 rounded"
          >
            <option value="winter">Winter</option>
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="fall">Fall</option>
          </select>
        </label>
      </div>

      <button
        onClick={runTest}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Run Engine
      </button>

      {output && (
        <pre className="text-xs bg-gray-100 p-4 rounded overflow-x-auto">
          {JSON.stringify(output, null, 2)}
        </pre>
      )}
    </div>
  )
}
