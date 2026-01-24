import { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/app/components/seo/JsonLd';
import { buildLocalBusinessSchema } from '@/lib/seo/schema';

export const metadata: Metadata = {
  title: 'Hotel Partners - Portland Luxury Hotels | Oregon Town Car',
  description: 'Recommended luxury hotels in Portland we serve. Chauffeur service for guests of The Ritz-Carlton, The Nines, Hotel Lucia, and more premium properties.',
  openGraph: {
    title: 'Hotel Partners - Portland Luxury Hotels | Oregon Town Car',
    description: 'Recommended luxury hotels in Portland we serve with premium chauffeur service.',
  },
};

export default function HotelsPage() {
  const schemaData = buildLocalBusinessSchema();

  const hotels = [
    {
      name: 'The Ritz-Carlton Portland',
      area: 'Downtown Portland',
      description: 'Five-star luxury in the heart of downtown. We provide seamless airport transfers and city transportation for guests.',
      citySlug: 'portland',
    },
    {
      name: 'The Nines',
      area: 'Downtown Portland',
      description: 'Iconic luxury hotel in a historic building. Frequent destination for executive transportation and airport service.',
      citySlug: 'portland',
    },
    {
      name: 'Hotel Lucia',
      area: 'Downtown Portland',
      description: 'Boutique luxury hotel known for art and sophistication. Popular with business travelers requiring chauffeur service.',
      citySlug: 'portland',
    },
    {
      name: 'Sentinel Hotel',
      area: 'Downtown Portland',
      description: 'Historic landmark hotel with timeless elegance. Regularly served for corporate events and executive transportation.',
      citySlug: 'portland',
    },
    {
      name: 'Hyatt Regency Portland',
      area: 'Downtown Portland',
      description: 'Premium convention hotel with excellent downtown access. Ideal for business travel and conference transportation.',
      citySlug: 'portland',
    },
    {
      name: 'Kimpton RiverPlace Hotel',
      area: 'Waterfront Portland',
      description: 'Boutique waterfront property with stunning views. Frequent pick-up location for wine tours and city exploration.',
      citySlug: 'portland',
    },
    {
      name: 'The Heathman Hotel',
      area: 'Downtown Portland',
      description: 'Historic luxury hotel in the cultural district. Regular destination for theater events and fine dining transportation.',
      citySlug: 'portland',
    },
    {
      name: 'Hotel deLuxe',
      area: 'Downtown Portland',
      description: 'Classic Hollywood glamour meets Portland charm. Popular for special occasions and executive travel.',
      citySlug: 'portland',
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
                <span className="text-white">Hotels</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Portland Hotel Partners
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Premium chauffeur service for guests of Portland&#39;s finest luxury hotels and accommodations.
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
                Oregon Town Car provides seamless transportation for guests staying at Portland&#39;s most prestigious hotels. Whether you need an airport transfer, wine tour, corporate event transportation, or city exploration, our chauffeurs ensure a white-glove experience from the moment you arrive.
              </p>
            </div>

            {/* Hotels List */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Recommended Luxury Hotels We Serve
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {hotels.map((hotel, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md border border-slate-200 p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {hotel.name}
                    </h3>
                    <div className="text-sm text-blue-600 font-semibold mb-3">
                      {hotel.area}
                    </div>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {hotel.description}
                    </p>
                    <Link
                      href={`/en/cities/${hotel.citySlug}`}
                      className="text-blue-600 hover:underline font-semibold text-sm"
                    >
                      View Portland Chauffeur Service →
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Services for Hotel Guests */}
            <div className="bg-slate-50 rounded-lg border border-slate-200 p-8 mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Services for Hotel Guests
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Airport Transfers</h3>
                  <p className="text-slate-600 text-sm">
                    Professional meet-and-greet at PDX with flight tracking and luggage assistance.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Wine Tours</h3>
                  <p className="text-slate-600 text-sm">
                    Full-day or half-day tours of Willamette Valley wine country with expert routing.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">City Exploration</h3>
                  <p className="text-slate-600 text-sm">
                    Custom Portland city tours, restaurant transportation, and event shuttles.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Corporate Events</h3>
                  <p className="text-slate-600 text-sm">
                    Executive transportation for conferences, meetings, and business dinners.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Special Occasions</h3>
                  <p className="text-slate-600 text-sm">
                    Weddings, anniversaries, and celebrations with premium chauffeur service.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Hourly Service</h3>
                  <p className="text-slate-600 text-sm">
                    Flexible hourly rates for shopping, sightseeing, or multi-stop itineraries.
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
              <p className="text-sm text-slate-700">
                <strong>Disclaimer:</strong> Oregon Town Car is not affiliated with the hotels listed above unless explicitly stated. Properties are listed for guest convenience and represent locations we frequently serve with excellence. For formal partnership inquiries, please{' '}
                <Link href="/en/contact" className="text-blue-600 hover:underline font-semibold">
                  contact us
                </Link>.
              </p>
            </div>

            {/* Related Links */}
            <div className="bg-white rounded-lg border border-slate-200 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Related Services</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/en/services/airport-transportation" className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm font-medium text-slate-700 transition-colors">
                  Airport Transportation
                </Link>
                <Link href="/en/cities/portland" className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm font-medium text-slate-700 transition-colors">
                  Portland Service
                </Link>
                <Link href="/en/services/wine-tours" className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm font-medium text-slate-700 transition-colors">
                  Wine Tours
                </Link>
                <Link href="/en/services/corporate-travel" className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm font-medium text-slate-700 transition-colors">
                  Corporate Travel
                </Link>
                <Link href="/en/contact" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-colors">
                  Book Now
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
