import { HomepageBlock } from "./homepageLayout"
import { updateHomepageLayout } from "./homepageLayout"
import { saveLayoutSnapshot } from "./layoutHistory"
import { recordAudit } from "../intel/audit"

interface ApprovalItem {
  id: string
  label: string
  layout: HomepageBlock[]
  submittedBy: string
  status: "pending" | "approved" | "rejected"
}

const queue: ApprovalItem[] = []

export function submitLayoutForApproval(
  id: string,
  label: string,
  layout: HomepageBlock[],
  submittedBy: string
) {
  queue.push({ id, label, layout, submittedBy, status: "pending" })
}

export function listApprovalQueue(): ApprovalItem[] {
  return [...queue]
}

export function approveLayout(id: string, approver: string): string {
  const item = queue.find((q) => q.id === id)
  if (!item || item.status !== "pending") return "❌ Not found or already processed"

  item.status = "approved"
  updateHomepageLayout(item.layout)
  saveLayoutSnapshot(`Approved: ${item.label}`, item.layout, "approval")
  recordAudit({
    actor: approver,
    action: "layout_approved",
    target: item.id,
    meta: { label: item.label, submittedBy: item.submittedBy }
  })

  return `✅ Approved layout "${item.label}"`
}

export function rejectLayout(id: string, approver: string): string {
  const item = queue.find((q) => q.id === id)
  if (!item || item.status !== "pending") return "❌ Not found or already processed"

  item.status = "rejected"
  recordAudit({
    actor: approver,
    action: "layout_rejected",
    target: item.id,
    meta: { label: item.label, submittedBy: item.submittedBy }
  })

  return `❌ Rejected layout "${item.label}"`
}
