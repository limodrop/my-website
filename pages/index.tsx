import HeroBlock from "@/components/ui/HeroBlock"
import FleetCarousel from "@/components/ui/FleetCarousel"
import PowerFooter from "@/components/ui/PowerFooter"
import PersonalizedBlock from "@/components/home/PersonalizedBlock"
import { resolveLayout } from "@/lib/layout/layoutVariants"
import { getSessionProfile } from "@/lib/intel/sessionProfile"

export default function HomePage() {
  const profile = getSessionProfile()
  const layout = resolveLayout(profile)

  return (
    <main>
      {layout.find((b) => b.id === "hero" && b.enabled) && <HeroBlock />}
      {layout.find((b) => b.id === "personalized" && b.enabled) && <PersonalizedBlock />}
      {layout.find((b) => b.id === "fleet" && b.enabled) && <FleetCarousel />}
      {layout.find((b) => b.id === "promos" && b.enabled) && (
        <div className="bg-yellow-50 text-center py-12">[Promo Highlights Placeholder]</div>
      )}
      {layout.find((b) => b.id === "footer" && b.enabled) && <PowerFooter />}
    </main>
  )
}
