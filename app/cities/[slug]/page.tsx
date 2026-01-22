import { serverClient } from "@/app/lib/serverClient";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export default async function CityDetailPage({ params }: Props) {
  const city = await serverClient.city(params.slug);
  
  if (!city) {
    notFound();
  }

  const country = await serverClient.country(city.country);

  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": city.name,
    "addressLocality": city.name,
    "addressCountry": country?.name || "United States",
    "description": city.seoDescription
  };

  return (
    <div className="space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
      />
      
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">{city.name}</h1>
        <p className="text-xl text-gray-700">{city.tagline}</p>
        <p className="text-gray-600">{city.seoDescription}</p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Popular Services</h2>
        <ul className="space-y-2">
          {city.primaryUseCases.map((useCase, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>{useCase}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
