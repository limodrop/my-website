# 🎨 Oregon Town Car Design System

**Version:** 2.0  
**Last Updated:** January 22, 2026  
**Status:** Production-Ready

This document defines the complete, unified design system for OregonTownCar.com across all breakpoints (mobile, tablet, desktop).

---

## 📏 **1. BREAKPOINTS**

### Responsive Strategy
Mobile-first design with progressive enhancement.

| Breakpoint | Range | Tailwind | Usage |
|------------|-------|----------|-------|
| **Mobile** | `< 640px` | `default` | Single column, stacked layouts |
| **Tablet** | `640px - 1024px` | `sm:` `md:` | 2-column grids, reduced spacing |
| **Desktop** | `> 1024px` | `lg:` `xl:` | Multi-column grids, full features |

### Key Tailwind Classes
```css
/* Mobile base (no prefix) */
px-4 text-3xl mb-10

/* Tablet (sm: 640px+) */
sm:px-6 sm:text-4xl sm:mb-12

/* Desktop (lg: 1024px+) */
lg:px-8 lg:text-5xl lg:mb-[var(--space-section)]
```

---

## 🎨 **2. THEME TOKENS**

### CSS Variables (Light & Dark)
All colors, spacing, and design elements use CSS variables for theme consistency.

#### Colors
```css
--background       /* Page background */
--surface          /* Card/panel backgrounds */
--text             /* Primary text color */
--textMuted        /* Secondary text, labels */
--primary          /* Brand color (CTA buttons) */
--primaryHover     /* Hover state for primary */
--border           /* Dividers, borders */
--success          /* Success states */
--warning          /* Warning states */
--error            /* Error states */
```

#### Spacing
```css
--space-xs: 0.5rem   /* 8px */
--space-sm: 0.75rem  /* 12px */
--space-md: 1rem     /* 16px */
--space-lg: 1.5rem   /* 24px */
--space-xl: 2rem     /* 32px */
--space-section: 5rem    /* 80px - between major sections */
--space-header: 4rem     /* 64px - header spacing */
--space-footer: 3rem     /* 48px - footer spacing */
```

#### Container
```css
--container-max: 1280px  /* max-w-7xl */
--container-padding: 1.5rem  /* px-6 on desktop, px-4 mobile */
```

### Usage Example
```tsx
<div className="bg-[var(--surface)] text-[var(--text)] border border-[var(--border)]">
  Content
</div>
```

**Never use:**
- Raw hex values: `#000000`, `#FF5733`
- Arbitrary Tailwind values: `text-gray-700`, `bg-blue-500`

---

## 🧱 **3. LAYOUT SYSTEM**

### Container Wrapper
Every page uses the unified container system:

```tsx
const containerClass = "max-w-7xl mx-auto px-4 sm:px-6"
```

### Layout Variants
```tsx
type LayoutVariant = "boxed" | "wide" | "full"

boxed: max-w-7xl mx-auto px-4 sm:px-6  // Default
wide: max-w-screen-2xl mx-auto px-4 sm:px-6
full: w-full  // Full bleed, no padding
```

### Responsive Padding
| Screen | Class | Padding |
|--------|-------|---------|
| Mobile | `px-4` | 16px |
| Tablet+ | `sm:px-6` | 24px |
| Large Desktop | `lg:px-8` | 32px |

### Section Spacing
```tsx
<section className="mb-10 sm:mb-12 lg:mb-[var(--space-section)]">
  {/* Mobile: 40px, Tablet: 48px, Desktop: 80px */}
</section>
```

---

## 🧭 **4. HEADER SYSTEM**

### Desktop (≥768px)
- Full navigation visible
- Logo left, nav center, actions right
- Height: `h-16` (64px)
- Sticky: `sticky top-0 z-30`

### Mobile (<768px)
- Logo left, hamburger right
- Height: `h-14` (56px)
- MobileMenu drawer slides in from right

```tsx
<header className="sticky top-0 z-30 bg-[var(--surface)] border-b border-[var(--border)]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
    <Logo />
    <Navigation /> {/* Hidden on mobile */}
    <MobileMenu /> {/* Visible only on mobile */}
  </div>
</header>
```

### MobileMenu Component
- Drawer: 280px wide, max 85vw
- Slide-in animation: `transition-transform duration-300`
- Body scroll lock when open
- Swipe-right-to-close gesture
- Overlay with `bg-black/50 z-40`

---

## 🖼️ **5. HERO SYSTEM**

### Mobile (<640px)
```tsx
<div className="relative h-[300px]">
  <SmartImage src={hero.image} className="absolute inset-0" priority />
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
  <div className="relative h-full flex flex-col justify-center px-4">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
      {hero.title}
    </h1>
    <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6">
      {hero.subtitle}
    </p>
    <Button variant="primary" className="w-full sm:w-auto">
      {hero.cta}
    </Button>
  </div>
</div>
```

### Tablet (640-1024px)
- Height: `h-[400px]`
- Gradient: `from-black/70 via-black/40`
- Text: Centered or left-aligned
- CTA: Stacked below text

### Desktop (>1024px)
- Height: `h-[500px]`
- Gradient: Subtle `from-black/60 via-black/30`
- Text: Left-aligned
- CTA: Inline

---

## 🧩 **6. CARD SYSTEM**

### ServiceCard
```tsx
<div className="p-4 sm:p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:shadow-lg transition">
  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center mb-3 sm:mb-4">
    <Icons.airport className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--primary)]" />
  </div>
  <h3 className="text-base sm:text-lg font-semibold text-[var(--text)] mb-2">
    {service.name}
  </h3>
  <p className="text-sm sm:text-base text-[var(--textMuted)] mb-4">
    {service.description}
  </p>
  <Button variant="ghost" className="w-full sm:w-auto min-h-[44px]">
    Learn More <Icons.arrow />
  </Button>
</div>
```

### FleetCard
```tsx
<div className="rounded-xl overflow-hidden bg-[var(--surface)] border border-[var(--border)]">
  <SmartImage src={fleet.image} className="h-32 sm:h-40 lg:h-48" />
  <div className="p-4 sm:p-5">
    <h3 className="text-base sm:text-lg font-semibold mb-2">{fleet.name}</h3>
    <div className="flex flex-wrap gap-2 mb-3">
      <Tag icon={<Icons.users />}>{fleet.capacity} passengers</Tag>
      <Tag icon={<Icons.luggage />}>{fleet.luggage} bags</Tag>
    </div>
    <Button className="w-full sm:w-auto min-h-[44px]">View Details</Button>
  </div>
</div>
```

### CityCard
```tsx
<div className="p-4 sm:p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
  <div className="flex items-center gap-3 mb-3">
    <Icons.city className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--primary)]" />
    <h3 className="text-base sm:text-lg font-semibold truncate">{city.name}</h3>
  </div>
  <p className="text-xs sm:text-sm text-[var(--textMuted)] truncate">{city.country}</p>
  <Button variant="ghost" className="mt-4 w-full min-h-[44px]">
    Explore Services
  </Button>
</div>
```

### Mobile Card Rules
- Padding: `p-4` mobile, `p-5` tablet, `p-6` desktop
- Images: `h-32` mobile, `h-40` tablet, `h-48` desktop
- Tap targets: **min-h-[44px]** for all buttons
- Text: Truncate with `truncate` or `line-clamp-2`
- Full-width buttons on mobile: `w-full sm:w-auto`

---

## 🏗️ **7. GRID SYSTEM**

### Responsive Grid
```css
.grid-responsive {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr; /* Mobile: 1 column */
}

@media (min-width: 640px) {
  .grid-responsive {
    gap: 1.5rem;
    grid-template-columns: repeat(2, 1fr); /* Tablet: 2 columns */
  }
}

@media (min-width: 1024px) {
  .grid-responsive {
    gap: var(--space-lg);
    grid-template-columns: repeat(3, 1fr); /* Desktop: 3 columns */
  }
}
```

### Usage
```tsx
<div className="grid-responsive">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>
```

### Manual Grid (when more control needed)
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
  {/* Content */}
</div>
```

---

## 📝 **8. TYPOGRAPHY**

### Headings
```tsx
/* H1 - Page titles */
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--text)] mb-3 sm:mb-4">

/* H2 - Section titles */
<h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[var(--text)] mb-3 sm:mb-4">

/* H3 - Card titles */
<h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[var(--text)]">
```

### Body Text
```tsx
/* Large body (hero, intros) */
<p className="text-sm sm:text-base lg:text-lg text-[var(--textMuted)]">

/* Normal body */
<p className="text-sm sm:text-base text-[var(--textMuted)]">

/* Small text (labels, captions) */
<p className="text-xs sm:text-sm text-[var(--textMuted)]">
```

### Mobile Typography Overrides
```css
@media (max-width: 639px) {
  h1 { font-size: 1.875rem; line-height: 1.2; } /* 30px */
  h2 { font-size: 1.5rem; line-height: 1.3; }   /* 24px */
  h3 { font-size: 1.125rem; line-height: 1.4; } /* 18px */
}
```

---

## 🦶 **9. FOOTER SYSTEM**

### Mobile (<768px) - Accordion Sections
```tsx
<FooterSection title="Quick Links" isOpen={openSections.includes('quicklinks')}>
  <nav className="space-y-2">
    {links.map(link => <Link>{link.label}</Link>)}
  </nav>
</FooterSection>
```

### Desktop (≥768px) - Grid Layout
```tsx
<div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
  <div>
    <h3 className="font-semibold mb-4">Quick Links</h3>
    <nav className="space-y-2">
      {links.map(link => <Link>{link.label}</Link>)}
    </nav>
  </div>
  {/* Repeat for other sections */}
</div>
```

### Footer Styling
- Mobile padding: `py-8 px-4`
- Desktop padding: `py-12 px-6`
- Typography: `text-sm sm:text-base`
- Border: `border-t border-[var(--border)]`

---

## 🧠 **10. INTERACTION RULES**

### Tap Targets (Accessibility)
**Minimum size: 44px x 44px** (per iOS/Android guidelines)

```tsx
<button className="min-h-[44px] min-w-[44px] px-4 py-2">
  Action
</button>
```

### Minimum Spacing
- Between tappable elements: **12px** (`gap-3`)
- Between sections: **40px mobile** (`mb-10`), **80px desktop** (`lg:mb-[var(--space-section)]`)

### Hover States (Desktop Only)
```tsx
<button className="hover:bg-[var(--primaryHover)] transition-colors">
  {/* No hover on touch devices */}
</button>
```

### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Body Scroll Lock (Modals, Drawers)
```tsx
useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
  return () => { document.body.style.overflow = ""; };
}, [open]);
```

### Swipe Gestures (MobileMenu)
- Swipe right to close: Threshold **100px**
- Touch handlers: `onTouchStart`, `onTouchMove`, `onTouchEnd`

---

## ⚡ **11. PERFORMANCE RULES**

### Image Loading
```tsx
<SmartImage 
  src={image} 
  alt={alt}
  loading={priority ? "eager" : "lazy"}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  priority={false} // lazy-load by default
/>
```

### Link Prefetching
```tsx
<a 
  href={href}
  onMouseEnter={() => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    document.head.appendChild(link);
  }}
>
  Link
</a>
```

### Animation Performance
- Use `transform` and `opacity` only (GPU-accelerated)
- Avoid: `width`, `height`, `left`, `top` animations
- Transitions: `duration-200` to `duration-300` (200-300ms)

---

## 🧩 **12. COMPONENT MOBILE VARIANTS**

### Tables - Horizontal Scroll
```tsx
<div className="overflow-x-auto -mx-4 sm:mx-0">
  <table className="min-w-[600px] sm:min-w-full">
    {/* Mobile users can scroll horizontally */}
  </table>
</div>
```

### Tabs - Scrollable Tabs
```tsx
<div className="flex gap-2 sm:gap-4 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
  {tabs.map(tab => (
    <button className="whitespace-nowrap min-h-[44px]">{tab.label}</button>
  ))}
</div>
```

### Modals - Mobile Safe Area
```tsx
<div className="fixed inset-0 flex items-center justify-center p-4">
  <div className="max-w-lg w-full max-h-[90vh] overflow-y-auto p-4 sm:p-6">
    {children}
  </div>
</div>
```

### SearchOverlay - Mobile Positioning
```tsx
<div className="flex items-start sm:items-center p-2 sm:p-4 mt-16 sm:mt-0">
  <input placeholder="Search..." className="text-sm sm:text-base" />
</div>
```

### Accordions - Touch-Friendly
```tsx
<button className="px-3 py-3 sm:px-4 text-sm sm:text-base min-h-[44px]">
  {item.title}
</button>
```

### Dropdowns - Responsive Width
```tsx
<div className="w-48 sm:w-56">
  <button className="min-h-[44px] text-xs sm:text-sm">
    {item.label}
  </button>
</div>
```

---

## 🔍 **13. SAFETY CHECKLIST**

Before deploying any UI change, verify:

### Horizontal Scroll
- [ ] No content wider than viewport on mobile
- [ ] `overflow-x: hidden` on `html` and `body`
- [ ] Tables have `overflow-x-auto` wrapper

### Text Clipping
- [ ] No fixed widths on text containers
- [ ] Use `truncate` or `line-clamp-2` for long text
- [ ] Responsive typography classes applied

### Overlapping Elements
- [ ] No `absolute` positioning breaking mobile layout
- [ ] Z-index layering correct (header: 30, drawer: 50, overlay: 40)
- [ ] Modals/drawers lock body scroll

### Tap Targets
- [ ] All buttons/links ≥ 44px height
- [ ] Minimum 12px spacing between tappable elements
- [ ] Form inputs have adequate touch area

### Fixed Widths
- [ ] No hardcoded `width: 500px` breaking mobile
- [ ] Use `max-w-*` with `w-full` for responsive sizing
- [ ] Container padding accounts for mobile (`px-4`)

### Images
- [ ] All images use `SmartImage` component
- [ ] Lazy-loading enabled except hero images
- [ ] Responsive `sizes` attribute provided

### Icons
- [ ] All icons from centralized `Icons` registry
- [ ] Responsive sizing: `w-4 h-4 sm:w-5 sm:h-5`

### Spacing
- [ ] Uses theme tokens (`var(--space-*)`)
- [ ] Responsive spacing classes applied
- [ ] Section spacing: `mb-10 sm:mb-12 lg:mb-[var(--space-section)]`

---

## 📦 **14. COMPONENT REFERENCE**

### Core Components
| Component | Path | Mobile Optimized |
|-----------|------|------------------|
| SmartImage | `app/components/SmartImage.tsx` | ✅ Lazy-load, sizes |
| Button | `app/ui/buttons/Button.tsx` | ✅ Prefetch, min-h-[44px] |
| MobileMenu | `app/components/MobileMenu.tsx` | ✅ Drawer, swipe, scroll lock |
| Footer | `app/components/Footer.tsx` | ✅ Accordions on mobile |
| Navigation | `app/components/Navigation.tsx` | ✅ Hidden mobile, full desktop |
| Section | `app/ui/layout/Section.tsx` | ✅ Responsive spacing |
| HeroSliderClient | `app/ui/hero/HeroSliderClient.tsx` | ✅ h-[300px] mobile |
| ServiceCard | `app/ui/cards/ServiceCard.tsx` | ✅ p-4, full-width CTA |
| FleetCard | `app/ui/cards/FleetCard.tsx` | ✅ h-32 images mobile |
| CityCard | `app/ui/cards/CityCard.tsx` | ✅ Truncate, 44px tap |
| Table | `app/components/Table.tsx` | ✅ Horizontal scroll |
| Tabs | `app/components/Tabs.tsx` | ✅ Scrollable tabs |
| Modal | `app/components/Modal.tsx` | ✅ p-4, scroll lock |
| SearchOverlay | `app/components/SearchOverlay.tsx` | ✅ Mobile positioning |
| CommandPalette | `app/components/CommandPalette.tsx` | ✅ pt-12 mobile |
| Accordion | `app/components/Accordion.tsx` | ✅ min-h-[44px] |
| Dropdown | `app/components/Dropdown.tsx` | ✅ w-48 sm:w-56 |

---

## 🚀 **15. IMPLEMENTATION GUIDE**

### Creating a New Page
```tsx
import { getDictionary } from "@/app/i18n";

export default async function NewPage({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang);
  
  return (
    <>
      {/* Page Header */}
      <h1 className="text-3xl sm:text-4xl font-semibold text-[var(--text)] mb-3 sm:mb-4">
        {dict.page.title}
      </h1>
      <p className="text-sm sm:text-base lg:text-lg text-[var(--textMuted)] mb-8 sm:mb-10 max-w-2xl">
        {dict.page.description}
      </p>
      
      {/* Content Grid */}
      <div className="grid-responsive">
        {items.map(item => <Card key={item.id} {...item} />)}
      </div>
    </>
  );
}
```

### Creating a New Component
```tsx
"use client";

import { Icons } from "@/app/components/Icons";

interface MyComponentProps {
  title: string;
  variant?: "default" | "compact";
}

export function MyComponent({ title, variant = "default" }: MyComponentProps) {
  return (
    <div className="p-4 sm:p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
      <h3 className="text-base sm:text-lg font-semibold text-[var(--text)] mb-3">
        {title}
      </h3>
      {/* Component content */}
    </div>
  );
}
```

---

## 📚 **16. RESOURCES**

### Documentation
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Lucide Icons](https://lucide.dev/icons)

### Internal Files
- Layout: `app/[lang]/layout.tsx`
- Globals: `app/globals.css`
- Icons Registry: `app/components/Icons.tsx`
- Theme Tokens: CSS variables in `:root` and `[data-theme="dark"]`

---

## 🔄 **17. CHANGELOG**

### v2.0 (January 22, 2026)
- ✅ Complete mobile-first system implementation
- ✅ Performance optimizations (lazy-load, prefetch, reduced motion)
- ✅ Swipe-to-close drawer gesture
- ✅ Full component audit and mobile optimization
- ✅ Unified design system documentation

### v1.0 (January 2026)
- Initial unified layout system
- Theme token implementation
- Component refactor with Icons registry
- Desktop-first design

---

**End of Design System Documentation**
