import { ServiceCard } from "@/app/ui/cards/ServiceCard";
import { SectionHeader } from "@/app/ui/layout/SectionHeader";
import { Button } from "@/app/ui/buttons/Button";
import Link from "next/link";

interface Service {
  slug: string;
  name: string;
  description: string;
  icon: string;
  price?: string;
  features?: string[];
}

interface ServicesSectionProps {
  title: string;
  subtitle?: string;
  services: Service[];
  locale: string;
  showViewAll?: boolean;
}

export function ServicesSection({
  title,
  subtitle,
  services,
  locale,
  showViewAll = true,
}: ServicesSectionProps) {
  return (
    <section>
      <SectionHeader
        title={title}
        subtitle={subtitle}
        action={
          showViewAll ? (
            <Link href={`/${locale}/services`}>
              <Button variant="ghost">View All Services</Button>
            </Link>
          ) : undefined
        }
      />

      <div className="grid-responsive">
        {services.map((service) => (
          <ServiceCard
            key={service.slug}
            slug={service.slug}
            name={service.name}
            description={service.description}
            locale={locale}
          />
        ))}
      </div>
    </section>
  );
}
