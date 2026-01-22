import PageShell from "@/app/components/PageShell";
import Heading from "@/app/components/Heading";
import Text from "@/app/components/Text";
import CityCard from "@/app/components/CityCard";

export async function generateMetadata() {
  return {
    title: "Cities We Serve — Oregon Town Car",
    description:
      "Find premium chauffeur service in major cities across the U.S. and worldwide.",
    alternates: {
      canonical: `https://oregontowncar.com/cities`,
    },
  };
}

export default function CitiesPage() {
  const cities = [
    { slug: "portland", name: "Portland" },
    { slug: "beaverton", name: "Beaverton" },
    { slug: "hillsboro", name: "Hillsboro" },
    { slug: "vancouver", name: "Vancouver" }
  ];

  return (
    <PageShell>
      <Heading level={1}>Cities We Serve</Heading>
      <Text muted>
        Premium chauffeur service in major cities across the Pacific Northwest.
      </Text>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cities.map((city) => (
          <CityCard
            key={city.slug}
            name={city.name}
            slug={city.slug}
          />
        ))}
      </div>
    </PageShell>
  );
}
