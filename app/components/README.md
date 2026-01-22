# UI Components Documentation

This directory contains reusable, theme-aware UI components for the Oregon Town Car website.

## Components

### Button
A premium button component with multiple variants and theme support.

**Usage:**
```tsx
import Button from '@/app/components/Button';

<Button variant="primary">Click Me</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="ghost">Learn More</Button>
```

**Props:**
- `variant`: "primary" | "secondary" | "ghost" (default: "primary")
- `className`: Additional CSS classes
- All standard button props (`onClick`, `disabled`, etc.)

### Form Components

#### Input
A themed text input with optional label.

**Usage:**
```tsx
import { Input } from '@/app/components/FormComponents';

<Input label="Email" type="email" placeholder="you@example.com" />
```

#### TextArea
A themed textarea with optional label.

**Usage:**
```tsx
import { TextArea } from '@/app/components/FormComponents';

<TextArea label="Message" rows={4} placeholder="Enter your message..." />
```

### Breadcrumbs
SEO-friendly breadcrumb navigation.

**Usage:**
```tsx
import Breadcrumbs from '@/app/components/Breadcrumbs';

<Breadcrumbs
  locale="en"
  items={[
    { label: "Home", href: "" },
    { label: "Services", href: "/services" },
    { label: "Airport Transportation" }
  ]}
/>
```

### Skeleton
Loading skeleton for better perceived performance.

**Usage:**
```tsx
import { Skeleton } from '@/app/components/Skeleton';

<Skeleton className="h-48 w-full" />
<Skeleton className="h-4 w-1/2" />
<Skeleton className="h-4 w-1/3" />
```

## Theme System

All components use CSS variables defined in `globals.css`:

### Light Theme (default)
- `--primary`: #0078d4
- `--primaryHover`: #006cbe
- `--background`: #ffffff
- `--surface`: #f3f2f1
- `--border`: #e1dfdd
- `--text`: #323130
- `--textMuted`: #605e5c

### Dark Theme
Enable by setting `data-theme="dark"` on the `<html>` element:
- `--primary`: #4dabf7
- `--primaryHover`: #339af0
- `--background`: #1a1a1a
- `--surface`: #2d2d2d
- `--border`: #3f3f3f
- `--text`: #f0f0f0
- `--textMuted`: #a0a0a0

## Demo

Visit `/components-demo` to see all components in action with theme switching.
