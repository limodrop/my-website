import PageShell from "@/app/components/PageShell";
import Heading from "@/app/components/Heading";
import Text from "@/app/components/Text";
import FleetCard from "@/app/components/FleetCard";

export async function generateMetadata() {
  return {
    title: "Luxury Fleet — Oregon Town Car",
    description:
      "Browse our fleet of luxury sedans, SUVs, Sprinter vans, and executive vehicles for every occasion.",
    alternates: {
      canonical: `https://oregontowncar.com/fleet`,
    },
  };
}

export default function FleetPage() {
  const fleet = [
    { 
      slug: "sedan", 
      name: "Luxury Sedan",
      passengers: 3,
      bags: 2
    },
    { 
      slug: "suv", 
      name: "Premium SUV",
      passengers: 6,
      bags: 4
    },
    { 
      slug: "sprinter", 
      name: "Mercedes Sprinter",
      passengers: 14,
      bags: 10
    }
  ];

  return (
    <PageShell>
      <Heading level={1}>Our Fleet</Heading>
      <Text muted>
        Experience luxury travel in our premium fleet of vehicles.
      </Text>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fleet.map((vehicle) => (
          <FleetCard
            key={vehicle.slug}
            name={vehicle.name}
            slug={vehicle.slug}
            passengers={vehicle.passengers}
            bags={vehicle.bags}
          />
        ))}
      </div>
    </PageShell>
  );
}
