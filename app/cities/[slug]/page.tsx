import { serverClient } from "@/app/lib/serverClient";
import { generateCitySchema } from "@/lib/seo/jsonld";
import { CTAButton } from "@/components/ui/CTAButton";

interface Props {
  params: { slug: string }
}

export default async function CityDetailPage({ params }: Props) {
  const city = await serverClient.city(params.slug);

  if (!city) {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">City Not Found</h1>
        <p className="text-gray-700">
          The city you're looking for is not available.
        </p>
      </div>
    );
  }

  const citySchema = generateCitySchema(city.name, city.region, city.country);

  return (
    <div className="space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(citySchema)
        }}
      />

      <div>
        <h1 className="text-4xl font-bold">{city.name}</h1>
        <p className="text-xl text-gray-600 mt-2">{city.tagline}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">About Our Service</h2>
        <p className="text-gray-700">{city.seoDescription}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Popular Use Cases</h2>
        <ul className="list-disc list-inside space-y-2">
          {city.primaryUseCases.map((useCase, index) => (
            <li key={index} className="text-gray-700">
              {useCase}
            </li>
          ))}
        </ul>
      </div>

      {city.airportCode && (
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">
            Airport Service Available
          </h3>
          <p className="text-gray-700">
            We provide premium transfers to and from {city.airportCode} airport.
          </p>
        </div>
      )}

      <div className="mt-8">
        <CTAButton
          href="https://book.oregontowncar.com"
          location={`city_detail_${city.slug}`}
          locale="en"
          className="inline-block px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Book Your Ride in {city.name}
        </CTAButton>
      </div>
    </div>
  )
}
