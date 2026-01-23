import { getDictionary } from "@/app/i18n";
import { Locale } from "@/lib/i18n/types";
import BookingCTA from "@/app/components/BookingCTA";
import { Icons } from "@/app/components/Icons";

export default async function AboutPage({ params }: { params: { lang: Locale } }) {
  const locale = params.lang;
  const dict = await getDictionary(locale);

  return (
    <>
      {/* Hero Section */}
      <div className="mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--text)] mb-4 sm:mb-6">
          About Oregon Town Car
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-[var(--textMuted)] max-w-3xl leading-relaxed">
          Premium chauffeur service built on reliability, professionalism, and global reach. 
          From Portland to worldwide destinations, we deliver consistent excellence in private transportation.
        </p>
      </div>

      {/* Mission & Values Grid */}
      <div className="mb-12 sm:mb-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div className="p-6 sm:p-8 rounded-lg bg-[var(--surface)] border border-[var(--border)] shadow-sm">
          <h2 className="text-xl sm:text-2xl font-semibold text-[var(--text)] mb-4">Our Mission</h2>
          <p className="text-[var(--textMuted)] leading-relaxed">
            To deliver world-class transportation with a focus on safety, comfort, and
            exceptional service — whether you're traveling across town or across the world.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-lg bg-[var(--surface)] border border-[var(--border)] shadow-sm">
          <h2 className="text-xl sm:text-2xl font-semibold text-[var(--text)] mb-4">Our Network</h2>
          <p className="text-[var(--textMuted)] leading-relaxed">
            We operate in 50 U.S. states and 13 countries, partnering with vetted
            professional chauffeurs to ensure consistent quality everywhere you travel.
          </p>
        </div>
      </div>

      {/* Why Clients Trust Us */}
      <div className="mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--text)] mb-6 sm:mb-8">
          Why Clients Trust Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="flex items-start gap-3">
            <Icons.checkCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--primary)] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-[var(--text)] mb-1">Professional Chauffeurs</h3>
              <p className="text-sm text-[var(--textMuted)]">Background-checked, trained drivers committed to excellence</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Icons.checkCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--primary)] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-[var(--text)] mb-1">Transparent Pricing</h3>
              <p className="text-sm text-[var(--textMuted)]">Fixed rates with no hidden fees or surge pricing</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Icons.checkCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--primary)] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-[var(--text)] mb-1">Premium Vehicles</h3>
              <p className="text-sm text-[var(--textMuted)]">Late-model luxury sedans, SUVs, and executive vans</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Icons.checkCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--primary)] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-[var(--text)] mb-1">On-Time Guarantee</h3>
              <p className="text-sm text-[var(--textMuted)]">Punctual service with real-time tracking and updates</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Icons.checkCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--primary)] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-[var(--text)] mb-1">24/7 Availability</h3>
              <p className="text-sm text-[var(--textMuted)]">Book anytime for early flights, late events, and everything between</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Icons.checkCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--primary)] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-[var(--text)] mb-1">Worldwide Coverage</h3>
              <p className="text-sm text-[var(--textMuted)]">Consistent service across all 50 states and 13 countries</p>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="mb-12 sm:mb-16 py-8 sm:py-12 px-6 sm:px-8 rounded-lg bg-[var(--surfaceHover)] border-t-2 border-[var(--primary)]">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--text)] mb-4 sm:mb-6">
          Founded on Professionalism & Trust
        </h2>
        <div className="max-w-3xl space-y-4 text-[var(--textMuted)] leading-relaxed">
          <p>
            Oregon Town Car was founded by <span className="font-semibold text-[var(--text)]">Ali Al-Abbas</span> with 
            a clear vision: to elevate private transportation through professionalism, reliability, and personalized service.
          </p>
          <p>
            Built on years of experience in transportation and operations, Oregon Town Car was designed to deliver 
            a consistently premium experience — from local service in Portland to coordinated chauffeur service worldwide.
          </p>
          <p>
            That founding philosophy continues to guide every ride: trained chauffeurs, immaculate vehicles, 
            transparent pricing, and a commitment to doing things the right way.
          </p>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-12 sm:py-16 px-6 sm:px-10 rounded-lg bg-[var(--primary)] text-white text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4">
          Ready to book your ride?
        </h2>
        <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
          Professional chauffeurs. Premium vehicles. Worldwide coverage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`/${locale}/booking`}
            className="
              inline-flex items-center justify-center gap-2
              px-6 sm:px-8 py-3 sm:py-4
              bg-white text-[var(--primary)]
              rounded-lg font-semibold
              hover:bg-gray-100
              transition-all duration-200
              min-w-[200px] sm:min-w-[220px]
            "
          >
            Book Now
            <Icons.arrow className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <button
            onClick={() => {
              if (typeof window !== 'undefined') {
                const event = new CustomEvent('openQuoteModal');
                window.dispatchEvent(event);
              }
            }}
            className="
              inline-flex items-center justify-center gap-2
              px-6 sm:px-8 py-3 sm:py-4
              bg-transparent text-white
              border-2 border-white
              rounded-lg font-semibold
              hover:bg-white hover:text-[var(--primary)]
              transition-all duration-200
              min-w-[200px] sm:min-w-[220px]
            "
          >
            Get a Quote
          </button>
        </div>
      </div>
    </>
  );
}
