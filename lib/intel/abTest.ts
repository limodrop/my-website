import { ABTestContext, ABTestResult } from "./types"
import { makeId, now } from "./utils"

export function abTestEngine(ctx: ABTestContext): ABTestResult {
  const variant = ctx.sessionId.endsWith("a") ? "A" : "B"
  const reason = variant === "A" ? "Even session ID" : "Odd session ID"

  return {
    id: makeId("ab-test"),
    context: ctx,
    variant,
    reason,
    generatedAt: now(),
    source: "rule"
  }
}

// Multilingual A/B Testing Engine
export interface ABTest {
  id: string
  channel: "email" | "cta" | "social"
  variantA: string
  variantB: string
  lang: string
  city: string
  service: string
  fleet: string
  start: number
  end?: number
  status: "running" | "completed"
}

const abTests: ABTest[] = []

export function createABTest(test: Omit<ABTest, "id" | "start" | "status">): ABTest {
  const newTest: ABTest = {
    ...test,
    id: `ab-${Math.random().toString(36).slice(2, 8)}`,
    start: Date.now(),
    status: "running"
  }
  abTests.push(newTest)
  return newTest
}

export function listABTests(): ABTest[] {
  return abTests
}

export function completeABTest(id: string) {
  const t = abTests.find((t) => t.id === id)
  if (t) {
    t.status = "completed"
    t.end = Date.now()
  }
}
