export const fallbackLng = "en"
export const languages = ["en", "es", "fr", "ar", "zh"]

export const defaultNS = "translation"

export function getOptions(lng = fallbackLng) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng
  }
}
