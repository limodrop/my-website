export async function getDictionary(lang: string) {
  try {
    return (await import(`./${lang}.ts`)).default
  } catch (error) {
    // Fallback to English if translation doesn't exist
    return (await import('./en.ts')).default
  }
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>
