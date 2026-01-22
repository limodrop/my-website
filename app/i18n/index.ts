import en from "./en";
import es from "./es";
import fr from "./fr";
import ar from "./ar";
import zh from "./zh";

const dictionaries: Record<string, any> = {
  en,
  es,
  fr,
  ar,
  zh,
};

export async function getDictionary(locale: string) {
  return dictionaries[locale] || dictionaries.en;
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>
