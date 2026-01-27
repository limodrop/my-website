import { CityCard } from "@/app/ui/cards/CityCard";
import { SectionHeader } from "@/app/ui/layout/SectionHeader";
import { Button } from "@/app/ui/buttons/Button";
import Link from "next/link";

interface City {
  slug: string;
  name: string;
  state: string;
  description: string;
  population: string;
  zipCodes: string[];
}

interface CitiesSectionProps {
  title: string;
  subtitle?: string;
  cities: City[];
  locale: string;
  showViewAll?: boolean;
}

export function CitiesSection({
  title,
  subtitle,
  cities,
  locale,
  showViewAll = true,
}: CitiesSectionProps) {
  return (
    <section>
      <SectionHeader
        title={title}
        subtitle={subtitle}
        action={
          showViewAll ? (
            <Link href={`/${locale}/cities`}>
              <Button variant="ghost">View All Cities</Button>
            </Link>
          ) : undefined
        }
      />

      <div className="grid-responsive">
        {cities.map((city) => (
          <CityCard
            key={city.slug}
            slug={city.slug}
            name={city.name}
            locale={locale}
          />
        ))}
      </div>
    </section>
  );
}
