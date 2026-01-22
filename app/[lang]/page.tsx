import { Locale } from "@/lib/i18n/types"
import { getDictionary } from "@/app/i18n"
import { HeroSlider } from "@/app/ui/hero/HeroSlider"
import { ClarityBlock } from "@/app/ui/sections/ClarityBlock"
import { TrustSignals } from "@/app/ui/sections/TrustSignals"
import { EnhancedServices } from "@/app/ui/sections/EnhancedServices"
import { Differentiators } from "@/app/ui/sections/Differentiators"
import { FleetPreview } from "@/app/ui/sections/FleetPreview"
import { PrimaryCTA } from "@/app/ui/sections/PrimaryCTA"
import { serverApi } from "@/lib/api/serverClient"

export default async function LangHome({
  params
}: {
  params: { lang: Locale }
}) {
  const locale = params.lang
  const dict = await getDictionary(locale)
  const homepage = await serverApi.getHomepage()

  return (
    <>
      <HeroSlider slides={homepage.heroSlides} />
      
      <ClarityBlock />
      
      <TrustSignals />
      
      <EnhancedServices locale={locale} />
      
      <Differentiators />
      
      <FleetPreview locale={locale} />
      
      <PrimaryCTA />
    </>
  )
}


