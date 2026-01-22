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
        aria-expanded={open}
        aria-label="Toggle navigation menu"
      >
        Menu
      </button>

      {open && (
        <div
          role="menu"
          className="
            absolute left-0 right-0 top-16
            bg-[var(--surface)]
            border-t border-[var(--border)]
            shadow-lg
            p-6 space-y-4
          "
        >
          <Link 
            href="/" 
            className="block text-[var(--text)]" 
            onClick={() => setOpen(false)}
            role="menuitem"
          >
            Home
          </Link>
          <Link 
            href="/services" 
            className="block text-[var(--text)]" 
            onClick={() => setOpen(false)}
            role="menuitem"
          >
            Services
          </Link>
          <Link 
            href="/fleet" 
            className="block text-[var(--text)]" 
            onClick={() => setOpen(false)}
            role="menuitem"
          >
            Fleet
          </Link>
          <Link 
            href="/contact" 
            className="block text-[var(--text)]" 
            onClick={() => setOpen(false)}
            role="menuitem"
          >
            Contact
          </Link>

          <div className="pt-4 border-t border-[var(--border)]">
            <Link 
              href="/cities" 
              className="block text-[var(--textMuted)] mb-2" 
              onClick={() => setOpen(false)}
              role="menuitem"
            >
              Cities
            </Link>
            <Link 
              href="/countries" 
              className="block text-[var(--textMuted)] mb-2" 
              onClick={() => setOpen(false)}
              role="menuitem"
            >
              Countries
            </Link>
            <Link 
              href="/worldwide" 
              className="block text-[var(--textMuted)] mb-2" 
              onClick={() => setOpen(false)}
              role="menuitem"
            >
              Worldwide
            </Link>
            <Link 
              href="/about" 
              className="block text-[var(--textMuted)]" 
              onClick={() => setOpen(false)}
              role="menuitem"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
