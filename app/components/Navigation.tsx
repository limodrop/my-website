"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";

interface NavigationProps {
  locale: string;
  dict: any;
}

export default function Navigation({ locale, dict }: NavigationProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === `/${locale}`;

  const navItems = [
    { href: "", label: dict.nav.home },
    { href: "services", label: dict.nav.services },
    { href: "fleet", label: dict.nav.fleet },
    { href: "contact", label: dict.nav.contact },
  ];

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`
        sticky top-0 z-50 w-full px-6 py-4 border-b transition-all duration-300
        bg-[var(--surface)] border-[var(--border)]
        ${scrolled ? "shadow-md" : "shadow-sm"}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link
          href={`/${locale}`}
          className="text-xl font-bold text-[var(--primary)] hover:opacity-80 transition"
        >
          Oregon Town Car
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}/${item.href}`}
              className="text-[var(--text)] hover:text-[var(--primary)] transition font-medium"
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher currentLocale={locale} />
        </div>

        {/* MOBILE MENU */}
        <MobileMenu locale={locale} dict={dict} />
      </div>
    </nav>
  );
}
