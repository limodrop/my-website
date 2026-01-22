import PageShell from "@/app/components/PageShell";
import Heading from "@/app/components/Heading";
import Text from "@/app/components/Text";

export default function AboutPage() {
  return (
    <PageShell>
      <Heading level={1}>About Oregon Town Car</Heading>

      <Text muted>
        Premium chauffeur service built on reliability, professionalism, and global reach.
      </Text>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className="
            p-6 rounded-lg
            bg-[var(--surface)]
            border border-[var(--border)]
            shadow-sm
          "
        >
          <Heading level={3}>Our Mission</Heading>
          <Text>
            To deliver world‑class transportation with a focus on safety, comfort, and
            exceptional service — whether you're traveling across town or across the world.
          </Text>
        </div>

        <div
          className="
            p-6 rounded-lg
            bg-[var(--surface)]
            border border-[var(--border)]
            shadow-sm
          "
        >
          <Heading level={3}>Our Network</Heading>
          <Text>
            We operate in 50 U.S. states and 13 countries, partnering with vetted
            professional chauffeurs to ensure consistent quality everywhere you travel.
          </Text>
        </div>
      </div>
    </PageShell>
  );
}
