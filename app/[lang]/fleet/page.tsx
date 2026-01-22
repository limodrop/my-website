import { serverApi } from "@/lib/api/serverClient"
import { Section } from "@/app/ui/layout/Section"
import { FleetCard } from "@/app/ui/cards/FleetCard"

export default async function FleetPage() {
  const fleet = await serverApi.getFleet()
  const fleetIcons = ["🚗", "🚙", "🚐", "🚕", "🚘", "🚍"]

  return (
    <div>
      <Section 
        title="Our Premium Fleet" 
        subtitle="Luxury vehicles for every occasion"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fleet.map((vehicle, idx) => (
            <FleetCard
              key={vehicle.id}
              name={vehicle.name}
              slug={vehicle.slug}
              capacity={vehicle.seats ? `${vehicle.seats} passengers` : undefined}
              icon={fleetIcons[idx % fleetIcons.length]}
            />
          ))}
        </div>
      </Section>
    </div>
  )
}
