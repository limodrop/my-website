"use client";

import { SmartImage } from "@/app/components/SmartImage";
import { Icons } from "@/app/components/Icons";

export function ImageAndIconShowcase() {
  return (
    <div className="container py-12 space-y-16">
      <div>
        <h1 className="text-4xl font-semibold text-[var(--text)] mb-2">
          Image & Icon System
        </h1>
        <p className="text-[var(--textMuted)]">
          Professional image handling and consistent icon system
        </p>
      </div>

      {/* SMART IMAGE DEMO */}
      <section>
        <h2 className="text-2xl font-semibold text-[var(--text)] mb-6">
          SmartImage Component
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Working Image */}
          <div>
            <h3 className="text-sm font-medium text-[var(--text)] mb-3">
              Working Image (with fade-in)
            </h3>
            <SmartImage
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400"
              alt="Luxury vehicle"
              className="rounded-lg h-48"
            />
          </div>

          {/* Broken Image with Fallback */}
          <div>
            <h3 className="text-sm font-medium text-[var(--text)] mb-3">
              Broken URL (shows fallback)
            </h3>
            <SmartImage
              src="https://invalid-url-that-will-fail.com/image.jpg"
              alt="This will show fallback"
              className="rounded-lg h-48"
            />
          </div>

          {/* Custom Fallback */}
          <div>
            <h3 className="text-sm font-medium text-[var(--text)] mb-3">
              Custom Fallback
            </h3>
            <SmartImage
              src="https://invalid.com/broken.jpg"
              alt="Custom fallback example"
              fallback="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=400"
              className="rounded-lg h-48"
            />
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-900">
            <strong>Features:</strong> Automatic blur placeholder, smooth fade-in, error handling with fallback images
          </p>
        </div>
      </section>

      {/* ICON SYSTEM DEMO */}
      <section>
        <h2 className="text-2xl font-semibold text-[var(--text)] mb-6">
          Icon System
        </h2>

        {/* Service Icons */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-[var(--text)] mb-4">
            Service Icons
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Icons.airport, label: "Airport Transfer" },
              { icon: Icons.hotel, label: "Hotel Shuttle" },
              { icon: Icons.car, label: "Chauffeur Service" },
              { icon: Icons.business, label: "Corporate Travel" },
              { icon: Icons.city, label: "City Tours" },
              { icon: Icons.fleet, label: "Fleet" },
              { icon: Icons.services, label: "All Services" },
              { icon: Icons.time, label: "Hourly Rental" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="
                    flex items-center gap-3 p-4 rounded-lg
                    bg-[var(--surface)] border border-[var(--border)]
                    hover:border-[var(--primary)] transition
                  "
                >
                  <Icon className="w-5 h-5 text-[var(--primary)]" />
                  <span className="text-sm text-[var(--text)]">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Icons */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-[var(--text)] mb-4">
            Navigation & UI Icons
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Icons.home, label: "Home" },
              { icon: Icons.search, label: "Search" },
              { icon: Icons.menu, label: "Menu" },
              { icon: Icons.close, label: "Close" },
              { icon: Icons.filter, label: "Filter" },
              { icon: Icons.sort, label: "Sort" },
              { icon: Icons.settings, label: "Settings" },
              { icon: Icons.user, label: "User" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="
                    flex items-center gap-3 p-4 rounded-lg
                    bg-[var(--surface)] border border-[var(--border)]
                  "
                >
                  <Icon className="w-5 h-5 text-[var(--textMuted)]" />
                  <span className="text-sm text-[var(--text)]">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Status Icons */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-[var(--text)] mb-4">
            Status & Feedback Icons
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Icons.success, label: "Success", color: "text-green-600" },
              { icon: Icons.warning, label: "Warning", color: "text-yellow-600" },
              { icon: Icons.info, label: "Info", color: "text-blue-600" },
              { icon: Icons.star, label: "Featured", color: "text-yellow-500" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="
                    flex items-center gap-3 p-4 rounded-lg
                    bg-[var(--surface)] border border-[var(--border)]
                  "
                >
                  <Icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-sm text-[var(--text)]">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Icon Sizes */}
        <div>
          <h3 className="text-lg font-medium text-[var(--text)] mb-4">
            Icon Sizes
          </h3>
          <div className="flex items-end gap-6 p-6 bg-[var(--surface)] border border-[var(--border)] rounded-lg">
            <div className="text-center">
              <Icons.car className="w-4 h-4 text-[var(--primary)] mx-auto mb-2" />
              <p className="text-xs text-[var(--textMuted)]">Small (16px)</p>
            </div>
            <div className="text-center">
              <Icons.car className="w-5 h-5 text-[var(--primary)] mx-auto mb-2" />
              <p className="text-xs text-[var(--textMuted)]">Medium (20px)</p>
            </div>
            <div className="text-center">
              <Icons.car className="w-6 h-6 text-[var(--primary)] mx-auto mb-2" />
              <p className="text-xs text-[var(--textMuted)]">Large (24px)</p>
            </div>
            <div className="text-center">
              <Icons.car className="w-8 h-8 text-[var(--primary)] mx-auto mb-2" />
              <p className="text-xs text-[var(--textMuted)]">XL (32px)</p>
            </div>
          </div>
        </div>
      </section>

      {/* USAGE EXAMPLES */}
      <section>
        <h2 className="text-2xl font-semibold text-[var(--text)] mb-6">
          Real-World Usage
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Service Card with Icon */}
          <div className="p-6 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-blue-50">
                <Icons.airport className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--text)]">
                Airport Transfer
              </h3>
            </div>
            <p className="text-[var(--textMuted)] text-sm">
              Professional chauffeur service to and from all major airports
            </p>
          </div>

          {/* CTA Button with Icon */}
          <div className="p-6 rounded-lg bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center">
            <button
              className="
                flex items-center gap-2 px-6 py-3 rounded-md
                bg-[var(--primary)] text-white
                hover:bg-[var(--primaryHover)]
                transition group
              "
            >
              <span>Book Now</span>
              <Icons.arrow className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
