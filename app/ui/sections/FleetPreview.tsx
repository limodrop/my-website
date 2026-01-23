import { SmartImage } from "@/app/components/SmartImage";
import { Button } from "@/app/ui/buttons/Button";
import { Icons } from "@/app/components/Icons";

interface FleetPreviewProps {
  locale: string;
}

export function FleetPreview({ locale }: FleetPreviewProps) {
  const vehicles = [
    {
      name: "Luxury Sedan",
      image: "/images/fleet/sedan.jpg",
      passengers: "3 passengers",
      luggage: "3 large bags",
      slug: "luxury-sedan"
    },
    {
      name: "Black SUV",
      image: "/images/fleet/suv.jpg",
      passengers: "6 passengers",
      luggage: "6 large bags",
      slug: "black-suv"
    },
    {
      name: "Executive Van",
      image: "/images/fleet/van.jpg",
      passengers: "14 passengers",
      luggage: "10 large bags",
      slug: "executive-van"
    },
    {
      name: "Mini Coach",
      image: "/images/fleet/mini-coach.jpg",
      passengers: "20–30 passengers",
      luggage: "20+ large bags",
      slug: "mini-coach"
    }
  ];

  return (
    <section className="py-10 sm:py-16 bg-gray-50">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text)] mb-3">
          Our Fleet
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-[var(--textMuted)] max-w-2xl mx-auto">
          Choose from our selection of immaculate, late-model vehicles
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {vehicles.map((vehicle, index) => (
          <a
            key={index}
            href={`/${locale}/fleet/${vehicle.slug}`}
            className="
              rounded-lg overflow-hidden
              bg-white
              border border-[var(--border)]
              shadow-sm flex flex-col
              transition-all duration-200
              hover:-translate-y-1 hover:shadow-md hover:border-[var(--primary)]
              relative
              group
            "
          >
            {/* Most Popular Badge for Black SUV */}
            {index === 1 && (
              <div className="absolute top-4 right-4 z-10 bg-[var(--primary)] text-white text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </div>
            )}
            
            {/* 16:9 Image Container */}
            <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
              <SmartImage
                src={vehicle.image}
                alt={vehicle.name}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              {/* Subtle overlay for consistency */}
              <div className="absolute inset-0 bg-black/5"></div>
            </div>

            <div className="p-5 flex flex-col gap-4 flex-1">
              <h3 className="text-lg sm:text-xl font-semibold text-[var(--text)]">
                {vehicle.name}
              </h3>

              <div className="flex flex-col gap-2 text-xs sm:text-sm text-[var(--textMuted)]">
                <div className="flex items-center gap-2">
                  <Icons.user className="w-4 h-4 text-[var(--primary)]" />
                  <span>{vehicle.passengers}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icons.briefcase className="w-4 h-4 text-[var(--primary)]" />
                  <span>{vehicle.luggage}</span>
                </div>
              </div>

              <div className="mt-auto text-sm text-[var(--primary)] group-hover:text-[var(--primaryHover)] flex items-center gap-1 font-medium">
                <span>View Details</span>
                <Icons.arrow className="w-3 h-3" />
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button
          variant="ghost"
          as="a"
          href={`/${locale}/fleet`}
          className="gap-2"
        >
          <span>View Full Fleet</span>
          <Icons.arrow className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
}
