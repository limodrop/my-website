"use client"

import { useState } from "react"
import { generateSocialPost, listSocialPosts } from "@/lib/intel/socialGen"
import { PromotionContext } from "@/lib/intel/types"
import { SocialPost } from "@/lib/intel/socialGen"

export default function SocialPostGenerator() {
  const [ctx, setCtx] = useState<PromotionContext>({
    lang: "en",
    city: "Portland",
    service: "airport",
    fleet: "suv",
    season: "winter"
  })

  const [post, setPost] = useState<SocialPost | null>(null)
  const [all, setAll] = useState<SocialPost[]>(listSocialPosts())

  function generate() {
    const result = generateSocialPost(ctx)
    setPost(result)
    setAll(listSocialPosts())
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Social Post Generator</h3>

      <div className="grid grid-cols-3 gap-4">
        <label className="flex flex-col">
          Language
          <select
            value={ctx.lang}
            onChange={(e) => setCtx({ ...ctx, lang: e.target.value })}
            className="border p-2 rounded"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </label>

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
            onChange={(e) => setCtx({ ...ctx, season: e.target.value })}
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
        Generate Post
      </button>

      {post && (
        <div className="mt-6 space-y-2">
          <h4 className="font-semibold">Generated Post</h4>
          <p className="border p-3 bg-gray-50 rounded">{post.content}</p>
        </div>
      )}

      {all.length > 0 && (
        <div className="mt-6">
          <h4 className="font-semibold mb-2">Scheduled Posts</h4>
          <ul className="space-y-2">
            {all.map((p) => (
              <li key={p.id} className="border p-2 rounded">
                <div className="text-xs text-gray-600 mb-1">
                  {new Date(p.scheduledAt).toLocaleString()} — {p.city}, {p.service}, {p.fleet}, {p.lang}
                </div>
                <p>{p.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
