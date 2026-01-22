"use client"

import { useState, useEffect } from "react"
import { Button } from "../buttons/Button"
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
      className="w-full rounded-lg overflow-hidden mb-10 relative"
      style={{
        backgroundColor: theme.colors.surface,
        border: `1px solid ${theme.colors.border}`,
        boxShadow: theme.shadow.card,
      }}
    >
      {slide.image && (
        <img
          src={slide.image}
          className="w-full h-[420px] object-cover"
          alt={slide.title}
        />
      )}

      <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-10">
        <h2 className="text-4xl font-semibold text-white mb-4">
          {slide.title}
        </h2>

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
              className="transition-all rounded-full cursor-pointer"
              style={{
                width: idx === currentSlide ? "32px" : "12px",
                height: "12px",
                backgroundColor: idx === currentSlide ? theme.colors.primary : "rgba(255, 255, 255, 0.5)",
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* Play/Pause control */}
      <button
        onClick={() => setPlaying(!playing)}
        className="absolute top-4 right-4 px-3 py-1 rounded bg-white/80 text-black text-sm font-medium hover:bg-white transition"
      >
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  )
}
