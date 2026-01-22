# UI Upgrade Documentation

## Overview

This document describes the UI upgrades made to create a more polished, enterprise-grade experience with a Microsoft-style clean aesthetic.

## Components Created

### PageShell
A consistent page wrapper that provides:
- Maximum width container (max-w-7xl)
- Horizontal padding (px-6)
- Vertical padding (py-12)

Usage:
```tsx
import PageShell from "@/app/components/PageShell";

export default function MyPage() {
  return (
    <PageShell>
      {/* Your content */}
    </PageShell>
  );
}
```

### Heading
A semantic heading component with consistent styling across all levels (h1-h6).

Usage:
```tsx
import Heading from "@/app/components/Heading";

<Heading level={1}>Main Title</Heading>
<Heading level={3}>Section Title</Heading>
```

### Text
A text component with optional muted styling for secondary text.

Usage:
```tsx
import Text from "@/app/components/Text";

<Text>Regular text</Text>
<Text muted className="mb-6">Muted secondary text</Text>
```

### ServiceCard & FleetCard
Card components for displaying services and fleet items in a grid layout.

## Card Grid System

### Responsive Grid Pattern

The card grid system provides a balanced, responsive layout that scales from mobile to desktop:

```tsx
<div className="
  grid
  gap-8
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-3
">
  {items.map((item) => (
    <Card key={item.id} {...item} />
  ))}
</div>
```

### Breakpoints

- **Mobile (default)**: 1 column
- **Small (sm: 640px+)**: 2 columns
- **Large (lg: 1024px+)**: 3 columns

For ultra-wide displays, you can extend to 4 columns:

```tsx
<div className="
  grid
  gap-8
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-3
  xl:grid-cols-4
">
  {items}
</div>
```

## Global Spacing Scale

Added to `app/globals.css`:

```css
:root {
  --space-xs: 0.4rem;   /* 6.4px */
  --space-sm: 0.8rem;   /* 12.8px */
  --space-md: 1.2rem;   /* 19.2px */
  --space-lg: 1.8rem;   /* 28.8px */
  --space-xl: 2.4rem;   /* 38.4px */
  --space-2xl: 3.2rem;  /* 51.2px */
}
```

### Usage in Components

Use spacing variables for consistent rhythm:

```tsx
<div className="mb-[var(--space-lg)]">Content</div>
<div className="p-[var(--space-md)]">Padded content</div>
<div className="gap-[var(--space-lg)]">Grid with spacing</div>
```

## Theme Variables

CSS variables for light/dark theme support:

```css
:root {
  --text: #1a1a1a;
  --surface: #ffffff;
  --border: #e5e7eb;
  --primary: #2563eb;
}

@media (prefers-color-scheme: dark) {
  :root {
    --text: #f3f4f6;
    --surface: #1f2937;
    --border: #374151;
    --primary: #3b82f6;
  }
}
```

## Updated Pages

### Services Page (`app/services/page.tsx`)
- Uses PageShell wrapper
- Displays services in responsive grid
- Premium spacing and typography

### Fleet Page (`app/fleet/page.tsx`)
- Uses PageShell wrapper
- Displays fleet items in responsive grid
- Consistent with Services page design

### City Detail Page (`app/cities/[slug]/page.tsx`)
- More informative layout
- Includes city image
- Lists popular use cases
- SEO-friendly description

### Country Detail Page (`app/countries/[slug]/page.tsx`)
- New page created
- Displays primary airports as tags
- Lists cities in a grid
- SEO-rich content

## Benefits

✅ **More breathing room** - Generous spacing improves readability
✅ **Better hierarchy** - Clear visual structure guides users
✅ **Stronger rhythm** - Consistent spacing creates visual harmony
✅ **Premium aesthetic** - Clean, Microsoft-style design
✅ **Responsive** - Scales beautifully from mobile to desktop
✅ **Theme-ready** - Light/dark mode support
✅ **Maintainable** - Reusable components and consistent patterns
