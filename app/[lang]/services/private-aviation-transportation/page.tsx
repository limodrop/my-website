import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Private Aviation Chauffeur Service in Portland | Oregon Town Car',
  description:
    'Luxury chauffeur transportation to and from private jets, FBOs, and executive airports in Portland. Discreet, professional, and on your schedule.',
  keywords:
    'private aviation chauffeur, FBO transportation, executive airport car service, Portland private jet transfer, luxury airport chauffeur, PDX FBO, Hillsboro Airport, Aurora State Airport, executive car service',
};

function SchemaMarkup() {
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Oregon Town Car',
      url: 'https://oregontowncar.com',
      areaServed: 'Portland, Oregon',
      serviceType: 'Private Aviation Chauffeur Service',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Private Aviation Chauffeur Service',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Oregon Town Car',
      },
      areaServed: [
        'Portland International Airport (PDX)',
        'Signature Aviation PDX',
        'Atlantic Aviation PDX',
        'Hillsboro Airport (HIO)',
        'Aurora State Airport (UAO)',
        'Troutdale Airport (TTD)',
        'Salem Airport (SLE)',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'AirportService',
      name: 'Private Jet & FBO Chauffeur Transfers',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Oregon Town Car',
      },
      areaServed: [
        'PDX',
        'HIO',
        'UAO',
        'TTD',
        'SLE',
      ],
    },
  ];
  return (
    <>
      {data.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}

const PrivateAviationClient = dynamic(() => import('./PrivateAviationClient'), { ssr: false });

export default function PrivateAviationPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <SchemaMarkup />
      <PrivateAviationClient />
    </div>
  );
}
