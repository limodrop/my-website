interface OverrideTraceEntry {
  id: string
  type: "email" | "cta" | "social"
  target: string
  reason: string
  timestamp: number
}

let trace: OverrideTraceEntry[] = []

export function logOverrideTrace(entry: Omit<OverrideTraceEntry, "timestamp">) {
  const full = { ...entry, timestamp: Date.now() }
  trace.push(full)

  if (typeof window !== "undefined") {
    const existing = JSON.parse(localStorage.getItem("override_trace") || "[]")
    existing.push(full)
    localStorage.setItem("override_trace", JSON.stringify(existing))
  }
}

export function getOverrideTrace(): OverrideTraceEntry[] {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("override_trace") || "[]")
  }
  return trace
}
