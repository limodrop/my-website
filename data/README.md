# Backend Data Layer

This directory contains the production data for the chauffeur service system, including regions, countries, and cities information.

## Data Files

### regions.json
Contains regional service area data with SEO-optimized copy.

**Fields:**
- `slug`: URL-friendly identifier (e.g., "united-states")
- `headline`: Main headline for the region
- `subheadline`: Supporting text
- `seoDescription`: Meta description for SEO

### countries.json
Contains country-specific information and primary airports.

**Fields:**
- `slug`: URL-friendly identifier (e.g., "united-states")
- `name`: Full country name
- `tagline`: Brief marketing message
- `seoDescription`: Meta description for SEO
- `primaryAirports`: Array of airport codes (e.g., ["JFK", "LAX"])

### cities.json
Contains city-specific information and primary use cases.

**Fields:**
- `slug`: URL-friendly identifier (e.g., "portland")
- `name`: Full city name
- `country`: Country name (must match a country's `name` field)
- `tagline`: Brief marketing message
- `seoDescription`: Meta description for SEO
- `primaryUseCases`: Array of service descriptions

## Usage

Data is accessed via the `serverClient` module:

```typescript
import { serverClient } from "@/app/lib/serverClient"

// Get all regions
const regions = serverClient.regions()

// Get a specific region
const region = serverClient.region("united-states")

// Get all countries
const countries = serverClient.countries()

// Get a specific country
const country = serverClient.country("united-states")

// Get all cities
const cities = serverClient.cities()

// Get a specific city
const city = serverClient.city("portland")

// Get cities by country
const usCities = serverClient.citiesByCountry("United States")
```

## TypeScript Interfaces

See `/app/lib/serverClient.ts` for complete TypeScript interfaces:
- `Region`
- `Country`
- `City`

## Migration

To migrate data from root JSON files to the data directory:

```bash
npx tsx scripts/migrate.ts
```

## Testing

To verify data integrity:

```bash
npx tsx scripts/testServerClient.ts
```

## Notes

- All data files use UTF-8 encoding
- JSON files are formatted with 2-space indentation
- Data is cached in memory after first load for performance
- SEO descriptions should be 150-160 characters for optimal display
