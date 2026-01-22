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
        p-5 rounded-lg
        bg-[var(--surface)]
        border border-[var(--border)]
        shadow-sm flex flex-col gap-3
        transition-all duration-200
        hover:-translate-y-1 hover:shadow-md hover:border-[var(--primary)]
      "
    >
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-[var(--primary)]" />
        <div>
          <h3 className="text-base font-semibold text-[var(--text)]">
            {name}
          </h3>
          {country && (
            <p className="text-xs text-[var(--textMuted)]">{country}</p>
          )}
        </div>
      </div>

      <Button
        variant="ghost"
        as="a"
        href={`/${locale}/cities/${slug}`}
        className="mt-auto justify-start gap-2 px-0"
      >
        View City
        <Icons.arrow className="w-4 h-4" />
      </Button>
    </article>
  );
}
