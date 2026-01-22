"use client";

import Link from "next/link";
import { useState } from "react";
import { Icons } from "./Icons";

interface FooterProps {
  locale: string;
  dict: any;
}

function FooterSection({ title, children, isMobile }: { title: string; children: React.ReactNode; isMobile?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  if (isMobile) {
    return (
      <div className="border-b border-[var(--border)]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between py-3 text-left min-h-[44px]"
        >
          <span className="font-semibold text-sm text-[var(--text)]">{title}</span>
          {isOpen ? (
            <Icons.chevronUp className="w-4 h-4 text-[var(--textMuted)]" />
          ) : (
            <Icons.chevronDown className="w-4 h-4 text-[var(--textMuted)]" />
          )}
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 pb-3" : "max-h-0"
          }`}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h4 className="font-semibold mb-3 text-sm">{title}</h4>
      {children}
    </div>
  );
}

export default function Footer({ locale, dict }: FooterProps) {
  return (
    <footer className="py-8 sm:py-[var(--space-footer)]">
      <div>
        {/* MOBILE: Accordion Layout */}
        <div className="md:hidden space-y-0 mb-6">
          <FooterSection title="Quick Links" isMobile>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1"
                >
                  {dict.nav.services}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/fleet`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1"
                >
                  {dict.nav.fleet}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1"
                >
                  {dict.nav.contact}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1"
                >
                  {dict.nav.about}
                </Link>
              </li>
            </ul>
          </FooterSection>

          <FooterSection title="Services" isMobile>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/vip-arrival`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1"
                >
                  VIP Arrival Service
                </Link>
              </li>
            </ul>
          </FooterSection>

          <FooterSection title="Global Coverage" isMobile>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/cities`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1"
                >
                  Cities
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/countries`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1"
                >
                  Countries
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/worldwide`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1"
                >
                  {dict.nav.worldwide}
                </Link>
              </li>
            </ul>
          </FooterSection>

          <FooterSection title="Legal" isMobile>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/terms`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/privacy`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </FooterSection>
        </div>

        {/* DESKTOP: Grid Layout */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 mb-10">
          <FooterSection title="Quick Links">
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)]"
                >
                  {dict.nav.services}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/fleet`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)]"
                >
                  {dict.nav.fleet}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)]"
                >
                  {dict.nav.contact}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)]"
                >
                  {dict.nav.about}
                </Link>
              </li>
            </ul>
          </FooterSection>

          <FooterSection title="Services">
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)]"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/vip-arrival`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)]"
                >
                  VIP Arrival Service
                </Link>
              </li>
            </ul>
          </FooterSection>

          <FooterSection title="Global Coverage">
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/cities`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)]"
                >
                  Cities
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/countries`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)]"
                >
                  Countries
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/worldwide`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)]"
                >
                  {dict.nav.worldwide}
                </Link>
              </li>
            </ul>
          </FooterSection>

          <FooterSection title="Local Service Areas">
            <ul className="space-y-2 text-sm">
              <li className="text-[var(--textMuted)]">Portland</li>
              <li className="text-[var(--textMuted)]">Beaverton</li>
              <li className="text-[var(--textMuted)]">Lake Oswego</li>
              <li className="text-[var(--textMuted)]">Tigard</li>
              <li className="text-[var(--textMuted)]">Hillsboro</li>
              <li className="text-[var(--textMuted)]">Vancouver, WA</li>
              <li className="text-[var(--textMuted)]">Willamette Valley</li>
            </ul>
          </FooterSection>

          <FooterSection title="Contact">
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:5033537755"
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)]"
                >
                  (503) 353-7755
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@oregontowncar.com"
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)]"
                >
                  info@oregontowncar.com
                </a>
              </li>
              <li className="text-[var(--textMuted)] text-xs pt-2">
                Licensed & Insured
              </li>
            </ul>
          </FooterSection>

          <FooterSection title="Legal">
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/terms`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)]"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/privacy`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)]"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </FooterSection>
        </div>

        {/* GLOBAL COVERAGE MESSAGE */}
        <div className="text-center pt-6 sm:pt-8 border-t border-[var(--border)]">
          <p className="text-[var(--textMuted)] text-xs sm:text-sm mb-2">
            Oregon Town Car — Premium Chauffeur Service
          </p>
          <p className="text-[var(--textMuted)] text-xs">
            Serving clients worldwide — 50 U.S. states + 13 countries
          </p>
        </div>
      </div>
    </footer>
  );
}
