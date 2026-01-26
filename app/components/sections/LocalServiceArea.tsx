import Link from 'next/link';

export function LocalServiceArea() {
  const serviceAreas = [
    { name: 'Portland', slug: 'portland' },
    { name: 'Beaverton', slug: 'beaverton' },
    { name: 'Lake Oswego', slug: 'lake-oswego' },
    { name: 'Tigard', slug: 'tigard' },
    { name: 'Hillsboro', slug: 'hillsboro' },
    { name: 'Vancouver, WA', slug: 'vancouver-wa' },
  ];

  return (
    <div className="bg-surface border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">
            Serving Portland & Surrounding Cities
          </h2>
          <p className="text-text-secondary mb-6">
            Professional chauffeur service throughout the Portland metropolitan area and beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/en/cities/${area.slug}`}
                className="px-4 py-2 border border-border rounded-lg hover:border-primary hover:text-primary transition-colors text-sm"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
