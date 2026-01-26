import { Metadata } from 'next';
import Link from 'next/link';
import { Locale } from '@/lib/i18n/types';

export const metadata: Metadata = {
  title: 'PDX to Willamette Valley Wine Country | 60-90 Minutes | Oregon Town Car',
  description: 'Luxury chauffeur service from Portland Airport (PDX) to Willamette Valley wine country. 40-60 miles, 60-90 minutes. Wine tours, tasting rooms, vineyard visits.',
  keywords: 'PDX to Willamette Valley, Portland airport to wine country, Oregon wine tours, Dundee Hills chauffeur, McMinnville transportation',
};

export default function PDXtoWillametteValleyPage({
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
              <span>PDX to Willamette Valley</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              PDX to Willamette Valley Chauffeur Service
            </h1>
            <div className="flex flex-wrap gap-6 text-lg">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                40-60 miles
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                60-90 minutes
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
              The PDX Airport to Willamette Valley route covers 40-60 miles depending on your specific wine country destination, 
              typically taking 60-90 minutes via Highway 99W. The Willamette Valley is Oregon's premier wine region, home to 
              over 500 wineries and world-class Pinot Noir producers.
            </p>
            <p className="text-[var(--textMuted)]">
              Major wine regions include Dundee Hills (40 miles, ~60 minutes), Yamhill-Carlton (50 miles, ~70 minutes), 
              Chehalem Mountains (35 miles, ~55 minutes), and McMinnville (60 miles, ~90 minutes). This scenic route takes 
              you through rolling vineyards, historic towns, and farm-to-table dining destinations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Why Chauffeur Service is Ideal for This Route</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ Designated Driver Safety</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Wine tasting requires a designated driver. Our professional chauffeurs ensure you enjoy tastings responsibly while they handle the roads.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ Winery Navigation</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Willamette Valley wineries are spread across rural roads. Our chauffeurs know the routes, winery locations, and scenic backroads.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ Flexible Multi-Winery Tours</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Our hourly chauffeur service accommodates 3-5 winery visits, lunch reservations, and spontaneous stops at tasting rooms you discover.
                </p>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="font-semibold text-[var(--text)] mb-2">✓ Luxury Comfort</h3>
                <p className="text-sm text-[var(--textMuted)]">
                  Enjoy climate-controlled luxury vehicles with ample space for wine purchases, picnic supplies, and personal belongings.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Business vs Leisure Use Cases</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Wine Country Tourism</h3>
              <p className="text-[var(--textMuted)] mb-3">
                Willamette Valley chauffeur service is perfect for:
              </p>
              <ul className="space-y-2 text-[var(--textMuted)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] mt-1">→</span>
                  <span><strong>Wine Tasting Tours</strong> - Multi-winery experiences at Domaine Drouhin, Sokol Blosser, Stoller Family Estate, and more</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] mt-1">→</span>
                  <span><strong>Special Occasions</strong> - Anniversaries, birthdays, romantic getaways with wine country experiences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] mt-1">→</span>
                  <span><strong>Group Outings</strong> - Friends, family, or corporate team-building wine tours (Executive Van or Mini Coach)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[var(--text)] mb-3">Corporate & VIP Experiences</h3>
              <p className="text-[var(--textMuted)] mb-3">
                Business travelers choose wine country chauffeur service for:
              </p>
              <ul className="space-y-2 text-[var(--textMuted)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] mt-1">→</span>
                  <span><strong>Client Entertainment</strong> - Impress high-value clients with exclusive vineyard tours and private tastings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] mt-1">→</span>
                  <span><strong>Corporate Retreats</strong> - Team offsites at Allison Inn & Spa, wine country meetings, group dinners</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--primary)] mt-1">→</span>
                  <span><strong>Wine Industry Professionals</strong> - Sommelier visits, wine buyers, restaurant owners attending tastings</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Popular Wine Country Destinations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5">
                <h3 className="font-semibold text-[var(--text)] mb-2">Dundee Hills</h3>
                <p className="text-sm text-[var(--textMuted)] mb-2">
                  <strong>Distance:</strong> 40 miles (~60 minutes)<br />
                  <strong>Notable Wineries:</strong> Domaine Drouhin, Sokol Blosser, Domaine Serene
                </p>
                <p className="text-sm text-[var(--textMuted)]">
                  Premier Pinot Noir region with stunning hilltop views and world-class tasting rooms.
                </p>
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5">
                <h3 className="font-semibold text-[var(--text)] mb-2">Yamhill-Carlton</h3>
                <p className="text-sm text-[var(--textMuted)] mb-2">
                  <strong>Distance:</strong> 50 miles (~70 minutes)<br />
                  <strong>Notable Wineries:</strong> Anne Amie, Soter Vineyards, Penner-Ash
                </p>
                <p className="text-sm text-[var(--textMuted)]">
                  Rolling vineyards with boutique producers and intimate tasting experiences.
                </p>
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5">
                <h3 className="font-semibold text-[var(--text)] mb-2">Chehalem Mountains</h3>
                <p className="text-sm text-[var(--textMuted)] mb-2">
                  <strong>Distance:</strong> 35 miles (~55 minutes)<br />
                  <strong>Notable Wineries:</strong> Adelsheim, Ponzi Vineyards, Stoller Family Estate
                </p>
                <p className="text-sm text-[var(--textMuted)]">
                  Closest wine region to Portland with diverse varietals and scenic mountain vistas.
                </p>
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5">
                <h3 className="font-semibold text-[var(--text)] mb-2">McMinnville</h3>
                <p className="text-sm text-[var(--textMuted)] mb-2">
                  <strong>Distance:</strong> 60 miles (~90 minutes)<br />
                  <strong>Attractions:</strong> Historic downtown, Evergreen Aviation Museum, Nick's Italian Café
                </p>
                <p className="text-sm text-[var(--textMuted)]">
                  Charming wine country town with farm-to-table dining and boutique tasting rooms.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Airport Pickup & Wine Tour Details</h2>
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
              <h3 className="font-semibold text-[var(--text)] mb-4">What's Included</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--textMuted)]">Complimentary meet & greet at PDX baggage claim</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--textMuted)]">Real-time flight tracking and delay monitoring</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--textMuted)]">Designated driver for safe wine tasting</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--textMuted)]">Flexible itinerary for multi-winery visits</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--textMuted)]">Complimentary water and climate-controlled luxury</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--textMuted)]">Secure storage for wine purchases and luggage</span>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Travel Tips for Wine Country Visits</h2>
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg p-6">
              <ul className="space-y-3 text-[var(--textMuted)]">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
                  <span><strong>Book Tastings in Advance:</strong> Popular wineries like Domaine Drouhin and Stoller require reservations, especially on weekends.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
                  <span><strong>Plan 3-5 Wineries:</strong> Each tasting takes 45-90 minutes. Plan 3-5 stops for a full-day tour (6-8 hours).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
                  <span><strong>Include Lunch:</strong> Book reservations at Red Hills Market, Recipe, or The Dundee Bistro for farm-to-table dining.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
                  <span><strong>Seasonal Considerations:</strong> Best weather May-October. Harvest season (September-October) offers unique vineyard experiences.</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Related Services</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link 
                href={`/${locale}/services/wine-tours`}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 hover:border-[var(--primary)] transition-colors"
              >
                <h3 className="font-semibold text-[var(--text)] mb-2">Wine Tours</h3>
                <p className="text-sm text-[var(--textMuted)] mb-3">
                  Full-day Willamette Valley wine tasting experiences with expert chauffeurs.
                </p>
                <span className="text-sm text-[var(--primary)] font-medium">Learn more →</span>
              </Link>

              <Link 
                href={`/${locale}/services/hourly-chauffeur`}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 hover:border-[var(--primary)] transition-colors"
              >
                <h3 className="font-semibold text-[var(--text)] mb-2">Hourly Chauffeur</h3>
                <p className="text-sm text-[var(--textMuted)] mb-3">
                  Flexible hourly service for custom wine country itineraries.
                </p>
                <span className="text-sm text-[var(--primary)] font-medium">Learn more →</span>
              </Link>

              <Link 
                href={`/${locale}/services/airport-transportation`}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 hover:border-[var(--primary)] transition-colors"
              >
                <h3 className="font-semibold text-[var(--text)] mb-2">Airport Transportation</h3>
                <p className="text-sm text-[var(--textMuted)] mb-3">
                  PDX pickup for wine country arrivals and departures.
                </p>
                <span className="text-sm text-[var(--primary)] font-medium">Learn more →</span>
              </Link>
            </div>
          </section>

          <section>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">Book Your Willamette Valley Wine Tour</h2>
              <p className="text-slate-200 mb-6 max-w-2xl mx-auto">
                Professional chauffeur service from PDX to Oregon wine country. Designated driver, luxury vehicles, and flexible itineraries.
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
