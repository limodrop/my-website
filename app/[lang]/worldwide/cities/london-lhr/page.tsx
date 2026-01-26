import { Metadata } from 'next';
import Link from 'next/link';
import { Locale } from '@/lib/i18n/types';

export const metadata: Metadata = {
  title: 'Chauffeur Service in London (LHR) | Airport Transportation | Oregon Town Car',
  description: 'Professional chauffeur service at London Heathrow and Gatwick. Executive transportation throughout London and surrounding areas.',
  keywords: 'London chauffeur, Heathrow airport transportation, LHR car service, London executive transportation',
};

export default function LondonLHRPage({
  params
}: {
  params: { lang: Locale }
}) {
  const locale = params.lang;

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-slate-300 mb-4">
              <Link href={`/${locale}/worldwide`} className="hover:text-white">Worldwide</Link>
              <span>→</span>
              <Link href={`/${locale}/worldwide/united-kingdom`} className="hover:text-white">United Kingdom</Link>
              <span>→</span>
              <span>London</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Chauffeur Service in London (LHR)</h1>
            <p className="text-lg text-slate-200">
              Professional airport transfers and executive transportation at Heathrow and Gatwick airports. 
              Serving central London, City, Canary Wharf, and Greater London.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">London Chauffeur Availability</h2>
            <p className="text-[var(--textMuted)] mb-4">
              Our vetted chauffeur partners serve London Heathrow (LHR), Gatwick (LGW), and City Airport (LCY) throughout London. 
              Professional transportation for financial meetings, business conferences, and international corporate travel.
            </p>
            <p className="text-[var(--textMuted)]">
              Service covers central London, City of London, Canary Wharf, West End, and surrounding areas. 
              All chauffeurs are licensed, insured, and experienced with London traffic and congestion zones.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Airport Transfers</h2>
            <div className="space-y-4">
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ Heathrow Airport (LHR)</h3>
                <p className="text-sm text-[var(--textMuted)]">Professional pickup at all terminals, M4/A4 express routes to central London.</p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ Gatwick & City Airport</h3>
                <p className="text-sm text-[var(--textMuted)]">Service to Gatwick South/North terminals and London City Airport for business travelers.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Corporate Travel</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">Financial District</h3>
                <p className="text-sm text-[var(--textMuted)]">Transportation to City of London offices, banking headquarters, and Canary Wharf.</p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">West End & Mayfair</h3>
                <p className="text-sm text-[var(--textMuted)]">Luxury hotel service, business meetings, and corporate event transportation.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Popular Destinations</h2>
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-[var(--textMuted)]">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="3"/></svg>
                  City of London & Bank
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="3"/></svg>
                  Canary Wharf
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="3"/></svg>
                  Mayfair & West End
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="3"/></svg>
                  Knightsbridge & Chelsea
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Booking Process</h2>
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg p-6">
              <ol className="space-y-3 text-[var(--textMuted)]">
                <li className="flex gap-3"><span className="font-bold text-[var(--primary)]">1.</span><span>Submit your flight details or pickup address</span></li>
                <li className="flex gap-3"><span className="font-bold text-[var(--primary)]">2.</span><span>Receive pricing confirmation within 2 hours</span></li>
                <li className="flex gap-3"><span className="font-bold text-[var(--primary)]">3.</span><span>Get chauffeur contact info 24 hours before pickup</span></li>
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Related Services</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href={`/${locale}/services/airport-transportation`} className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 hover:border-[var(--primary)] transition-colors">
                <h3 className="font-semibold text-[var(--text)] mb-2">Airport Transportation</h3>
                <p className="text-sm text-[var(--textMuted)]">Professional airport transfers worldwide</p>
              </Link>
              <Link href={`/${locale}/services/corporate-travel`} className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 hover:border-[var(--primary)] transition-colors">
                <h3 className="font-semibold text-[var(--text)] mb-2">Corporate Travel</h3>
                <p className="text-sm text-[var(--textMuted)]">Executive transportation solutions</p>
              </Link>
            </div>
          </section>

          <section>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">Book London Chauffeur Service</h2>
              <p className="text-slate-200 mb-6">Professional transportation at LHR and Gatwick. Executive service throughout London.</p>
              <Link href={`/${locale}/contact`} className="inline-block bg-[var(--primary)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">Request Service</Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
