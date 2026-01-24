import { Icons } from "@/app/components/Icons";
import { Button } from "@/app/ui/buttons/Button";

interface EnhancedServicesProps {
  locale: string;
}

export function EnhancedServices({ locale }: EnhancedServicesProps) {
  const services = [
    {
      icon: Icons.airport,
      title: "Airport Transportation",
      description: "Reliable airport pickup and drop-off service",
      link: `/${locale}/services/airport-transportation`
    },
    {
      icon: Icons.briefcase,
      title: "Corporate Travel",
      description: "Professional transportation for business meetings and events",
      link: `/${locale}/services/corporate-travel`
    },
    {
      icon: Icons.clock,
      title: "Hourly Chauffeur",
      description: "Flexible by-the-hour service for meetings, tours, and events",
      link: `/${locale}/services/hourly-chauffeur`
    },
    {
      icon: Icons.wine,
      title: "Wine Tours",
      description: "Luxury wine tasting tours across Oregon vineyards",
      link: `/${locale}/services/wine-tours`
    },
    {
      icon: Icons.user,
      title: "VIP Arrival Service",
      description: "Meet & greet, guided arrivals, luxury pickup",
      link: `/${locale}/services/vip-arrival`
    },
    {
      icon: Icons.star,
      title: "Special Events",
      description: "Elegant transportation for weddings, proms, and special occasions.",
      link: `/${locale}/services/special-events`
    }
  ];

  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text)] mb-3">
          Our Services
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-[var(--textMuted)] max-w-2xl mx-auto">
          Premium chauffeur service tailored to your needs
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <article
              key={index}
              className="
                p-6 rounded-lg
                bg-[var(--surface)]
                border border-[var(--border)]
                shadow-sm
                flex flex-col gap-4
                transition-all duration-200
                hover:-translate-y-1 hover:shadow-md hover:border-[var(--primary)]
              "
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--background)] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[var(--primary)]" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-[var(--text)] mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--textMuted)]">
                    {service.description}
                  </p>
                </div>
              </div>

              <a
                href={service.link}
                className="
                  mt-auto
                  inline-flex items-center gap-2
                  text-sm text-[var(--primary)]
                  hover:gap-3
                  transition-all duration-200
                  font-medium
                "
              >
                <span>Learn More</span>
                <Icons.arrow className="w-4 h-4" />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
