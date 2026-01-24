import { Locale } from "@/lib/i18n/types"
import { getDictionary } from "@/app/i18n"
import { StaticHero } from "@/app/ui/hero/StaticHero"
import { ClarityBlock } from "@/app/ui/sections/ClarityBlock"
import { TrustSignals } from "@/app/ui/sections/TrustSignals"
import { EnhancedServices } from "@/app/ui/sections/EnhancedServices"
import { Differentiators } from "@/app/ui/sections/Differentiators"
import { SocialProof } from "@/app/ui/sections/SocialProof"
import { FleetPreview } from "@/app/ui/sections/FleetPreview"
import { MobileStickyBar } from "@/app/components/MobileStickyBar"
import { LocalServiceArea } from "@/app/components/sections/LocalServiceArea"
import { WhyChooseUs } from "@/app/components/sections/WhyChooseUs"

export default async function LangHome({
  params
}: {
  params: { lang: Locale }
}) {
  const locale = params.lang
  const dict = await getDictionary(locale)

  return (
    <>
      <StaticHero />
      
      <ClarityBlock />
      
      <TrustSignals />
      
      <EnhancedServices locale={locale} />
      
      <FleetPreview locale={locale} />
      
      <WhyChooseUs />
      
      <Differentiators />
      
      <SocialProof />
      
      <LocalServiceArea />
      
      <MobileStickyBar />
    </>
  )
}


