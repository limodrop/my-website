# Admin UI Field Specifications

This document describes the admin UI fields needed for managing regions, countries, and cities data in a CMS (e.g., Sanity, Strapi, or custom admin panel).

## Regions Schema

**Content Type:** Region

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| slug | Text (slug) | Yes | URL-friendly identifier (auto-generated from headline) |
| headline | Text | Yes | Main headline for the region (max 100 chars) |
| subheadline | Text | Yes | Supporting text (max 150 chars) |
| seoDescription | Textarea | Yes | Meta description for SEO (150-160 chars recommended) |

**Validation Rules:**
- slug: lowercase, hyphens only, must be unique
- headline: required, 10-100 characters
- subheadline: required, 20-150 characters
- seoDescription: required, 120-160 characters

---

## Countries Schema

**Content Type:** Country

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| slug | Text (slug) | Yes | URL-friendly identifier (auto-generated from name) |
| name | Text | Yes | Full country name |
| tagline | Text | Yes | Brief marketing message (max 100 chars) |
| seoDescription | Textarea | Yes | Meta description for SEO (150-160 chars recommended) |
| primaryAirports | Array of Strings | Yes | Array of 3-letter airport codes (IATA) |

**Validation Rules:**
- slug: lowercase, hyphens only, must be unique
- name: required, 3-50 characters
- tagline: required, 20-100 characters
- seoDescription: required, 120-160 characters
- primaryAirports: array, each item must be 3 uppercase letters

---

## Cities Schema

**Content Type:** City

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| slug | Text (slug) | Yes | URL-friendly identifier (auto-generated from name) |
| name | Text | Yes | Full city name |
| country | Text | Yes | Country name (should match a Country's name field) |
| tagline | Text | Yes | Brief marketing message (max 100 chars) |
| seoDescription | Textarea | Yes | Meta description for SEO (150-160 chars recommended) |
| primaryUseCases | Array of Strings | Yes | Array of service descriptions |

**Validation Rules:**
- slug: lowercase, hyphens only, must be unique
- name: required, 3-50 characters
- country: required, must match existing country name
- tagline: required, 20-100 characters
- seoDescription: required, 120-160 characters
- primaryUseCases: array, 2-6 items, each 10-100 characters

---

## CMS-Specific Implementation Examples

### Sanity.io Schema

```javascript
// schemas/region.js
export default {
  name: 'region',
  title: 'Region',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'headline',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: Rule => Rule.required().min(10).max(100)
    },
    {
      name: 'subheadline',
      title: 'Subheadline',
      type: 'string',
      validation: Rule => Rule.required().min(20).max(150)
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().min(120).max(160)
    }
  ]
}
```

### Strapi Schema

```json
{
  "kind": "collectionType",
  "collectionName": "regions",
  "info": {
    "singularName": "region",
    "pluralName": "regions",
    "displayName": "Region"
  },
  "attributes": {
    "slug": {
      "type": "uid",
      "targetField": "headline",
      "required": true
    },
    "headline": {
      "type": "string",
      "required": true,
      "maxLength": 100,
      "minLength": 10
    },
    "subheadline": {
      "type": "string",
      "required": true,
      "maxLength": 150,
      "minLength": 20
    },
    "seoDescription": {
      "type": "text",
      "required": true,
      "maxLength": 160,
      "minLength": 120
    }
  }
}
```

---

## Export/Import

The admin UI should support:
1. **Export to JSON** - Export current data to JSON format compatible with the data layer
2. **Import from JSON** - Bulk import from JSON files
3. **Preview** - Preview how content will appear on the site
4. **Validation** - Real-time validation of all fields

---

## Notes

- All text fields should support UTF-8 characters for international support
- SEO descriptions are critical for search visibility - enforce character limits
- Airport codes should be validated against IATA standards
- Country references in cities should be enforced via relationship or validation
- Consider adding published/draft status for content workflow
- Consider version history for tracking changes
