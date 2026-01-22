"use client"

import { useState, useEffect } from "react"
import { Button } from "../buttons/Button"
import { SmartImage } from "@/app/components/SmartImage"
import { theme } from "../theme"

type HeroSlide = {
  title: string
  subtitle: string
  cta: string
  ctaLink?: string
  image?: string
}

interface HeroSliderClientProps {
  slides: HeroSlide[]
}

export function HeroSliderClient({ slides }: HeroSliderClientProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [playing, setPlaying] = useState(true)

  useEffect(() => {
    if (!playing) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [playing, slides.length])

  if (slides.length === 0) return null

  const slide = slides[currentSlide]

  return (
    <div className="relative w-screen -mx-4 sm:-mx-6 mb-10 sm:mb-[var(--space-section)]">
      {slide.image && (
        <SmartImage
          src={slide.image}
          className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
          alt={slide.title}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-3">
            {slide.title}
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 max-w-2xl">
            {slide.subtitle}
          </p>

          <Button
            variant="primary"
            as="a"
            href={slide.ctaLink || "https://book.oregontowncar.com"}
            className="w-full sm:w-auto"
          >
            {slide.cta}
          </Button>
        </div>
      </div>

      {/* Slide indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`
                transition-all rounded-full cursor-pointer
                ${idx === currentSlide ? "w-8 bg-[var(--primary)]" : "w-3 bg-white/50"}
                h-3
              `}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* Play/Pause control */}
      <button
        onClick={() => setPlaying(!playing)}
        className="absolute top-4 right-4 px-3 py-1 rounded bg-white/90 text-[var(--text)] text-sm font-medium hover:bg-white transition"
      >
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  )
}
