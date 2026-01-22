import { serverClient } from "@/app/lib/serverClient";
import { notFound } from "next/navigation";
import BookButton from "@/components/BookButton";

interface Props {
  params: { slug: string };
}

export default async function FleetDetailPage({ params }: Props) {
  const vehicle = await serverClient.vehicle(params.slug);
  
  if (!vehicle) {
    notFound();
  }

  const vehicleSchema = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    "name": vehicle.name,
    "image": `https://oregontowncar.com${vehicle.image}`,
    "seatingCapacity": vehicle.seatingCapacity,
    "url": `https://oregontowncar.com/fleet/${vehicle.slug}`,
    "description": vehicle.description
  };

  return (
    <div className="space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }}
      />
      
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">{vehicle.name}</h1>
        <p className="text-xl text-gray-700">{vehicle.description}</p>
        
        <BookButton
          location="fleet_detail"
          className="inline-block px-6 py-3 bg-black text-white rounded"
        >
          Reserve Vehicle
        </BookButton>
      </section>

      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Vehicle Details</h2>
        <p className="text-gray-700">Seating Capacity: {vehicle.seatingCapacity} passengers</p>
      </section>
    </div>
  );
}
