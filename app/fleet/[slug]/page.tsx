import PageShell from "@/app/components/PageShell";
import Heading from "@/app/components/Heading";
import Text from "@/app/components/Text";
import Button from "@/app/components/Button";
import { serverClient } from "@/app/lib/serverClient";

interface Props {
  params: { slug: string; lang?: string }
}

export default async function FleetDetailPage({ params }: Props) {
  const locale = params.lang || "en";
  const vehicle = await serverClient.fleetVehicle(params.slug);

  return (
    <PageShell>
      <Heading level={1}>{vehicle.name}</Heading>
      <Text muted className="mb-6">{vehicle.tagline}</Text>

      <img
        src={vehicle.image}
        alt={vehicle.name}
        className="w-full rounded-lg mb-10"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <div
          className="
            p-6 rounded-lg
            bg-[var(--surface)]
            border border-[var(--border)]
            shadow-sm
          "
        >
          <Heading level={3}>Capacity</Heading>
          <Text>{vehicle.passengers} passengers</Text>
          <Text>{vehicle.bags} bags</Text>
        </div>

        <div
          className="
            p-6 rounded-lg
            bg-[var(--surface)]
            border border-[var(--border)]
            shadow-sm
          "
        >
          <Heading level={3}>Ideal For</Heading>
          <ul className="list-disc ml-6 text-[var(--text)]">
            {vehicle.useCases?.map((u: string) => (
              <li key={u}>{u}</li>
            ))}
          </ul>
        </div>
      </div>

      <Heading level={3}>About This Vehicle</Heading>
      <Text className="mb-10">{vehicle.description}</Text>

      <Button variant="primary" as="a" href={`/${locale}/contact`}>
        Reserve This Vehicle
      </Button>
    </PageShell>
  );
}
