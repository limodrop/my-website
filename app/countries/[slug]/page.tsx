import { serverClient } from "@/app/lib/serverClient";

interface Props {
  params: { slug: string };
}

export default async function CountryDetailPage({ params }: Props) {
  const country = await serverClient.country(params.slug);

  if (!country) {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Country Not Found</h1>
        <p className="text-gray-700">
          The country you are looking for does not exist.
        </p>
      </div>
    );
  }

  const cities = (await serverClient.cities()).filter(
    (c) => c.country === country.name
  );

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-bold">{country.name}</h1>
        <p className="text-xl text-gray-600 mt-2">{country.tagline}</p>
        <p className="text-gray-700 mt-4">{country.seoDescription}</p>
      </section>

      {country.primaryAirports.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-3">Primary Airports</h2>
          <div className="flex gap-2 flex-wrap">
            {country.primaryAirports.map((airport) => (
              <span
                key={airport}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm"
              >
                {airport}
              </span>
            ))}
          </div>
        </section>
      )}

      {cities.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Cities We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cities.map((city) => (
              <a
                key={city.slug}
                href={`/cities/${city.slug}`}
                className="p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-lg">{city.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{city.tagline}</p>
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Book Your Service</h2>
        <p className="text-gray-700 mb-4">
          Experience premium chauffeur service in {country.name}. Book now for
          professional transportation.
        </p>
        <a
          href="https://book.oregontowncar.com"
          className="inline-block px-6 py-3 bg-black text-white rounded hover:bg-gray-800"
        >
          Book Now
        </a>
      </section>
    </div>
  );
}

export async function generateMetadata({ params }: Props) {
  const country = await serverClient.country(params.slug);

  if (!country) {
    return {
      title: "Country Not Found",
    };
  }

  return {
    title: `${country.name} Chauffeur Service — Oregon Town Car`,
    description: country.seoDescription,
  };
}
