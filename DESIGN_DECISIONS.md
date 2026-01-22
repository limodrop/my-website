# Design Decisions and Code Review Notes

## Type Safety Decisions

### TrackingEvent Type (lib/tracking/analytics.ts)
The `TrackingEvent` type uses a union that includes `Record<string, string | number | boolean>` to allow flexibility for custom tracking events while maintaining type safety for known events.

**Rationale:**
- Known events (CTAClickEvent, BookingSubmitEvent) have strict typing
- Custom events can still be tracked without modifying the type definition
- Alternative (discriminated union) would require updating types for every new event
- This is a pragmatic balance between type safety and flexibility

**Future Enhancement:**
For stricter typing, consider using a discriminated union:
```typescript
type TrackingEvent = 
  | { type: 'cta_click', location: string, locale: string }
  | { type: 'booking_submit', locale: string }
  | { type: string, [key: string]: unknown }
```

### renderJsonLd Function (lib/seo/jsonld.ts)
The `renderJsonLd` function is a thin wrapper around `JSON.stringify`.

**Rationale:**
- Provides a consistent API for JSON-LD rendering
- Makes it easy to add formatting, validation, or error handling later
- Improves code readability (semantic function name)
- Zero runtime overhead (inlined by bundler)

**Current Implementation:**
```typescript
export function renderJsonLd(schema: Organization | ServiceList | Vehicle | Place): string {
  return JSON.stringify(schema);
}
```

## Next.js App Router Patterns

### JSON-LD in Layout (app/layout.tsx)
JSON-LD is added using a `<script>` tag in the `<head>` element within the layout component.

**Why Not Use Metadata API?**
The Next.js Metadata API supports:
- title, description, keywords
- Open Graph tags
- Twitter cards
- Viewport, robots, etc.

But it does NOT support:
- Custom script tags with type="application/ld+json"
- JSON-LD structured data

**Standard Pattern:**
The current implementation follows the recommended pattern from:
- Next.js documentation examples
- Google's Structured Data guidelines
- Schema.org best practices

**Example from Next.js:**
```tsx
<head>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
  />
</head>
```

This is the correct and recommended approach.

## Analytics Implementation

### Synchronous Tracking (components/ui/CTAButton.tsx)
Current implementation uses synchronous tracking with console logging and custom events.

**Current State:**
- Suitable for development and testing
- Custom events allow listening in browser
- Console logging for debugging

**Production Considerations:**
When integrating with real analytics providers (GA4, Mixpanel, PostHog):
1. Replace console.log with actual API calls
2. Consider using `navigator.sendBeacon` for reliability
3. Add error handling and retry logic
4. Implement queue for offline events

**Example Production Implementation:**
```typescript
export function track(eventName: string, properties?: TrackingEvent): void {
  // Google Analytics 4
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, properties);
  }
  
  // Fallback to sendBeacon for reliability
  navigator.sendBeacon('/api/track', JSON.stringify({ eventName, properties }));
}
```

## Data Structure Decisions

### Vancouver Disambiguation (lib/data/cities.ts)
The Vancouver entry now explicitly mentions "Washington" in the tagline to avoid confusion with Vancouver, BC.

**Before:** "Premium chauffeur service in Vancouver."
**After:** "Premium chauffeur service in Vancouver, Washington."

This provides clarity for users and search engines.

## Trade-offs and Future Enhancements

### Type Safety vs Flexibility
**Decision:** Favor flexibility for tracking events while maintaining safety for known events
**Trade-off:** Slightly less type safety for custom events
**Future:** Can tighten types as tracking requirements stabilize

### Code Simplicity vs Abstraction
**Decision:** Keep utility functions simple (e.g., renderJsonLd)
**Trade-off:** Less abstraction now, easier to understand
**Future:** Can enhance functions as needs arise

### Development vs Production
**Decision:** Implement foundation with production-ready structure
**Trade-off:** Some features (analytics integration) need production environment
**Future:** Easy to swap console.log for real analytics calls

## Conclusion

All design decisions prioritize:
1. **Type Safety** - TypeScript types where it matters most
2. **Maintainability** - Clear, simple code that's easy to modify
3. **Standards Compliance** - Following Next.js, React, and SEO best practices
4. **Production Ready** - Structure is ready for real-world deployment

The implementation balances pragmatism with quality, making it easy to enhance specific areas as requirements evolve.
