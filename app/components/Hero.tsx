import Button from "@/app/components/Button";

type HeroProps = {
  locale?: string;
};

export default function Hero({ locale = "en" }: HeroProps) {
  return (
    <div
      className="
        w-full rounded-lg overflow-hidden mb-10
        bg-[var(--surface)]
        border border-[var(--border)]
        shadow-sm
        p-10
      "
    >
      <h1 className="text-4xl font-semibold text-[var(--text)] mb-4">
        Premium Chauffeur Service Worldwide
      </h1>

      <p className="text-lg text-[var(--textMuted)] mb-6 max-w-2xl">
        Luxury black car service across 50 U.S. states and 13 countries. Airport transfers,
        corporate travel, and point‑to‑point rides — all with professional chauffeurs.
      </p>

      <Button variant="primary" as="a" href={`/services`}>
        Explore Services
      </Button>
    </div>
  );
}
