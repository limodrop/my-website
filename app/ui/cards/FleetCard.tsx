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
  image?: string;
}

export function FleetCard({ name, slug, capacity, luggage, locale, image }: FleetCardProps) {
  const Icon = Icons.car;
  const fleetImage = image || `/images/fleet/${slug}.jpg`;

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
      {/* 16:9 Image Container */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
        <SmartImage 
          src={fleetImage} 
          alt={name} 
          className="absolute inset-0 w-full h-full object-cover object-center" 
        />
        {/* Subtle overlay for consistency */}
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      <div className="p-4 sm:p-5 flex flex-col gap-2 sm:gap-3 flex-1">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--primary)] flex-shrink-0" />
          <h3 className="text-sm sm:text-base font-semibold text-[var(--text)]">
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
          className="mt-auto justify-start gap-2 px-0 min-h-[44px]"
        >
          <span className="text-xs sm:text-sm">View Details</span>
          <Icons.arrow className="w-3 h-3 sm:w-4 sm:h-4" />
        </Button>
      </div>
    </article>
  );
}
