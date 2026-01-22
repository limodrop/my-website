"use client";

import { useState } from "react";
import { Dropdown } from "@/app/components/Dropdown";
import { Sidebar } from "@/app/components/Sidebar";
import { NotificationCenter } from "@/app/components/NotificationCenter";
import { CommandPalette } from "@/app/components/CommandPalette";
import { SearchOverlay } from "@/app/components/SearchOverlay";

export function AdvancedComponentsShowcase() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  // Dropdown items
  const languageOptions = [
    { label: "English", onClick: () => setSelectedLanguage("English") },
    { label: "Español", onClick: () => setSelectedLanguage("Español") },
    { label: "Français", onClick: () => setSelectedLanguage("Français") },
    { label: "العربية", onClick: () => setSelectedLanguage("العربية") },
    { label: "中文", onClick: () => setSelectedLanguage("中文") },
  ];

  // Sidebar links
  const sidebarLinks = [
    { href: "/admin/dashboard", label: "Dashboard", icon: "📊" },
    { href: "/admin/regions", label: "Regions", icon: "🌍" },
    { href: "/admin/countries", label: "Countries", icon: "🏴" },
    { href: "/admin/cities", label: "Cities", icon: "🏙️" },
    { href: "/admin/services", label: "Services", icon: "🚗" },
    { href: "/admin/fleet", label: "Fleet", icon: "🚙" },
  ];

  // Sample notifications
  const sampleNotifications = [
    {
      id: "1",
      message: "New booking request from Portland Airport",
      type: "info" as const,
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      read: false,
    },
    {
      id: "2",
      message: "Fleet vehicle maintenance scheduled",
      type: "warning" as const,
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      read: false,
    },
    {
      id: "3",
      message: "Payment received for booking #1234",
      type: "success" as const,
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      read: true,
    },
  ];

  // Command palette commands
  const commands = [
    {
      label: "Go to Dashboard",
      action: () => console.log("Navigate to dashboard"),
      shortcut: "⌘D",
      group: "Navigation",
    },
    {
      label: "Create New Booking",
      action: () => console.log("Create booking"),
      shortcut: "⌘N",
      group: "Actions",
    },
    {
      label: "View All Services",
      action: () => console.log("View services"),
      shortcut: "⌘S",
      group: "Navigation",
    },
    {
      label: "Fleet Management",
      action: () => console.log("Fleet management"),
      shortcut: "⌘F",
      group: "Navigation",
    },
    {
      label: "Settings",
      action: () => console.log("Settings"),
      shortcut: "⌘,",
      group: "System",
    },
  ];

  // Mock search function
  const handleSearch = (query: string) => {
    const mockResults = [
      {
        title: "Airport Transfer Service",
        description: "Professional airport transportation",
        category: "Service",
        url: "/services/airport-transfer",
      },
      {
        title: "Luxury Sedan",
        description: "Premium 4-passenger sedan",
        category: "Fleet",
        url: "/fleet/luxury-sedan",
      },
      {
        title: "Portland",
        description: "Oregon's largest city",
        category: "City",
        url: "/cities/portland",
      },
    ];

    // Filter results based on query
    return mockResults.filter(
      (r) =>
        r.title.toLowerCase().includes(query.toLowerCase()) ||
        r.description.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar Demo */}
      <Sidebar locale="en" links={sidebarLinks} title="Admin Panel" />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h1 className="text-4xl font-semibold text-[var(--text)] mb-2">
              Advanced Components Showcase
            </h1>
            <p className="text-[var(--textMuted)]">
              Enterprise-grade UI components for power users and admins
            </p>
          </div>

          {/* Top Bar with Components */}
          <div className="flex items-center gap-4 p-4 bg-[var(--surface)] border border-[var(--border)] rounded-lg">
            <Dropdown label={selectedLanguage} items={languageOptions} />
            <NotificationCenter initialNotifications={sampleNotifications} />
            <SearchOverlay onSearch={handleSearch} />
          </div>

          {/* Dropdown Demo */}
          <section>
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
              Dropdown Component
            </h2>
            <div className="p-6 bg-[var(--surface)] border border-[var(--border)] rounded-lg">
              <p className="text-[var(--textMuted)] mb-4">
                Perfect for language selection, filters, and menus. Click to try:
              </p>
              <Dropdown label="Select Language" items={languageOptions} />
            </div>
          </section>

          {/* Notification Center Info */}
          <section>
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
              Notification Center
            </h2>
            <div className="p-6 bg-[var(--surface)] border border-[var(--border)] rounded-lg">
              <p className="text-[var(--textMuted)]">
                Persistent notification panel with unread badges and mark-as-read
                functionality. Check the top bar for the notifications button.
              </p>
            </div>
          </section>

          {/* Command Palette Info */}
          <section>
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
              Command Palette
            </h2>
            <div className="p-6 bg-[var(--surface)] border border-[var(--border)] rounded-lg">
              <p className="text-[var(--textMuted)] mb-4">
                VS Code-style command palette for power users. Press{" "}
                <kbd className="px-2 py-1 bg-[var(--background)] border border-[var(--border)] rounded text-sm">
                  Cmd+K
                </kbd>{" "}
                or{" "}
                <kbd className="px-2 py-1 bg-[var(--background)] border border-[var(--border)] rounded text-sm">
                  Ctrl+K
                </kbd>{" "}
                to open.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-[var(--text)] font-medium">
                  Available commands:
                </p>
                <ul className="text-sm text-[var(--textMuted)] space-y-1">
                  {commands.map((cmd, i) => (
                    <li key={i} className="flex items-center justify-between">
                      <span>{cmd.label}</span>
                      <span className="text-xs">{cmd.shortcut}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Search Overlay Info */}
          <section>
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
              Search Overlay
            </h2>
            <div className="p-6 bg-[var(--surface)] border border-[var(--border)] rounded-lg">
              <p className="text-[var(--textMuted)] mb-4">
                Full-screen search experience for services, fleet, cities. Press{" "}
                <kbd className="px-2 py-1 bg-[var(--background)] border border-[var(--border)] rounded text-sm">
                  Cmd+/
                </kbd>{" "}
                or click the Search button in the top bar.
              </p>
              <SearchOverlay onSearch={handleSearch} />
            </div>
          </section>

          {/* Sidebar Info */}
          <section>
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
              Sidebar Component
            </h2>
            <div className="p-6 bg-[var(--surface)] border border-[var(--border)] rounded-lg">
              <p className="text-[var(--textMuted)]">
                Collapsible sidebar for admin dashboards and navigation. Check the
                left side of this page - click the arrow to collapse/expand.
              </p>
            </div>
          </section>
        </div>

        {/* Command Palette (always rendered) */}
        <CommandPalette commands={commands} />
      </div>
    </div>
  );
}
