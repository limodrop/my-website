# SEO Automation Quick Reference

## Quick Start

### 1. Add a New City Route

```typescript
// lib/data/seo-locations.ts
export const pdxRoutes: Route[] = [
  // ...existing routes
  {
    slug: 'pdx-to-gresham',
    from: 'pdx',
    to: 'gresham',
    distance: '15 miles',
    timeRange: '25-35 min',
    description: 'East Portland and Gresham business district',
    priority: 'medium',
  },
];
```

✅ Sitemap automatically updates  
✅ Internal links auto-generated  
✅ No manual sitemap edits needed

---

### 2. Validate Page Metadata

```typescript
import { validatePageMetadata } from '@/lib/seo/guardrails';

const validation = validatePageMetadata({
  title: 'Your Page Title',
  description: 'Your meta description...',
  h1: 'Your H1 Heading',
  canonical: 'https://oregontowncar.com/your-path',
  content: 'Full page text content...'
});

if (!validation.isValid) {
  console.error(validation.errors); // Fix these first
  console.warn(validation.warnings); // Address these later
}
```

---

### 3. Get Contextual Links for a Page

```typescript
import { getContextualLinks } from '@/lib/seo/internal-linking';

// City page
const links = getContextualLinks('city', 'beaverton');

// Route page
const links = getContextualLinks('route', 'pdx-to-beaverton');

// Service page
const links = getContextualLinks('service', 'airport-transportation');

// Worldwide country page
const links = getContextualLinks('worldwide-country', 'united-states');

// Worldwide city page
const links = getContextualLinks('worldwide-city', 'new-york-jfk');
```

**Returns:**
```typescript
[
  { 
    text: 'Airport Transportation', 
    href: '/services/airport-transportation', 
    priority: 'high' 
  },
  // ...
]
```

---

### 4. Generate Canonical URL

```typescript
import { generateCanonicalUrl } from '@/lib/seo/guardrails';

const canonical = generateCanonicalUrl('/routes/pdx-to-beaverton');
// Returns: 'https://oregontowncar.com/routes/pdx-to-beaverton'

// Use in metadata:
export const metadata: Metadata = {
  alternates: {
    canonical: generateCanonicalUrl('/routes/pdx-to-beaverton'),
  },
};
```

---

### 5. Check if Page Should Be Indexed

```typescript
import { shouldIndex } from '@/lib/seo/guardrails';

shouldIndex('/routes/pdx-to-beaverton'); // true
shouldIndex('/admin/dashboard'); // false
shouldIndex('/api/booking'); // false

// Use in metadata:
export const metadata: Metadata = {
  robots: shouldIndex('/admin/dashboard') 
    ? 'index,follow' 
    : 'noindex,nofollow',
};
```

---

### 6. Audit Page for GSC Readiness

```typescript
import { auditPageForGSC } from '@/lib/seo/gsc-audit';

const audit = auditPageForGSC('/routes/pdx-to-beaverton', {
  canonical: 'https://oregontowncar.com/routes/pdx-to-beaverton',
  noindex: false,
  hreflang: [
    { hreflang: 'en', href: 'https://oregontowncar.com/en/routes/pdx-to-beaverton' }
  ],
  title: 'PDX to Beaverton | Oregon Town Car',
  description: 'Professional chauffeur service...',
  h1: 'PDX to Beaverton Transportation',
});

console.log(`Passed: ${audit.passed}`);
audit.issues.forEach(issue => {
  console.log(`[${issue.severity}] ${issue.message}`);
  if (issue.fix) console.log(`Fix: ${issue.fix}`);
});
```

---

### 7. Generate Hreflang Tags

```typescript
import { generateHreflangTags } from '@/lib/seo/guardrails';

const tags = generateHreflangTags('/routes/pdx-to-beaverton', ['en']);
// Returns:
// [
//   { 
//     hreflang: 'en', 
//     href: 'https://oregontowncar.com/en/routes/pdx-to-beaverton' 
//   }
// ]

// Use in head component:
export const metadata: Metadata = {
  alternates: {
    languages: {
      'en': '/en/routes/pdx-to-beaverton',
    },
  },
};
```

---

### 8. Get City/Route Data

```typescript
import { 
  getCityBySlug, 
  getRouteBySlug,
  getRelatedRoutesForCity,
  getNearbyCities 
} from '@/lib/data/seo-locations';

// Get city details
const city = getCityBySlug('beaverton');
// { slug: 'beaverton', name: 'Beaverton', state: 'OR', distance: '18 miles', ... }

// Get route details
const route = getRouteBySlug('pdx-to-beaverton');
// { slug: 'pdx-to-beaverton', from: 'pdx', to: 'beaverton', ... }

// Get routes for a city
const routes = getRelatedRoutesForCity('beaverton');
// [{ slug: 'pdx-to-beaverton', ... }]

// Get nearby cities
const nearby = getNearbyCities('beaverton');
// [{ slug: 'hillsboro', name: 'Hillsboro', ... }, ...]
```

---

### 9. Get GSC Checklist

```typescript
import { getGSCChecklist } from '@/lib/seo/gsc-audit';

const checklist = getGSCChecklist();

checklist.forEach(category => {
  console.log(`\n${category.category}:`);
  category.items.forEach(item => {
    console.log(`[${item.priority}] ${item.task}`);
  });
});
```

**Output:**
```
Indexability:
[critical] Verify all content pages are indexable (no noindex)
[critical] Ensure admin/API routes have noindex
[high] Submit sitemap to GSC
...
```

---

### 10. Validate URL Structure

```typescript
import { validateUrlStructure } from '@/lib/seo/gsc-audit';

const validation = validateUrlStructure('/routes/pdx-to-beaverton');

console.log(`Valid: ${validation.isValid}`);
console.log(`Score: ${validation.score}/100`);
validation.issues.forEach(issue => console.log(`- ${issue}`));
```

**Good URL:**
```
/routes/pdx-to-beaverton
✅ Score: 100/100
```

**Bad URL:**
```
/Routes/PDX_to_Beaverton?id=123
❌ Score: 60/100
- URL contains uppercase letters - use lowercase only
- URL contains underscores - use hyphens instead
- URL contains query parameters - consider using clean URLs
```

---

## Common Patterns

### Adding Internal Links to a Page Component

```typescript
import { getContextualLinks } from '@/lib/seo/internal-linking';

export default function BeavertonPage() {
  const links = getContextualLinks('city', 'beaverton');

  return (
    <div>
      <h1>Beaverton Chauffeur Service</h1>
      
      {/* Main content */}
      
      <section>
        <h2>Related Services</h2>
        <ul>
          {links
            .filter(l => l.priority === 'high')
            .map(link => (
              <li key={link.href}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
}
```

---

### Complete Page Metadata with SEO Best Practices

```typescript
import { generateCanonicalUrl, shouldIndex } from '@/lib/seo/guardrails';
import { generateHreflangTags } from '@/lib/seo/guardrails';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const path = `/routes/${slug}`;

  return {
    title: 'PDX to Beaverton | Oregon Town Car',
    description: 'Professional chauffeur service from Portland Airport to Beaverton...',
    keywords: ['pdx to beaverton', 'beaverton chauffeur', 'portland airport beaverton'],
    
    // Canonical URL
    alternates: {
      canonical: generateCanonicalUrl(path),
      languages: {
        'en': `/en${path}`,
      },
    },
    
    // Indexability
    robots: shouldIndex(path) 
      ? { index: true, follow: true }
      : { index: false, follow: false },
    
    // Open Graph
    openGraph: {
      title: 'PDX to Beaverton | Oregon Town Car',
      description: 'Professional chauffeur service...',
      url: generateCanonicalUrl(path),
      type: 'website',
    },
  };
}
```

---

### Build-Time SEO Validation

```typescript
import { validatePageMetadata } from '@/lib/seo/guardrails';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const metadata = {
    title: 'PDX to Beaverton | Oregon Town Car',
    description: 'Professional chauffeur service from Portland Airport to Beaverton, Oregon. 18 miles, 30-40 minutes. Nike and Intel campus access.',
    h1: 'PDX to Beaverton Transportation',
    canonical: 'https://oregontowncar.com/routes/pdx-to-beaverton',
  };

  // Validate in production builds
  if (process.env.NODE_ENV === 'production') {
    const validation = validatePageMetadata(metadata);
    
    if (!validation.isValid) {
      console.error(`SEO validation failed for ${params.slug}:`, validation.errors);
      // Optionally throw to fail build
      // throw new Error(`SEO validation failed: ${validation.errors.join(', ')}`);
    }
    
    if (validation.warnings.length > 0) {
      console.warn(`SEO warnings for ${params.slug}:`, validation.warnings);
    }
  }

  return metadata;
}
```

---

## Data Reference

### Available Cities (17)

**Portland Metro:**
- portland, beaverton, lake-oswego, tigard, hillsboro, gresham, vancouver-wa

**Oregon Regional:**
- salem, eugene, bend

**Wine Country:**
- willamette-valley, dundee-hills, yamhill-carlton

### Available Routes (7)

- pdx-to-downtown-portland (high priority)
- pdx-to-beaverton (high priority)
- pdx-to-lake-oswego (medium priority)
- pdx-to-tigard (medium priority)
- pdx-to-hillsboro (high priority)
- pdx-to-vancouver-wa (medium priority)
- pdx-to-willamette-valley (high priority)

### Service Pages (6)

- airport-transportation
- corporate-travel
- hourly-chauffeur
- wine-tours
- vip-arrival
- special-events

### Countries (7)

- united-states, canada, united-kingdom, germany, france, uae, japan

### Major Airports (16)

**US:** PDX, JFK, LGA, EWR, LAX, SFO, ORD, MIA  
**Canada:** YYZ, YVR, YUL  
**Europe:** LHR, FRA, CDG  
**Middle East:** DXB, AUH  
**Asia:** NRT

---

## SEO Checklist

### ✅ Before Publishing a New Page

- [ ] Title tag is 50-60 characters
- [ ] Meta description is 120-160 characters
- [ ] H1 is unique across the site
- [ ] Canonical URL is set correctly
- [ ] Page has at least 500 characters of content
- [ ] Internal links are added (3-5 contextual links)
- [ ] Page is indexed (no noindex unless admin/API)
- [ ] URL structure is SEO-friendly (lowercase, hyphens, under 75 chars)
- [ ] Schema markup is valid (if applicable)

### ✅ After Deployment

- [ ] Submit sitemap to Google Search Console
- [ ] Verify page is indexed (site:oregontowncar.com inurl:your-slug)
- [ ] Check mobile-friendly test
- [ ] Validate schema with Rich Results Test
- [ ] Monitor Core Web Vitals
- [ ] Track keyword rankings

---

## Troubleshooting

### "Duplicate title detected"

**Cause:** Another page has the same `<title>` tag  
**Fix:** Make title unique by including location or service differentiator

**Example:**
```
❌ "Airport Transportation | Oregon Town Car" (used on multiple pages)
✅ "PDX to Beaverton Airport Transportation | Oregon Town Car"
✅ "Los Angeles Airport Chauffeur Service | Oregon Town Car"
```

### "Meta description too short"

**Cause:** Description under 120 characters  
**Fix:** Expand description with relevant details

**Example:**
```
❌ "Chauffeur service to Beaverton." (35 chars)
✅ "Professional chauffeur service from Portland Airport to Beaverton, Oregon. 18 miles, 30-40 minutes. Nike and Intel campus access. Book 24/7." (145 chars)
```

### "Canonical URL missing"

**Cause:** No canonical tag in metadata  
**Fix:** Add canonical using `generateCanonicalUrl()`

```typescript
import { generateCanonicalUrl } from '@/lib/seo/guardrails';

export const metadata: Metadata = {
  alternates: {
    canonical: generateCanonicalUrl('/routes/pdx-to-beaverton'),
  },
};
```

### "URL structure score low"

**Common issues:**
- Uppercase letters → use lowercase only
- Underscores → use hyphens
- Query parameters → use clean URLs
- Too deep (4+ levels) → flatten structure

**Example:**
```
❌ /Services/PDX_to_Beaverton?id=123 (Score: 50/100)
✅ /routes/pdx-to-beaverton (Score: 100/100)
```

---

## Resources

- **Full Documentation:** [`docs/SEO_AUTOMATION.md`](./SEO_AUTOMATION.md)
- **Config File:** [`lib/data/seo-locations.ts`](../lib/data/seo-locations.ts)
- **Guardrails:** [`lib/seo/guardrails.ts`](../lib/seo/guardrails.ts)
- **Internal Linking:** [`lib/seo/internal-linking.ts`](../lib/seo/internal-linking.ts)
- **GSC Audit:** [`lib/seo/gsc-audit.ts`](../lib/seo/gsc-audit.ts)
