import { FleetCard } from "@/app/ui/cards/FleetCard";
import { SectionHeader } from "@/app/ui/layout/SectionHeader";
import { Button } from "@/app/ui/buttons/Button";
import Link from "next/link";

interface Fleet {
  slug: string;
  name: string;
  make: string;
  model: string;
  year: number;
  capacity: number;
  luggage: number;
  description: string;
  features: string[];
  image: string;
  rate: string;
}

interface FleetSectionProps {
  title: string;
  subtitle?: string;
  fleet: Fleet[];
  locale: string;
  showViewAll?: boolean;
}

export function FleetSection({
  title,
  subtitle,
  fleet,
  locale,
  showViewAll = true,
}: FleetSectionProps) {
  return (
    <section>
      <SectionHeader
        title={title}
        subtitle={subtitle}
        action={
          showViewAll ? (
            <Link href={`/${locale}/fleet`}>
              <Button variant="ghost">View All Vehicles</Button>
            </Link>
          ) : undefined
        }
      />

      <div className="grid-responsive">
        {fleet.map((vehicle) => (
          <FleetCard
            key={vehicle.slug}
            slug={vehicle.slug}
            name={vehicle.name}
            make={vehicle.make}
            model={vehicle.model}
            capacity={vehicle.capacity}
            luggage={vehicle.luggage}
            image={vehicle.image}
            locale={locale}
          />
        ))}
      </div>
    </section>
  );
}
