/**
 * Google Search Console (GSC) Readiness Audit
 * 
 * Validates technical SEO requirements for indexability and crawlability
 */

import { generateCanonicalUrl, shouldIndex, getNoIndexPaths, generateHreflangTags } from './guardrails';

export interface GSCAuditResult {
  url: string;
  passed: boolean;
  issues: GSCIssue[];
  recommendations: string[];
}

export interface GSCIssue {
  severity: 'error' | 'warning' | 'info';
  category: 'canonical' | 'indexability' | 'hreflang' | 'mobile' | 'performance';
  message: string;
  fix?: string;
}

/**
 * Audit a page for GSC readiness
 */
export function auditPageForGSC(
  url: string,
  metadata: {
    canonical?: string;
    noindex?: boolean;
    hreflang?: Array<{ hreflang: string; href: string }>;
    title?: string;
    description?: string;
    h1?: string;
  }
): GSCAuditResult {
  const issues: GSCIssue[] = [];
  const recommendations: string[] = [];

  // 1. Check Canonical URL
  if (!metadata.canonical) {
    issues.push({
      severity: 'warning',
      category: 'canonical',
      message: 'Missing canonical URL',
      fix: `Add canonical URL: ${generateCanonicalUrl(url)}`,
    });
    recommendations.push('Add a canonical URL to prevent duplicate content issues');
  } else {
    // Validate canonical format
    if (!metadata.canonical.startsWith('https://')) {
      issues.push({
        severity: 'error',
        category: 'canonical',
        message: 'Canonical URL must use HTTPS',
        fix: `Change canonical to HTTPS: ${metadata.canonical.replace('http://', 'https://')}`,
      });
    }
  }

  // 2. Check Noindex Status
  const shouldBeIndexed = shouldIndex(url);
  
  if (metadata.noindex && shouldBeIndexed) {
    issues.push({
      severity: 'error',
      category: 'indexability',
      message: 'Page is marked as noindex but should be indexed',
      fix: 'Remove noindex directive from this page',
    });
  }

  if (!metadata.noindex && !shouldBeIndexed) {
    issues.push({
      severity: 'warning',
      category: 'indexability',
      message: 'Page should be marked as noindex',
      fix: 'Add noindex directive to prevent indexing',
    });
    recommendations.push('Add noindex meta tag or X-Robots-Tag header');
  }

  // 3. Check Hreflang Implementation
  if (!metadata.hreflang || metadata.hreflang.length === 0) {
    issues.push({
      severity: 'info',
      category: 'hreflang',
      message: 'No hreflang tags found',
      fix: 'Add hreflang tags for international SEO',
    });
    recommendations.push('Implement hreflang tags for multi-language support');
  } else {
    // Validate hreflang structure
    const hasEnglish = metadata.hreflang.some(h => h.hreflang === 'en');
    if (!hasEnglish) {
      issues.push({
        severity: 'warning',
        category: 'hreflang',
        message: 'Missing English (en) hreflang tag',
        fix: 'Add hreflang="en" tag for primary language',
      });
    }
  }

  // 4. Check Title Tag
  if (!metadata.title) {
    issues.push({
      severity: 'error',
      category: 'indexability',
      message: 'Missing title tag',
      fix: 'Add a unique title tag to this page',
    });
  }

  // 5. Check Meta Description
  if (!metadata.description) {
    issues.push({
      severity: 'warning',
      category: 'indexability',
      message: 'Missing meta description',
      fix: 'Add a compelling meta description (120-160 chars)',
    });
  }

  // 6. Check H1
  if (!metadata.h1) {
    issues.push({
      severity: 'warning',
      category: 'indexability',
      message: 'Missing H1 heading',
      fix: 'Add a single, unique H1 to this page',
    });
  }

  const passed = issues.filter(i => i.severity === 'error').length === 0;

  return {
    url,
    passed,
    issues,
    recommendations,
  };
}

/**
 * Run a full site audit for GSC readiness
 */
export function auditSiteForGSC(pages: Array<{ url: string; metadata: any }>): {
  totalPages: number;
  passedPages: number;
  failedPages: number;
  results: GSCAuditResult[];
  summary: {
    criticalIssues: number;
    warnings: number;
    recommendations: number;
  };
} {
  const results = pages.map(page => auditPageForGSC(page.url, page.metadata));

  const passedPages = results.filter(r => r.passed).length;
  const failedPages = results.length - passedPages;

  const criticalIssues = results.reduce(
    (sum, r) => sum + r.issues.filter(i => i.severity === 'error').length,
    0
  );

  const warnings = results.reduce(
    (sum, r) => sum + r.issues.filter(i => i.severity === 'warning').length,
    0
  );

  const recommendationsCount = results.reduce(
    (sum, r) => sum + r.recommendations.length,
    0
  );

  return {
    totalPages: results.length,
    passedPages,
    failedPages,
    results,
    summary: {
      criticalIssues,
      warnings,
      recommendations: recommendationsCount,
    },
  };
}

/**
 * Get pages that should NOT be indexed
 */
export function getPagesRequiringNoindex(): string[] {
  return getNoIndexPaths();
}

/**
 * Validate robots.txt directives
 */
export function validateRobotsTxt(content: string): {
  isValid: boolean;
  issues: string[];
  recommendations: string[];
} {
  const issues: string[] = [];
  const recommendations: string[] = [];

  // Check for user-agent
  if (!content.includes('User-agent:')) {
    issues.push('Missing User-agent directive');
  }

  // Check for sitemap reference
  if (!content.includes('Sitemap:')) {
    recommendations.push('Add Sitemap directive to robots.txt');
  }

  // Check for overly restrictive disallow rules
  if (content.includes('Disallow: /')) {
    const lines = content.split('\n');
    const hasOnlyDisallowAll = lines.some(line => line.trim() === 'Disallow: /');
    if (hasOnlyDisallowAll) {
      issues.push('Disallow: / blocks all crawlers - verify this is intentional');
    }
  }

  return {
    isValid: issues.length === 0,
    issues,
    recommendations,
  };
}

/**
 * Generate recommended robots.txt content
 */
export function generateRobotsTxt(): string {
  return `# Robots.txt for Oregon Town Car
User-agent: *
Allow: /

# Disallow admin and API routes
Disallow: /admin
Disallow: /api
Disallow: /dev

# Sitemap
Sitemap: https://oregontowncar.com/sitemap.xml
`;
}

/**
 * Check if URL structure is SEO-friendly
 */
export function validateUrlStructure(url: string): {
  isValid: boolean;
  issues: string[];
  score: number;
} {
  const issues: string[] = [];
  let score = 100;

  // Check length (optimal: under 75 characters)
  if (url.length > 75) {
    issues.push('URL is too long (over 75 characters)');
    score -= 10;
  }

  // Check for underscores (hyphens preferred)
  if (url.includes('_')) {
    issues.push('URL contains underscores - use hyphens instead');
    score -= 5;
  }

  // Check for uppercase letters
  if (url !== url.toLowerCase()) {
    issues.push('URL contains uppercase letters - use lowercase only');
    score -= 5;
  }

  // Check for special characters
  if (/[^a-z0-9\-\/]/.test(url.toLowerCase())) {
    issues.push('URL contains special characters');
    score -= 10;
  }

  // Check for query parameters (can hurt SEO)
  if (url.includes('?')) {
    issues.push('URL contains query parameters - consider using clean URLs');
    score -= 5;
  }

  // Check depth (optimal: 3 levels or less)
  const depth = url.split('/').filter(Boolean).length;
  if (depth > 3) {
    issues.push(`URL is too deep (${depth} levels) - keep under 3 levels`);
    score -= 10;
  }

  return {
    isValid: issues.length === 0,
    issues,
    score: Math.max(0, score),
  };
}

/**
 * Generate a GSC readiness checklist
 */
export function getGSCChecklist(): Array<{
  category: string;
  items: Array<{ task: string; priority: 'critical' | 'high' | 'medium'; }>;
}> {
  return [
    {
      category: 'Indexability',
      items: [
        { task: 'Verify all content pages are indexable (no noindex)', priority: 'critical' },
        { task: 'Ensure admin/API routes have noindex', priority: 'critical' },
        { task: 'Submit sitemap to GSC', priority: 'high' },
        { task: 'Verify robots.txt is not blocking important pages', priority: 'critical' },
      ],
    },
    {
      category: 'Canonical URLs',
      items: [
        { task: 'Add canonical tags to all pages', priority: 'high' },
        { task: 'Ensure canonicals use HTTPS', priority: 'critical' },
        { task: 'Verify self-referencing canonicals on main pages', priority: 'medium' },
      ],
    },
    {
      category: 'Hreflang (International SEO)',
      items: [
        { task: 'Implement hreflang tags for /en locale', priority: 'high' },
        { task: 'Add x-default hreflang for language selector', priority: 'medium' },
        { task: 'Validate hreflang implementation in GSC', priority: 'medium' },
      ],
    },
    {
      category: 'Mobile & Performance',
      items: [
        { task: 'Verify mobile-friendly test passes', priority: 'critical' },
        { task: 'Ensure Core Web Vitals are in "Good" range', priority: 'high' },
        { task: 'Test page speed on mobile and desktop', priority: 'high' },
      ],
    },
    {
      category: 'Structured Data',
      items: [
        { task: 'Implement Organization schema', priority: 'high' },
        { task: 'Add LocalBusiness schema for Portland location', priority: 'high' },
        { task: 'Include FAQPage schema on relevant pages', priority: 'medium' },
        { task: 'Validate schema with Rich Results Test', priority: 'medium' },
      ],
    },
  ];
}
