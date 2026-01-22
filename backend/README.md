# Motoko Backend Schema

This directory contains the Motoko backend schema and migration scripts for the Oregon Town Car website's geographic content management system.

## Files

### types.mo
Defines the typed data structures for:
- **Region**: Geographic regions (e.g., North America, Europe)
- **Country**: Countries within regions
- **City**: Cities within countries
- **Database**: Complete database structure

The schema is:
- Fully typed for type safety
- Stable for production use
- Backward-compatible with existing data
- Expandable for future fields (images, coordinates, pricing zones, etc.)

### migration.mo
Safe migration script to update existing canister data with new fields.

Features:
- Deterministic execution
- Reversible changes
- Debug logging
- Type-safe transformations

## Usage

To deploy this schema to an Internet Computer canister:

1. Ensure dfx is installed
2. Configure dfx.json with canister settings
3. Deploy with `dfx deploy`

## Schema Overview

```motoko
type Region = {
  slug : Text;
  headline : Text;
  subheadline : Text;
  seoDescription : Text;
};

type Country = {
  slug : Text;
  name : Text;
  tagline : Text;
  seoDescription : Text;
  primaryAirports : [Text];
};

type City = {
  slug : Text;
  name : Text;
  country : Text;
  tagline : Text;
  seoDescription : Text;
  primaryUseCases : [Text];
};
```

## TypeScript Integration

The TypeScript types in `/lib/backend/types.ts` mirror these Motoko types for seamless integration with the Next.js frontend.
