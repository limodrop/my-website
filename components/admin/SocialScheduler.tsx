"use client"

import { useState } from "react"
import { SocialContext } from "@/lib/intel/types"

export default function SocialScheduler() {
  const [ctx, setCtx] = useState<SocialContext>({
    city: "portland",
    service: "airport",
    fleet: "suv",
    season: "winter",
    lang: "en"
  })

  const [posts, setPosts] = useState<any[]>([])

  async function generate() {
    const res = await fetch("/api/intelligence/social", {
      method: "POST",
      body: JSON.stringify(ctx),
      headers: { "Content-Type": "application/json" }
    })
    const json = await res.json()
    setPosts(json.data)
  }

  return (
    <div className="space-y-4 p-4 bg-white rounded shadow">
      <h3 className="text-lg font-semibold">Generate Scheduled Posts</h3>

      <div className="grid grid-cols-2 gap-4">
        <label className="flex flex-col">
          City
          <input
            type="text"
            value={ctx.city}
            onChange={(e) => setCtx({ ...ctx, city: e.target.value })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Service
          <input
            type="text"
            value={ctx.service}
            onChange={(e) => setCtx({ ...ctx, service: e.target.value })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Fleet
          <input
            type="text"
            value={ctx.fleet}
            onChange={(e) => setCtx({ ...ctx, fleet: e.target.value })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Season
          <select
            value={ctx.season}
            onChange={(e) =>
              setCtx({ ...ctx, season: e.target.value as any })
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
        onClick={generate}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Generate Posts
      </button>

      {posts.length > 0 && (
        <ul className="space-y-2 text-sm">
          {posts.map((p) => (
            <li key={p.id} className="border p-2 rounded">
              <strong>{p.platform}</strong>: {p.content}
              <br />
              <span className="text-xs text-gray-600">
                {new Date(p.scheduledFor).toLocaleString()} • {p.tags.join(" ")}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
