# SEO Automation & Infrastructure

**Date:** 2025-05-29  
**Commit:** `4069311`  
**Branch:** `deploy-ghcr`

## Overview

This document outlines the SEO automation infrastructure implemented to support programmatic page generation, sitemap optimization, internal linking, and Google Search Console (GSC) readiness.

## Files Created

### 1. **SEO Locations Config** (`lib/data/seo-locations.ts`)
**Purpose:** Single source of truth for all location-based data

**Data Structures:**
- **Cities** (17 cities across Portland Metro, Oregon regional, and wine country)
  - Portland, Beaverton, Lake Oswego, Tigard, Hillsboro, Gresham, Vancouver WA
  - Salem, Eugene, Bend
  - Willamette Valley, Dundee Hills, Yamhill-Carlton

- **Routes** (7 PDX routes with priority ranking)
  - PDX to Downtown Portland (high priority)
  - PDX to Beaverton (high - Nike/Intel)
  - PDX to Lake Oswego (medium - residential)
  - PDX to Tigard (medium - business parks)
  - PDX to Hillsboro (high - Intel campus)
  - PDX to Vancouver WA (medium - cross-border)
  - PDX to Willamette Valley (high - wine country)

- **Airports** (16 international airports)
  - US: PDX, JFK, LGA, EWR, LAX, SFO, ORD, MIA
  - Canada: YYZ, YVR, YUL
  - Europe: LHR, FRA, CDG
  - Middle East: DXB, AUH
  - Asia: NRT

- **Countries** (7 worldwide markets)
  - United States, Canada, United Kingdom, Germany, France, UAE, Japan

**Helper Functions:**
- `getCityBySlug()` - Retrieve city data
- `getRouteBySlug()` - Retrieve route data
- `getRelatedRoutesForCity()` - Get routes serving a city
- `getNearbyCities()` - Get cities in same region

**Usage Example:**
```typescript
import { getCityBySlug, pdxRoutes } from '@/lib/data/seo-locations';

const beaverton = getCityBySlug('beaverton');
// { slug: 'beaverton', name: 'Beaverton', state: 'OR', distance: '18 miles', driveTime: '30-40 min' }

const highPriorityRoutes = pdxRoutes.filter(r => r.priority === 'high');
// Returns: Downtown Portland, Beaverton, Hillsboro, Willamette Valley
```

---

### 2. **Sitemap Segmentation** (5 sub-sitemaps)

**Main Sitemap** (`app/sitemap.ts`)
- Now acts as sitemap index
- References 5 sub-sitemaps for better crawl efficiency
- Improves Google's crawl budget allocation

**Sub-Sitemaps:**

#### `app/sitemap-core.ts`
- Homepage
- About
- Contact
- Coverage
- Fleet
- Privacy
- Terms

#### `app/sitemap-services.ts`
- All 6 service pages (generated from config)
- Priority: 0.9 (high importance)
- Change frequency: weekly

#### `app/sitemap-cities.ts`
- All 17 cities (generated from config)
- Priority: 0.7
- Change frequency: monthly

#### `app/sitemap-routes.ts`
- All 7 route pages (generated from config)
- Priority: 0.7-0.8 (based on route priority)
- Change frequency: monthly

#### `app/sitemap-worldwide.ts`
- 7 country pages
- 16 city pages
- Priority: 0.6
- Change frequency: monthly

**Benefits:**
- **Faster indexing** - Google can crawl specific sections independently
- **Better organization** - Logical grouping by content type
- **Scalability** - Easy to add new routes/cities without monolithic sitemap
- **Monitoring** - Track indexing performance by content type in GSC

---

### 3. **SEO Guardrails** (`lib/seo/guardrails.ts`)

**Purpose:** Prevent common SEO mistakes and enforce best practices

#### Validation Functions

**`validatePageMetadata()`**
Checks for:
- ✅ Title tag presence and optimal length (50-60 chars)
- ✅ Meta description presence and optimal length (120-160 chars)
- ✅ Unique H1 per page
- ✅ Canonical URL presence
- ✅ Minimum content length (500 chars)
- ❌ Duplicate titles across site
- ❌ Duplicate H1s across site

**`generateCanonicalUrl()`**
- Creates properly formatted canonical URLs
- Removes trailing slashes
- Ensures consistent format

**`shouldIndex()`**
- Determines if a path should be indexed
- Prevents indexing of: `/admin`, `/api`, `/dev`, `/404`, `/500`

**`generateHreflangTags()`**
- Creates hreflang tags for international SEO
- Currently supports `en` locale
- Expandable for additional languages

**Usage Example:**
```typescript
import { validatePageMetadata, generateCanonicalUrl } from '@/lib/seo/guardrails';

const validation = validatePageMetadata({
  title: 'PDX to Beaverton | Oregon Town Car',
  description: 'Professional chauffeur service from Portland Airport to Beaverton...',
  h1: 'PDX to Beaverton Transportation',
  canonical: 'https://oregontowncar.com/routes/pdx-to-beaverton',
  content: '...full page content...'
});

if (!validation.isValid) {
  console.error('SEO Issues:', validation.errors);
}

const canonical = generateCanonicalUrl('/routes/pdx-to-beaverton');
// Returns: 'https://oregontowncar.com/routes/pdx-to-beaverton'
```

---

### 4. **Internal Linking** (`lib/seo/internal-linking.ts`)

**Purpose:** Programmatically generate contextual internal links to strengthen SEO authority flow

#### Link Generation Functions

**For City Pages:**
- `getServiceLinksForCity()` - Relevant services (Airport, Corporate, Hourly)
- `getRouteLinksForCity()` - Routes serving that city
- `getNearbyCityLinks()` - Nearby cities in same region

**For Route Pages:**
- `getServiceLinksForRoute()` - Airport Transportation, VIP Arrival
- `getFleetLinksForRoute()` - Luxury Sedan, Executive SUV

**For Worldwide Pages:**
- `getCoreServiceLinksForWorldwide()` - Core services (Airport, VIP, Corporate)
- `getCityLinksForCountry()` - All cities in a country
- `getRelatedCountryLink()` - Link back to country page from city page

**For Service Pages:**
- Links to high-priority routes (Downtown Portland, Beaverton, Hillsboro, Willamette Valley)

#### Priority System
- **High priority** - Core conversion paths (Airport service, high-traffic routes)
- **Medium priority** - Supporting content (Nearby cities, fleet options)
- **Low priority** - Tertiary links

**Usage Example:**
```typescript
import { getContextualLinks } from '@/lib/seo/internal-linking';

// On Beaverton city page
const links = getContextualLinks('city', 'beaverton');
/* Returns:
[
  { text: 'Airport Transportation', href: '/services/airport-transportation', priority: 'high' },
  { text: 'Corporate Travel', href: '/services/corporate-travel', priority: 'high' },
  { text: 'PDX to Beaverton', href: '/routes/pdx-to-beaverton', priority: 'high' },
  { text: 'Hillsboro, OR', href: '/cities/hillsboro', priority: 'medium' },
  // ...
]
*/
```

**SEO Authority Flow:**
```
City Pages → Routes + Services
Routes → Airport Service + Fleet
Worldwide → Core Services
Services → High-Priority Routes
```

---

### 5. **GSC Readiness Audit** (`lib/seo/gsc-audit.ts`)

**Purpose:** Validate technical SEO requirements for Google Search Console indexing

#### Audit Functions

**`auditPageForGSC()`**
Checks:
- ✅ Canonical URL presence and HTTPS usage
- ✅ Noindex status (ensures content pages are indexable)
- ✅ Hreflang tags for international SEO
- ✅ Title tag presence
- ✅ Meta description presence
- ✅ H1 heading presence

Returns:
```typescript
{
  url: '/routes/pdx-to-beaverton',
  passed: true,
  issues: [], // Errors, warnings, info
  recommendations: [] // SEO improvement suggestions
}
```

**`auditSiteForGSC()`**
- Runs full-site audit
- Returns summary stats (total pages, passed/failed, critical issues)

**`validateRobotsTxt()`**
- Checks robots.txt for common issues
- Validates sitemap reference
- Warns about overly restrictive rules

**`validateUrlStructure()`**
Checks for SEO-friendly URLs:
- ✅ Under 75 characters
- ✅ Lowercase only
- ✅ Hyphens instead of underscores
- ✅ No special characters
- ✅ Optimal depth (3 levels or less)

**GSC Checklist** (`getGSCChecklist()`)

**Critical Tasks:**
- ✅ Verify all content pages are indexable (no noindex)
- ✅ Ensure admin/API routes have noindex
- ✅ Verify robots.txt is not blocking important pages
- ✅ Ensure canonicals use HTTPS
- ✅ Verify mobile-friendly test passes

**High Priority:**
- ⚠️ Submit sitemap to GSC (manual task)
- ⚠️ Add canonical tags to all pages
- ⚠️ Implement hreflang tags for /en locale
- ⚠️ Ensure Core Web Vitals are in "Good" range

**Usage Example:**
```typescript
import { auditPageForGSC, getGSCChecklist } from '@/lib/seo/gsc-audit';

const audit = auditPageForGSC('/routes/pdx-to-beaverton', {
  canonical: 'https://oregontowncar.com/routes/pdx-to-beaverton',
  noindex: false,
  hreflang: [{ hreflang: 'en', href: 'https://oregontowncar.com/en/routes/pdx-to-beaverton' }],
  title: 'PDX to Beaverton | Oregon Town Car',
  description: 'Professional chauffeur service...',
  h1: 'PDX to Beaverton Transportation'
});

if (!audit.passed) {
  audit.issues.forEach(issue => {
    console.log(`${issue.severity}: ${issue.message}`);
    if (issue.fix) console.log(`Fix: ${issue.fix}`);
  });
}
```

---

## Implementation Roadmap

### ✅ Phase 1: Content Creation (Completed - Commit a565f47)
- Created 6 route pages manually
- Verified 21 international pages
- Implemented homepage FAQ schema
- Updated navigation

### ✅ Phase 2: Automation Infrastructure (Completed - Commit 4069311)
- Created SEO locations config (single source of truth)
- Segmented sitemap into 5 sub-sitemaps
- Built internal linking utilities
- Implemented SEO guardrails
- Created GSC audit tools

### 🔄 Phase 3: Integration (Next Steps)
1. **Apply internal linking to existing pages**
   - Add contextual links to city pages
   - Add contextual links to route pages
   - Add contextual links to service pages
   - Add contextual links to worldwide pages

2. **Apply SEO guardrails**
   - Validate all page metadata
   - Ensure unique titles and H1s
   - Add canonical URLs to all pages
   - Generate hreflang tags for /en locale

3. **GSC Setup**
   - Verify robots.txt
   - Submit segmented sitemaps to GSC
   - Run full site audit
   - Fix any critical issues

4. **Monitoring**
   - Track indexing performance in GSC
   - Monitor Core Web Vitals
   - Validate schema markup with Rich Results Test
   - Track keyword rankings for route pages

---

## Usage Patterns

### Adding a New Route Page

**Before (Manual):**
```typescript
// Create new file: app/[lang]/routes/pdx-to-salem/page.tsx
// Copy paste from existing route
// Manually write distance, time, description
// Update routes index
// Update sitemap
```

**After (Programmatic):**
```typescript
// 1. Add to lib/data/seo-locations.ts
export const pdxRoutes: Route[] = [
  // ...existing routes
  {
    slug: 'pdx-to-salem',
    from: 'pdx',
    to: 'salem',
    distance: '47 miles',
    timeRange: '60-75 min',
    description: 'State capital and government services',
    priority: 'medium',
  },
];

// 2. Sitemap automatically updates (pulls from config)
// 3. Internal links automatically generated
// 4. SEO validation runs automatically
```

### Validating Page SEO

```typescript
import { validatePageMetadata } from '@/lib/seo/guardrails';

const validation = validatePageMetadata({
  title: 'PDX to Salem | Oregon Town Car',
  description: 'Professional chauffeur service from Portland Airport to Salem, Oregon...',
  h1: 'PDX to Salem Transportation',
  canonical: 'https://oregontowncar.com/routes/pdx-to-salem',
});

if (!validation.isValid) {
  validation.errors.forEach(error => console.error(error));
}
```

---

## Technical Details

### Sitemap Segmentation Benefits

**Before:**
- 1 monolithic sitemap with ~100+ URLs
- Google crawls entire sitemap on each visit
- Harder to track indexing by content type

**After:**
- 5 segmented sitemaps by content type
- Google can prioritize high-value sections (services, routes)
- Better crawl budget allocation
- Faster indexing for new pages

**GSC Indexing Timeline:**
- **Core pages** - Daily crawl (homepage, contact)
- **Services** - Weekly crawl (high priority)
- **Routes** - Monthly crawl (medium priority)
- **Cities** - Monthly crawl (medium priority)
- **Worldwide** - Monthly crawl (lower priority)

### Internal Linking Strategy

**Hub & Spoke Model:**
- **Hub:** Service pages (Airport Transportation, Corporate Travel)
- **Spokes:** Route pages, City pages, Worldwide pages
- **Authority flow:** Spokes link to hubs, hubs link to conversion pages

**Example Authority Flow:**
```
Beaverton City Page
  ↓
Airport Transportation Service (hub)
  ↓
Contact Page (conversion)
```

### SEO Guardrails Integration

**Build-time validation:**
```typescript
// In page component
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const metadata = {
    title: 'PDX to Beaverton | Oregon Town Car',
    description: '...',
  };

  // Validate during build
  const validation = validatePageMetadata(metadata);
  if (!validation.isValid && process.env.NODE_ENV === 'production') {
    throw new Error(`SEO validation failed: ${validation.errors.join(', ')}`);
  }

  return metadata;
}
```

---

## Next Actions

### Manual Tasks Required

1. **Google Search Console:**
   - Submit sitemap at `https://oregontowncar.com/sitemap.xml`
   - Verify all 5 sub-sitemaps are discovered
   - Monitor indexing status

2. **Schema Validation:**
   - Run pages through Google Rich Results Test
   - Validate FAQPage schema
   - Validate LocalBusiness schema

3. **Page Integration:**
   - Add internal linking components to existing pages
   - Apply canonical URLs to all pages
   - Add hreflang tags to layout

4. **Performance:**
   - Run Core Web Vitals audit
   - Optimize images for LCP
   - Minimize layout shifts (CLS)

### Automated Checks

```typescript
// Run site audit
import { auditSiteForGSC } from '@/lib/seo/gsc-audit';

const pages = [
  { url: '/routes/pdx-to-beaverton', metadata: {...} },
  { url: '/routes/pdx-to-hillsboro', metadata: {...} },
  // ...
];

const audit = auditSiteForGSC(pages);
console.log(`Passed: ${audit.passedPages}/${audit.totalPages}`);
console.log(`Critical issues: ${audit.summary.criticalIssues}`);
```

---

## Commit Details

**Commit:** `4069311`  
**Message:** `feat(seo): programmatic SEO automation, sitemap segmentation, and internal linking`

**Files Changed:**
- `lib/data/seo-locations.ts` (new, 350+ lines)
- `lib/seo/guardrails.ts` (new, 250+ lines)
- `lib/seo/internal-linking.ts` (new, 280+ lines)
- `lib/seo/gsc-audit.ts` (new, 400+ lines)
- `app/sitemap.ts` (modified, simplified to sitemap index)
- `app/sitemap-core.ts` (new)
- `app/sitemap-services.ts` (new)
- `app/sitemap-cities.ts` (new)
- `app/sitemap-routes.ts` (new)
- `app/sitemap-worldwide.ts` (new)

**Total:** 10 files changed, 1,445 insertions(+), 285 deletions(-)

---

## Success Metrics

**Short-term (1-2 weeks):**
- ✅ All 5 sub-sitemaps indexed in GSC
- ✅ 0 critical indexing errors
- ✅ All content pages have canonical URLs
- ✅ All pages pass mobile-friendly test

**Medium-term (1-3 months):**
- ⬆️ 30% increase in organic impressions (route pages)
- ⬆️ 20% increase in click-through rate (CTR)
- ⬆️ 10 route pages ranking in top 10 for target keywords
- ⬆️ Core Web Vitals in "Good" range

**Long-term (3-6 months):**
- ⬆️ 50% increase in organic traffic from route pages
- ⬆️ 25 route pages ranking in top 5
- ⬆️ Featured snippets for "PDX to [city]" queries
- ⬆️ 40% increase in bookings from organic search

---

## References

- [Google Search Central - Sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Google Search Central - Canonical URLs](https://developers.google.com/search/docs/crawling-indexing/canonicalization)
- [Google Search Central - Hreflang](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Schema.org - FAQPage](https://schema.org/FAQPage)
