"use client"

import { useEffect, useState } from "react"

const rotating = [
  "Portland airport rides",
  "Seattle wedding limos",
  "Bend brewery tours",
  "Eugene executive SUVs",
  "Salem wine country escapes"
]

export default function HeroBlock() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % rotating.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative bg-black text-white h-[80vh] flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        src="/video/hero.mp4"
      />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Premium Chauffeur Service for{" "}
          <span className="text-yellow-400">{rotating[index]}</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Trusted by thousands. Powered by AI. Driven by excellence.
        </p>
        <a
          href="/book"
          className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-300 transition"
        >
          Book Your Ride
        </a>
      </div>
    </div>
  )
}
