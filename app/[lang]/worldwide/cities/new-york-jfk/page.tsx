import { Metadata } from 'next';
import Link from 'next/link';
import { Locale } from '@/lib/i18n/types';

export const metadata: Metadata = {
  title: 'Chauffeur Service in New York (JFK) | Airport Transportation | Oregon Town Car',
  description: 'Professional chauffeur service at JFK, LGA, and EWR airports. Executive transportation throughout New York City and Manhattan business districts.',
  keywords: 'New York chauffeur, JFK airport transportation, Manhattan car service, NYC executive transportation',
};

export default function NewYorkJFKPage({
  params
}: {
  params: { lang: Locale }
}) {
  const locale = params.lang;

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-slate-300 mb-4">
              <Link href={`/${locale}/worldwide`} className="hover:text-white">Worldwide</Link>
              <span>→</span>
              <Link href={`/${locale}/worldwide/united-states`} className="hover:text-white">United States</Link>
              <span>→</span>
              <span>New York</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Chauffeur Service in New York (JFK)
            </h1>
            <p className="text-lg text-slate-200">
              Professional airport transfers and executive transportation at JFK, LaGuardia, and Newark airports. 
              Serving Manhattan, outer boroughs, and the tri-state area.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">New York Chauffeur Availability</h2>
            <p className="text-[var(--textMuted)] mb-4">
              Our vetted chauffeur partners serve all three major New York airports—John F. Kennedy International (JFK), 
              LaGuardia (LGA), and Newark Liberty International (EWR). Whether you're arriving for Wall Street meetings, 
              UN conferences, or entertainment industry events, professional chauffeurs provide seamless door-to-door service.
            </p>
            <p className="text-[var(--textMuted)]">
              Service includes Manhattan business districts (Midtown, Financial District, Hudson Yards), outer boroughs, 
              Westchester County, and Connecticut/New Jersey destinations. All chauffeurs are licensed, insured, and familiar 
              with NYC traffic patterns and navigation.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Airport Transfers</h2>
            <p className="text-[var(--textMuted)] mb-6">
              New York airport transfers include:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">JFK Airport</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Meet & greet at arrivals, terminal navigation assistance, express routes to Manhattan (40-60 minutes depending on traffic).
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">LaGuardia Airport</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Domestic arrivals support, quick access to Midtown Manhattan (20-30 minutes), outer borough connectivity.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">Newark Airport</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  New Jersey arrivals, connections to Manhattan via Lincoln or Holland tunnels, corporate park access.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Corporate Travel in NYC</h2>
            <p className="text-[var(--textMuted)] mb-6">
              Executive chauffeur service is essential for business travelers navigating New York's complex transportation landscape:
            </p>
            <div className="space-y-4">
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ Multi-Stop Itineraries</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Navigate between Manhattan office towers, Brooklyn tech campuses, and Queens production facilities efficiently.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ Event Transportation</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Reliable service for conferences at Javits Center, UN meetings, financial district roadshows, and Madison Square Garden events.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ By-the-Hour Service</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Full-day chauffeur availability for packed schedules, investor meetings, and client entertainment.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Popular New York Destinations</h2>
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-[var(--textMuted)]">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="3"/></svg>
                  Financial District & Wall Street
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="3"/></svg>
                  Midtown Manhattan & Times Square
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="3"/></svg>
                  Hudson Yards & West Side
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="3"/></svg>
                  Brooklyn Tech Corridor
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="3"/></svg>
                  UN Headquarters & East Side
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="3"/></svg>
                  Westchester County Corporate Parks
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Booking Process</h2>
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg p-6">
              <ol className="space-y-3 text-[var(--textMuted)]">
                <li className="flex gap-3">
                  <span className="font-bold text-[var(--primary)]">1.</span>
                  <span>Submit your flight details or pickup address via our contact form</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[var(--primary)]">2.</span>
                  <span>Receive pricing confirmation and booking details within 2 hours</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[var(--primary)]">3.</span>
                  <span>Get chauffeur contact information 24 hours before pickup</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-[var(--primary)]">4.</span>
                  <span>Meet your chauffeur at arrivals or your specified location</span>
                </li>
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Related Services</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link 
                href={`/${locale}/services/airport-transportation`}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 hover:border-[var(--primary)] transition-colors"
              >
                <h3 className="font-semibold text-[var(--text)] mb-2">Airport Transportation</h3>
                <p className="text-sm text-[var(--textMuted)]">Professional airport transfers worldwide</p>
              </Link>
              <Link 
                href={`/${locale}/services/corporate-travel`}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 hover:border-[var(--primary)] transition-colors"
              >
                <h3 className="font-semibold text-[var(--text)] mb-2">Corporate Travel</h3>
                <p className="text-sm text-[var(--textMuted)]">Executive transportation solutions</p>
              </Link>
            </div>
          </section>

          <section>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">Book New York Chauffeur Service</h2>
              <p className="text-slate-200 mb-6">
                Professional transportation at JFK, LGA, and EWR. Executive service throughout NYC.
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-block bg-[var(--primary)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Request Service
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
