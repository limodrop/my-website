"use client";
import { useState } from 'react';
import { QuoteModal } from '@/app/components/QuoteModal';
import Link from 'next/link';

export default function PrivateAviationClient() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Private Aviation Chauffeur Service in Portland, Oregon
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 mb-8">
              Discreet, professional ground transportation for private jet travelers, executives, and VIPs.
            </p>
            <button
              onClick={() => setQuoteModalOpen(true)}
              className="inline-block px-8 py-4 bg-[var(--primary)] text-white font-semibold rounded-lg hover:bg-[var(--primary)]/90 transition-colors text-base sm:text-lg"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </section>

      {/* FBO & Airport Coverage */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-6 text-center">FBO & Executive Airport Coverage</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-lg text-[var(--text)]">
          <li>Portland International Airport (PDX – Private Aviation)</li>
          <li>Signature Aviation PDX</li>
          <li>Atlantic Aviation PDX</li>
          <li>Hillsboro Airport (HIO)</li>
          <li>Aurora State Airport (UAO)</li>
          <li>Troutdale Airport (TTD)</li>
          <li>Salem Airport (SLE)</li>
        </ul>
      </section>

      {/* Who This Service Is For */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-6 text-center">Who This Service Is For</h2>
        <ul className="max-w-2xl mx-auto list-disc list-inside text-lg text-[var(--textMuted)] space-y-2">
          <li>Private jet passengers</li>
          <li>Charter operators</li>
          <li>Aircraft owners</li>
          <li>Corporate flight departments</li>
          <li>VIP & executive travelers</li>
        </ul>
      </section>

      {/* Why Oregon Town Car (Private Aviation) */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-6 text-center">Why Oregon Town Car for Private Aviation</h2>
        <ul className="max-w-2xl mx-auto list-disc list-inside text-lg text-[var(--textMuted)] space-y-2">
          <li>Flight-aware pickup & flexible timing</li>
          <li>FBO coordination & ramp-side awareness</li>
          <li>Discreet, unmarked luxury vehicles</li>
          <li>Professional, vetted chauffeurs</li>
          <li>Luggage & equipment handling</li>
        </ul>
      </section>

      {/* Fleet Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-6 text-center">Our Fleet</h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch max-w-4xl mx-auto">
          <Link href="/en/fleet/luxury-sedan" className="flex-1 bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[var(--text)] mb-2">Luxury Sedan</h3>
            <p className="text-[var(--textMuted)]">Premium comfort for up to 3 passengers</p>
          </Link>
          <Link href="/en/fleet/black-suv" className="flex-1 bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[var(--text)] mb-2">Black SUV</h3>
            <p className="text-[var(--textMuted)]">Spacious, discreet, and versatile</p>
          </Link>
          <Link href="/en/fleet/executive-van" className="flex-1 bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[var(--text)] mb-2">Executive Van</h3>
            <p className="text-[var(--textMuted)]">Ideal for groups and extra luggage</p>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-6 text-center">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-[var(--text)] mb-2">Do you provide chauffeur service to FBOs?</h3>
            <p className="text-[var(--textMuted)]">Yes, we provide direct service to all Portland-area FBOs and executive airports.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-[var(--text)] mb-2">Do you track private flight arrivals?</h3>
            <p className="text-[var(--textMuted)]">Absolutely. We monitor private and charter flight schedules for timely pickup and drop-off.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-[var(--text)] mb-2">Is service available 24/7?</h3>
            <p className="text-[var(--textMuted)]">Yes, our private aviation chauffeur service is available 24/7 by advance reservation.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-[var(--text)] mb-2">Can chauffeurs wait for delayed flights?</h3>
            <p className="text-[var(--textMuted)]">Yes, we offer flexible waiting and real-time coordination for delayed or early arrivals.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-[var(--text)] mb-2">Do you work with charter operators?</h3>
            <p className="text-[var(--textMuted)]">We regularly coordinate with charter operators, FBO staff, and flight departments for seamless service.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-[var(--text)] mb-2">Is ramp-side pickup available?</h3>
            <p className="text-[var(--textMuted)]">Ramp-side pickup is available at select FBOs with prior arrangement and FBO approval.</p>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  );
}
