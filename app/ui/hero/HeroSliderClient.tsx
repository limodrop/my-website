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
    <div
      className="w-full rounded-lg overflow-hidden mb-10 relative bg-[var(--surface)] border border-[var(--border)] shadow-sm"
    >
      {slide.image && (
        <SmartImage
          src={slide.image}
          className="w-full h-[420px] object-cover"
          alt={slide.title}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-10">
        <h1 className="text-4xl md:text-5xl font-semibold text-white mb-3">
          {slide.title}
        </h1>

        <p className="text-lg text-white/90 mb-6 max-w-2xl">
          {slide.subtitle}
        </p>

        <Button
          variant="primary"
          as="a"
          href={slide.ctaLink || "https://book.oregontowncar.com"}
        >
          {slide.cta}
        </Button>
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
