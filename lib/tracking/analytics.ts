/**
 * Analytics tracking layer
 */

interface CTAClickEvent {
  location: string;
  locale: string;
}

interface BookingSubmitEvent {
  locale: string;
}

export type TrackingEvent = CTAClickEvent | BookingSubmitEvent | Record<string, string | number | boolean>;

/**
 * Track an analytics event
 * @param eventName - The name of the event
 * @param properties - Additional properties for the event
 */
export function track(eventName: string, properties?: TrackingEvent): void {
  // Log to console in development
  if (typeof window !== 'undefined') {
    console.log('[Analytics]', eventName, properties);
  }

  // In production, this would integrate with your analytics provider
  // Examples:
  // - Google Analytics: gtag('event', eventName, properties);
  // - Mixpanel: mixpanel.track(eventName, properties);
  // - PostHog: posthog.capture(eventName, properties);
  
  // For now, we'll use a custom event that can be listened to
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('track', {
      detail: { eventName, properties }
    }));
  }
}

/**
 * Track CTA click
 * @param location - Where the CTA was clicked (e.g., "hero", "footer")
 * @param locale - The current locale
 */
export function trackCTAClick(location: string, locale?: string): void {
  track('cta_click', {
    location,
    locale: locale || 'en'
  });
}

/**
 * Track booking form submission
 * @param locale - The current locale
 */
export function trackBookingSubmit(locale?: string): void {
  track('booking_request_submitted', {
    locale: locale || 'en'
  });
}
