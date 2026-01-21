"use client"

import { useEffect, useState } from "react"
import { getSessionDebug } from "@/lib/intel/sessionProfile"
import { getOverrideTrace } from "@/lib/intel/overrideTrace"

export default function SessionDebugPanel() {
  const [profile, setProfile] = useState<Record<string, string>>({})
  const [layout, setLayout] = useState<string>("")
  const [overrides, setOverrides] = useState<string[]>([])

  useEffect(() => {
    setProfile(getSessionDebug())
    const layoutId = window.localStorage.getItem("layout_variant") || "default"
    setLayout(layoutId)
    setOverrides(getOverrideTrace().map((o: any) => `${o.type}:${o.target} — ${o.reason}`))
  }, [])

  return (
    <div className="bg-white p-4 rounded shadow text-sm space-y-4">
      <h3 className="text-lg font-semibold">Session Debug Panel</h3>

      <div>
        <h4 className="font-semibold mb-1">Session Profile</h4>
        <ul className="grid grid-cols-2 gap-2 text-xs text-gray-700">
          {Object.entries(profile).map(([k, v]) => (
            <li key={k}>
              <strong>{k}:</strong> {v}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-1">Layout Variant</h4>
        <p className="text-xs text-gray-700">{layout}</p>
      </div>

      <div>
        <h4 className="font-semibold mb-1">Override Trace</h4>
        {overrides.length > 0 ? (
          <ul className="text-xs text-gray-700 list-disc list-inside">
            {overrides.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        ) : (
          <p className="text-xs text-gray-500">No overrides applied</p>
        )}
      </div>
    </div>
  )
}
