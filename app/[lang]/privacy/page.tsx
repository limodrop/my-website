import { getDictionary } from "@/app/i18n"
import { Locale } from "@/lib/i18n/types"

export default async function PrivacyPage({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang)

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold text-[var(--text)] mb-6">
        Privacy Policy
      </h1>
      
      <div className="prose prose-slate max-w-none space-y-6 text-[var(--text)]">
        <p className="text-lg text-[var(--textMuted)]">
          Last updated: January 21, 2026
        </p>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-[var(--textMuted)] leading-relaxed mb-4">
            We collect information that you provide directly to us when using our services:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--textMuted)]">
            <li><strong>Personal Information:</strong> Name, email address, phone number</li>
            <li><strong>Booking Information:</strong> Pickup/dropoff locations, dates, times</li>
            <li><strong>Payment Information:</strong> Credit card details (processed securely)</li>
            <li><strong>Usage Data:</strong> How you interact with our website and services</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-[var(--textMuted)] leading-relaxed mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--textMuted)]">
            <li>Process and fulfill your bookings</li>
            <li>Communicate with you about your reservations</li>
            <li>Send promotional offers (with your consent)</li>
            <li>Improve our services and customer experience</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Information Sharing</h2>
          <p className="text-[var(--textMuted)] leading-relaxed mb-4">
            We do not sell your personal information. We may share your information with:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--textMuted)]">
            <li><strong>Service Providers:</strong> Payment processors, booking systems</li>
            <li><strong>Chauffeurs:</strong> Only information necessary to complete your trip</li>
            <li><strong>Legal Requirements:</strong> When required by law or legal process</li>
            <li><strong>Business Transfers:</strong> In connection with merger or acquisition</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
          <p className="text-[var(--textMuted)] leading-relaxed">
            We implement industry-standard security measures to protect your information:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--textMuted)] mt-4">
            <li>SSL encryption for all data transmission</li>
            <li>Secure payment processing through PCI-compliant providers</li>
            <li>Regular security audits and updates</li>
            <li>Limited employee access to personal data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Cookies and Tracking</h2>
          <p className="text-[var(--textMuted)] leading-relaxed mb-4">
            We use cookies and similar technologies to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--textMuted)]">
            <li>Remember your preferences and settings</li>
            <li>Analyze website traffic and usage patterns</li>
            <li>Personalize content and advertisements</li>
            <li>Improve website functionality</li>
          </ul>
          <p className="text-[var(--textMuted)] leading-relaxed mt-4">
            You can control cookies through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
          <p className="text-[var(--textMuted)] leading-relaxed mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--textMuted)]">
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Object to certain data processing</li>
          </ul>
          <p className="text-[var(--textMuted)] leading-relaxed mt-4">
            To exercise these rights, contact us at privacy@oregontowncar.com
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Data Retention</h2>
          <p className="text-[var(--textMuted)] leading-relaxed">
            We retain your personal information for as long as necessary to provide services 
            and comply with legal obligations. Booking records are kept for 7 years for tax 
            and legal purposes. Marketing data is retained until you unsubscribe.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. International Data Transfers</h2>
          <p className="text-[var(--textMuted)] leading-relaxed">
            If you are located outside the United States, please note that we transfer, 
            process, and store your information in the US. We ensure appropriate safeguards 
            are in place for international data transfers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Children's Privacy</h2>
          <p className="text-[var(--textMuted)] leading-relaxed">
            Our services are not directed to children under 13. We do not knowingly collect 
            personal information from children. If you believe we have collected such 
            information, please contact us immediately.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Changes to Privacy Policy</h2>
          <p className="text-[var(--textMuted)] leading-relaxed">
            We may update this Privacy Policy periodically. We will notify you of significant 
            changes by email or prominent notice on our website. Your continued use after 
            changes constitutes acceptance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Us</h2>
          <p className="text-[var(--textMuted)] leading-relaxed">
            If you have questions about this Privacy Policy or our data practices:
          </p>
          <div className="mt-4 p-4 bg-[var(--surface)] border border-[var(--border)] rounded-lg">
            <p className="text-[var(--text)] font-medium">Oregon Town Car</p>
            <p className="text-[var(--textMuted)]">Privacy Team</p>
            <p className="text-[var(--textMuted)]">Email: privacy@oregontowncar.com</p>
            <p className="text-[var(--textMuted)]">Phone: +1 (503) 555-0100</p>
          </div>
        </section>
      </div>
    </div>
  )
}
