import Link from "next/link";
import { Icons } from "@/app/components/Icons";
import { Button } from "@/app/ui/buttons/Button";

interface CountryCardProps {
  slug: string;
  name: string;
  tagline?: string;
  description?: string;
  locale: string;
}

export function CountryCard({
  slug,
  name,
  tagline,
  description,
  locale,
}: CountryCardProps) {
  return (
    <div className="p-4 sm:p-5 lg:p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-3 mb-3 sm:mb-4">
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0">
          <Icons.globe className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--primary)]" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-[var(--text)] truncate">
            {name}
          </h3>
          {tagline && (
            <p className="text-xs sm:text-sm text-[var(--textMuted)] line-clamp-1">
              {tagline}
            </p>
          )}
        </div>
      </div>

      {description && (
        <p className="text-sm sm:text-base text-[var(--textMuted)] line-clamp-2 mb-4">
          {description}
        </p>
      )}

      <Link href={`/${locale}/countries/${slug}`}>
        <Button variant="ghost" className="w-full sm:w-auto min-h-[44px]">
          View Coverage
          <Icons.arrow className="w-4 h-4 ml-2" />
        </Button>
      </Link>
    </div>
  );
}
