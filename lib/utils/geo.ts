export function isUS(country: string) {
  return country.toLowerCase() === "us"
}

export function isPNW(city: string) {
  return ["portland", "vancouver", "beaverton", "hillsboro"].includes(city)
}
