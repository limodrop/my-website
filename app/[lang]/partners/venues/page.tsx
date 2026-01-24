import { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/app/components/seo/JsonLd';
import { buildLocalBusinessSchema } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'Event Venue Partners - Weddings, Conventions, Corporate | Oregon Town Car',
  description: 'Premier event venue transportation for Portland conventions, weddings, corporate events, and wine estate celebrations. Chauffeur service for guests and planners.',
  openGraph: {
    title: 'Event Venue Partners - Weddings, Conventions, Corporate | Oregon Town Car',
    description: 'Premier event venue transportation throughout Portland and Oregon wine country.',
  },
};

export default function VenuesPage() {
  const schemaData = buildLocalBusinessSchema();

  const conventionCenters = [
    {
      name: 'Oregon Convention Center',
      area: 'Northeast Portland',
      description: 'Oregon\'s largest convention center. We provide shuttle service, executive transportation, and attendee transfers.',
    },
    {
      name: 'Portland Expo Center',
      area: 'North Portland',
      description: 'Major trade show and event venue with extensive exhibit space. Regular transportation for exhibitors and attendees.',
    },
  ];

  const weddingVenues = [
    {
      name: 'Castaway Portland',
      area: 'Northeast Portland',
      description: 'Elegant waterfront wedding venue with stunning views. Frequent transportation for weddings and celebrations.',
    },
    {
      name: 'The Evergreen',
      area: 'Southeast Portland',
      description: 'Boutique wedding venue in a historic building. Popular for intimate ceremonies and receptions.',
    },
    {
      name: 'Ponzi Vineyards',
      area: 'Willamette Valley',
      description: 'Premier wine estate wedding venue surrounded by vineyards. Ideal for destination weddings with transportation needs.',
    },
    {
      name: 'Allison Inn & Spa',
      area: 'Willamette Valley',
      description: 'Luxury resort and wedding destination in Oregon wine country. Chauffeur service for guests and wedding parties.',
    },
  ];

  const corporateVenues = [
    {
      name: 'The Sentinel Hotel',
      area: 'Downtown Portland',
      description: 'Historic hotel with sophisticated event spaces for corporate meetings and galas.',
    },
    {
      name: 'The Nines',
      area: 'Downtown Portland',
      description: 'Downtown luxury hotel with premium meeting and event facilities.',
    },
    {
      name: 'Portland Art Museum',
      area: 'Downtown Portland',
      description: 'Cultural venue for corporate galas, fundraisers, and special events.',
    },
  ];

  return (
    <>
      <JsonLd data={schemaData} />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <nav className="text-sm text-slate-400 mb-4">
                <Link href="/en" className="hover:text-white">Home</Link>
                {' '}/{' '}
                <Link href="/en/partners" className="hover:text-white">Partners</Link>
                {' '}/{' '}
                <span className="text-white">Venues</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Event Venue Partners
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Premium chauffeur service for weddings, conventions, corporate events, and wine estate celebrations throughout Portland and Oregon.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Oregon Town Car partners with Portland&#39;s premier event venues to provide seamless guest transportation for weddings, corporate events, conventions, and special occasions. Our professional chauffeurs ensure every guest arrives on time and in style.
              </p>
            </div>

            {/* Convention Centers */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Convention & Trade Show Venues
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {conventionCenters.map((venue, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md border border-slate-200 p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {venue.name}
                    </h3>
                    <div className="text-sm text-blue-600 font-semibold mb-3">
                      {venue.area}
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {venue.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Wedding Venues */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Wedding & Celebration Venues
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {weddingVenues.map((venue, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md border border-slate-200 p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {venue.name}
                    </h3>
                    <div className="text-sm text-blue-600 font-semibold mb-3">
                      {venue.area}
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {venue.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Corporate Venues */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Corporate Event Spaces
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {corporateVenues.map((venue, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md border border-slate-200 p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {venue.name}
                    </h3>
                    <div className="text-sm text-blue-600 font-semibold mb-3">
                      {venue.area}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {venue.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Services for Events */}
            <div className="bg-slate-50 rounded-lg border border-slate-200 p-8 mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Event Transportation Services
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Wedding Shuttles</h3>
                  <p className="text-slate-600 text-sm">
                    Coordinated transportation for wedding parties, guests, and family members between venues.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Convention Transfers</h3>
                  <p className="text-slate-600 text-sm">
                    Airport to venue transportation for exhibitors, speakers, and VIP attendees.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Corporate Events</h3>
                  <p className="text-slate-600 text-sm">
                    Executive transportation for galas, fundraisers, and company celebrations.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Guest Pickup</h3>
                  <p className="text-slate-600 text-sm">
                    Hotel to venue transfers with flexible scheduling and real-time coordination.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Multi-Stop Service</h3>
                  <p className="text-slate-600 text-sm">
                    Coordinated transportation for multi-venue events, after-parties, and receptions.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Event Coordinator Support</h3>
                  <p className="text-slate-600 text-sm">
                    Direct liaison with planners for seamless logistics and real-time adjustments.
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
              <p className="text-sm text-slate-700">
                <strong>Disclaimer:</strong> Oregon Town Car is not affiliated with the venues listed above unless explicitly stated. Venues are listed for planner and guest convenience and represent locations we frequently serve with excellence. For formal partnership inquiries, please{' '}
                <Link href="/en/contact" className="text-blue-600 hover:underline font-semibold">
                  contact us
                </Link>.
              </p>
            </div>

            {/* Related Links */}
            <div className="bg-white rounded-lg border border-slate-200 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Related Services</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/en/services/wedding-transportation" className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm font-medium text-slate-700 transition-colors">
                  Wedding Transportation
                </Link>
                <Link href="/en/services/corporate-travel" className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm font-medium text-slate-700 transition-colors">
                  Corporate Events
                </Link>
                <Link href="/en/cities/portland" className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm font-medium text-slate-700 transition-colors">
                  Portland Service
                </Link>
                <Link href="/en/services/wine-tours" className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm font-medium text-slate-700 transition-colors">
                  Wine Country Events
                </Link>
                <Link href="/en/contact" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-colors">
                  Plan Your Event
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
