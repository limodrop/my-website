import PageShell from "@/app/components/PageShell";
import Heading from "@/app/components/Heading";
import Text from "@/app/components/Text";
import ServiceCard from "@/app/components/ServiceCard";
import { serverClient } from "@/app/lib/serverClient";
import { getDictionary } from "@/app/i18n";

export default async function ServicesPage() {
  const locale = "en"; // Default locale - can be extended with params later
  const dict = await getDictionary(locale);
  const services = await serverClient.services();

  return (
    <PageShell>
      <Heading level={1}>{dict.nav.services}</Heading>
      <Text muted className="mb-10">
        Premium chauffeur services designed for airport travel, corporate needs, and
        point‑to‑point transportation worldwide.
      </Text>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.slug} {...s} locale={locale} />
        ))}
      </div>
    </PageShell>
  );
}
