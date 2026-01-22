"use client"

import { serverApi } from "@/lib/api/serverClient"
import { usePathname } from "next/navigation"
import { languages } from "@/i18n.config"

interface NavigationProps {
  locale?: string
}

export default function Navigation({ locale = "en" }: NavigationProps) {
  const pathname = usePathname()
  const currentPath = pathname?.replace(/^\/(en|es|fr|ar|zh)/, "") || "/"

  return (
    <nav className="w-full py-4 bg-white shadow">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex gap-6">
          <a href={`/${locale}`} className="text-gray-800 hover:text-black font-medium">
            Home
          </a>
          <a href={`/${locale}/services`} className="text-gray-800 hover:text-black font-medium">
            Services
          </a>
          <a href={`/${locale}/fleet`} className="text-gray-800 hover:text-black font-medium">
            Fleet
          </a>
          <a href={`/${locale}/cities`} className="text-gray-800 hover:text-black font-medium">
            Cities
          </a>
          <a href={`/${locale}/worldwide`} className="text-gray-800 hover:text-black font-medium">
            Worldwide
          </a>
          <a href={`/${locale}/about`} className="text-gray-800 hover:text-black font-medium">
            About
          </a>
          <a href={`/${locale}/contact`} className="text-gray-800 hover:text-black font-medium">
            Contact
          </a>
        </div>

        {/* Language Switcher */}
        <div className="flex gap-2 text-sm">
          {languages.map((lang) => (
            <a
              key={lang}
              href={`/${lang}${currentPath}`}
              className={`px-2 py-1 rounded ${
                locale === lang
                  ? "bg-yellow-600 text-black font-bold"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {lang.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
