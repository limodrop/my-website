import { getDictionary } from "@/app/i18n"
import { Locale } from "@/lib/i18n/types"

export default async function TermsPage({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang)

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold text-[var(--text)] mb-6">
        Terms of Service
      </h1>
      
      <div className="prose prose-slate max-w-none space-y-6 text-[var(--text)]">
        <p className="text-lg text-[var(--textMuted)]">
          Last updated: January 21, 2026
        </p>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-[var(--textMuted)] leading-relaxed">
            By accessing and using Oregon Town Car's services, you accept and agree to be bound by 
            the terms and provision of this agreement. If you do not agree to abide by the above, 
            please do not use this service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Services</h2>
          <p className="text-[var(--textMuted)] leading-relaxed">
            Oregon Town Car provides premium chauffeur services including airport transfers, 
            corporate travel, city tours, and special event transportation. All services are 
            subject to availability and must be booked in advance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Booking and Payment</h2>
          <p className="text-[var(--textMuted)] leading-relaxed mb-4">
            All bookings must be confirmed and paid for according to our payment terms:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--textMuted)]">
            <li>Advance booking is required for all services</li>
            <li>Payment is due at time of booking or as agreed</li>
            <li>We accept major credit cards and corporate accounts</li>
            <li>Prices are subject to change based on distance, time, and demand</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Cancellation Policy</h2>
          <p className="text-[var(--textMuted)] leading-relaxed mb-4">
            Our cancellation policy is as follows:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--textMuted)]">
            <li>Free cancellation up to 24 hours before scheduled pickup</li>
            <li>50% charge for cancellations within 24 hours</li>
            <li>100% charge for no-shows or same-day cancellations</li>
            <li>Weather-related cancellations handled on case-by-case basis</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Customer Conduct</h2>
          <p className="text-[var(--textMuted)] leading-relaxed">
            Customers are expected to conduct themselves respectfully. We reserve the right to 
            refuse service to anyone who is abusive, intoxicated, or engaging in illegal activity. 
            Smoking is prohibited in all vehicles.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Liability</h2>
          <p className="text-[var(--textMuted)] leading-relaxed">
            While we take every precaution to ensure safe and timely service, Oregon Town Car 
            is not liable for delays caused by traffic, weather, or other circumstances beyond 
            our control. We maintain comprehensive insurance for all vehicles and passengers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Privacy</h2>
          <p className="text-[var(--textMuted)] leading-relaxed">
            Your privacy is important to us. Please review our{" "}
            <a href={`/${params.lang}/privacy`} className="text-[var(--primary)] hover:underline">
              Privacy Policy
            </a>{" "}
            to understand how we collect and use your information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to Terms</h2>
          <p className="text-[var(--textMuted)] leading-relaxed">
            We reserve the right to modify these terms at any time. Changes will be posted on 
            this page with an updated revision date. Continued use of our services after changes 
            constitutes acceptance of the modified terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Information</h2>
          <p className="text-[var(--textMuted)] leading-relaxed">
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <div className="mt-4 p-4 bg-[var(--surface)] border border-[var(--border)] rounded-lg">
            <p className="text-[var(--text)] font-medium">Oregon Town Car</p>
            <p className="text-[var(--textMuted)]">4260 SW 110th Ave, Beaverton, OR 97005</p>
            <p className="text-[var(--textMuted)]">Email: hello@oregontowncar.com</p>
            <p className="text-[var(--textMuted)]">Phone: +1 (503) 353-7755</p>
          </div>
        </section>
      </div>
    </div>
  )
}
