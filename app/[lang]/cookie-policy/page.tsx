import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy | Oregon Town Car',
  description: 'Learn how Oregon Town Car uses cookies and similar technologies to improve your browsing experience, analyze website traffic, and personalize content.',
  robots: 'index, follow',
};

export default function CookiePolicyPage({ params }: { params: { lang: string } }) {
  const { lang } = params;

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <div className="py-12 sm:py-16 lg:py-20">
        <article className="prose prose-lg max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)] mb-6">
            Cookie Policy
          </h1>

          <p className="text-lg text-[var(--textMuted)] leading-relaxed mb-6">
            <strong>Effective Date:</strong> January 24, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">What Are Cookies?</h2>
            <p className="text-[var(--textMuted)] leading-relaxed mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
            </p>
            <p className="text-[var(--textMuted)] leading-relaxed">
              Cookies allow websites to recognize your device and remember certain information about your visit, such as your preferences and settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">How We Use Cookies</h2>
            <p className="text-[var(--textMuted)] leading-relaxed mb-4">
              Oregon Town Car uses cookies and similar technologies for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--textMuted)] mb-4">
              <li><strong>Essential Functionality:</strong> To enable core website features such as secure login, booking forms, and session management</li>
              <li><strong>Performance & Analytics:</strong> To understand how visitors use our website, which pages are most popular, and how we can improve the user experience</li>
              <li><strong>Personalization:</strong> To remember your preferences, language settings, and other customization options</li>
              <li><strong>Security:</strong> To protect against fraudulent activity and ensure secure transactions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[var(--text)] mb-3">
                  1. Strictly Necessary Cookies
                </h3>
                <p className="text-[var(--textMuted)] leading-relaxed mb-2">
                  These cookies are essential for the website to function properly. They enable core functionality such as:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-[var(--textMuted)] text-sm">
                  <li>Secure login and authentication</li>
                  <li>Session management</li>
                  <li>Booking form functionality</li>
                  <li>Security and fraud prevention</li>
                </ul>
                <p className="text-[var(--textMuted)] text-sm mt-3">
                  <strong>Can be disabled:</strong> No (required for website functionality)
                </p>
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[var(--text)] mb-3">
                  2. Performance & Analytics Cookies
                </h3>
                <p className="text-[var(--textMuted)] leading-relaxed mb-2">
                  These cookies help us understand how visitors interact with our website by collecting anonymous information about:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-[var(--textMuted)] text-sm">
                  <li>Pages visited and time spent on each page</li>
                  <li>Click patterns and navigation paths</li>
                  <li>Traffic sources and referrals</li>
                  <li>Device and browser information</li>
                </ul>
                <p className="text-[var(--textMuted)] text-sm mt-3">
                  <strong>Can be disabled:</strong> Yes (via browser settings)
                </p>
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[var(--text)] mb-3">
                  3. Functionality Cookies
                </h3>
                <p className="text-[var(--textMuted)] leading-relaxed mb-2">
                  These cookies allow the website to remember your preferences and provide enhanced features:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-[var(--textMuted)] text-sm">
                  <li>Language preferences</li>
                  <li>Theme and display settings</li>
                  <li>Previously entered information (e.g., pickup locations)</li>
                </ul>
                <p className="text-[var(--textMuted)] text-sm mt-3">
                  <strong>Can be disabled:</strong> Yes (may affect personalization)
                </p>
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[var(--text)] mb-3">
                  4. Session Cookies
                </h3>
                <p className="text-[var(--textMuted)] leading-relaxed">
                  Temporary cookies that are deleted when you close your browser. Used for maintaining your session while browsing the website.
                </p>
                <p className="text-[var(--textMuted)] text-sm mt-3">
                  <strong>Duration:</strong> Until browser is closed
                </p>
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[var(--text)] mb-3">
                  5. Persistent Cookies
                </h3>
                <p className="text-[var(--textMuted)] leading-relaxed">
                  Cookies that remain on your device for a set period or until manually deleted. Used to remember your preferences across multiple visits.
                </p>
                <p className="text-[var(--textMuted)] text-sm mt-3">
                  <strong>Duration:</strong> Varies (typically 30 days to 1 year)
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Third-Party Cookies</h2>
            <p className="text-[var(--textMuted)] leading-relaxed mb-4">
              Our website may use services from third-party providers that set their own cookies. These may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--textMuted)] mb-4">
              <li><strong>Analytics Providers:</strong> To help us understand website usage and improve performance</li>
              <li><strong>Payment Processors:</strong> To securely process booking payments and transactions</li>
              <li><strong>Booking Platforms:</strong> To enable reservation functionality through our partner network</li>
            </ul>
            <p className="text-[var(--textMuted)] leading-relaxed text-sm">
              Third-party cookies are governed by the respective privacy policies of those providers. We do not control or have access to these cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">How to Manage Cookies</h2>
            <p className="text-[var(--textMuted)] leading-relaxed mb-4">
              You have the right to decide whether to accept or reject cookies. You can control and manage cookies in several ways:
            </p>

            <div className="bg-[var(--surface)] border-2 border-[var(--primary)]/20 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-[var(--text)] mb-3">Browser Settings</h3>
              <p className="text-[var(--textMuted)] leading-relaxed mb-3">
                Most web browsers allow you to manage cookies through their settings. You can set your browser to:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-[var(--textMuted)] text-sm mb-4">
                <li>Block all cookies</li>
                <li>Block third-party cookies only</li>
                <li>Clear cookies when you close the browser</li>
                <li>Notify you when cookies are being set</li>
              </ul>
              <p className="text-[var(--textMuted)] text-sm">
                <strong>Note:</strong> Disabling cookies may affect website functionality and your user experience.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-[var(--text)] font-semibold">Browser-Specific Instructions:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--textMuted)] text-sm">
                <li>
                  <strong>Google Chrome:</strong>{' '}
                  <a 
                    href="https://support.google.com/chrome/answer/95647" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[var(--primary)] hover:underline"
                  >
                    Chrome Cookie Settings
                  </a>
                </li>
                <li>
                  <strong>Mozilla Firefox:</strong>{' '}
                  <a 
                    href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[var(--primary)] hover:underline"
                  >
                    Firefox Cookie Settings
                  </a>
                </li>
                <li>
                  <strong>Safari:</strong>{' '}
                  <a 
                    href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[var(--primary)] hover:underline"
                  >
                    Safari Cookie Settings
                  </a>
                </li>
                <li>
                  <strong>Microsoft Edge:</strong>{' '}
                  <a 
                    href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[var(--primary)] hover:underline"
                  >
                    Edge Cookie Settings
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Impact of Disabling Cookies</h2>
            <p className="text-[var(--textMuted)] leading-relaxed mb-4">
              While you can disable cookies, doing so may affect your experience on our website:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--textMuted)] mb-4">
              <li>You may not be able to complete bookings or access your account</li>
              <li>The website may not remember your preferences or settings</li>
              <li>Some features may not function properly</li>
              <li>Content may not be personalized to your needs</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Do Not Track Signals</h2>
            <p className="text-[var(--textMuted)] leading-relaxed">
              Some browsers have a "Do Not Track" (DNT) feature that lets you tell websites you do not want to have your online activities tracked. Currently, there is no universal standard for how DNT signals should be interpreted. We do not currently respond to DNT signals, but we respect your privacy choices through other means outlined in this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Updates to This Cookie Policy</h2>
            <p className="text-[var(--textMuted)] leading-relaxed mb-4">
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. Any changes will be posted on this page with an updated effective date.
            </p>
            <p className="text-[var(--textMuted)] leading-relaxed">
              We encourage you to review this policy periodically to stay informed about how we use cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">More Information</h2>
            <p className="text-[var(--textMuted)] leading-relaxed mb-4">
              For more information about how we collect, use, and protect your personal information, please read our{' '}
              <Link 
                href={`/${lang}/privacy`} 
                className="text-[var(--primary)] hover:underline font-medium"
              >
                Privacy Policy
              </Link>.
            </p>
            <p className="text-[var(--textMuted)] leading-relaxed">
              If you have questions about cookies or this Cookie Policy, please contact us:
            </p>
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 mt-4">
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
