import { HeroSliderClient } from "./HeroSliderClient"

type HeroSlide = {
  title: string
  subtitle: string
  cta: string
  ctaLink?: string
}

interface HeroSliderProps {
  slides: HeroSlide[]
}

export function HeroSlider({ slides }: HeroSliderProps) {
  return <HeroSliderClient slides={slides} />
}
