"use client"

import { useState } from "react"
import { RuleDefinition } from "@/lib/admin/types"

export default function RuleEditor() {
  const [rule, setRule] = useState<RuleDefinition>({
    id: "",
    engine: "bookingIntent",
    key: "",
    value: "",
    condition: "equals"
  })

  return (
    <form className="space-y-4 p-4 bg-white rounded shadow">
      <h3 className="text-lg font-semibold">Create New Rule</h3>

      <div className="grid grid-cols-2 gap-4">
        <label className="flex flex-col">
          Engine
          <select
            value={rule.engine}
            onChange={(e) => setRule({ ...rule, engine: e.target.value })}
            className="border p-2 rounded"
          >
            <option value="bookingIntent">Booking Intent</option>
            <option value="decay">Decay</option>
            <option value="nba">Next Best Action</option>
            <option value="personalization">Personalization</option>
          </select>
        </label>

        <label className="flex flex-col">
          Condition
          <select
            value={rule.condition}
            onChange={(e) => setRule({ ...rule, condition: e.target.value })}
            className="border p-2 rounded"
          >
            <option value="equals">Equals</option>
            <option value="greater_than">Greater Than</option>
            <option value="less_than">Less Than</option>
          </select>
        </label>

        <label className="flex flex-col">
          Key
          <input
            type="text"
            value={rule.key}
            onChange={(e) => setRule({ ...rule, key: e.target.value })}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Value
          <input
            type="text"
            value={rule.value}
            onChange={(e) => setRule({ ...rule, value: e.target.value })}
            className="border p-2 rounded"
          />
        </label>
      </div>

      <button
        type="button"
        className="px-4 py-2 bg-black text-white rounded"
        onClick={() => alert("Rule saved (mock)")}
      >
        Save Rule
      </button>
    </form>
  )
}
