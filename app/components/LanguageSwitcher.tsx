"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { languages } from "@/i18n.config"

interface LanguageSwitcherProps {
  currentLocale: string
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname()
  
  // Remove the current locale from pathname to get the base path
  const pathWithoutLocale = pathname?.replace(`/${currentLocale}`, "") || ""

  const languageNames: Record<string, string> = {
    en: "EN",
    es: "ES",
    fr: "FR",
    ar: "AR",
    zh: "中文",
  }

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang, index) => (
        <span key={lang} className="flex items-center">
          {index > 0 && <span className="text-gray-600 mx-1">|</span>}
          <Link
            href={`/${lang}${pathWithoutLocale}`}
            className={`text-sm transition-colors ${
              currentLocale === lang
                ? "text-yellow-400 font-semibold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {languageNames[lang] || lang.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  )
}
