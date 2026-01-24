import Link from 'next/link';

export function ReviewCTA() {
  return (
    <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-y border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">
            Loved Your Ride?
          </h2>
          <p className="text-text-secondary mb-6">
            Share your experience and help others discover exceptional chauffeur service.
          </p>
          <Link
            href="https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Leave a Google Review
          </Link>
        </div>
      </div>
    </div>
  );
}
