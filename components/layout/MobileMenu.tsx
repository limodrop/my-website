"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-[var(--text)] px-3 py-2 border rounded border-[var(--border)]"
      >
        Menu
      </button>

      {open && (
        <div
          className="
            absolute left-0 right-0 top-16
            bg-[var(--surface)]
            border-t border-[var(--border)]
            shadow-lg
            p-6 space-y-4
          "
        >
          <Link href="/" className="block text-[var(--text)]" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/services" className="block text-[var(--text)]" onClick={() => setOpen(false)}>
            Services
          </Link>
          <Link href="/fleet" className="block text-[var(--text)]" onClick={() => setOpen(false)}>
            Fleet
          </Link>
          <Link href="/contact" className="block text-[var(--text)]" onClick={() => setOpen(false)}>
            Contact
          </Link>

          <div className="pt-4 border-t border-[var(--border)]">
            <Link href="/cities" className="block text-[var(--textMuted)] mb-2" onClick={() => setOpen(false)}>
              Cities
            </Link>
            <Link href="/countries" className="block text-[var(--textMuted)] mb-2" onClick={() => setOpen(false)}>
              Countries
            </Link>
            <Link href="/worldwide" className="block text-[var(--textMuted)] mb-2" onClick={() => setOpen(false)}>
              Worldwide
            </Link>
            <Link href="/about" className="block text-[var(--textMuted)]" onClick={() => setOpen(false)}>
              About
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
