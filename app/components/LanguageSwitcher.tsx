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
          className={`uppercase transition font-medium ${
            lang === currentLocale ? "text-[#0067B8]" : "text-[#5A5A5A] hover:text-[#0067B8]"
          }`}
        >
          {lang}
        </Link>
      ))}
    </div>
  );
}
