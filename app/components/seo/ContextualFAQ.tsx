import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

interface ContextualFAQProps {
  faqs: FAQItem[];
  title?: string;
  showMoreLink?: boolean;
}

export function ContextualFAQ({ faqs, title = 'Frequently Asked Questions', showMoreLink = true }: ContextualFAQProps) {
  return (
    <div className="bg-surface border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">{title}</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="pb-6 border-b border-border last:border-0">
                <h3 className="text-lg font-semibold mb-2 text-text-primary">
                  {faq.question}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          {showMoreLink && (
            <div className="mt-8 text-center">
              <Link
                href="/en/faq"
                className="text-primary hover:underline font-medium"
              >
                View All FAQs →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function buildFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
