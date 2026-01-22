"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 20) {
        document.querySelector("nav")?.classList.add("scrolled");
      } else {
        document.querySelector("nav")?.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`
        sticky top-0 z-50 w-full px-6 py-4 border-b
        ${isHome ? "bg-transparent border-transparent" : "bg-[var(--surface)] border-[var(--border)]"}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-[var(--text)]">
          Oregon Town Car
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-[var(--text)] hover:opacity-70">
            Home
          </Link>
          <Link href="/services" className="text-[var(--text)] hover:opacity-70">
            Services
          </Link>
          <Link href="/fleet" className="text-[var(--text)] hover:opacity-70">
            Fleet
          </Link>
          <Link href="/contact" className="text-[var(--text)] hover:opacity-70">
            Contact
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
