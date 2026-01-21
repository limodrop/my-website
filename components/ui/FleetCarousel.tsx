"use client"

import { useState } from "react"

const fleet = [
  {
    name: "Luxury SUV",
    image: "/fleet/suv.jpg",
    seats: 6,
    use: "Airport Transfers, Corporate Travel"
  },
  {
    name: "Executive Sedan",
    image: "/fleet/sedan.jpg",
    seats: 3,
    use: "Business Meetings, Date Nights"
  },
  {
    name: "Sprinter Van",
    image: "/fleet/sprinter.jpg",
    seats: 12,
    use: "Weddings, Group Events"
  }
]

export default function FleetCarousel() {
  const [index, setIndex] = useState(0)

  function next() {
    setIndex((i) => (i + 1) % fleet.length)
  }

  function prev() {
    setIndex((i) => (i - 1 + fleet.length) % fleet.length)
  }

  const f = fleet[index]

  return (
    <div className="bg-white py-12 px-4 text-center">
      <h2 className="text-2xl font-semibold mb-6">Explore Our Fleet</h2>
      <div className="relative max-w-xl mx-auto">
        <img
          src={f.image}
          alt={f.name}
          className="rounded shadow w-full h-64 object-cover"
        />
        <div className="mt-4 space-y-1">
          <h3 className="text-lg font-bold">{f.name}</h3>
          <p className="text-sm text-gray-600">Seats: {f.seats}</p>
          <p className="text-sm text-gray-500">{f.use}</p>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <button onClick={prev} className="text-gray-500 hover:text-black">← Prev</button>
          <button onClick={next} className="text-gray-500 hover:text-black">Next →</button>
        </div>
      </div>
    </div>
  )
}
