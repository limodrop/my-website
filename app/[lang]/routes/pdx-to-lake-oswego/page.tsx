import { Metadata } from 'next';
import Link from 'next/link';
import { Locale } from '@/lib/i18n/types';

export const metadata: Metadata = {
  title: 'PDX to Lake Oswego Transportation | 35-45 Minutes | Oregon Town Car',
  description: 'Luxury chauffeur service from Portland Airport (PDX) to Lake Oswego. 20 miles, 35-45 minutes. Executive travel, upscale residential access, fixed pricing.',
  keywords: 'PDX to Lake Oswego, Portland airport to Lake Oswego, Lake Oswego chauffeur, executive transportation',
};

export default function PDXtoLakeOswegoPage({
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
              <Link href={`/${locale}/routes`} className="hover:text-white">Routes</Link>
              <span>→</span>
              <span>PDX to Lake Oswego</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              PDX to Lake Oswego Chauffeur Service
            </h1>
            <div className="flex flex-wrap gap-6 text-lg">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                20 miles
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                35-45 minutes
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Route Overview</h2>
            <p className="text-[var(--textMuted)] mb-4">
              The PDX Airport to Lake Oswego route covers approximately 20 miles via I-205 and Highway 43, typically taking 
              35-45 minutes depending on traffic. Lake Oswego is one of Oregon's most affluent communities, known for 
              upscale residential neighborhoods, luxury shopping, and waterfront dining.
            </p>
            <p className="text-[var(--textMuted)]">
              This route serves executive travelers, luxury homeowners, and high-net-worth individuals who expect premium 
              service and discretion. Lake Oswego is also home to corporate executives, medical professionals, and business 
              owners visiting the Portland metro area.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Why Chauffeur Service is Ideal for This Route</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ Executive-Level Service</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Lake Oswego residents and visitors expect white-glove service. Our professional chauffeurs deliver the discretion and luxury you deserve.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ Residential Privacy</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Our chauffeurs are familiar with Lake Oswego's gated communities and private roads, ensuring discreet arrival at your residence.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ Luxury Fleet Options</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Choose from luxury sedans for executive solo travel or executive vans for family arrivals with luggage and privacy.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ Fixed Premium Pricing</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Transparent flat rate with no hidden fees—premium service at a predictable cost, regardless of traffic or delays.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Business vs Leisure Use Cases</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Executive Travel</h3>
              <p className="text-[var(--textMuted)] mb-3">
                Lake Oswego chauffeur service is essential for:
              </p>
              <ul className="space-y-2 text-[var(--textMuted)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] mt-1">→</span>
                  <span><strong>C-Suite Arrivals</strong> - Discreet, professional transportation for executives visiting Portland offices or clients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] mt-1">→</span>
                  <span><strong>Client Hosting</strong> - Impress high-value clients with premium airport pickup to Lake Oswego meetings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] mt-1">→</span>
                  <span><strong>Board Member Transport</strong> - Reliable, luxury service for board meetings at Lake Oswego corporate locations</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Luxury Leisure Travel</h3>
              <p className="text-[var(--textMuted)] mb-3">
                Leisure travelers choose Lake Oswego chauffeur service for:
              </p>
              <ul className="space-y-2 text-[var(--textMuted)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] mt-1">→</span>
                  <span><strong>Residential Returns</strong> - Homeowners returning from travel with luggage, golf clubs, or shopping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] mt-1">→</span>
                  <span><strong>Special Events</strong> - Weddings, anniversary celebrations, milestone events at Lake Oswego venues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] mt-1">→</span>
                  <span><strong>Hotel Access</strong> - Lakeshore Inn, boutique accommodations, Airbnb luxury rentals</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Airport Pickup Details</h2>
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
              <h3 className="font-semibold text-[var(--text)] mb-4">Premium Service Included</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--textMuted)]">White-glove meet & greet at baggage claim</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--textMuted)]">Real-time flight tracking and proactive communication</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--textMuted)]">Professional luggage handling and vehicle loading</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--textMuted)]">Premium water, climate control, privacy partition (on request)</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--textMuted)]">All taxes, fees, and gratuity included</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--textMuted)]">Discreet door-to-door service to your Lake Oswego address</span>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Traffic Patterns & Best Times</h2>
            <div className="space-y-4">
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-[var(--text)]">Morning Rush Hour (7:00 AM - 9:30 AM)</h3>
                  <span className="text-sm text-amber-600 font-medium">45-55 minutes</span>
                </div>
                <p className="text-sm text-[var(--textMuted)]">
                  I-205 and Highway 43 experience moderate congestion. Plan for extended travel time during this window.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-[var(--text)]">Midday (9:30 AM - 3:30 PM)</h3>
                  <span className="text-sm text-green-600 font-medium">35-40 minutes</span>
                </div>
                <p className="text-sm text-[var(--textMuted)]">
                  Optimal travel time. Roads flow smoothly, and scenic routes via Highway 43 are especially pleasant.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-[var(--text)]">Evening Rush Hour (4:00 PM - 6:30 PM)</h3>
                  <span className="text-sm text-amber-600 font-medium">45-55 minutes</span>
                </div>
                <p className="text-sm text-[var(--textMuted)]">
                  Heavy southbound traffic on I-205. Your chauffeur will monitor conditions and choose optimal routing.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Related Services</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link 
                href={`/${locale}/services/airport-transportation`}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 hover:border-[var(--primary)] transition-colors"
              >
                <h3 className="font-semibold text-[var(--text)] mb-2">Airport Transportation</h3>
                <p className="text-sm text-[var(--textMuted)] mb-3">
                  Executive PDX transfers to all Portland metro locations.
                </p>
                <span className="text-sm text-[var(--primary)] font-medium">Learn more →</span>
              </Link>

              <Link 
                href={`/${locale}/fleet`}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 hover:border-[var(--primary)] transition-colors"
              >
                <h3 className="font-semibold text-[var(--text)] mb-2">Luxury Fleet</h3>
                <p className="text-sm text-[var(--textMuted)] mb-3">
                  Premium sedans and executive vans for discerning travelers.
                </p>
                <span className="text-sm text-[var(--primary)] font-medium">View fleet →</span>
              </Link>

              <Link 
                href={`/${locale}/services/vip-arrival`}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 hover:border-[var(--primary)] transition-colors"
              >
                <h3 className="font-semibold text-[var(--text)] mb-2">VIP Arrival Service</h3>
                <p className="text-sm text-[var(--textMuted)] mb-3">
                  Enhanced arrival experience with curbside escort.
                </p>
                <span className="text-sm text-[var(--primary)] font-medium">Learn more →</span>
              </Link>
            </div>
          </section>

          <section>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">Book Your Lake Oswego Chauffeur Service</h2>
              <p className="text-slate-200 mb-6 max-w-2xl mx-auto">
                Executive airport transportation from PDX to Lake Oswego. Premium service, luxury vehicles, and fixed pricing.
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-block bg-[var(--primary)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Book Now
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
