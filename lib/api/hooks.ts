import useSWR from "swr"
import { api } from "./apiClient"

export function useServices() {
  return useSWR("services", api.getServices)
}

export function useService(slug: string) {
  return useSWR(slug ? `service-${slug}` : null, () => api.getService(slug))
}

export function useCities() {
  return useSWR("cities", api.getCities)
}

export function useCity(slug: string) {
  return useSWR(slug ? `city-${slug}` : null, () => api.getCity(slug))
}

export function useFleet() {
  return useSWR("fleet", api.getFleet)
}

export function useVehicle(slug: string) {
  return useSWR(slug ? `vehicle-${slug}` : null, () => api.getVehicle(slug))
}

export function useHomepage() {
  return useSWR("homepage", api.getHomepage)
}

export function useHomepageBlocks() {
  return useSWR("homepage-blocks", api.getHomepageBlocks)
}

export function useSEO() {
  return useSWR("seo", api.getSEO)
}

export function useNavigation() {
  return useSWR("navigation", api.getNavigation)
}

export function useFooter() {
  return useSWR("footer", api.getFooter)
}

export function useContact() {
  return useSWR("contact", api.getContact)
}

export function useSettings() {
  return useSWR("settings", api.getSettings)
}

export function useBlogPosts() {
  return useSWR("blog-posts", api.getBlogPosts)
}

export function useBlogPost(slug: string) {
  return useSWR(slug ? `blog-${slug}` : null, () => api.getBlogPost(slug))
}

export function useReviews() {
  return useSWR("reviews", api.getReviews)
}

export function usePromotions() {
  return useSWR("promotions", api.getPromotions)
}

export function useServiceArea() {
  return useSWR("service-area", api.getServiceArea)
}

export function useBookingUrl() {
  return useSWR("booking-url", api.getBookingUrl)
}
