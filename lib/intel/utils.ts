export function now() {
  return Date.now()
}

export function makeId(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`
}

export function scoreRange(score: number, ranges: Record<string, number>) {
  let selected = "none"
  for (const key in ranges) {
    if (score >= ranges[key]) selected = key
  }
  return selected
}

export function normalizeText(text: string) {
  return text.toLowerCase().replace(/\s+/g, "-")
}

export function pick<T>(arr: T[], count: number): T[] {
  return arr.slice(0, count)
}

export function clamp(num: number, min: number, max: number) {
  return Math.max(min, Math.min(max, num))
}
