export interface CrossPageRule {
  id: string
  entityType: "service" | "city" | "fleet" | "blog"
  entityId: string
  related: string[]
  reason: string
}

export type ContentClusters = Record<string, string[]>
