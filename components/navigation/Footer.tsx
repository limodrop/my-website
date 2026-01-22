"use client";

import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries";

interface FooterProps {
  dict: Dictionary;
}

export default function Footer({ dict }: FooterProps) {
  return (
    <footer className="bg-[var(--surface)] border-t border-[var(--border)] text-[var(--text)] transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-semibold mb-4">Oregon Town Car</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Premium Chauffeur Service
            </p>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">{dict.nav.cities}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/cities" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition">
                  {dict.nav.cities}
                </Link>
              </li>
              <li>
                <Link href="/countries" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition">
                  {dict.nav.countries}
                </Link>
              </li>
              <li>
                <Link href="/worldwide" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition">
                  {dict.nav.worldwide}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition">
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition">
                  {dict.nav.blog}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition">
                  {dict.nav.services}
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition">
                  {dict.nav.fleet}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition">
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-[var(--border)] text-center text-sm text-[var(--text-secondary)]">
          © {new Date().getFullYear()} Oregon Town Car. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
