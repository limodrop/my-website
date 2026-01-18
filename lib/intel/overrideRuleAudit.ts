interface RuleAuditEntry {
  timestamp: number
  actor: string
  action: "created" | "deleted" | "matched"
  ruleId: string
  meta?: Record<string, any>
}

const ruleAuditLog: RuleAuditEntry[] = []

export function logRuleAudit(
  actor: string,
  action: "created" | "deleted" | "matched",
  ruleId: string,
  meta?: Record<string, any>
) {
  ruleAuditLog.push({
    timestamp: Date.now(),
    actor,
    action,
    ruleId,
    meta
  })
}

export function listRuleAudit(): RuleAuditEntry[] {
  return [...ruleAuditLog].reverse()
}
