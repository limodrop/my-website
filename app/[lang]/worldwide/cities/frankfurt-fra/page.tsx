import { Metadata } from 'next';
import Link from 'next/link';
import { Locale } from '@/lib/i18n/types';

export const metadata: Metadata = {
  title: 'Chauffeur Service in Frankfurt (FRA) | Airport Transportation | Oregon Town Car',
  description: 'Professional chauffeur service at Frankfurt Airport. Executive transportation throughout Frankfurt and Rhine-Main area.',
  keywords: 'Frankfurt chauffeur, FRA airport transportation, Frankfurt car service, executive transportation Germany',
};

export default function FrankfurtFRAPage({
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
              <Link href={`/${locale}/worldwide/germany`} className="hover:text-white">Germany</Link>
              <span>→</span>
              <span>Frankfurt</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Chauffeur Service in Frankfurt (FRA)</h1>
            <p className="text-lg text-slate-200">
              Professional airport transfers and executive transportation at Frankfurt Airport. 
              Serving Frankfurt City, Rhine-Main, and business districts.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Frankfurt Chauffeur Availability</h2>
            <p className="text-[var(--textMuted)] mb-4">
              Our vetted chauffeur partners serve Frankfurt Airport (FRA), one of Europe's busiest hubs, and throughout the Rhine-Main metropolitan region. 
              Professional transportation for financial conferences, trade shows, and international business meetings.
            </p>
            <p className="text-[var(--textMuted)]">
              Service covers Frankfurt City, Bankenviertel (banking district), Messe Frankfurt, and surrounding areas. 
              All chauffeurs are licensed, insured, and experienced with autobahn navigation.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Airport Transfers</h2>
            <div className="space-y-4">
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ Frankfurt Airport (FRA)</h3>
                <p className="text-sm text-[var(--textMuted)]">Professional pickup at all terminals, A3/A5 autobahn access to city center.</p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ Trade Show Transportation</h3>
                <p className="text-sm text-[var(--textMuted)]">Dedicated service to Messe Frankfurt for IAA, Frankfurt Book Fair, and major trade events.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Corporate Travel</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">Banking District</h3>
                <p className="text-sm text-[var(--textMuted)]">Transportation to Bankenviertel, ECB headquarters, and financial institutions.</p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">Messe Frankfurt</h3>
                <p className="text-sm text-[var(--textMuted)]">Trade fair and conference center transportation with event coordination.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Popular Destinations</h2>
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-[var(--textMuted)]">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="3"/></svg>
                  Bankenviertel (Banking District)
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="3"/></svg>
                  Messe Frankfurt Trade Fair
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="3"/></svg>
                  City Center & Römer
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="3"/></svg>
                  Rhine-Main Business Parks
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
              <h2 className="text-2xl font-bold mb-3">Book Frankfurt Chauffeur Service</h2>
              <p className="text-slate-200 mb-6">Professional transportation at FRA. Executive service throughout Frankfurt.</p>
              <Link href={`/${locale}/contact`} className="inline-block bg-[var(--primary)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">Request Service</Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
