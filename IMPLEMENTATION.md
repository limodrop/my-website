# Copy, JSON-LD, and Tracking Implementation

This document describes the implementation of real copy, JSON-LD structured data, and tracking layer for Oregon Town Car website.

## 📁 Files Created

### Data Layer (`lib/data/`)
- **`regions.ts`** - Regional data for worldwide coverage (US, Canada, Europe, Middle East)
- **`countries.ts`** - Country-specific data with taglines, descriptions, and primary airports
- **`cities.ts`** - City-level data with taglines, use cases, and SEO descriptions
  - Portland, Seattle, San Francisco, Los Angeles, New York City
  - Beaverton, Hillsboro, Vancouver (existing cities)
- **`fleet.ts`** - Fleet vehicle data with descriptions and features

### Server Client (`app/lib/`)
- **`serverClient.ts`** - Main data access layer with methods:
  - `homepage()` - Homepage content
  - `cities()` / `city(slug)` - City data
  - `countries()` / `country(id)` - Country data
  - `regions()` / `region(id)` - Region data

### SEO Layer (`lib/seo/`)
- **`jsonld.ts`** - JSON-LD structured data utilities:
  - `generateOrganizationSchema()` - Organization schema for global layout
  - `generateServiceListSchema()` - Service list schema
  - `generateVehicleSchema()` - Vehicle schema for fleet pages
  - `generateCitySchema()` - Place schema for city pages

### Tracking Layer (`lib/tracking/`)
- **`analytics.ts`** - Analytics tracking implementation:
  - `track(eventName, properties)` - Generic tracking function
  - `trackCTAClick(location, locale)` - CTA-specific tracking
  - `trackBookingSubmit(locale)` - Booking form tracking

### UI Components (`components/ui/`)
- **`CTAButton.tsx`** - Client-side button component with tracking

## 🔄 Files Modified

### Layout & Pages
- **`app/layout.tsx`** - Added Organization JSON-LD
- **`app/page.tsx`** - Updated to use serverClient and CTAButton with tracking
- **`app/cities/page.tsx`** - Enhanced city listing with data from serverClient
- **`app/cities/[slug]/page.tsx`** - Rich city detail page with JSON-LD
- **`app/services/page.tsx`** - Added Service List JSON-LD
- **`app/fleet/page.tsx`** - Updated to use fleet data
- **`app/fleet/[slug]/page.tsx`** - Added Vehicle JSON-LD

## 📊 Data Structure

### Regions
```typescript
{
  id: "united-states",
  name: "United States",
  headline: "Premium Chauffeur Service Across All 50 States",
  subheadline: "From major airports to corporate hubs...",
  seoDescription: "Nationwide black car and chauffeur service..."
}
```

### Countries
```typescript
{
  id: "united-states",
  name: "United States",
  tagline: "Nationwide luxury travel with local expertise.",
  seoDescription: "Premium chauffeur service across all 50 U.S. states...",
  primaryAirports: ["JFK", "LGA", "EWR", "LAX", "SFO", ...]
}
```

### Cities
```typescript
{
  slug: "portland",
  name: "Portland",
  tagline: "Your trusted chauffeur in Portland and the Pacific Northwest.",
  seoDescription: "Premium black car and airport transfer service...",
  primaryUseCases: ["Airport transfers (PDX)", "Corporate travel", ...],
  airportCode: "PDX",
  region: "Oregon",
  country: "USA"
}
```

## 🔍 JSON-LD Schemas

### Organization (Global - in layout.tsx)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Oregon Town Car",
  "url": "https://oregontowncar.com",
  "logo": "https://oregontowncar.com/logo.png",
  "areaServed": ["United States", "Canada", "United Kingdom", ...]
}
```

### Service List (Services page)
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Service",
      "name": "Airport Transfers",
      "description": "Premium airport chauffeur service worldwide."
    },
    ...
  ]
}
```

### Vehicle (Fleet detail pages)
```json
{
  "@context": "https://schema.org",
  "@type": "Vehicle",
  "name": "Cadillac Escalade",
  "image": "https://oregontowncar.com/fleet/escalade.jpg",
  "seatingCapacity": 6,
  "url": "https://oregontowncar.com/en/fleet/cadillac-escalade"
}
```

### Place (City detail pages)
```json
{
  "@context": "https://schema.org",
  "@type": "Place",
  "name": "Portland",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Portland",
    "addressRegion": "Oregon",
    "addressCountry": "USA"
  }
}
```

## 📈 Tracking Events

### CTA Click Tracking
```typescript
trackCTAClick("hero", "en")
// Tracks: { eventName: "cta_click", location: "hero", locale: "en" }
```

### Booking Form Submit
```typescript
trackBookingSubmit("en")
// Tracks: { eventName: "booking_request_submitted", locale: "en" }
```

## 🎯 Usage Examples

### Using serverClient
```typescript
// In a server component
import { serverClient } from "@/app/lib/serverClient";

const cities = await serverClient.cities();
const portland = await serverClient.city("portland");
```

### Using CTAButton with Tracking
```typescript
// In a client or server component
import { CTAButton } from "@/components/ui/CTAButton";

<CTAButton
  href="https://book.oregontowncar.com"
  location="hero"
  locale="en"
>
  Book Now
</CTAButton>
```

### Adding JSON-LD to a Page
```typescript
import { generateCitySchema } from "@/lib/seo/jsonld";

const citySchema = generateCitySchema("Portland", "Oregon", "USA");

return (
  <div>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
    />
    {/* Page content */}
  </div>
);
```

## 🚀 Benefits

1. **SEO-Optimized** - All pages now have proper JSON-LD structured data
2. **Consistent Copy** - Centralized data management for all marketing copy
3. **Tracking Ready** - CTA and booking events tracked for analytics
4. **Type-Safe** - Full TypeScript support for all data structures
5. **Maintainable** - Easy to update content without touching page code
6. **Scalable** - Simple to add new cities, countries, or regions

## 🔮 Future Enhancements

1. **Analytics Integration** - Connect to Google Analytics, Mixpanel, or PostHog
2. **Internationalization** - Add multi-language support
3. **Dynamic Data** - Connect to CMS or database
4. **A/B Testing** - Test different copy variants
5. **More Schemas** - Add Review, FAQ, and BreadcrumbList schemas
