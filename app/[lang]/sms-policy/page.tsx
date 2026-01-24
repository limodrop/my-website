import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SMS Messaging Policy | Oregon Town Car',
  description: 'Oregon Town Car SMS messaging policy: opt-out instructions, message frequency, carrier information, and privacy details for text message communications.',
  robots: 'index, follow',
};

export default function SMSPolicyPage({ params }: { params: { lang: string } }) {
  const { lang } = params;

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <div className="py-12 sm:py-16 lg:py-20">
        <article className="prose prose-lg max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)] mb-6">
            SMS Messaging Policy
          </h1>

          <p className="text-lg text-[var(--textMuted)] leading-relaxed mb-6">
            <strong>Effective Date:</strong> January 24, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Overview</h2>
            <p className="text-[var(--textMuted)] leading-relaxed mb-4">
              Oregon Town Car may send SMS text messages to customers who have opted in to receive booking confirmations, trip updates, chauffeur arrival notifications, and service-related communications.
            </p>
            <p className="text-[var(--textMuted)] leading-relaxed">
              By providing your mobile phone number and opting in, you consent to receive automated text messages from Oregon Town Car. Consent is not a condition of purchase.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Types of Messages</h2>
            <p className="text-[var(--textMuted)] leading-relaxed mb-4">
              You may receive the following types of SMS messages:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--textMuted)] mb-4">
              <li><strong>Booking Confirmations:</strong> Reservation details and confirmation numbers</li>
              <li><strong>Trip Updates:</strong> Chauffeur assignment, vehicle details, and pickup information</li>
              <li><strong>Arrival Notifications:</strong> Alerts when your chauffeur is approaching or has arrived</li>
              <li><strong>Flight Tracking Updates:</strong> Notifications about flight delays or early arrivals</li>
              <li><strong>Service Reminders:</strong> Upcoming reservation reminders</li>
              <li><strong>Account Notifications:</strong> Important updates about your account or reservations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Message Frequency</h2>
            <p className="text-[var(--textMuted)] leading-relaxed">
              Message frequency varies based on your booking activity. You may receive multiple messages per reservation (confirmation, chauffeur assignment, arrival notification, etc.). We do not send promotional or marketing messages via SMS unless you have separately opted in to receive them.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Opt-Out Instructions</h2>
            <div className="bg-[var(--surface)] border-2 border-[var(--primary)]/20 rounded-lg p-6 mb-4">
              <p className="text-[var(--text)] font-semibold mb-3 text-lg">
                To stop receiving SMS messages from Oregon Town Car:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-[var(--textMuted)]">
                <li><strong>Reply "STOP"</strong> to any text message you receive from us</li>
                <li>You will receive a confirmation message that you have been unsubscribed</li>
                <li>You will no longer receive SMS messages from Oregon Town Car</li>
              </ol>
              <p className="text-[var(--textMuted)] mt-4 text-sm">
                Note: Opting out of SMS messages may affect your ability to receive real-time trip updates and arrival notifications.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Help and Support</h2>
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 mb-4">
              <p className="text-[var(--text)] mb-3">
                <strong>For help or questions about SMS messages:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--textMuted)]">
                <li>Reply <strong>"HELP"</strong> to any text message from us</li>
                <li>Call us at <a href="tel:5033537755" className="text-[var(--primary)] hover:underline">(503) 353-7755</a></li>
                <li>Email <a href="mailto:hello@oregontowncar.com" className="text-[var(--primary)] hover:underline">hello@oregontowncar.com</a></li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Message and Data Rates</h2>
            <p className="text-[var(--textMuted)] leading-relaxed mb-4">
              <strong>Message and data rates may apply.</strong> Standard text messaging rates from your mobile carrier will apply to all SMS messages sent and received. Oregon Town Car is not responsible for any charges from your mobile carrier.
            </p>
            <p className="text-[var(--textMuted)] leading-relaxed">
              Check with your mobile carrier for details about your messaging plan and any applicable charges.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Supported Carriers</h2>
            <p className="text-[var(--textMuted)] leading-relaxed mb-4">
              Our SMS service is available on the following U.S. carriers:
            </p>
            <p className="text-[var(--textMuted)] text-sm leading-relaxed">
              AT&T, T-Mobile, Verizon, Sprint, Boost Mobile, Cricket, MetroPCS, U.S. Cellular, Virgin Mobile, and other major carriers. Carrier availability may vary.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Carrier Disclaimer</h2>
            <p className="text-[var(--textMuted)] leading-relaxed">
              Carriers are not liable for delayed or undelivered messages. Message delivery may be affected by network coverage, device compatibility, or other factors outside of Oregon Town Car's control.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Privacy and Data Protection</h2>
            <p className="text-[var(--textMuted)] leading-relaxed mb-4">
              Your mobile phone number and SMS message history are subject to our{' '}
              <Link 
                href={`/${lang}/privacy`} 
                className="text-[var(--primary)] hover:underline font-medium"
              >
                Privacy Policy
              </Link>
              . We do not sell, rent, or share your mobile phone number with third parties for marketing purposes.
            </p>
            <p className="text-[var(--textMuted)] leading-relaxed">
              SMS messages may contain sensitive information about your reservations. Please keep your mobile device secure and notify us immediately if your phone is lost or stolen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Updates to Mobile Number</h2>
            <p className="text-[var(--textMuted)] leading-relaxed">
              If you change your mobile phone number, please update your account information to ensure you continue to receive important trip notifications. You can update your number by:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--textMuted)] mt-4">
              <li>Logging into your account at <a href="https://accounts.oregontowncar.com" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">accounts.oregontowncar.com</a></li>
              <li>Calling us at <a href="tel:5033537755" className="text-[var(--primary)] hover:underline">(503) 353-7755</a></li>
              <li>Emailing <a href="mailto:hello@oregontowncar.com" className="text-[var(--primary)] hover:underline">hello@oregontowncar.com</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Contact Information</h2>
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
              <p className="text-[var(--text)] font-semibold mb-4">
                Oregon Town Car
              </p>
              <p className="text-[var(--textMuted)] mb-2">
                4260 SW 110th Ave<br />
                Beaverton, OR 97005
              </p>
              <p className="text-[var(--textMuted)] mb-2">
                <strong>Phone:</strong>{' '}
                <a href="tel:5033537755" className="text-[var(--primary)] hover:underline">
                  (503) 353-7755
                </a>
              </p>
              <p className="text-[var(--textMuted)]">
                <strong>Email:</strong>{' '}
                <a href="mailto:hello@oregontowncar.com" className="text-[var(--primary)] hover:underline">
                  hello@oregontowncar.com
                </a>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Changes to This Policy</h2>
            <p className="text-[var(--textMuted)] leading-relaxed">
              We may update this SMS Messaging Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of SMS services after changes constitutes acceptance of the updated policy.
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
