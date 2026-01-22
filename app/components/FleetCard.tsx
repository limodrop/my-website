import Link from "next/link";

interface FleetCardProps {
  name: string;
  slug: string;
  image?: string;
  passengers: number;
  bags: number;
}

export default function FleetCard({ name, slug, image, passengers, bags }: FleetCardProps) {
  return (
    <Link
      href={`/fleet/${slug}`}
      className="
        block rounded-lg overflow-hidden
        border border-[var(--border)]
        bg-[var(--surface)]
        shadow-sm
        transition-all duration-200
        hover:-translate-y-1 hover:shadow-md hover:border-[var(--primary)]
      "
    >
      {image && (
        <img src={image} alt={name} className="w-full h-48 object-cover" />
      )}

      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-[var(--text)]">
          {name}
        </h3>

        <p className="text-sm text-[var(--textMuted)]">
          {passengers} passengers • {bags} bags
        </p>
      </div>
    </Link>
  );
}
