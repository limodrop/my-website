import Link from "next/link";

interface ServiceCardProps {
  title: string;
  slug: string;
  description: string;
  image?: string;
}

export default function ServiceCard({ title, slug, description, image }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${slug}`}
      className="
        block rounded-lg overflow-hidden
        border border-[var(--border)]
        bg-[var(--surface)]
        shadow-sm
        transition-transform transition-shadow transition-colors
        duration-200
        hover:-translate-y-1 hover:shadow-md hover:border-[var(--primary)]
      "
    >
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}

      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-[var(--text)]">
          {title}
        </h3>

        <p className="text-sm text-[var(--textMuted)]">
          {description}
        </p>
      </div>
    </Link>
  );
}
