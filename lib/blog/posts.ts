import { BlogPost } from "./types"

const mockPosts: BlogPost[] = [
  {
    slug: "portland-airport-winter",
    lang: "en",
    city: "Portland",
    service: "airport",
    season: "winter",
    title: "Winter Travel Tips for PDX Airport",
    date: "2026-01-10",
    html: `
      <p>Planning a winter trip to or from Portland International Airport? Here's how to stay warm, safe, and on time.</p>
      <ul>
        <li>Book your chauffeur early — winter demand is high.</li>
        <li>Allow extra time for weather delays.</li>
        <li>Enjoy complimentary hot beverages in our luxury SUVs.</li>
      </ul>
    `
  },
  {
    slug: "beaverton-wine-summer",
    lang: "es",
    city: "Beaverton",
    service: "wine",
    season: "summer",
    title: "Tour de vinos en Beaverton este verano",
    date: "2026-06-15",
    html: `
      <p>Descubre los mejores viñedos cerca de Beaverton con nuestro servicio de chófer de lujo.</p>
      <ul>
        <li>Rutas personalizadas por el valle de Willamette</li>
        <li>Vehículos con aire acondicionado y agua embotellada</li>
        <li>Conductores bilingües disponibles</li>
      </ul>
    `
  }
]

export function getPostBySlug(slug: string, lang: string): BlogPost | null {
  return mockPosts.find((p) => p.slug === slug && p.lang === lang) || null
}
