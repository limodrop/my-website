"use client";

import { useState, useEffect } from "react";
import Button from "@/app/components/Button";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import { Input, TextArea } from "@/app/components/FormComponents";
import { Skeleton } from "@/app/components/Skeleton";

export default function ComponentsDemoPage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 py-8">
      {/* Theme Toggle */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[var(--text)]">
          Components Demo
        </h1>
        <Button variant="secondary" onClick={toggleTheme}>
          Toggle Theme ({theme})
        </Button>
      </div>

      {/* Breadcrumbs */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-[var(--text)]">
          Breadcrumbs
        </h2>
        <Breadcrumbs
          locale="en"
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Airport Transportation" },
          ]}
        />
      </section>

      {/* Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-[var(--text)]">Buttons</h2>
        <div className="flex gap-4 flex-wrap">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="ghost">Ghost Button</Button>
        </div>
      </section>

      {/* Form Components */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-[var(--text)]">
          Form Components
        </h2>
        <div className="space-y-4 max-w-md">
          <Input label="Email Address" type="email" placeholder="you@example.com" />
          <Input label="Phone Number" type="tel" placeholder="(555) 123-4567" />
          <TextArea label="Message" rows={4} placeholder="Enter your message..." />
        </div>
      </section>

      {/* Skeletons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-[var(--text)]">
          Loading Skeletons
        </h2>
        <div className="space-y-4 max-w-md">
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-1/3" />
        </div>
      </section>

      {/* 404 Note */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-[var(--text)]">
          404 Page
        </h2>
        <p className="text-[var(--textMuted)]">
          Visit any non-existent page to see the custom 404 page in action.
        </p>
      </section>
    </div>
  );
}
