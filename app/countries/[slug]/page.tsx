import PageShell from "@/app/components/PageShell";
import Heading from "@/app/components/Heading";
import Text from "@/app/components/Text";
import Link from "next/link";
import { serverClient } from "@/app/lib/serverClient";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const country = await serverClient.country(params.slug);
  
  return {
    title: `${country.name} — Oregon Town Car`,
    description: country.description,
    alternates: {
      canonical: `https://oregontowncar.com/countries/${params.slug}`,
    },
  };
}

export default async function CountryDetailPage({ params }: { params: { slug: string } }) {
  const country = await serverClient.country(params.slug);

  return (
    <PageShell>
      <Heading level={1}>{country.name}</Heading>
      <Text muted>{country.description}</Text>

      <h2 className="mt-8 mb-3 text-xl font-semibold text-[var(--text)]">
        Cities we serve
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {country.cities.map((city) => (
          <Link
            key={city.slug}
            href={`/cities/${city.slug}`}
            className="
              rounded-lg p-4
              bg-[var(--surface)]
              border border-[var(--border)]
              text-[var(--text)]
              hover:border-[var(--primary)]
              transition-colors
            "
          >
            <h3 className="font-semibold">{city.name}</h3>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
