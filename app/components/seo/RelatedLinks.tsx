import Link from 'next/link';

interface RelatedLinksProps {
  countries?: Array<{ name: string; slug: string }>;
  cities?: Array<{ name: string; slug: string; country: string }>;
  airports?: Array<{ code: string; name: string; city: string }>;
  services?: Array<{ name: string; slug: string }>;
  locale?: string;
}

export function RelatedLinks({ countries, cities, airports, services, locale = 'en' }: RelatedLinksProps) {
  const hasAnyLinks = countries?.length || cities?.length || airports?.length || services?.length;
  
  if (!hasAnyLinks) return null;

  return (
    <div className="bg-surface border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-2xl font-bold mb-8">Related Destinations</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Countries */}
          {countries && countries.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-4 text-text-secondary">Countries</h3>
              <ul className="space-y-2">
                {countries.map((country) => (
                  <li key={country.slug}>
                    <Link
                      href={`/${locale}/countries/${country.slug}`}
                      className="text-text-primary hover:text-primary transition-colors"
                    >
                      {country.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Cities */}
          {cities && cities.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-4 text-text-secondary">
                {countries?.length ? 'Related Cities' : 'Cities'}
              </h3>
              <ul className="space-y-2">
                {cities.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/${locale}/worldwide/cities/${city.slug}`}
                      className="text-text-primary hover:text-primary transition-colors"
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Airports */}
          {airports && airports.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-4 text-text-secondary">
                {cities?.length ? 'Nearby Airports' : 'Airports'}
              </h3>
              <ul className="space-y-2">
                {airports.map((airport) => (
                  <li key={airport.code}>
                    <Link
                      href={`/${locale}/worldwide/airports/${airport.code.toLowerCase()}`}
                      className="text-text-primary hover:text-primary transition-colors"
                    >
                      {airport.code} - {airport.city}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Services */}
          {services && services.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-4 text-text-secondary">Popular Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/${locale}/services/${service.slug}`}
                      className="text-text-primary hover:text-primary transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
