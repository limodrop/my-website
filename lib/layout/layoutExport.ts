import { listLayoutHistory } from "./layoutHistory"

export function exportLayoutSnapshot(id: string): string | null {
  const history = listLayoutHistory()
  const snap = history.find((s) => s.id === id)
  if (!snap) return null

  return JSON.stringify(
    {
      id: snap.id,
      label: snap.label,
      timestamp: snap.timestamp,
      source: snap.source,
      layout: snap.layout
    },
    null,
    2
  )
}
