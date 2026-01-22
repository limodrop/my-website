import { SmartImage } from "@/app/components/SmartImage";
import { Tag } from "@/app/components/Tag";
import { Button } from "@/app/ui/buttons/Button";
import { Icons } from "@/app/components/Icons";

interface FleetCardProps {
  name: string;
  slug: string;
  capacity?: string;
  luggage?: string;
  locale: string;
}

export function FleetCard({ name, slug, capacity, luggage, locale }: FleetCardProps) {
  const Icon = Icons.car;
  const fleetImage = `https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&q=80`;

  return (
    <article
      className="
        rounded-lg overflow-hidden
        bg-[var(--surface)]
        border border-[var(--border)]
        shadow-sm flex flex-col
        transition-all duration-200
        hover:-translate-y-1 hover:shadow-md hover:border-[var(--primary)]
      "
    >
      <SmartImage src={fleetImage} alt={name} className="h-40" />

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-[var(--primary)]" />
          <h3 className="text-base font-semibold text-[var(--text)]">
            {name}
          </h3>
        </div>

        <div className="flex flex-wrap gap-2 text-xs">
          {capacity && <Tag>{capacity}</Tag>}
          {luggage && <Tag>{luggage}</Tag>}
        </div>

        <Button
          variant="ghost"
          as="a"
          href={`/${locale}/fleet/${slug}`}
          className="mt-auto justify-start gap-2 px-0"
        >
          View Details
          <Icons.arrow className="w-4 h-4" />
        </Button>
      </div>
    </article>
  );
}
