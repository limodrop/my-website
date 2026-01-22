import { serverClient } from "@/app/lib/serverClient";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export default async function CountryDetailPage({ params }: Props) {
  const country = await serverClient.country(params.slug);
  
  if (!country) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">{country.name}</h1>
        <p className="text-xl text-gray-700">{country.tagline}</p>
        <p className="text-gray-600">{country.seoDescription}</p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Primary Airports We Serve</h2>
        <ul className="space-y-2">
          {country.primaryAirports.map((airport, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-600 mr-2">✈</span>
              <span>{airport}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
