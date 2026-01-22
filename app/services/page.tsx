import PageShell from "@/app/components/PageShell";
import Heading from "@/app/components/Heading";
import Text from "@/app/components/Text";
import ServiceCard from "@/app/components/ServiceCard";

export async function generateMetadata() {
  return {
    title: "Chauffeur Services — Oregon Town Car",
    description:
      "Explore premium chauffeur services, airport transfers, corporate travel, and point-to-point rides worldwide.",
    alternates: {
      canonical: `https://oregontowncar.com/services`,
    },
  };
}

export default function ServicesPage() {
  const services = [
    { 
      slug: "airport", 
      title: "Airport Transportation",
      description: "Reliable airport pickup and drop-off service to all major airports."
    },
    { 
      slug: "corporate", 
      title: "Corporate Travel",
      description: "Professional chauffeur service for business meetings and corporate events."
    },
    { 
      slug: "wine", 
      title: "Wine Tours",
      description: "Luxury wine tour experiences in Oregon's finest wine regions."
    },
    { 
      slug: "long_distance", 
      title: "Long Distance",
      description: "Comfortable long-distance chauffeur service for extended trips."
    }
  ];

  return (
    <PageShell>
      <Heading level={1}>Our Services</Heading>
      <Text muted>
        Premium chauffeur services tailored to your needs.
      </Text>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.slug}
            title={service.title}
            slug={service.slug}
            description={service.description}
          />
        ))}
      </div>
    </PageShell>
  );
}
