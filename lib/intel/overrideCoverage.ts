import { OverrideRule, listOverrideRules } from "./overrideRules"

const knownCities = ["Portland", "Beaverton", "Salem", "Eugene"]
const knownServices = ["airport", "wedding", "wine", "corporate"]
const knownLangs = ["en", "es", "fr"]

export function getOverrideCoverageGaps(): {
  city: string
  service: string
  lang: string
  hasRule: boolean
}[] {
  const rules = listOverrideRules()
  const gaps: {
    city: string
    service: string
    lang: string
    hasRule: boolean
  }[] = []

  for (const city of knownCities) {
    for (const service of knownServices) {
      for (const lang of knownLangs) {
        const has = rules.some(
          (r) =>
            r.city === city &&
            r.service === service &&
            r.lang === lang
        )
        gaps.push({ city, service, lang, hasRule: has })
      }
    }
  }

  return gaps
}
