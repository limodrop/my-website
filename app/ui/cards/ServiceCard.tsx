import { Button } from "@/app/ui/buttons/Button";
import { Icons } from "@/app/components/Icons";

interface ServiceCardProps {
  name: string;
  slug: string;
  description?: string;
  locale: string;
}

export function ServiceCard({ name, slug, description, locale }: ServiceCardProps) {
  const Icon = Icons.airport;

  return (
    <article
      className="
        p-6 rounded-lg
        bg-[var(--surface)]
        border border-[var(--border)]
        shadow-sm
        flex flex-col gap-3
        transition-all duration-200
        hover:-translate-y-1 hover:shadow-md hover:border-[var(--primary)]
      "
    >
      <div className="flex items-center gap-3">
        <div
          className="
            w-9 h-9 rounded-full
            bg-[var(--background)]
            flex items-center justify-center
          "
        >
          <Icon className="w-5 h-5 text-[var(--primary)]" />
        </div>
        <h3 className="text-base font-semibold text-[var(--text)]">
          {name}
        </h3>
      </div>

      {description && (
        <p className="text-sm text-[var(--textMuted)] flex-1 line-clamp-2">
          {description}
        </p>
      )}

      <Button
        variant="ghost"
        as="a"
        href={`/${locale}/services/${slug}`}
        className="justify-start gap-2 px-0"
      >
        Learn More
        <Icons.arrow className="w-4 h-4" />
      </Button>
    </article>
  );
}
