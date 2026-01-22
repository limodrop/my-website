import PageShell from "@/app/components/PageShell";
import Heading from "@/app/components/Heading";
import Text from "@/app/components/Text";
import Link from "next/link";
import { serverClient } from "@/app/lib/serverClient";

export async function generateMetadata() {
  return {
    title: "Countries — Oregon Town Car",
    description:
      "Browse all countries where we provide premium chauffeur service.",
    alternates: {
      canonical: `https://oregontowncar.com/countries`,
    },
  };
}

export default async function CountriesPage() {
  const countries = await serverClient.countries();

  return (
    <PageShell>
      <Heading level={1}>Countries</Heading>
      <Text muted>Browse all countries where we provide chauffeur service.</Text>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {countries.map((country) => (
          <Link
            key={country.slug}
            href={`/countries/${country.slug}`}
            className="
              rounded-lg p-4
              bg-[var(--surface)]
              border border-[var(--border)]
              text-[var(--text)]
              hover:border-[var(--primary)]
              transition-colors
            "
          >
            <h3 className="font-semibold mb-1">{country.name}</h3>
            <p className="text-sm text-[var(--textMuted)]">
              {country.cityCount} cities
            </p>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
