"use client"

import { useState } from "react"
import { createABTest, listABTests, completeABTest } from "@/lib/intel/abTest"

export default function ABTestManager() {
  const [tests, setTests] = useState(listABTests())
  const [form, setForm] = useState({
    channel: "email",
    variantA: "",
    variantB: "",
    lang: "en",
    city: "Portland",
    service: "airport",
    fleet: "suv"
  })

  function submit() {
    const test = createABTest(form)
    setTests(listABTests())
  }

  function markComplete(id: string) {
    completeABTest(id)
    setTests(listABTests())
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Multilingual A/B Testing Engine</h3>

      <div className="grid grid-cols-3 gap-4">
        <label className="flex flex-col">
          Channel
          <select
            value={form.channel}
            onChange={(e) => setForm({ ...form, channel: e.target.value })}
            className="border p-2 rounded"
          >
            <option value="email">Email</option>
            <option value="cta">CTA</option>
            <option value="social">Social</option>
          </select>
        </label>

        <label className="flex flex-col">
          Variant A
          <input
            type="text"
            value={form.variantA}
            onChange={(e) => setForm({ ...form, variantA: e.target.value })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Variant B
          <input
            type="text"
            value={form.variantB}
            onChange={(e) => setForm({ ...form, variantB: e.target.value })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Language
          <select
            value={form.lang}
            onChange={(e) => setForm({ ...form, lang: e.target.value })}
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
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Service
          <input
            type="text"
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Fleet
          <input
            type="text"
            value={form.fleet}
            onChange={(e) => setForm({ ...form, fleet: e.target.value })}
            className="border p-2 rounded"
          />
        </label>
      </div>

      <button
        onClick={submit}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Start A/B Test
      </button>

      <div className="mt-6">
        <h4 className="font-semibold mb-2">Active Tests</h4>
        <ul className="space-y-2">
          {tests.map((t) => (
            <li key={t.id} className="border p-2 rounded">
              <div className="text-xs text-gray-600">
                {t.channel.toUpperCase()} — {t.city}, {t.service}, {t.fleet}, {t.lang}
              </div>
              <div>
                <strong>A:</strong> {t.variantA}
                <br />
                <strong>B:</strong> {t.variantB}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Started: {new Date(t.start).toLocaleString()}
                {t.status === "completed" && (
                  <>
                    {" "}
                    — Completed: {new Date(t.end!).toLocaleString()}
                  </>
                )}
              </div>
              {t.status === "running" && (
                <button
                  onClick={() => markComplete(t.id)}
                  className="mt-2 px-2 py-1 bg-gray-100 text-xs rounded"
                >
                  Mark Complete
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
