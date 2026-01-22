"use client"

import { useState } from "react"
import { ABTestRule } from "@/lib/admin/experiments.types"

export default function ExperimentEditor() {
  const [rule, setRule] = useState<ABTestRule>({
    id: "",
    name: "",
    condition: "geoCountry == US",
    variants: ["A", "B"]
  })

  return (
    <form className="space-y-4 p-4 bg-white rounded shadow">
      <h3 className="text-lg font-semibold">Create A/B Test</h3>

      <label className="flex flex-col">
        Name
        <input
          type="text"
          value={rule.name}
          onChange={(e) => setRule({ ...rule, name: e.target.value })}
          className="border p-2 rounded"
        />
      </label>

      <label className="flex flex-col">
        Condition
        <input
          type="text"
          value={rule.condition}
          onChange={(e) => setRule({ ...rule, condition: e.target.value })}
          className="border p-2 rounded"
        />
      </label>

      <label className="flex flex-col">
        Variants (comma-separated)
        <input
          type="text"
          value={rule.variants.join(",")}
          onChange={(e) =>
            setRule({ ...rule, variants: e.target.value.split(",") })
          }
          className="border p-2 rounded"
        />
      </label>

      <button
        type="button"
        className="px-4 py-2 bg-black text-white rounded"
        onClick={() => alert("A/B test rule saved (mock)")}
      >
        Save Test
      </button>
    </form>
  )
}
