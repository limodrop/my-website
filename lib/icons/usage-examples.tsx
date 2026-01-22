/**
 * Icon System Usage Guide
 * ========================
 * 
 * All icons are imported from lucide-react and centralized in Icons.tsx
 * for consistency across the entire application.
 */

import { Icons } from "@/app/components/Icons";

// BASIC USAGE
// -----------

export function BasicIconExample() {
  const Icon = Icons.airport;
  
  return (
    <div className="flex items-center gap-2">
      <Icon className="w-5 h-5 text-[var(--text)]" />
      <span>Airport Transfer</span>
    </div>
  );
}

// DYNAMIC ICON SELECTION
// -----------------------

export function DynamicIconExample({ type }: { type: string }) {
  // Map service types to icons
  const iconMap: Record<string, any> = {
    airport: Icons.airport,
    hotel: Icons.hotel,
    corporate: Icons.business,
    city: Icons.city,
  };

  const Icon = iconMap[type] || Icons.car;

  return <Icon className="w-6 h-6 text-[var(--primary)]" />;
}

// ICON WITH DIFFERENT SIZES
// --------------------------

export function IconSizeExamples() {
  return (
    <div className="space-y-4">
      {/* Small */}
      <Icons.car className="w-4 h-4 text-[var(--text)]" />
      
      {/* Medium (default) */}
      <Icons.car className="w-5 h-5 text-[var(--text)]" />
      
      {/* Large */}
      <Icons.car className="w-6 h-6 text-[var(--text)]" />
      
      {/* Extra Large */}
      <Icons.car className="w-8 h-8 text-[var(--text)]" />
    </div>
  );
}

// ICON WITH COLORS
// ----------------

export function IconColorExamples() {
  return (
    <div className="flex gap-4">
      <Icons.success className="w-5 h-5 text-green-600" />
      <Icons.warning className="w-5 h-5 text-yellow-600" />
      <Icons.info className="w-5 h-5 text-blue-600" />
      <Icons.close className="w-5 h-5 text-red-600" />
    </div>
  );
}

// ICON IN BUTTONS
// ---------------

export function IconButtonExample() {
  return (
    <button
      className="
        flex items-center gap-2 px-4 py-2
        bg-[var(--primary)] text-white rounded-md
        hover:bg-[var(--primaryHover)]
      "
    >
      <Icons.arrow className="w-4 h-4" />
      <span>Book Now</span>
    </button>
  );
}

// ICON IN CARDS
// -------------

export function IconCardExample() {
  return (
    <div
      className="
        p-6 rounded-lg
        bg-[var(--surface)]
        border border-[var(--border)]
      "
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-md bg-blue-100">
          <Icons.airport className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-lg font-semibold text-[var(--text)]">
          Airport Transfer
        </h3>
      </div>
      <p className="text-[var(--textMuted)]">
        Professional airport transportation service
      </p>
    </div>
  );
}

// ICON MAPPING FOR SERVICES
// --------------------------

export const ServiceIcons = {
  "airport-transfer": Icons.airport,
  "hotel-shuttle": Icons.hotel,
  "corporate-travel": Icons.business,
  "city-tour": Icons.city,
  "hourly-rental": Icons.time,
  "executive-sedan": Icons.car,
};

export function ServiceIconExample({ serviceSlug }: { serviceSlug: string }) {
  const Icon = ServiceIcons[serviceSlug as keyof typeof ServiceIcons] || Icons.car;
  
  return <Icon className="w-8 h-8 text-[var(--primary)]" />;
}

// ICON MAPPING FOR NAVIGATION
// ----------------------------

export function NavigationExample() {
  const navItems = [
    { label: "Home", icon: Icons.home, href: "/" },
    { label: "Services", icon: Icons.services, href: "/services" },
    { label: "Fleet", icon: Icons.fleet, href: "/fleet" },
    { label: "Cities", icon: Icons.city, href: "/cities" },
    { label: "Contact", icon: Icons.contact, href: "/contact" },
  ];

  return (
    <nav className="space-y-2">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[var(--background)]"
          >
            <Icon className="w-5 h-5 text-[var(--textMuted)]" />
            <span className="text-[var(--text)]">{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}

// ANIMATED ICONS
// --------------

export function AnimatedIconExample() {
  return (
    <button className="group">
      <Icons.arrow
        className="
          w-5 h-5 text-[var(--primary)]
          transition-transform
          group-hover:translate-x-1
        "
      />
    </button>
  );
}

export default {
  BasicIconExample,
  DynamicIconExample,
  IconSizeExamples,
  IconColorExamples,
  IconButtonExample,
  IconCardExample,
  ServiceIconExample,
  NavigationExample,
  AnimatedIconExample,
};
