"use client"

import Link from "next/link"
import LanguageSwitcher from "./LanguageSwitcher"
import type { Dictionary } from "@/app/i18n"

interface NavigationProps {
  locale: string
  dict: Dictionary
}

export default function Navigation({ locale, dict }: NavigationProps) {
  return (
    <nav className="w-full py-4 bg-white shadow">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex gap-6">
          <Link href={`/${locale}`} className="text-gray-800 hover:text-black font-medium">
            {dict.nav.home}
          </Link>
          <Link href={`/${locale}/services`} className="text-gray-800 hover:text-black font-medium">
            {dict.nav.services}
          </Link>
          <Link href={`/${locale}/fleet`} className="text-gray-800 hover:text-black font-medium">
            {dict.nav.fleet}
          </Link>
          <Link href={`/${locale}/cities`} className="text-gray-800 hover:text-black font-medium">
            {dict.nav.cities}
          </Link>
          <Link href={`/${locale}/countries`} className="text-gray-800 hover:text-black font-medium">
            {dict.nav.countries}
          </Link>
          <Link href={`/${locale}/worldwide`} className="text-gray-800 hover:text-black font-medium">
            {dict.nav.worldwide}
          </Link>
          <Link href={`/${locale}/about`} className="text-gray-800 hover:text-black font-medium">
            {dict.nav.about}
          </Link>
          <Link href={`/${locale}/contact`} className="text-gray-800 hover:text-black font-medium">
            {dict.nav.contact}
          </Link>
        </div>

        <LanguageSwitcher currentLocale={locale} />
      </div>
    </nav>
  )
}
