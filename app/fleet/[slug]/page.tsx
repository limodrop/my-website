import { getFleetVehicleBySlug } from "@/lib/data/fleet";
import { generateVehicleSchema } from "@/lib/seo/jsonld";

interface Props {
  params: { slug: string }
}

export default function FleetDetailPage({ params }: Props) {
  const vehicle = getFleetVehicleBySlug(params.slug);

  if (!vehicle) {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Vehicle Not Found</h1>
        <p className="text-gray-700">
          The vehicle you're looking for is not available.
        </p>
      </div>
    );
  }

  const vehicleSchema = generateVehicleSchema(
    vehicle.name,
    vehicle.imageUrl,
    vehicle.seatingCapacity,
    `https://oregontowncar.com/en/fleet/${vehicle.slug}`
  );

  return (
    <div className="space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(vehicleSchema)
        }}
      />

      <div>
        <h1 className="text-4xl font-bold">{vehicle.name}</h1>
        <p className="text-xl text-gray-600 mt-2">{vehicle.description}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc list-inside space-y-2">
          {vehicle.features.map((feature, index) => (
            <li key={index} className="text-gray-700">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Seating Capacity</h3>
        <p className="text-gray-700">
          This vehicle can accommodate up to {vehicle.seatingCapacity} passengers.
        </p>
      </div>
    </div>
  )
}
