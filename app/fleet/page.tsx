import PageShell from "@/app/components/PageShell";
import Heading from "@/app/components/Heading";
import Text from "@/app/components/Text";
import FleetCard from "@/app/components/FleetCard";
import { serverClient } from "@/app/lib/serverClient";
import { getDictionary } from "@/app/i18n";

export default async function FleetPage() {
  const locale = "en"; // Default locale - can be extended with params later
  const dict = await getDictionary(locale);
  const fleet = await serverClient.fleet();

  return (
    <PageShell>
      <Heading level={1}>{dict.nav.fleet}</Heading>
      <Text muted className="mb-10">
        Luxury sedans, SUVs, Sprinters, and executive vehicles — all driven by professional
        chauffeurs.
      </Text>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {fleet.map((f) => (
          <FleetCard key={f.slug} {...f} locale={locale} />
        ))}
      </div>
    </PageShell>
  );
}
