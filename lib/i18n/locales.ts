// Supported locales configuration
export const locales = ['en'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  // Future locales:
  // es: 'Español',
  // ar: 'العربية',
  // fr: 'Français',
  // zh: '中文',
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
