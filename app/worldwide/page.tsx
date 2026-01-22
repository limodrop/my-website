import PageShell from "@/app/components/PageShell";
import Heading from "@/app/components/Heading";
import Text from "@/app/components/Text";

export async function generateMetadata() {
  return {
    title: "Worldwide Chauffeur Service — Oregon Town Car",
    description:
      "Global black car and chauffeur service across 50 U.S. states and 13 countries.",
    alternates: {
      canonical: `https://oregontowncar.com/worldwide`,
    },
  };
}

export default async function WorldwidePage() {
  const regions = [
    { name: "United States", detail: "50 states covered with airport and point-to-point service." },
    { name: "Canada", detail: "Major cities and business hubs." },
    { name: "Europe", detail: "Key capitals and financial centers." },
    { name: "Middle East", detail: "Premium chauffeur service in major cities." },
  ];

  return (
    <PageShell>
      <Heading level={1}>Worldwide Chauffeur Service</Heading>

      <Text muted>
        Premium black car and chauffeur service across 50 U.S. states and 13 countries.
      </Text>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className="
            rounded-lg p-6
            bg-[var(--surface)]
            border border-[var(--border)]
            shadow-sm
          "
        >
          <div className="w-full mb-4 h-48 bg-[var(--border)] rounded flex items-center justify-center">
            <span className="text-[var(--textMuted)]">World Map Placeholder</span>
          </div>
          <Text>
            Our network spans major airports, business districts, and hotels worldwide, with
            consistent service standards and professional chauffeurs.
          </Text>
        </div>

        <div className="space-y-4">
          {regions.map((r) => (
            <div
              key={r.name}
              className="
                rounded-lg p-4
                bg-[var(--surface)]
                border border-[var(--border)]
              "
            >
              <h3 className="font-semibold text-[var(--text)] mb-1">{r.name}</h3>
              <p className="text-sm text-[var(--textMuted)]">{r.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
