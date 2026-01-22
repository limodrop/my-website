"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const languages = ["en", "es", "fr", "ar", "zh"];

export default function LanguageSwitcher({ currentLocale }) {
  const pathname = usePathname();

  // Remove the current locale from the path
  const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, "");

  return (
    <div className="flex items-center gap-3 text-sm">
      {languages.map((lang) => (
        <Link
          key={lang}
          href={`/${lang}${pathWithoutLocale}`}
          className={`uppercase transition ${
            lang === currentLocale ? "text-yellow-400" : "text-gray-400 hover:text-yellow-300"
          }`}
        >
          {lang}
        </Link>
      ))}
    </div>
  );
}
