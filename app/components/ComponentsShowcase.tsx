"use client";

import { useState } from "react";
import { Pagination } from "@/app/components/Pagination";
import { Tabs } from "@/app/components/Tabs";
import { Accordion } from "@/app/components/Accordion";
import { Table } from "@/app/components/Table";
import { Tag } from "@/app/components/Tag";

export function ComponentsShowcase() {
  const [currentPage, setCurrentPage] = useState(1);
  const [tags, setTags] = useState([
    "Airport Transfer",
    "Corporate",
    "Luxury",
    "Premium",
  ]);

  // Table data example
  const tableColumns = [
    { key: "vehicle", label: "Vehicle" },
    { key: "capacity", label: "Capacity", align: "center" as const },
    { key: "price", label: "Price", align: "right" as const },
  ];

  const tableData = [
    { vehicle: "Luxury Sedan", capacity: "4 passengers", price: "$85/hr" },
    { vehicle: "Executive SUV", capacity: "6 passengers", price: "$120/hr" },
    { vehicle: "Sprinter Van", capacity: "14 passengers", price: "$180/hr" },
  ];

  return (
    <div className="container py-12 space-y-16">
      <h1 className="text-4xl font-semibold text-[var(--text)]">
        UI Components Showcase
      </h1>

      {/* PAGINATION */}
      <section>
        <h2 className="text-2xl font-semibold text-[var(--text)] mb-6">
          Pagination Component
        </h2>
        <div className="p-6 bg-[var(--surface)] border border-[var(--border)] rounded-lg">
          <p className="text-[var(--textMuted)] mb-4">
            Current page: <strong>{currentPage}</strong>
          </p>
          <Pagination page={currentPage} totalPages={10} onChange={setCurrentPage} />
        </div>
      </section>

      {/* TABS */}
      <section>
        <h2 className="text-2xl font-semibold text-[var(--text)] mb-6">
          Tabs Component
        </h2>
        <div className="p-6 bg-[var(--surface)] border border-[var(--border)] rounded-lg">
          <Tabs
            tabs={[
              {
                label: "Overview",
                content: (
                  <div className="text-[var(--textMuted)]">
                    <p>
                      This is the overview section. Perfect for showing general
                      information about a service or vehicle.
                    </p>
                  </div>
                ),
              },
              {
                label: "Features",
                content: (
                  <div className="text-[var(--textMuted)]">
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Luxury leather interior</li>
                      <li>Climate control</li>
                      <li>Wi-Fi enabled</li>
                      <li>Professional chauffeur</li>
                    </ul>
                  </div>
                ),
              },
              {
                label: "Pricing",
                content: (
                  <div className="text-[var(--textMuted)]">
                    <p>
                      Pricing starts at $85/hour with a 2-hour minimum. Corporate
                      accounts available.
                    </p>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </section>

      {/* ACCORDION */}
      <section>
        <h2 className="text-2xl font-semibold text-[var(--text)] mb-6">
          Accordion Component
        </h2>
        <Accordion
          items={[
            {
              title: "What areas do you serve?",
              content:
                "We provide luxury transportation services in over 500 cities worldwide, including major airports and business districts.",
            },
            {
              title: "How do I book a ride?",
              content:
                "You can book through our website, mobile app, or by calling our 24/7 concierge service. Advanced bookings are recommended.",
            },
            {
              title: "What payment methods do you accept?",
              content:
                "We accept all major credit cards, corporate accounts, and digital payment methods. Invoicing is available for business clients.",
            },
            {
              title: "Can I modify or cancel my reservation?",
              content:
                "Yes, you can modify or cancel up to 24 hours before your scheduled pickup without any fees.",
            },
          ]}
        />
      </section>

      {/* TABLE */}
      <section>
        <h2 className="text-2xl font-semibold text-[var(--text)] mb-6">
          Table Component
        </h2>
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg overflow-hidden">
          <Table columns={tableColumns} data={tableData} />
        </div>
      </section>

      {/* TAGS */}
      <section>
        <h2 className="text-2xl font-semibold text-[var(--text)] mb-6">
          Tag / Chip Component
        </h2>
        <div className="p-6 bg-[var(--surface)] border border-[var(--border)] rounded-lg space-y-4">
          <div className="flex flex-wrap gap-2">
            <Tag variant="default">Default</Tag>
            <Tag variant="primary">Primary</Tag>
            <Tag variant="success">Success</Tag>
            <Tag variant="warning">Warning</Tag>
            <Tag variant="error">Error</Tag>
          </div>

          <div>
            <p className="text-sm text-[var(--textMuted)] mb-2">
              Removable tags (click × to remove):
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Tag
                  key={tag}
                  onRemove={() => setTags(tags.filter((t) => t !== tag))}
                >
                  {tag}
                </Tag>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
