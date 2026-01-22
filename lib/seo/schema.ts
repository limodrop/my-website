export function generateServiceSchema({
  lang,
  city,
  service,
  url
}: {
  lang: string
  city: string
  service: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${service} service in ${city}`,
    "areaServed": city,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Oregon Town Car",
      "url": "https://oregontowncar.com",
      "areaServed": city,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city,
        "addressRegion": "OR",
        "addressCountry": "US"
      }
    },
    "serviceType": service,
    "inLanguage": lang,
    "url": url
  }
}

export function generateLocalBusinessSchema({
  lang,
  city,
  url
}: {
  lang: string
  city: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Oregon Town Car",
    "url": url,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": "OR",
      "addressCountry": "US"
    },
    "areaServed": city,
    "inLanguage": lang
  }
}

export function generateArticleSchema({
  lang,
  title,
  date,
  url
}: {
  lang: string
  title: string
  date: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "datePublished": date,
    "author": {
      "@type": "Organization",
      "name": "Oregon Town Car"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Oregon Town Car"
    },
    "inLanguage": lang,
    "url": url
  }
}
