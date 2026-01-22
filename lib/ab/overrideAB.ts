interface ABVariant {
  id: string
  text: string
  impressions: number
  clicks: number
  conversions: number
}

interface ABTest {
  target: string
  channel: "email" | "cta" | "social"
  variants: ABVariant[]
  active: boolean
}

const tests: ABTest[] = []

export function createABTest(
  target: string,
  channel: "email" | "cta" | "social",
  texts: string[]
) {
  const variants = texts.map((t) => ({
    id: `v${Math.random().toString(36).slice(2, 6)}`,
    text: t,
    impressions: 0,
    clicks: 0,
    conversions: 0
  }))

  tests.push({ target, channel, variants, active: true })
}

export function assignABVariant(target: string): ABVariant | null {
  const test = tests.find((t) => t.target === target && t.active)
  if (!test) return null

  const variant = test.variants[Math.floor(Math.random() * test.variants.length)]
  variant.impressions += 1
  return variant
}

export function recordABClick(target: string, variantId: string) {
  const test = tests.find((t) => t.target === target)
  const v = test?.variants.find((v) => v.id === variantId)
  if (v) v.clicks += 1
}

export function recordABConversion(target: string, variantId: string) {
  const test = tests.find((t) => t.target === target)
  const v = test?.variants.find((v) => v.id === variantId)
  if (v) v.conversions += 1
}

export function promoteABWinner(target: string): string {
  const test = tests.find((t) => t.target === target)
  if (!test) return "No test found"

  const best = [...test.variants]
    .filter((v) => v.impressions >= 10)
    .sort((a, b) => (b.conversions / b.impressions) - (a.conversions / a.impressions))[0]

  if (!best) return "No variant has enough data"

  test.active = false

  return `✅ Promoted variant "${best.text}" with ${(best.conversions / best.impressions * 100).toFixed(1)}% CR`
}
