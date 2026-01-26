/**
 * SEO Guardrails & Validation Utilities
 * 
 * Prevents common SEO mistakes and enforces best practices
 */

interface SEOValidation {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

interface PageMetadata {
  title: string;
  description: string;
  h1?: string;
  canonical?: string;
  content?: string;
}

/**
 * Minimum content length threshold (in characters)
 */
const MIN_CONTENT_LENGTH = 500;

/**
 * Optimal meta title length (Google truncates ~60 chars)
 */
const OPTIMAL_TITLE_LENGTH = { min: 50, max: 60 };

/**
 * Optimal meta description length (Google truncates ~155-160 chars)
 */
const OPTIMAL_DESCRIPTION_LENGTH = { min: 120, max: 160 };

/**
 * Track used meta titles to prevent duplicates
 */
const usedTitles = new Set<string>();

/**
 * Track used H1s to ensure uniqueness
 */
const usedH1s = new Set<string>();

/**
 * Validate page metadata for SEO compliance
 */
export function validatePageMetadata(metadata: PageMetadata): SEOValidation {
  const errors: string[] = [];
  const warnings: string[] = [];

  // 1. Validate Title
  if (!metadata.title || metadata.title.trim().length === 0) {
    errors.push('Meta title is required');
  } else {
    if (metadata.title.length < OPTIMAL_TITLE_LENGTH.min) {
      warnings.push(`Meta title is too short (${metadata.title.length} chars). Aim for ${OPTIMAL_TITLE_LENGTH.min}-${OPTIMAL_TITLE_LENGTH.max} chars.`);
    }
    if (metadata.title.length > OPTIMAL_TITLE_LENGTH.max) {
      warnings.push(`Meta title may be truncated in search results (${metadata.title.length} chars). Keep under ${OPTIMAL_TITLE_LENGTH.max} chars.`);
    }
    
    // Check for duplicate titles
    if (usedTitles.has(metadata.title)) {
      errors.push(`Duplicate meta title detected: "${metadata.title}". Each page must have a unique title.`);
    } else {
      usedTitles.add(metadata.title);
    }
  }

  // 2. Validate Description
  if (!metadata.description || metadata.description.trim().length === 0) {
    errors.push('Meta description is required');
  } else {
    if (metadata.description.length < OPTIMAL_DESCRIPTION_LENGTH.min) {
      warnings.push(`Meta description is too short (${metadata.description.length} chars). Aim for ${OPTIMAL_DESCRIPTION_LENGTH.min}-${OPTIMAL_DESCRIPTION_LENGTH.max} chars.`);
    }
    if (metadata.description.length > OPTIMAL_DESCRIPTION_LENGTH.max) {
      warnings.push(`Meta description may be truncated (${metadata.description.length} chars). Keep under ${OPTIMAL_DESCRIPTION_LENGTH.max} chars.`);
    }
  }

  // 3. Validate H1
  if (metadata.h1) {
    if (usedH1s.has(metadata.h1)) {
      errors.push(`Duplicate H1 detected: "${metadata.h1}". Each page should have a unique H1.`);
    } else {
      usedH1s.add(metadata.h1);
    }
  } else {
    warnings.push('No H1 provided. Each page should have exactly one H1.');
  }

  // 4. Validate Content Length
  if (metadata.content) {
    const contentLength = metadata.content.trim().length;
    if (contentLength < MIN_CONTENT_LENGTH) {
      warnings.push(`Content is thin (${contentLength} chars). Aim for at least ${MIN_CONTENT_LENGTH} chars to avoid thin content penalties.`);
    }
  }

  // 5. Validate Canonical URL
  if (!metadata.canonical) {
    warnings.push('No canonical URL specified. Consider adding one to prevent duplicate content issues.');
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Generate canonical URL for a given path
 */
export function generateCanonicalUrl(path: string, baseUrl: string = 'https://oregontowncar.com'): string {
  // Remove trailing slashes
  const cleanPath = path.replace(/\/+$/, '');
  
  // Remove leading slash if present
  const normalizedPath = cleanPath.startsWith('/') ? cleanPath.slice(1) : cleanPath;
  
  return `${baseUrl}/${normalizedPath}`;
}

/**
 * Ensure H1 is unique across the site
 */
export function isH1Unique(h1: string): boolean {
  return !usedH1s.has(h1);
}

/**
 * Ensure meta title is unique across the site
 */
export function isTitleUnique(title: string): boolean {
  return !usedTitles.has(title);
}

/**
 * Reset tracking sets (useful for testing or build-time validation)
 */
export function resetSEOTracking(): void {
  usedTitles.clear();
  usedH1s.clear();
}

/**
 * Generate SEO-friendly slug from text
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Extract keywords from title/description for metadata
 */
export function extractKeywords(text: string, count: number = 10): string[] {
  // Remove common stop words
  const stopWords = new Set([
    'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from',
    'has', 'he', 'in', 'is', 'it', 'its', 'of', 'on', 'that', 'the',
    'to', 'was', 'will', 'with'
  ]);

  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3 && !stopWords.has(word));

  // Count frequency
  const frequency: Record<string, number> = {};
  words.forEach(word => {
    frequency[word] = (frequency[word] || 0) + 1;
  });

  // Sort by frequency and return top keywords
  return Object.entries(frequency)
    .sort(([, a], [, b]) => b - a)
    .slice(0, count)
    .map(([word]) => word);
}

/**
 * Check if page should be indexed (no noindex)
 */
export function shouldIndex(path: string): boolean {
  const noIndexPatterns = [
    /^\/admin/,
    /^\/api/,
    /^\/dev/,
    /^\/test/,
    /^\/staging/,
    /\/404$/,
    /\/500$/,
    /\/error$/,
  ];

  return !noIndexPatterns.some(pattern => pattern.test(path));
}

/**
 * Get recommended noindex paths
 */
export function getNoIndexPaths(): string[] {
  return [
    '/admin',
    '/api',
    '/dev',
    '/404',
    '/500',
    '/error',
  ];
}

/**
 * Validate internal link structure
 */
export function validateInternalLink(href: string): { isValid: boolean; error?: string } {
  if (!href) {
    return { isValid: false, error: 'Empty href' };
  }

  // External links are valid
  if (href.startsWith('http://') || href.startsWith('https://')) {
    return { isValid: true };
  }

  // Relative links should start with /
  if (!href.startsWith('/') && !href.startsWith('#')) {
    return { isValid: false, error: 'Relative links must start with / or #' };
  }

  return { isValid: true };
}

/**
 * Generate hreflang tags for internationalization
 */
export function generateHreflangTags(path: string, locales: string[] = ['en']): Array<{ hreflang: string; href: string }> {
  const baseUrl = 'https://oregontowncar.com';
  
  return locales.map(locale => ({
    hreflang: locale,
    href: `${baseUrl}/${locale}${path}`,
  }));
}
