export interface Service {
  id: number
  name: string
  slug: string
  description: string
  image: string
}

export interface City {
  id: number
  name: string
  slug: string
  description: string
  image: string
}

export interface FleetVehicle {
  id: number
  name: string
  slug: string
  seats: number
  description: string
  image: string
}

export interface HomepageData {
  hero: {
    title: string
    subtitle: string
    cta: string
  }
  featuredServices: string[]
  featuredCities: string[]
  featuredFleet: string[]
}

export interface HomepageBlock {
  id: number
  type: "text" | "image" | "cta"
  title?: string
  content?: string
  image?: string
  caption?: string
  label?: string
  href?: string
}

export interface SEOData {
  title: string
  description: string
  keywords: string
}

export interface NavigationItem {
  label: string
  href: string
}

export interface FooterData {
  company: string
  phone: string
  email: string
  address: string
  links: NavigationItem[]
}

export interface ContactData {
  phone: string
  email: string
  address: string
  hours: string
}

export interface Settings {
  siteName: string
  tagline: string
  primaryColor: string
  secondaryColor: string
  bookingUrl: string
}

export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  image: string
}

export interface BlogPostDetail {
  id: number
  title: string
  content: string
  image: string
}

export interface Review {
  id: number
  name: string
  rating: number
  text: string
}

export interface Promotion {
  id: number
  title: string
  description: string
  code: string
}

export interface ServiceArea {
  baseCity: string
  radiusMiles: number
  includedCities: string[]
}

export interface BookingUrl {
  bookingUrl: string
}
