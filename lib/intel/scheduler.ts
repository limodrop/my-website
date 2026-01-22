import { exportCampaignData } from "./export"
import { generateDigest } from "./digest"

interface ExportSchedule {
  id: string
  frequency: "daily" | "weekly"
  format: "csv" | "json"
  channel: "email" | "slack"
  recipient: string
  lastRun?: number
}

const exportSchedules: ExportSchedule[] = []

export function listExportSchedules(): ExportSchedule[] {
  return exportSchedules
}

export function addExportSchedule(s: Omit<ExportSchedule, "id" | "lastRun">) {
  exportSchedules.push({
    ...s,
    id: `sched-${Math.random().toString(36).slice(2, 8)}`
  })
}

export function runScheduledExports(): {
  id: string
  output: string
  channel: string
  recipient: string
}[] {
  const now = Date.now()
  const results = []

  for (const s of exportSchedules) {
    const shouldRun =
      s.frequency === "daily" ||
      (s.frequency === "weekly" && (!s.lastRun || now - s.lastRun > 7 * 86400_000))

    if (!shouldRun) continue

    const output =
      s.format === "csv" ? exportCampaignData("csv") : generateDigest()
    s.lastRun = now

    results.push({
      id: s.id,
      output,
      channel: s.channel,
      recipient: s.recipient
    })
  }

  return results
}
