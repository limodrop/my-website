"use client"

import { mockScheduledPosts } from "@/lib/admin/scheduling"

export default function ScheduledPostList() {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-lg font-semibold mb-2">Mock Scheduled Posts</h3>
      <ul className="space-y-2">
        {mockScheduledPosts.map((p) => (
          <li key={p.id} className="border p-2 rounded">
            <strong>{p.platform}</strong>: {p.content}
            <br />
            <span className="text-xs text-gray-600">
              {new Date(p.scheduledFor).toLocaleString()} • {p.tags.join(" ")}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
