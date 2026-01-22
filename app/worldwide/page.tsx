import { serverClient } from "@/app/lib/serverClient";
import Link from "next/link";

export default async function WorldwidePage() {
  const regions = await serverClient.regions();

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Worldwide Service</h1>
        <p className="text-lg text-gray-700">
          Oregon Town Car provides premium chauffeur services globally through our network of trusted partners.
        </p>
      </section>

      <section className="space-y-6">
        {regions.map((region) => (
          <div key={region.slug} className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-2">{region.headline}</h2>
            <p className="text-lg text-gray-700 mb-4">{region.subheadline}</p>
            <p className="text-sm text-gray-600">{region.seoDescription}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
