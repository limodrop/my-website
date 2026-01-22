"use client"

import { useState } from "react"
import {
  listExportSchedules,
  addExportSchedule,
  runScheduledExports
} from "@/lib/intel/scheduler"

export default function ExportSchedulerPanel() {
  const [schedules, setSchedules] = useState(listExportSchedules())
  const [form, setForm] = useState({
    frequency: "daily",
    format: "csv",
    channel: "email",
    recipient: ""
  })

  function submit() {
    addExportSchedule(form)
    setSchedules(listExportSchedules())
  }

  function runNow() {
    const results = runScheduledExports()
    alert(`Ran ${results.length} scheduled exports.`)
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Scheduled Export + Digest</h3>

      <div className="grid grid-cols-2 gap-4">
        <label className="flex flex-col">
          Frequency
          <select
            value={form.frequency}
            onChange={(e) => setForm({ ...form, frequency: e.target.value })}
            className="border p-2 rounded"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </select>
        </label>

        <label className="flex flex-col">
          Format
          <select
            value={form.format}
            onChange={(e) => setForm({ ...form, format: e.target.value })}
            className="border p-2 rounded"
          >
            <option value="csv">CSV Export</option>
            <option value="json">Digest Summary</option>
          </select>
        </label>

        <label className="flex flex-col">
          Channel
          <select
            value={form.channel}
            onChange={(e) => setForm({ ...form, channel: e.target.value })}
            className="border p-2 rounded"
          >
            <option value="email">Email</option>
            <option value="slack">Slack</option>
          </select>
        </label>

        <label className="flex flex-col col-span-2">
          Recipient (email or Slack webhook)
          <input
            type="text"
            value={form.recipient}
            onChange={(e) => setForm({ ...form, recipient: e.target.value })}
            className="border p-2 rounded"
          />
        </label>
      </div>

      <div className="flex gap-4">
        <button
          onClick={submit}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Add Schedule
        </button>

        <button
          onClick={runNow}
          className="px-4 py-2 bg-gray-100 text-black rounded"
        >
          Run Now
        </button>
      </div>

      <div className="mt-6">
        <h4 className="font-semibold mb-2">Active Schedules</h4>
        <ul className="space-y-2">
          {schedules.map((s) => (
            <li key={s.id} className="border p-2 rounded">
              {s.frequency} → {s.format} → {s.channel} → {s.recipient}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
