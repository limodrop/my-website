import PageShell from "@/app/components/PageShell";
import Heading from "@/app/components/Heading";
import Text from "@/app/components/Text";
import { serverClient } from "@/app/lib/serverClient";

interface Props {
  params: { slug: string };
}

export default async function CityDetail({ params }: Props) {
  const locale = "en"; // Default locale
  const city = await serverClient.city(params.slug);

  return (
    <PageShell>
      <Heading level={1}>{city.name}</Heading>
      <Text muted className="mb-6">{city.tagline}</Text>

      <img src={city.image} className="w-full rounded-lg mb-8" alt={city.name} />

      <Heading level={3}>Popular Use Cases</Heading>
      <ul className="list-disc ml-6 mb-8 text-[var(--text)]">
        {city.primaryUseCases.map((u) => (
          <li key={u}>{u}</li>
        ))}
      </ul>

      <Heading level={3}>About {city.name}</Heading>
      <Text>{city.seoDescription}</Text>
    </PageShell>
  );
}
