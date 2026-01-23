"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { Icons } from "./Icons";

export default function MobileMenu({ locale, dict }: { locale: string; dict: any }) {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchCurrentX = useRef(0);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Swipe-to-close gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchCurrentX.current = e.touches[0].clientX;
    const diff = touchCurrentX.current - touchStartX.current;
    
    // Only allow swipe right (positive diff)
    if (diff > 0 && drawerRef.current) {
      drawerRef.current.style.transform = `translateX(${diff}px)`;
    }
  };

  const handleTouchEnd = () => {
    const diff = touchCurrentX.current - touchStartX.current;
    
    // Close if swiped more than 100px to the right
    if (diff > 100) {
      setOpen(false);
    }
    
    // Reset transform
    if (drawerRef.current) {
      drawerRef.current.style.transform = "";
    }
    
    touchStartX.current = 0;
    touchCurrentX.current = 0;
  };

  const navItems = [
    { href: "", label: dict.nav.home },
    { href: "services", label: dict.nav.services },
    { href: "fleet", label: dict.nav.fleet },
    { href: "cities", label: dict.nav.cities },
    { href: "contact", label: dict.nav.contact },
    { href: "about", label: dict.nav.about },
  ];

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(true)}
        className="text-[var(--text)] p-2 hover:bg-[var(--background)] rounded transition"
        aria-label="Open menu"
      >
        <Icons.menu className="w-6 h-6" />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 animate-fade-in"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer - Slide in from right */}
      <div
        ref={drawerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`
          fixed top-0 right-0 h-full w-[280px] max-w-[85vw]
          bg-[var(--surface)] shadow-2xl z-50
          transform transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
          <span className="text-lg font-semibold text-[var(--text)]">
            Menu
          </span>
          <button
            onClick={() => setOpen(false)}
            className="text-[var(--text)] p-2 hover:bg-[var(--background)] rounded transition"
            aria-label="Close menu"
          >
            <Icons.close className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-4 space-y-6 overflow-y-auto h-[calc(100%-60px)]">
          {/* Navigation Links */}
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}/${item.href}`}
                className="
                  block px-4 py-3 rounded-lg
                  text-[var(--text)] font-medium
                  hover:bg-[var(--background)]
                  hover:text-[var(--primary)]
                  transition-colors
                "
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="pt-4 border-t border-[var(--border)]">
            <div className="px-4 mb-2 text-xs font-semibold text-[var(--textMuted)] uppercase">
              Language
            </div>
            <LanguageSwitcher currentLocale={locale} />
          </div>

          {/* CTA */}
          <div className="pt-4 space-y-3">
            <a
              href="https://accounts.oregontowncar.com/"
              className="
                block w-full px-4 py-3 rounded-lg text-center
                bg-[var(--primary)] text-white font-semibold
                hover:bg-[var(--primaryHover)]
                transition-colors
              "
              onClick={() => setOpen(false)}
            >
              Book Now
            </a>
            <a
              href="https://accounts.oregontowncar.com/"
              className="
                block w-full px-4 py-3 rounded-lg text-center
                border border-[var(--border)] text-[var(--text)] font-semibold
                hover:bg-[var(--background)]
                transition-colors
              "
              onClick={() => setOpen(false)}
            >
              Client Portal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
