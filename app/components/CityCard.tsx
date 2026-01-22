import Link from "next/link";

interface CityCardProps {
  name: string;
  slug: string;
  image?: string;
}

export default function CityCard({ name, slug, image }: CityCardProps) {
  return (
    <Link
      href={`/cities/${slug}`}
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
        <h3 className="text-xl font-semibold text-[var(--text)]">
          {name}
        </h3>
      </div>
    </Link>
  );
}
