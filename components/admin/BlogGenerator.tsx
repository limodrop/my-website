"use client"

import { useState } from "react"
import { BlogContext, BlogPostDraft } from "@/lib/admin/blog.types"

export default function BlogGenerator() {
  const [ctx, setCtx] = useState<BlogContext>({
    lang: "en",
    city: "Portland",
    service: "airport",
    season: "winter"
  })

  const [topics, setTopics] = useState<string[]>([])
  const [selected, setSelected] = useState<string>("")
  const [post, setPost] = useState<BlogPostDraft | null>(null)

  async function fetchTopics() {
    const res = await fetch("/api/intelligence/blog", {
      method: "POST",
      body: JSON.stringify({ ctx }),
      headers: { "Content-Type": "application/json" }
    })
    const json = await res.json()
    setTopics(json.data)
    setPost(null)
  }

  async function generatePost() {
    const res = await fetch("/api/intelligence/blog", {
      method: "POST",
      body: JSON.stringify({ ctx, topic: selected }),
      headers: { "Content-Type": "application/json" }
    })
    const json = await res.json()
    setPost(json.data)
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <div className="grid grid-cols-4 gap-4">
        <label className="flex flex-col">
          Language
          <select
            value={ctx.lang}
            onChange={(e) => setCtx({ ...ctx, lang: e.target.value as any })}
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
          Season
          <select
            value={ctx.season}
            onChange={(e) => setCtx({ ...ctx, season: e.target.value as any })}
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
        onClick={fetchTopics}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Suggest Topics
      </button>

      {topics.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-semibold mt-4">Suggested Topics</h4>
          <ul className="space-y-1">
            {topics.map((t) => (
              <li key={t}>
                <button
                  onClick={() => setSelected(t)}
                  className={`text-left p-2 rounded ${
                    selected === t ? "bg-black text-white" : "hover:bg-gray-100"
                  }`}
                >
                  {t}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {selected && !post && (
        <button
          onClick={generatePost}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Generate Post
        </button>
      )}

      {post && (
        <div className="mt-6 border p-4 rounded bg-gray-50">
          <h3 className="text-xl font-bold mb-2">{post.title}</h3>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      )}
    </div>
  )
}
