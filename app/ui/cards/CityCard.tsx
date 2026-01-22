import { Button } from "@/app/ui/buttons/Button";
import { Icons } from "@/app/components/Icons";

interface CityCardProps {
  name: string;
  slug: string;
  country?: string;
  locale: string;
}

export function CityCard({ name, slug, country, locale }: CityCardProps) {
  const Icon = Icons.city;

  return (
    <article
      className="
        p-4 sm:p-5 rounded-lg
        bg-[var(--surface)]
        border border-[var(--border)]
        shadow-sm flex flex-col gap-2 sm:gap-3
        transition-all duration-200
        hover:-translate-y-1 hover:shadow-md hover:border-[var(--primary)]
      "
    >
      <div className="flex items-center gap-2 sm:gap-3">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--primary)] flex-shrink-0" />
        <div className="min-w-0">
          <h3 className="text-sm sm:text-base font-semibold text-[var(--text)] truncate">
            {name}
          </h3>
          {country && (
            <p className="text-xs text-[var(--textMuted)] truncate">{country}</p>
          )}
        </div>
      </div>

      <Button
        variant="ghost"
        as="a"
        href={`/${locale}/cities/${slug}`}
        className="mt-auto justify-start gap-2 px-0 min-h-[44px]"
      >
        <span className="text-xs sm:text-sm">View City</span>
        <Icons.arrow className="w-3 h-3 sm:w-4 sm:h-4" />
      </Button>
    </article>
  );
}
