interface MetadataParams {
  title: string;
  description: string;
  locale: string;
  slug?: string;
  image?: string;
}

export function buildMetadata({
  title,
  description,
  locale,
  slug,
  image = "/og-image.jpg",
}: MetadataParams) {
  const base = "https://oregontowncar.com";
  const path = slug ? `/${slug}` : "";

  return {
    title,
    description,
    alternates: {
      canonical: `${base}/${locale}${path}`,
      languages: {
        en: `${base}/en${path}`,
        es: `${base}/es${path}`,
        fr: `${base}/fr${path}`,
        ar: `${base}/ar${path}`,
        zh: `${base}/zh${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${base}/${locale}${path}`,
      siteName: "Oregon Town Car",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
