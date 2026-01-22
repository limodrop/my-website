import { NextResponse } from "next/server";
import { serverClient } from "@/app/lib/serverClient";

export async function GET(
  req: Request,
  { params }: { params: { type: string; slug: string } }
) {
  const { type, slug } = params;

  if (type === "city") {
    const city = await serverClient.city(slug);
    
    if (!city) {
      return NextResponse.json({ error: "City not found" }, { status: 404 });
    }

    return NextResponse.json({
      title: `${city.name} Chauffeur Service — Oregon Town Car`,
      description: city.seoDescription,
      jsonld: {
        "@context": "https://schema.org",
        "@type": "Place",
        "name": city.name,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": city.name,
          "addressCountry": city.country
        }
      }
    });
  }

  if (type === "country") {
    const country = await serverClient.country(slug);
    
    if (!country) {
      return NextResponse.json({ error: "Country not found" }, { status: 404 });
    }

    return NextResponse.json({
      title: `${country.name} Chauffeur Service — Oregon Town Car`,
      description: country.seoDescription,
      jsonld: {
        "@context": "https://schema.org",
        "@type": "Country",
        "name": country.name
      }
    });
  }

  if (type === "region") {
    const region = await serverClient.region(slug);
    
    if (!region) {
      return NextResponse.json({ error: "Region not found" }, { status: 404 });
    }

    return NextResponse.json({
      title: `${region.headline} — Oregon Town Car`,
      description: region.seoDescription,
      jsonld: {
        "@context": "https://schema.org",
        "@type": "Place",
        "name": region.headline
      }
    });
  }

  return NextResponse.json({ error: "Unknown type" }, { status: 400 });
}
