"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/app/hooks/useTheme";
import type { Dictionary, Locale } from "@/lib/dictionaries";

interface NavigationProps {
  locale?: Locale;
  dict: Dictionary;
}

export default function Navigation({ locale = "en", dict }: NavigationProps) {
  const pathname = usePathname();
  const { mode, setMode } = useTheme();
  const [langOpen, setLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    }

    if (langOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [langOpen]);

  const navItems = [
    { href: "", label: dict.nav.home },
    { href: "services", label: dict.nav.services },
    { href: "fleet", label: dict.nav.fleet },
    { href: "contact", label: dict.nav.contact },
  ];

  const languages = [
    { code: "en" as Locale, label: "English" },
    { code: "es" as Locale, label: "Español" },
    { code: "fr" as Locale, label: "Français" },
    { code: "ar" as Locale, label: "العربية" },
    { code: "zh" as Locale, label: "中文" },
  ];

  return (
    <nav
      className="
        sticky top-0 z-50
        w-full px-6 py-4
        border-b shadow-sm
        bg-[var(--surface)]
        text-[var(--text)]
        transition-colors
      "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LEFT SIDE — MAIN NAV */}
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`/${item.href}`}
              className={`
                text-sm font-medium transition
                ${pathname === `/${item.href}` || (item.href === "" && pathname === "/")
                  ? "text-[var(--primary)]"
                  : "text-[var(--text)]"}
              `}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE — LANGUAGE DROPDOWN + THEME TOGGLE */}
        <div className="flex items-center gap-4 relative">

          {/* LANGUAGE DROPDOWN */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              onKeyDown={(e) => {
                if (e.key === "Escape") setLangOpen(false);
              }}
              className="
                text-sm px-3 py-1 rounded
                border border-[var(--border)]
                bg-[var(--surface)]
                hover:bg-[var(--background)]
                transition
              "
            >
              {locale.toUpperCase()}
            </button>

            {langOpen && (
              <div
                className="
                  absolute right-0 mt-2 w-32
                  bg-[var(--surface)]
                  border border-[var(--border)]
                  rounded shadow-md
                  flex flex-col
                "
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLangOpen(false);
                      // In a real implementation, this would change the locale
                      // For now, just close the dropdown
                    }}
                    className="
                      px-3 py-2 text-sm text-left
                      hover:bg-[var(--background)]
                      text-[var(--text)]
                      transition
                    "
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* THEME TOGGLE */}
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className="
              text-sm px-3 py-1 rounded
              border border-[var(--border)]
              hover:bg-[var(--background)]
              transition
            "
          >
            {mode === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
}
