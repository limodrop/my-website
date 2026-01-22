export interface OverrideRequest {
  id: string
  channel: "email" | "cta" | "social"
  target: string
  proposed: string
  lang: string
  city: string
  service: string
  submittedBy: string
  status: "pending" | "approved" | "rejected"
  reviewers: string[]
  approvals: string[]
  rejections: string[]
}

const queue: OverrideRequest[] = []

export function submitOverride(
  req: Omit<OverrideRequest, "id" | "status" | "approvals" | "rejections">
) {
  queue.push({
    ...req,
    id: `ovr-${Math.random().toString(36).slice(2, 8)}`,
    status: "pending",
    approvals: [],
    rejections: []
  })
}

export function listOverrideQueue(): OverrideRequest[] {
  return queue
}

export function actOnOverride(id: string, reviewer: string, approve: boolean) {
  const req = queue.find((r) => r.id === id)
  if (!req || req.status !== "pending") return

  if (approve) {
    if (!req.approvals.includes(reviewer)) req.approvals.push(reviewer)
  } else {
    if (!req.rejections.includes(reviewer)) req.rejections.push(reviewer)
  }

  if (req.approvals.length >= 1) {
    req.status = "approved"
  } else if (req.rejections.length >= 1) {
    req.status = "rejected"
  }
}
