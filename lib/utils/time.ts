export function now() {
  return Date.now()
}

export function daysAgo(ms: number): number {
  return Math.floor((Date.now() - ms) / (1000 * 60 * 60 * 24))
}
