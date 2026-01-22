type AutomationAction =
  | { type: "resend_email"; campaignId: string }
  | { type: "override_cta"; ctaId: string; newText: string }
  | { type: "boost_social"; postId: string }

interface AutomationRule {
  id: string
  label: string
  trigger: {
    channel: "email" | "cta" | "social"
    metric: "open_rate" | "ctr" | "conversion_rate" | "engagement"
    operator: "<" | ">" | "="
    threshold: number
  }
  action: AutomationAction
  active: boolean
}

const automationRules: AutomationRule[] = []

export function listAutomationRules(): AutomationRule[] {
  return automationRules
}

export function addAutomationRule(rule: AutomationRule) {
  automationRules.push(rule)
}

export function evaluateAutomationRules(metrics: Record<string, number>): AutomationAction[] {
  const actions: AutomationAction[] = []
  for (const rule of automationRules) {
    if (!rule.active) continue
    const value = metrics[`${rule.trigger.channel}:${rule.trigger.metric}`]
    if (value === undefined) continue

    const match =
      (rule.trigger.operator === "<" && value < rule.trigger.threshold) ||
      (rule.trigger.operator === ">" && value > rule.trigger.threshold) ||
      (rule.trigger.operator === "=" && value === rule.trigger.threshold)

    if (match) actions.push(rule.action)
  }
  return actions
}
