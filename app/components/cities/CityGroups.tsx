"use client";

import { useState } from "react";
import { Icons } from "@/app/components/Icons";
import Link from "next/link";

interface City {
  id: number;
  slug: string;
  name: string;
  state: string;
}

interface CityGroupsProps {
  cities: City[];
  locale: string;
}

interface CityGroup {
  title: string;
  slugs: string[];
}

const CITY_GROUPS: CityGroup[] = [
  {
    title: "Portland Metro Area",
    slugs: [
      "portland",
      "beaverton",
      "lake-oswego",
      "tigard",
      "hillsboro",
      "gresham",
      "tualatin",
      "wilsonville",
      "happy-valley",
      "milwaukie",
      "west-linn",
      "oregon-city",
      "clackamas",
      "vancouver-wa"
    ]
  },
  {
    title: "Willamette Valley",
    slugs: [
      "salem",
      "mcminnville",
      "newberg",
      "corvallis",
      "eugene",
      "willamette-valley"
    ]
  },
  {
    title: "Other Oregon Cities",
    slugs: [
      "bend",
      "medford",
      "astoria",
      "hood-river",
      "camas",
      "washougal",
      "battle-ground",
      "ridgefield"
    ]
  }
];

const FEATURED_SLUGS = ["portland", "beaverton", "lake-oswego", "vancouver-wa", "salem", "eugene"];
const INITIAL_SHOW_COUNT = 6;

function CityCardCompact({ city, locale }: { city: City; locale: string }) {
  return (
    <Link
      href={`/${locale}/cities/${city.slug}`}
      className="
        group p-3 sm:p-4 rounded-lg
        bg-[var(--surface)]
        border border-[var(--border)]
        shadow-sm
        transition-all duration-200
        hover:shadow-md hover:border-[var(--primary)]
        hover:-translate-y-0.5
        flex items-center gap-3
      "
    >
      <Icons.city className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--primary)] flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <h3 className="text-sm sm:text-base font-semibold text-[var(--text)] truncate">
          {city.name}
        </h3>
        {city.state && (
          <p className="text-xs text-[var(--textMuted)] truncate">{city.state}</p>
        )}
      </div>
      <Icons.arrow className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--textMuted)] group-hover:text-[var(--primary)] transition-colors flex-shrink-0" />
    </Link>
  );
}

function CityGroupSection({ 
  title, 
  cities, 
  locale 
}: { 
  title: string; 
  cities: City[]; 
  locale: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasMore = cities.length > INITIAL_SHOW_COUNT;
  const visibleCities = isExpanded ? cities : cities.slice(0, INITIAL_SHOW_COUNT);
  const hiddenCities = hasMore ? cities.slice(INITIAL_SHOW_COUNT) : [];

  return (
    <section className="mb-10 sm:mb-12">
      <h2 className="text-xl sm:text-2xl font-semibold text-[var(--text)] mb-4 sm:mb-6">
        {title}
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4">
        {visibleCities.map((city) => (
          <CityCardCompact key={city.id} city={city} locale={locale} />
        ))}
      </div>

      {/* Hidden cities for SEO - still in DOM */}
      {hasMore && !isExpanded && (
        <div className="sr-only" aria-hidden="false">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {hiddenCities.map((city) => (
              <CityCardCompact key={city.id} city={city} locale={locale} />
            ))}
          </div>
        </div>
      )}

      {hasMore && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          className="
            mt-4 px-4 py-2 
            text-sm font-medium
            text-[var(--primary)]
            hover:text-[var(--primaryHover)]
            transition-colors
            flex items-center gap-2
          "
        >
          {isExpanded ? (
            <>
              Show less
              <Icons.chevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              View all {cities.length} cities
              <Icons.chevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      )}
    </section>
  );
}

export function CityGroups({ cities, locale }: CityGroupsProps) {
  // Create lookup map
  const cityMap = new Map(cities.map(city => [city.slug, city]));

  // Get featured cities
  const featuredCities = FEATURED_SLUGS
    .map(slug => cityMap.get(slug))
    .filter((city): city is City => city !== undefined);

  // Group cities
  const groupedCities = CITY_GROUPS.map(group => ({
    title: group.title,
    cities: group.slugs
      .map(slug => cityMap.get(slug))
      .filter((city): city is City => city !== undefined)
  }));

  return (
    <>
      {/* Featured Cities */}
      {featuredCities.length > 0 && (
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <Icons.star className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--primary)]" />
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--text)]">
              Featured Cities
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {featuredCities.map((city) => (
              <CityCardCompact key={city.id} city={city} locale={locale} />
            ))}
          </div>
        </section>
      )}

      {/* Grouped Sections */}
      {groupedCities.map((group) => (
        group.cities.length > 0 && (
          <CityGroupSection
            key={group.title}
            title={group.title}
            cities={group.cities}
            locale={locale}
          />
        )
      ))}
    </>
  );
}
