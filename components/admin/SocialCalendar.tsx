"use client"

import { useState } from "react"
import { listScheduledPosts, reschedulePost, deletePost } from "@/lib/intel/social"

export default function SocialCalendar() {
  const [posts, setPosts] = useState(listScheduledPosts())

  function handleReschedule(id: string, date: string) {
    const ts = new Date(date).getTime()
    reschedulePost(id, ts)
    setPosts(listScheduledPosts())
  }

  function handleDelete(id: string) {
    deletePost(id)
    setPosts(listScheduledPosts())
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Social Calendar</h3>

      {posts.length === 0 && <p className="text-gray-500">No scheduled posts.</p>}

      <ul className="space-y-4">
        {posts.map((p) => (
          <li key={p.id} className="border p-4 rounded">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-xs text-gray-600 mb-1">
                  {new Date(p.scheduledAt).toLocaleString()} — {p.city}, {p.service}, {p.fleet}, {p.lang}
                </div>
                <p>{p.content}</p>
              </div>
              <div className="flex flex-col gap-2 items-end">
                <input
                  type="datetime-local"
                  onChange={(e) => handleReschedule(p.id, e.target.value)}
                  className="border p-1 rounded text-xs"
                />
                <button
                  onClick={() => handleDelete(p.id)}
                  className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
