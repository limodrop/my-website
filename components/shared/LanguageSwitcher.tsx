"use client"

import { usePathname, useRouter } from "next/navigation"
import { useTransition } from "react"

const LANGS = ["en", "es", "fr"]

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const currentLang = pathname.split("/")[1]

  function switchLang(newLang: string) {
    const segments = pathname.split("/")
    segments[1] = newLang
    const newPath = segments.join("/")
    startTransition(() => router.push(newPath))
  }

  return (
    <div className="flex gap-2 items-center text-sm">
      {LANGS.map((lang) => (
        <button
          key={lang}
          onClick={() => switchLang(lang)}
          disabled={lang === currentLang}
          className={`px-2 py-1 rounded ${
            lang === currentLang
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
