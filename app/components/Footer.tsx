import Link from "next/link";
import { getDictionary } from "@/app/i18n";

export default async function Footer({ locale }: { locale: string }) {
  const dict = await getDictionary(locale);
  
  return (
    <footer 
      className="mt-20 py-14 border-t bg-[var(--surface)] text-[var(--text)] border-[var(--border)]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
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
          </div>

          <div>
            <h4 className="font-semibold mb-3">Global Coverage</h4>
            <ul className="space-y-2">
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
          </div>

          <div>
            <h4 className="font-semibold mb-3">
              {dict.nav.services}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href={`/${locale}/services`} 
                  className="text-[var(--textMuted)] hover:underline hover:text-[var(--primary)]"
                >
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
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
          </div>
        </div>

        {/* GLOBAL COVERAGE MESSAGE */}
        <div className="text-center pt-8 border-t border-[var(--border)]">
          <p className="text-[var(--textMuted)] text-sm">
            {dict.footer?.globalMessage || "Oregon Town Car — Premium Transportation Worldwide"}
          </p>
        </div>
      </div>
    </footer>
  );
}
