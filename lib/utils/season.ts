export function getSeason(date: Date): "winter" | "spring" | "summer" | "fall" {
  const month = date.getMonth()
  if (month <= 1 || month === 11) return "winter"
  if (month >= 2 && month <= 4) return "spring"
  if (month >= 5 && month <= 7) return "summer"
  return "fall"
}
