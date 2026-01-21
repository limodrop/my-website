import { HomepageBlock } from "./homepageLayout"

interface LayoutSnapshot {
  id: string
  label: string
  layout: HomepageBlock[]
  timestamp: number
  source: string
}

const history: LayoutSnapshot[] = []

export function saveLayoutSnapshot(label: string, layout: HomepageBlock[], source: string) {
  history.push({
    id: `snap-${Math.random().toString(36).slice(2, 8)}`,
    label,
    layout: layout.map((b) => ({ ...b })),
    timestamp: Date.now(),
    source
  })
}

export function listLayoutHistory(): LayoutSnapshot[] {
  return [...history].reverse()
}

export function restoreLayoutSnapshot(id: string): string {
  const snap = history.find((s) => s.id === id)
  if (!snap) return "Snapshot not found"

  const { layout, label, source } = snap
  const { updateHomepageLayout } = require("./homepageLayout")
  updateHomepageLayout(layout)

  const auditEntry = {
    actor: "admin",
    action: "layout_rollback",
    target: id,
    meta: { label, source }
  }

  return `✅ Restored layout "${label}" from ${new Date(snap.timestamp).toLocaleString()}`
}
