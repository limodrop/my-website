import { messages } from "@/lib/i18n/messages"
import { Locale } from "@/lib/i18n/types"
import { serverApi } from "@/lib/api/serverClient"
import { getDictionary } from "@/app/i18n"
import { HeroSlider } from "@/app/ui/hero/HeroSlider"
import { Section } from "@/app/ui/layout/Section"
import { ServiceCard } from "@/app/ui/cards/ServiceCard"
import { FleetCard } from "@/app/ui/cards/FleetCard"
import { CityCard } from "@/app/ui/cards/CityCard"
import { WorldwideMapSection } from "@/app/ui/worldwide/WorldwideMapSection"
import { Button } from "@/app/ui/buttons/Button"

export default async function LangHome({
  params
}: {
  params: { lang: Locale }
}) {
  const locale = params.lang
  const dict = await getDictionary(locale)
  const t = messages[params.lang]
  const [homepage, serviceArea, promotions, services, fleet, cities] = await Promise.all([
    serverApi.getHomepage(),
    serverApi.getServiceArea(),
    serverApi.getPromotions(),
    serverApi.getServices(),
    serverApi.getFleet(),
    serverApi.getCities(),
  ])

  const serviceIcons = ["✈️", "💼", "🍷", "🎉"]
  const fleetIcons = ["🚗", "🚙", "🚐"]

  return (
    <div>
      {/* HERO SLIDER */}
      <HeroSlider slides={homepage.heroSlides} />

      {/* PROMOTIONS BANNER */}
      {promotions.length > 0 && (
        <section className="bg-yellow-600 text-black py-4 px-4">
          <div className="container mx-auto text-center">
            <p className="text-lg font-semibold">
              🎉 {promotions[0].title} - {promotions[0].description}
            </p>
          </div>
        </section>
      )}

      {/* STATS SECTION */}
      <Section background="dark">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div>
            <div className="text-4xl font-bold text-yellow-500">{serviceArea.countries.length}</div>
            <div className="text-sm text-gray-400 mt-1">Countries</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-500">50</div>
            <div className="text-sm text-gray-400 mt-1">U.S. States</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-500">{serviceArea.majorCities.length}+</div>
            <div className="text-sm text-gray-400 mt-1">Major Cities</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-500">24/7</div>
            <div className="text-sm text-gray-400 mt-1">Availability</div>
          </div>
        </div>
      </Section>

      {/* FEATURED SERVICES */}
      <Section 
        title={dict.pages.services.title}
        subtitle={dict.pages.services.subtitle}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 4).map((service, idx) => (
            <ServiceCard
              key={service.id}
              name={service.name}
              slug={service.slug}
              description={service.description}
              icon={serviceIcons[idx]}
              locale={locale}
            />
          ))}
        </div>
      </Section>

      {/* FEATURED FLEET */}
      <Section 
        title={dict.pages.fleet.title}
        subtitle={dict.pages.fleet.subtitle}
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fleet.slice(0, 3).map((vehicle, idx) => (
            <FleetCard
              key={vehicle.id}
              name={vehicle.name}
              slug={vehicle.slug}
              capacity={vehicle.seats ? `${vehicle.seats} passengers` : undefined}
              icon={fleetIcons[idx]}
              locale={locale}
            />
          ))}
        </div>
      </Section>

      {/* FEATURED CITIES */}
      <Section 
        title={dict.pages.cities.title}
        subtitle={dict.pages.cities.subtitle}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {cities.slice(0, 10).map((city) => (
            <CityCard
              key={city.id}
              name={city.name}
              slug={city.slug}
              locale={locale}
            />
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="secondary" as="a" href={`/${locale}/cities`}>
            View All Locations →
          </Button>
        </div>
      </Section>

      {/* WORLDWIDE SERVICE MAP */}
      <WorldwideMapSection 
        countries={serviceArea.countries}
        cities={serviceArea.majorCities.map((name) => ({ name }))}
      />
    </div>
  )
}


