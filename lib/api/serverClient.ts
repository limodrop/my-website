// Server-side API client - imports route handlers directly
// Use this ONLY in Server Components, not in client components or hooks

import type { Settings, NavigationItem, FooterData } from "./models"

export const serverApi = {
  async getSettings(): Promise<Settings> {
    return {
      siteName: "Oregon Town Car",
      tagline: "Premium Chauffeur Service in Oregon",
      primaryColor: "#0A3A63",
      secondaryColor: "#D4AF37",
      bookingUrl: "https://book.oregontowncar.com"
    }
  },

  async getNavigation(): Promise<NavigationItem[]> {
    return [
      { label: "Services", href: "/services" },
      { label: "Fleet", href: "/fleet" },
      { label: "Cities", href: "/cities" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ]
  },

  async getFooter(): Promise<FooterData> {
    return {
      companyName: "Oregon Town Car",
      tagline: "Premium Chauffeur Service",
      phone: "(503) 555-0100",
      email: "info@oregontowncar.com",
      address: "123 Main Street, Portland, OR 97201",
      socialLinks: {
        facebook: "https://facebook.com/oregontowncar",
        twitter: "https://twitter.com/oregontowncar",
        instagram: "https://instagram.com/oregontowncar",
      },
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Careers", href: "/careers" },
      ],
    }
  },
}
