import { serverClient } from "@/app/lib/serverClient";

export default async function CountriesPage() {
  const countries = await serverClient.countries();

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-bold">Countries We Serve</h1>
        <p className="text-xl text-gray-600 mt-2">
          Premium chauffeur services across multiple countries
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {countries.map((country) => (
            <a
              key={country.slug}
              href={`/countries/${country.slug}`}
              className="p-6 border rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow"
            >
              <h2 className="text-2xl font-semibold">{country.name}</h2>
              <p className="text-gray-600 mt-2">{country.tagline}</p>
              <p className="text-sm text-gray-700 mt-3">
                {country.seoDescription}
              </p>
              {country.primaryAirports.length > 0 && (
                <div className="mt-4 flex gap-2 flex-wrap">
                  {country.primaryAirports.slice(0, 3).map((airport) => (
                    <span
                      key={airport}
                      className="px-2 py-1 bg-gray-100 rounded text-xs"
                    >
                      {airport}
                    </span>
                  ))}
                  {country.primaryAirports.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                      +{country.primaryAirports.length - 3} more
                    </span>
                  )}
                </div>
              )}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export const metadata = {
  title: "Countries — Oregon Town Car",
  description:
    "Explore our premium chauffeur services across multiple countries. Professional ground transportation wherever you need it.",
};
