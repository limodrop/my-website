"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu({ locale, dict }: { locale: string; dict: any }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-[var(--text)] px-3 py-2 border rounded border-[var(--border)] hover:bg-[var(--background)] transition"
      >
        {open ? "✕" : "☰"}
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setOpen(false)}
          />
          
          {/* Menu Panel */}
          <div
            className="
              absolute left-0 right-0 top-16
              bg-[var(--surface)]
              border-t border-[var(--border)]
              shadow-lg z-50
              p-6 space-y-4
            "
          >
            {/* Primary Nav */}
            <div className="space-y-3">
              <Link 
                href={`/${locale}`} 
                className="block text-[var(--text)] font-medium hover:text-[var(--primary)]"
                onClick={() => setOpen(false)}
              >
                {dict.nav.home}
              </Link>
              <Link 
                href={`/${locale}/services`} 
                className="block text-[var(--text)] font-medium hover:text-[var(--primary)]"
                onClick={() => setOpen(false)}
              >
                {dict.nav.services}
              </Link>
              <Link 
                href={`/${locale}/fleet`} 
                className="block text-[var(--text)] font-medium hover:text-[var(--primary)]"
                onClick={() => setOpen(false)}
              >
                {dict.nav.fleet}
              </Link>
              <Link 
                href={`/${locale}/contact`} 
                className="block text-[var(--text)] font-medium hover:text-[var(--primary)]"
                onClick={() => setOpen(false)}
              >
                {dict.nav.contact}
              </Link>
            </div>

            {/* Secondary Nav */}
            <div className="pt-4 border-t border-[var(--border)] space-y-2">
              <Link 
                href={`/${locale}/cities`} 
                className="block text-[var(--textMuted)] text-sm hover:text-[var(--primary)]"
                onClick={() => setOpen(false)}
              >
                {dict.nav.cities}
              </Link>
              <Link 
                href={`/${locale}/countries`} 
                className="block text-[var(--textMuted)] text-sm hover:text-[var(--primary)]"
                onClick={() => setOpen(false)}
              >
                {dict.nav.countries}
              </Link>
              <Link 
                href={`/${locale}/worldwide`} 
                className="block text-[var(--textMuted)] text-sm hover:text-[var(--primary)]"
                onClick={() => setOpen(false)}
              >
                {dict.nav.worldwide}
              </Link>
              <Link 
                href={`/${locale}/about`} 
                className="block text-[var(--textMuted)] text-sm hover:text-[var(--primary)]"
                onClick={() => setOpen(false)}
              >
                {dict.nav.about}
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
