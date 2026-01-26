import { Locale } from "@/lib/i18n/types"
import { getDictionary } from "@/app/i18n"
import { StaticHero } from "@/app/ui/hero/StaticHero"
import { ClarityBlock } from "@/app/ui/sections/ClarityBlock"
import { EnhancedServices } from "@/app/ui/sections/EnhancedServices"
import { SocialProof } from "@/app/ui/sections/SocialProof"
import { FleetPreview } from "@/app/ui/sections/FleetPreview"
import { MobileStickyBar } from "@/app/components/MobileStickyBar"
import { LocalServiceArea } from "@/app/components/sections/LocalServiceArea"
import { WhyChooseUs } from "@/app/components/sections/WhyChooseUs"
import { HomepageFAQs } from "@/app/components/seo/HomepageFAQs"

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
      
      <EnhancedServices locale={locale} />
      
      <FleetPreview locale={locale} />
      
      <WhyChooseUs />
      
      <SocialProof />
      
      <HomepageFAQs locale={locale} />
      
      <LocalServiceArea />
      
      <MobileStickyBar />
    </>
  )
}


