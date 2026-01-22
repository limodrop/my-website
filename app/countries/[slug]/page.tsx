import PageShell from "@/app/components/PageShell";
import Heading from "@/app/components/Heading";
import Text from "@/app/components/Text";
import Link from "next/link";
import { serverClient } from "@/app/lib/serverClient";

interface Props {
  params: { slug: string };
}

export default async function CountryDetail({ params }: Props) {
  const locale = "en"; // Default locale
  const country = await serverClient.country(params.slug);

  return (
    <PageShell>
      <Heading level={1}>{country.name}</Heading>
      <Text muted className="mb-6">{country.tagline}</Text>

      <Heading level={3}>Primary Airports</Heading>
      <div className="flex flex-wrap gap-2 mb-8">
        {country.primaryAirports.map((a) => (
          <span
            key={a}
            className="
              px-3 py-1 rounded-full text-sm
              bg-[var(--surface)] border border-[var(--border)]
            "
          >
            {a}
          </span>
        ))}
      </div>

      <Heading level={3}>Cities We Serve</Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {country.cities.map((city) => (
          <Link
            key={city.slug}
            href={`/cities/${city.slug}`}
            className="
              p-4 rounded-lg
              bg-[var(--surface)]
              border border-[var(--border)]
              hover:border-[var(--primary)]
              transition
            "
          >
            {city.name}
          </Link>
        ))}
      </div>

      <Heading level={3}>About {country.name}</Heading>
      <Text>{country.seoDescription}</Text>
    </PageShell>
  );
}
