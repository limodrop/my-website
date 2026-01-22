"use client"

import { useState } from "react"
import { addPromotion, listPromotions } from "@/lib/intel/promotions"
import { Promotion } from "@/lib/intel/types"

export default function PromotionEditor() {
  const [form, setForm] = useState<Omit<Promotion, "id">>({
    title: "",
    message: "",
    city: "",
    service: "",
    fleet: "",
    season: "",
    lang: "en",
    active: true,
    expiresAt: undefined
  })

  const [promos, setPromos] = useState<Promotion[]>(listPromotions())

  function submit() {
    const newPromo = addPromotion(form)
    setPromos(listPromotions())
    setForm({ ...form, title: "", message: "" })
  }

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow text-sm">
      <h3 className="text-lg font-semibold">Geo-targeted Promotions</h3>

      <div className="grid grid-cols-3 gap-4">
        <label className="flex flex-col">
          Title
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Message
          <input
            type="text"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
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

        <label className="flex flex-col">
          Season
          <select
            value={form.season}
            onChange={(e) => setForm({ ...form, season: e.target.value })}
            className="border p-2 rounded"
          >
            <option value="">Any</option>
            <option value="winter">Winter</option>
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="fall">Fall</option>
          </select>
        </label>

        <label className="flex flex-col">
          Expires At
          <input
            type="datetime-local"
            value={form.expiresAt ? new Date(form.expiresAt).toISOString().slice(0, 16) : ""}
            onChange={(e) =>
              setForm({ ...form, expiresAt: e.target.value ? new Date(e.target.value).getTime() : undefined })
            }
            className="border p-2 rounded"
          />
        </label>
      </div>

      <button
        onClick={submit}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Add Promotion
      </button>

      <div className="mt-6">
        <h4 className="font-semibold mb-2">Active Promotions</h4>
        <ul className="space-y-2">
          {promos.map((p) => (
            <li key={p.id} className="border p-2 rounded">
              <strong>{p.title}</strong> — {p.message}
              <div className="text-xs text-gray-600">
                {p.city && `City: ${p.city} `} 
                {p.service && `Service: ${p.service} `} 
                {p.fleet && `Fleet: ${p.fleet} `} 
                {p.season && `Season: ${p.season} `} 
                {p.lang && `Lang: ${p.lang}`}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
