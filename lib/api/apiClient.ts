import type {
  Service,
  City,
  FleetVehicle,
  HomepageData,
  HomepageBlock,
  SEOData,
  NavigationItem,
  FooterData,
  ContactData,
  Settings,
  BlogPost,
  BlogPostDetail,
  Review,
  Promotion,
  ServiceArea,
  BookingUrl,
  LinkingRules,
  CityServicesMap,
  FleetServicesMap
} from "./models"

// Use different API URLs for server-side vs client-side
const getAPIUrl = () => {
  // Server-side (SSR, SSG) - need absolute URL
  if (typeof window === "undefined") {
    // In Docker/production, use the container's own URL
    // VERCEL_URL is set automatically on Vercel
    return process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}`
      : process.env.INTERNAL_API_URL || "http://127.0.0.1:3000"
  }
  // Client-side - use public URL (empty string means same-origin)
  return process.env.NEXT_PUBLIC_API_URL || ""
}

async function fetchJSON<T>(path: string): Promise<T> {
  const API_URL = getAPIUrl()
  const url = `${API_URL}${path}`
  
  try {
    const res = await fetch(url, { 
      cache: "no-store",
      // Add timeout for server-side requests
      signal: typeof window === "undefined" ? AbortSignal.timeout(5000) : undefined
    })
    if (!res.ok) throw new Error(`API error: ${res.status}`)
    return res.json()
  } catch (error) {
    console.error(`Failed to fetch ${url}:`, error)
    throw error
  }
}

export const api = {
  getServices: () => fetchJSON<Service[]>("/api/services"),
  getService: (slug: string) => fetchJSON<Service>(`/api/services/${slug}`),

  getCities: () => fetchJSON<City[]>("/api/cities"),
  getCity: (slug: string) => fetchJSON<City>(`/api/cities/${slug}`),

  getFleet: () => fetchJSON<FleetVehicle[]>("/api/fleet"),
  getVehicle: (slug: string) => fetchJSON<FleetVehicle>(`/api/fleet/${slug}`),

  getHomepage: () => fetchJSON<HomepageData>("/api/homepage"),
  getHomepageBlocks: () => fetchJSON<HomepageBlock[]>("/api/homepage-blocks"),

  getSEO: () => fetchJSON<SEOData>("/api/seo"),

  getNavigation: () => fetchJSON<NavigationItem[]>("/api/navigation"),
  getFooter: () => fetchJSON<FooterData>("/api/footer"),
  getContact: () => fetchJSON<ContactData>("/api/contact"),
  getSettings: () => fetchJSON<Settings>("/api/settings"),

  getBlogPosts: () => fetchJSON<BlogPost[]>("/api/blog"),
  getBlogPost: (slug: string) => fetchJSON<BlogPostDetail>(`/api/blog/${slug}`),

  getReviews: () => fetchJSON<Review[]>("/api/reviews"),
  getPromotions: () => fetchJSON<Promotion[]>("/api/promotions"),

  getServiceArea: () => fetchJSON<ServiceArea>("/api/service-area"),

  getBookingUrl: () => fetchJSON<BookingUrl>("/api/booking-url"),

  getLinkingRules: () => fetchJSON<LinkingRules>("/api/linking-rules"),
  getCityServices: () => fetchJSON<CityServicesMap>("/api/city-services"),
  getFleetServices: () => fetchJSON<FleetServicesMap>("/api/fleet-services"),
}
