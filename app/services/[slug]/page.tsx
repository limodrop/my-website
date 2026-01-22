import { serverClient } from "@/app/lib/serverClient";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export default async function ServiceDetailPage({ params }: Props) {
  const service = await serverClient.service(params.slug);
  
  if (!service) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">{service.name}</h1>
        <p className="text-xl text-gray-700">{service.description}</p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Service Area</h2>
        <p className="text-gray-700">{service.areaServed}</p>
      </section>
    </div>
  );
}
