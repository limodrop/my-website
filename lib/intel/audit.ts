export interface AuditEntry {
  id: string
  timestamp: number
  actor: string
  action: string
  target: string
  meta?: Record<string, any>
}

const auditLog: AuditEntry[] = []

export function recordAudit(entry: Omit<AuditEntry, "id" | "timestamp">) {
  auditLog.push({
    id: `audit-${Math.random().toString(36).slice(2, 8)}`,
    timestamp: Date.now(),
    ...entry
  })
}

export function listAuditLog(): AuditEntry[] {
  return auditLog.sort((a, b) => b.timestamp - a.timestamp)
}
