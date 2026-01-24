import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Accessibility Statement | Oregon Town Car',
  description: 'Oregon Town Car is committed to ensuring digital accessibility for people with disabilities. Learn about our WCAG 2.1 Level AA compliance efforts and how to provide feedback.',
  robots: 'index, follow',
};

export default function AccessibilityPage({ params }: { params: { lang: string } }) {
  const { lang } = params;

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <div className="py-12 sm:py-16 lg:py-20">
        <article className="prose prose-lg max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)] mb-6">
            Accessibility Statement
          </h1>

          <p className="text-lg text-[var(--textMuted)] leading-relaxed mb-6">
            <strong>Effective Date:</strong> January 24, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Our Commitment</h2>
            <p className="text-[var(--textMuted)] leading-relaxed mb-4">
              Oregon Town Car is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to all of our users.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Conformance Status</h2>
            <p className="text-[var(--textMuted)] leading-relaxed mb-4">
              We aim to conform to the <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong>. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Accessibility Features</h2>
            <p className="text-[var(--textMuted)] leading-relaxed mb-4">
              Our website includes the following accessibility improvements:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--textMuted)] mb-4">
              <li>Semantic HTML structure for proper screen reader navigation</li>
              <li>Alternative text for images and visual content</li>
              <li>Keyboard navigation support throughout the site</li>
              <li>Sufficient color contrast ratios for text readability</li>
              <li>Clear focus indicators for interactive elements</li>
              <li>Properly labeled form fields and error messages</li>
              <li>Logical heading hierarchy for content structure</li>
              <li>Responsive design that works across devices and screen sizes</li>
              <li>ARIA landmarks and labels where appropriate</li>
              <li>Skip navigation links for screen reader users</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Ongoing Efforts</h2>
            <p className="text-[var(--textMuted)] leading-relaxed mb-4">
              We recognize that accessibility is an ongoing effort. Our team regularly:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--textMuted)] mb-4">
              <li>Conducts accessibility audits using automated and manual testing</li>
              <li>Tests with assistive technologies including screen readers</li>
              <li>Reviews new features and content for accessibility compliance</li>
              <li>Provides training for our development and content teams</li>
              <li>Incorporates user feedback to improve the experience</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Known Limitations</h2>
            <p className="text-[var(--textMuted)] leading-relaxed mb-4">
              While we strive for full accessibility, some third-party content or embedded services (such as payment processors or booking widgets) may have their own accessibility considerations. We are actively working with our partners to ensure these integrations meet accessibility standards.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Feedback and Contact</h2>
            <p className="text-[var(--textMuted)] leading-relaxed mb-4">
              We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us:
            </p>
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 mb-4">
              <p className="text-[var(--text)] mb-2">
                <strong>Email:</strong>{' '}
                <a 
                  href="mailto:hello@oregontowncar.com" 
                  className="text-[var(--primary)] hover:underline"
                >
                  hello@oregontowncar.com
                </a>
              </p>
              <p className="text-[var(--text)] mb-2">
                <strong>Phone:</strong>{' '}
                <a 
                  href="tel:5033537755" 
                  className="text-[var(--primary)] hover:underline"
                >
                  (503) 353-7755
                </a>
              </p>
              <p className="text-[var(--text)]">
                <strong>Address:</strong> 4260 SW 110th Ave, Beaverton, OR 97005
              </p>
            </div>
            <p className="text-[var(--textMuted)] leading-relaxed">
              We will make every effort to respond to accessibility feedback within <strong>3 business days</strong> and to implement reasonable accommodations as quickly as possible.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Assistive Technology Compatibility</h2>
            <p className="text-[var(--textMuted)] leading-relaxed mb-4">
              Our website is designed to be compatible with the following assistive technologies:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--textMuted)] mb-4">
              <li>Screen readers (JAWS, NVDA, VoiceOver, TalkBack)</li>
              <li>Screen magnification software</li>
              <li>Speech recognition software</li>
              <li>Keyboard-only navigation</li>
              <li>Alternative input devices</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Technical Specifications</h2>
            <p className="text-[var(--textMuted)] leading-relaxed mb-4">
              Our website accessibility relies on the following technologies:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--textMuted)] mb-4">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (with graceful degradation)</li>
              <li>WAI-ARIA (Web Accessibility Initiative – Accessible Rich Internet Applications)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Assessment Approach</h2>
            <p className="text-[var(--textMuted)] leading-relaxed mb-4">
              Oregon Town Car assessed the accessibility of this website through the following methods:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--textMuted)] mb-4">
              <li>Internal self-evaluation using automated testing tools</li>
              <li>Manual testing with keyboard navigation</li>
              <li>Screen reader testing (NVDA, VoiceOver)</li>
              <li>Color contrast analysis</li>
              <li>Periodic third-party accessibility audits</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Updates to This Statement</h2>
            <p className="text-[var(--textMuted)] leading-relaxed">
              This accessibility statement was last reviewed and updated on <strong>January 24, 2025</strong>. We will continue to review and update this statement as we make improvements to our website and as accessibility standards evolve.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-[var(--border)]">
            <Link 
              href={`/${lang}`}
              className="inline-flex items-center text-[var(--primary)] hover:underline font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
