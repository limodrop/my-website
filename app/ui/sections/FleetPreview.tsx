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
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
      passengers: "3 passengers",
      luggage: "3 large bags",
      slug: "luxury-sedan"
    },
    {
      name: "Black SUV",
      image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
      passengers: "6 passengers",
      luggage: "6 large bags",
      slug: "black-suv"
    },
    {
      name: "Executive Van",
      image: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=800&q=80",
      passengers: "14 passengers",
      luggage: "10 large bags",
      slug: "executive-van"
    }
  ];

  return (
    <section className="py-10 sm:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text)] mb-3">
          Our Fleet
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-[var(--textMuted)] max-w-2xl mx-auto">
          Choose from our selection of immaculate, late-model vehicles
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {vehicles.map((vehicle, index) => (
          <article
            key={index}
            className="
              rounded-lg overflow-hidden
              bg-[var(--surface)]
              border border-[var(--border)]
              shadow-sm flex flex-col
              transition-all duration-200
              hover:-translate-y-1 hover:shadow-md hover:border-[var(--primary)]
              relative
            "
          >
            {/* Most Popular Badge for Black SUV */}
            {index === 1 && (
              <div className="absolute top-4 right-4 z-10 bg-[var(--primary)] text-white text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </div>
            )}
            
            <SmartImage
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full max-w-full h-48 sm:h-56 object-cover"
            />

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

              <Button
                variant="primary"
                as="a"
                href="https://book.oregontowncar.com"
                className="mt-auto w-full justify-center"
              >
                Book Now
              </Button>
            </div>
          </article>
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
