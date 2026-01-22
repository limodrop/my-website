"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "@/app/components/Icons";
import { useState } from "react";

const adminNav = [
  { label: "Dashboard", href: "/admin", icon: "grid" },
  { label: "Regions", href: "/admin/regions", icon: "map" },
  { label: "Countries", href: "/admin/countries", icon: "globe" },
  { label: "Cities", href: "/admin/cities", icon: "city" },
  { label: "Services", href: "/admin/services", icon: "briefcase" },
  { label: "Fleet", href: "/admin/fleet", icon: "car" },
  { label: "SEO & Content", href: "/admin/seo", icon: "fileText" },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`
        bg-[var(--surface)] border-r border-[var(--border)] 
        transition-all duration-300
        ${collapsed ? "w-16" : "w-64"}
        flex-shrink-0
      `}
    >
      {/* Sidebar Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-[var(--border)]">
        {!collapsed && (
          <span className="font-semibold text-[var(--text)]">
            Oregon Town Car
          </span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 hover:bg-[var(--background)] rounded transition"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <Icons.chevronLeft
            className={`w-4 h-4 transition-transform ${
              collapsed ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="p-3 space-y-1">
        {adminNav.map((item) => {
          const isActive = pathname === item.href;
          const IconComponent = Icons[item.icon as keyof typeof Icons];

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center gap-3 px-3 py-2.5 rounded-lg
                transition-colors
                ${
                  isActive
                    ? "bg-[var(--primary)] text-white"
                    : "text-[var(--text)] hover:bg-[var(--background)]"
                }
                ${collapsed ? "justify-center" : ""}
              `}
              title={collapsed ? item.label : undefined}
            >
              {IconComponent && <IconComponent className="w-5 h-5 flex-shrink-0" />}
              {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Back to Site Link */}
      <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-[var(--border)]">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[var(--text)] hover:bg-[var(--background)] transition-colors"
        >
          <Icons.arrow className="w-5 h-5 flex-shrink-0 rotate-180" />
          {!collapsed && <span className="text-sm font-medium">Back to Site</span>}
        </Link>
      </div>
    </aside>
  );
}
