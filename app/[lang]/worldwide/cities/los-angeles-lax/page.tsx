import { Metadata } from 'next';
import Link from 'next/link';
import { Locale } from '@/lib/i18n/types';

export const metadata: Metadata = {
  title: 'Chauffeur Service in Los Angeles (LAX) | Airport Transportation | Oregon Town Car',
  description: 'Professional chauffeur service at LAX airport. Executive transportation throughout Los Angeles, Beverly Hills, Santa Monica, and Southern California.',
  keywords: 'Los Angeles chauffeur, LAX airport transportation, LA car service, Beverly Hills executive transportation',
};

export default function LosAngelesLAXPage({
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
              <Link href={`/${locale}/worldwide/united-states`} className="hover:text-white">United States</Link>
              <span>→</span>
              <span>Los Angeles</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Chauffeur Service in Los Angeles (LAX)
            </h1>
            <p className="text-lg text-slate-200">
              Professional airport transfers and executive transportation at LAX. 
              Serving Beverly Hills, Santa Monica, Downtown LA, and the entire Southern California region.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Los Angeles Chauffeur Availability</h2>
            <p className="text-[var(--textMuted)] mb-4">
              Our vetted chauffeur partners serve Los Angeles International Airport (LAX) and throughout the LA metro area. 
              Whether you're arriving for entertainment industry meetings, tech conferences in Silicon Beach, or corporate events, 
              professional chauffeurs provide seamless transportation across LA's sprawling landscape.
            </p>
            <p className="text-[var(--textMuted)]">
              Service covers Beverly Hills, Hollywood, Santa Monica, Downtown LA, Culver City, Pasadena, and Orange County. 
              All chauffeurs are licensed, insured, and experienced with LA traffic navigation.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">LAX Airport Transfers</h2>
            <p className="text-[var(--textMuted)] mb-6">
              LAX airport service includes flight tracking, meet & greet at terminals, and express routes to your destination:
            </p>
            <div className="space-y-4">
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ All LAX Terminals</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Professional pickup at all domestic and international terminals with luggage assistance.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ Traffic Navigation</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Experienced chauffeurs navigate LA freeways efficiently—405, 10, 110, and surface streets.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ Fixed Pricing</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Transparent rates from LAX to any LA destination—no surge pricing during peak hours.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Corporate Travel in LA</h2>
            <p className="text-[var(--textMuted)] mb-6">
              Executive chauffeur service for business travelers and entertainment industry professionals:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">Entertainment Industry</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Studio lot pickups, premiere events, production meetings throughout Hollywood and Burbank.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">Silicon Beach Tech</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Transportation to Santa Monica, Playa Vista, and El Segundo tech campuses.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Popular Destinations</h2>
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-[var(--textMuted)]">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="3"/></svg>
                  Beverly Hills & Rodeo Drive
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="3"/></svg>
                  Santa Monica & Venice Beach
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="3"/></svg>
                  Downtown LA & Financial District
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="3"/></svg>
                  Hollywood & West Hollywood
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
              <h2 className="text-2xl font-bold mb-3">Book Los Angeles Chauffeur Service</h2>
              <p className="text-slate-200 mb-6">Professional transportation at LAX. Executive service throughout LA.</p>
              <Link href={`/${locale}/contact`} className="inline-block bg-[var(--primary)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                Request Service
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
