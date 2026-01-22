"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navigation({ locale, dict }) {
  const pathname = usePathname();

  const navItems = [
    { href: "", label: dict.nav.home },
    { href: "services", label: dict.nav.services },
    { href: "fleet", label: dict.nav.fleet },
    { href: "cities", label: dict.nav.cities },
    { href: "countries", label: dict.nav.countries },
    { href: "worldwide", label: dict.nav.worldwide },
    { href: "about", label: dict.nav.about },
    { href: "contact", label: dict.nav.contact },
  ];

  return (
    <nav className="w-full border-b border-gray-800 bg-black/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Left side navigation */}
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}/${item.href}`}
              className={`text-sm hover:text-yellow-400 transition ${
                pathname === `/${locale}/${item.href}` ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right side language switcher */}
        <LanguageSwitcher currentLocale={locale} />
      </div>
    </nav>
  );
}
