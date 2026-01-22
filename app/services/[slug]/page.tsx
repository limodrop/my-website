import PageShell from "@/app/components/PageShell";
import Heading from "@/app/components/Heading";
import Text from "@/app/components/Text";
import Button from "@/app/components/Button";
import { serverClient } from "@/app/lib/serverClient";

interface Props {
  params: { slug: string; lang?: string }
}

export default async function ServiceDetailPage({ params }: Props) {
  const locale = params.lang || "en";
  const service = await serverClient.service(params.slug);

  return (
    <PageShell>
      <Heading level={1}>{service.title}</Heading>
      <Text muted className="mb-6">{service.tagline}</Text>

      <img
        src={service.image}
        alt={`${service.title} - Premium chauffeur service`}
        className="w-full rounded-lg mb-10"
        loading="lazy"
      />

      <Heading level={3}>Overview</Heading>
      <Text className="mb-8">{service.description}</Text>

      <Heading level={3}>Why Choose This Service</Heading>
      <ul className="list-disc ml-6 mb-10 text-[var(--text)]">
        {service.benefits?.map((b: string) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      <Button variant="primary" as="a" href={`/${locale}/contact`}>
        Book This Service
      </Button>
    </PageShell>
  );
}
