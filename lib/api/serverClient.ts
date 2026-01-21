// Server-side data client - uses shared data layer directly
// Use this ONLY in Server Components, not in client components or hooks

import { getHomepageData } from "@/lib/data/homepage"
import { getServices, getServiceBySlug } from "@/lib/data/services"
import { getCities, getCityBySlug } from "@/lib/data/cities"
import { getFleet, getVehicleBySlug } from "@/lib/data/fleet"
import { getSeo } from "@/lib/data/seo"
import { getNavigation } from "@/lib/data/navigation"
import { getFooter } from "@/lib/data/footer"
import { getSettings } from "@/lib/data/settings"
import { getContact } from "@/lib/data/contact"
import { getBlogPosts, getBlogPostBySlug } from "@/lib/data/blog"
import { getReviews } from "@/lib/data/reviews"
import { getPromotions } from "@/lib/data/promotions"
import { getServiceArea } from "@/lib/data/serviceArea"
import { getBookingUrl } from "@/lib/data/bookingUrl"
import { getLinkingRules } from "@/lib/data/linkingRules"

export const serverApi = {
  getHomepage: getHomepageData,
  getServices,
  getService: getServiceBySlug,
  getCities,
  getCity: getCityBySlug,
  getFleet,
  getVehicle: getVehicleBySlug,
  getSeo,
  getNavigation,
  getFooter,
  getSettings,
  getContact,
  getBlogPosts,
  getBlogPost: getBlogPostBySlug,
  getReviews,
  getPromotions,
  getServiceArea,
  getBookingUrl,
  getLinkingRules,
}
