import { serverClient } from "@/app/lib/serverClient";
import Link from "next/link";

export default async function ServicesPage() {
  const services = await serverClient.services();

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "Service",
      "position": index + 1,
      "name": service.name,
      "description": service.description,
      "areaServed": service.areaServed
    }))
  };

  return (
    <div className="space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      
      <h1 className="text-3xl font-bold">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{service.name}</h2>
            <p className="text-gray-700">{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
