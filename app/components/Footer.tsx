"use client";

import Link from "next/link";
import { useState } from "react";
import { Icons } from "./Icons";
import { QuoteButton } from "./QuoteButton";

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
            isOpen ? "max-h-[600px] pb-3" : "max-h-0"
          }`}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="font-semibold mb-4 text-sm text-[var(--text)]">{title}</h3>
      {children}
    </div>
  );
}

export default function Footer({ locale, dict }: FooterProps) {
  return (
    <footer className="bg-[var(--surface)] border-t-2 border-[var(--border)]">
      <div className="py-8 sm:py-12">
        
        {/* Footer CTA - Compact */}
        <div className="mb-10 pb-8 border-b border-[var(--border)]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-base sm:text-lg font-semibold text-[var(--text)] mb-1">
                Ready to book your chauffeur?
              </p>
              <p className="text-sm text-[var(--textMuted)]">
                Premium service available 24/7 in Portland and worldwide
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="https://accounts.oregontowncar.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-[var(--primary)] text-white font-semibold rounded-lg hover:bg-[var(--primary)]/90 transition-colors text-sm"
              >
                Book Now
              </a>
              <QuoteButton variant="outline" className="!border-[var(--border)] !text-[var(--text)] hover:!bg-[var(--background)] !py-2.5 text-sm" />
            </div>
          </div>
        </div>

        {/* MOBILE: Accordion Layout */}
        <div className="md:hidden space-y-0 mb-8">
          <FooterSection title="Quick Links" isMobile>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href={`/${locale}`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1 transition-colors"
                >
                  {dict.nav.services}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/fleet`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1 transition-colors"
                >
                  {dict.nav.fleet}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/cities`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1 transition-colors"
                >
                  Cities
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/worldwide`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1 transition-colors"
                >
                  {dict.nav.worldwide}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1 transition-colors"
                >
                  {dict.nav.contact}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1 transition-colors"
                >
                  {dict.nav.about}
                </Link>
              </li>
            </ul>
          </FooterSection>

          <FooterSection title="Services" isMobile>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href={`/${locale}/services/airport-transportation`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1 transition-colors"
                >
                  Airport Transportation
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/vip-arrival`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1 transition-colors"
                >
                  VIP Arrival Service
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/corporate-travel`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1 transition-colors"
                >
                  Corporate Travel
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/wine-tours`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1 transition-colors"
                >
                  Wine Tours
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/special-events`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1 transition-colors"
                >
                  Special Events
                </Link>
              </li>
            </ul>
          </FooterSection>

          <FooterSection title="Local Service Areas" isMobile>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href={`/${locale}/cities/portland`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1 transition-colors"
                >
                  Portland
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/cities/beaverton`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1 transition-colors"
                >
                  Beaverton
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/cities/lake-oswego`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1 transition-colors"
                >
                  Lake Oswego
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/cities/tigard`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1 transition-colors"
                >
                  Tigard
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/cities/hillsboro`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1 transition-colors"
                >
                  Hillsboro
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/cities/vancouver-wa`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1 transition-colors"
                >
                  Vancouver, WA
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/cities/salem`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1 transition-colors"
                >
                  Salem
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/cities/eugene`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1 transition-colors"
                >
                  Eugene
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/cities/willamette-valley`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1 transition-colors"
                >
                  Willamette Valley
                </Link>
              </li>
            </ul>
          </FooterSection>

          <FooterSection title="Contact" isMobile>
            <div className="space-y-3 text-sm">
              <div>
                <a
                  href="tel:5033537755"
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block transition-colors"
                >
                  (503) 353-7755
                </a>
              </div>
              <div>
                <a
                  href="mailto:hello@oregontowncar.com"
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block transition-colors"
                >
                  hello@oregontowncar.com
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=4260+SW+110th+Ave+Beaverton+OR+97005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] transition-colors"
                >
                  <div>4260 SW 110th Ave</div>
                  <div>Beaverton, OR 97005</div>
                </a>
              </div>
              <div className="pt-3 text-xs text-[var(--textMuted)] border-t border-[var(--border)]">
                Licensed • Insured • 24/7 Reservations
              </div>
            </div>
          </FooterSection>

          <FooterSection title="Legal" isMobile>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href={`/${locale}/terms`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/privacy`}
                  className="text-[var(--textMuted)] hover:text-[var(--primary)] block py-1 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </FooterSection>
        </div>

        {/* DESKTOP: Grid Layout */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10 mb-12">
          <FooterSection title="Quick Links">
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href={`/${locale}`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)] transition-colors"
                >
                  {dict.nav.services}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/fleet`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)] transition-colors"
                >
                  {dict.nav.fleet}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/cities`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)] transition-colors"
                >
                  Cities
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/worldwide`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)] transition-colors"
                >
                  {dict.nav.worldwide}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)] transition-colors"
                >
                  {dict.nav.contact}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)] transition-colors"
                >
                  {dict.nav.about}
                </Link>
              </li>
            </ul>
          </FooterSection>

          <FooterSection title="Services">
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href={`/${locale}/services/airport-transportation`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)] transition-colors"
                >
                  Airport Transportation
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/vip-arrival`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)] transition-colors"
                >
                  VIP Arrival Service
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/corporate-travel`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)] transition-colors"
                >
                  Corporate Travel
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/wine-tours`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)] transition-colors"
                >
                  Wine Tours
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/special-events`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)] transition-colors"
                >
                  Special Events
                </Link>
              </li>
            </ul>
          </FooterSection>

          <FooterSection title="Global Coverage">
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href={`/${locale}/cities`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)] transition-colors"
                >
                  Cities
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/worldwide`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)] transition-colors"
                >
                  {dict.nav.worldwide}
                </Link>
              </li>
            </ul>
          </FooterSection>

          <FooterSection title="Local Service Areas">
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href={`/${locale}/cities/portland`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)] transition-colors"
                >
                  Portland
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/cities/beaverton`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)] transition-colors"
                >
                  Beaverton
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/cities/lake-oswego`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)] transition-colors"
                >
                  Lake Oswego
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/cities/tigard`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)] transition-colors"
                >
                  Tigard
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/cities/hillsboro`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)] transition-colors"
                >
                  Hillsboro
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/cities/vancouver-wa`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)] transition-colors"
                >
                  Vancouver, WA
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/cities/salem`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)] transition-colors"
                >
                  Salem
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/cities/eugene`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)] transition-colors"
                >
                  Eugene
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/cities/willamette-valley`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)] transition-colors"
                >
                  Willamette Valley
                </Link>
              </li>
            </ul>
          </FooterSection>

          <FooterSection title="Contact">
            <div className="space-y-3 text-sm">
              <div>
                <a
                  href="tel:5033537755"
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)] transition-colors"
                >
                  (503) 353-7755
                </a>
              </div>
              <div>
                <a
                  href="mailto:hello@oregontowncar.com"
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)] transition-colors"
                >
                  hello@oregontowncar.com
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=4260+SW+110th+Ave+Beaverton+OR+97005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)] transition-colors"
                >
                  <div>4260 SW 110th Ave</div>
                  <div>Beaverton, OR 97005</div>
                </a>
              </div>
              <div className="pt-3 text-xs text-[var(--textMuted)] border-t border-[var(--border)] mt-3">
                Licensed • Insured • 24/7 Reservations
              </div>
            </div>
          </FooterSection>

          <FooterSection title="Legal">
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href={`/${locale}/terms`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/privacy`}
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </FooterSection>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="text-center pt-8 border-t border-[var(--border)]">
          <p className="text-[var(--textMuted)] text-sm mb-2 font-medium">
            Oregon Town Car — Premium Chauffeur Service
          </p>
          <p className="text-[var(--textMuted)] text-xs">
            Serving clients worldwide — 50 U.S. states + 13 countries
          </p>
          <p className="text-[var(--textMuted)] text-xs mt-2">
            © {new Date().getFullYear()} Oregon Town Car. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
