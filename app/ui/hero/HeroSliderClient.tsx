"use client"

import { useState, useEffect } from "react"
import { Button } from "../buttons/Button"

type HeroSlide = {
  title: string
  subtitle: string
  cta: string
  ctaLink?: string
}

interface HeroSliderClientProps {
  slides: HeroSlide[]
}

export function HeroSliderClient({ slides }: HeroSliderClientProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Auto-advance every 5 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  if (slides.length === 0) return null

  const slide = slides[currentSlide]

  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-32 px-4 overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto text-center space-y-8 relative z-10">
        <div className="inline-block px-4 py-2 bg-yellow-600 text-black text-sm font-semibold rounded-full mb-4 animate-fade-in">
          ✨ Premium Worldwide Service
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight animate-fade-in">
          {slide.title.split(" — ").map((part, idx) => (
            <span key={idx} className={idx === 1 ? "block text-yellow-500 mt-2" : "block"}>
              {part}
            </span>
          ))}
        </h1>
        
        <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto animate-fade-in delay-200">
          {slide.subtitle}
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap animate-fade-in delay-300">
          <Button variant="primary" as="a" href={slide.ctaLink || "https://book.oregontowncar.com"}>
            📍 {slide.cta}
          </Button>
          <Button variant="ghost" as="a" href="/en/worldwide">
            🌍 View Coverage
          </Button>
        </div>

        {/* Slide indicators */}
        {slides.length > 1 && (
          <div className="flex gap-2 justify-center mt-8">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentSlide ? "bg-yellow-600 w-8" : "bg-white/30"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
