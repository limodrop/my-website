/**
 * Performance Optimization Guide
 * ================================
 * 
 * This file documents best practices for optimizing your Next.js application.
 */

// 1. LAZY LOADING NON-CRITICAL COMPONENTS
// ----------------------------------------
// Use dynamic imports to reduce initial bundle size

import dynamic from "next/dynamic";

// Example: Lazy load CTA components that appear below the fold
export const BookingCTA = dynamic(() => import("@/app/components/BookingCTA"), {
  ssr: false, // Skip server-side rendering for client-only components
  loading: () => <div className="animate-pulse bg-[var(--border)] h-48 rounded-lg" />,
});

// Example: Lazy load heavy chart/analytics components
export const AnalyticsDashboard = dynamic(
  () => import("@/app/components/admin/AnalyticsDashboard"),
  {
    loading: () => <div>Loading analytics...</div>,
  }
);

// 2. PREFETCHING IMPORTANT ROUTES
// --------------------------------
// Add prefetch to critical navigation links

import Link from "next/link";

export function NavigationExample({ locale }: { locale: string }) {
  return (
    <nav>
      {/* Prefetch important routes for instant navigation */}
      <Link href={`/${locale}/services`} prefetch>
        Services
      </Link>
      <Link href={`/${locale}/fleet`} prefetch>
        Fleet
      </Link>

      {/* Don't prefetch less important routes */}
      <Link href={`/${locale}/about`} prefetch={false}>
        About
      </Link>
    </nav>
  );
}

// 3. IMAGE OPTIMIZATION
// ---------------------
// Use Next.js Image component with lazy loading

import Image from "next/image";

export function OptimizedImage() {
  return (
    <Image
      src="/fleet/sedan.jpg"
      alt="Luxury sedan"
      width={800}
      height={600}
      loading="lazy" // Lazy load images below the fold
      placeholder="blur" // Show blur placeholder while loading
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
    />
  );
}

// 4. REDUCE HYDRATION COST
// -------------------------
// Only use "use client" where absolutely necessary

// ❌ BAD: Entire page component is client-side
// "use client"
// export default function Page() { ... }

// ✅ GOOD: Only interactive parts are client-side
// Server component (default)
export default function Page() {
  return (
    <div>
      <Header /> {/* Server component */}
      <Content /> {/* Server component */}
      <InteractiveWidget /> {/* Client component with "use client" */}
    </div>
  );
}

// 5. FONT OPTIMIZATION
// --------------------
// Preload critical fonts in layout.tsx

export const fontOptimizationExample = `
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Use font-display: swap for better performance
  preload: true,
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
`;

// 6. DATABASE QUERY OPTIMIZATION
// -------------------------------
// Use parallel data fetching where possible

export async function getServicePageData(slug: string) {
  // ❌ BAD: Sequential fetching
  // const service = await getService(slug);
  // const cities = await getCities();
  // const fleet = await getFleet();

  // ✅ GOOD: Parallel fetching
  const [service, cities, fleet] = await Promise.all([
    getService(slug),
    getCities(),
    getFleet(),
  ]);

  return { service, cities, fleet };
}

// Placeholder functions
async function getService(slug: string) {
  return {};
}
async function getCities() {
  return [];
}
async function getFleet() {
  return [];
}

// 7. MEMOIZATION
// --------------
// Use React.memo for expensive components

import { memo } from "react";

export const ExpensiveList = memo(function ExpensiveList({ items }: { items: any[] }) {
  // This component only re-renders when items change
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
});

// 8. CODE SPLITTING BY ROUTE
// ---------------------------
// Next.js automatically code-splits by route
// Keep route components focused and avoid importing everything

// ✅ GOOD: Only import what you need per route
// app/services/page.tsx only imports service-related components
// app/fleet/page.tsx only imports fleet-related components

// 9. REDUCE BUNDLE SIZE
// ----------------------
// Use tree-shakeable imports

// ❌ BAD
// import _ from 'lodash'

// ✅ GOOD
// import debounce from 'lodash/debounce'

// 10. PERFORMANCE MONITORING
// ---------------------------
// Add Web Vitals tracking

export function reportWebVitals(metric: any) {
  // Send to analytics
  console.log(metric);

  // Track Core Web Vitals
  switch (metric.name) {
    case "FCP": // First Contentful Paint
    case "LCP": // Largest Contentful Paint
    case "CLS": // Cumulative Layout Shift
    case "FID": // First Input Delay
    case "TTFB": // Time to First Byte
      // Send to analytics service
      break;
  }
}

export default {
  BookingCTA,
  AnalyticsDashboard,
  NavigationExample,
  OptimizedImage,
  ExpensiveList,
};
