"use client"

import { useState } from "react"
import { PriceMessageRule } from "@/lib/admin/priceMessaging.types"

export default function PriceMessageEditor() {
  const [rule, setRule] = useState<PriceMessageRule>({
    id: "",
    city: "portland",
    service: "airport",
    fleet: "sedan",
    season: "winter",
    label: "Winter Special",
    messages: ["Includes free wait time"]
  })

  return (
    <form className="space-y-4 p-4 bg-white rounded shadow">
      <h3 className="text-lg font-semibold">Add Price Messaging Rule</h3>

      <div className="grid grid-cols-2 gap-4">
        <label className="flex flex-col">
          City
          <input
            type="text"
            value={rule.city}
            onChange={(e) => setRule({ ...rule, city: e.target.value })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Service
          <input
            type="text"
            value={rule.service}
            onChange={(e) => setRule({ ...rule, service: e.target.value })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Fleet
          <input
            type="text"
            value={rule.fleet}
            onChange={(e) => setRule({ ...rule, fleet: e.target.value })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Season
          <select
            value={rule.season}
            onChange={(e) =>
              setRule({ ...rule, season: e.target.value as any })
            }
            className="border p-2 rounded"
          >
            <option value="winter">Winter</option>
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="fall">Fall</option>
          </select>
        </label>

        <label className="flex flex-col col-span-2">
          Label
          <input
            type="text"
            value={rule.label}
            onChange={(e) => setRule({ ...rule, label: e.target.value })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col col-span-2">
          Messages (comma-separated)
          <input
            type="text"
            value={rule.messages.join(",")}
            onChange={(e) =>
              setRule({ ...rule, messages: e.target.value.split(",") })
            }
            className="border p-2 rounded"
          />
        </label>
      </div>

      <button
        type="button"
        className="px-4 py-2 bg-black text-white rounded"
        onClick={() => alert("Price messaging rule saved (mock)")}
      >
        Save Rule
      </button>
    </form>
  )
}
