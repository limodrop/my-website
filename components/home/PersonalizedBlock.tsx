"use client"

import { getSessionProfile } from "@/lib/intel/sessionProfile"

export default function PersonalizedBlock() {
  const profile = getSessionProfile()

  const headline = {
    en: {
      low: `Explore premium ${profile.service} rides in ${profile.city}`,
      medium: `Plan your ${profile.service} trip with our ${profile.fleet}s`,
      high: `Your ${profile.city} ${profile.service} ${profile.fleet} is ready`
    },
    es: {
      low: `Descubre traslados ${profile.service} en ${profile.city}`,
      medium: `Planifica tu viaje ${profile.service} en ${profile.fleet}`,
      high: `Tu ${profile.fleet} para ${profile.service} en ${profile.city} está listo`
    },
    fr: {
      low: `Découvrez nos services ${profile.service} à ${profile.city}`,
      medium: `Préparez votre trajet ${profile.service} en ${profile.fleet}`,
      high: `Votre ${profile.fleet} pour ${profile.service} à ${profile.city} est prêt`
    }
  }

  const cta = {
    en: "Book Now",
    es: "Reservar Ahora",
    fr: "Réserver"
  }

  return (
    <div className="bg-gray-100 py-12 px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        {headline[profile.lang][profile.intent]}
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        Personalized just for you — based on your location, preferences, and recent activity.
      </p>
      <a
        href={`/book?city=${profile.city}&service=${profile.service}&fleet=${profile.fleet}`}
        className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
      >
        {cta[profile.lang]}
      </a>
    </div>
  )
}
