"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "ar", label: "العربية" },
  { code: "zh", label: "中文" },
];

export default function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, "");
  const currentLang = languages.find((lang) => lang.code === currentLocale);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-sm px-3 py-1 rounded border border-[#D1D1D1] bg-white hover:border-[#0067B8] transition"
      >
        {currentLang?.label || currentLocale.toUpperCase()}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-40 bg-white border border-[#D1D1D1] rounded shadow-lg z-50 overflow-hidden">
            {languages.map((lang) => (
              <Link
                key={lang.code}
                href={`/${lang.code}${pathWithoutLocale}`}
                className={`
                  block px-4 py-2 text-sm transition
                  ${
                    lang.code === currentLocale
                      ? "bg-[#0067B8] text-white"
                      : "text-[#1B1B1B] hover:bg-[#F3F3F3]"
                  }
                `}
                onClick={() => setIsOpen(false)}
              >
                {lang.label}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
