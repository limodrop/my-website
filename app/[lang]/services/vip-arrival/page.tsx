import { Locale } from "@/lib/i18n/types";
import { getDictionary } from "@/app/i18n";
import { Button } from "@/app/ui/buttons/Button";
import { Icons } from "@/app/components/Icons";
import { SmartImage } from "@/app/components/SmartImage";
import { COMPANY_PHONE } from "@/lib/config/constants";

export async function generateMetadata({ params }: { params: { lang: Locale } }) {
  const locale = params.lang;

  return {
    title: "VIP Airport Arrival Service in Portland & Oregon | Oregon Town Car",
    description:
      "Meet & greet, guided airport arrivals, luggage assistance, and luxury chauffeur pickup. VIP arrival service for executives and special guests in Portland, PDX, and Oregon.",
    alternates: {
      canonical: `https://oregontowncar.com/${locale}/services/vip-arrival`,
    },
    openGraph: {
      title: "VIP Airport Arrival Service in Portland & Oregon | Oregon Town Car",
      description:
        "Meet & greet, guided airport arrivals, luggage assistance, and luxury chauffeur pickup. VIP arrival service for executives and special guests in Portland, PDX, and Oregon.",
      url: `https://oregontowncar.com/${locale}/services/vip-arrival`,
      siteName: "Oregon Town Car",
      type: "website",
      images: [
        {
          url: "https://oregontowncar.com/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function VIPArrivalPage({ params }: { params: { lang: Locale } }) {
  const locale = params.lang;
  const dict = await getDictionary(locale);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full mb-10 sm:mb-16 overflow-hidden rounded-lg">
        <SmartImage
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80"
          className="w-full max-w-full h-[400px] sm:h-[500px] lg:h-[550px] object-cover"
          alt="VIP Airport Arrival Service"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-center">
          <div className="w-full px-4 sm:px-6">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
              VIP Airport Arrival Service in Portland & Oregon
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 max-w-3xl">
              Personal meet & greet, guided airport arrivals, luggage assistance, and luxury chauffeur pickup — from terminal to destination.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
              <Button
                variant="primary"
                as="a"
                href={`/${locale}/contact`}
                className="w-full sm:w-auto !px-8 !py-3 text-base sm:text-lg"
              >
                Request VIP Service
              </Button>
              <Button
                variant="ghost"
                as="a"
                href={`tel:${COMPANY_PHONE}`}
                className="w-full sm:w-auto border-white text-white hover:bg-white/10 !px-8 !py-3 text-base sm:text-lg gap-2"
              >
                <Icons.phone className="w-5 h-5" />
                <span>Call Concierge</span>
              </Button>
            </div>

            {/* Trust Line */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-white/90">
              <span>Discreet</span>
              <span className="text-white/50">•</span>
              <span>Professional</span>
              <span className="text-white/50">•</span>
              <span>Time-Saving</span>
            </div>
          </div>
        </div>
      </section>

      {/* What is VIP Arrival Service */}
      <section className="py-8 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-4">
          What is VIP Arrival Service?
        </h2>
        <p className="text-base sm:text-lg text-[var(--textMuted)] leading-relaxed max-w-3xl">
          Our VIP Airport Arrival Service provides a seamless, stress-free arrival experience at PDX and airports throughout Oregon. From the moment you land, a professional greeter meets you at the gate, assists with luggage, navigates the terminal, and escorts you directly to your waiting luxury chauffeur vehicle. Skip the confusion, delays, and hassle — arrive like the VIP you are.
        </p>
      </section>

      {/* How it Works */}
      <section className="py-10 sm:py-16 bg-[var(--surface)] border-y border-[var(--border)] -mx-4 sm:-mx-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-8 text-center">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Step 1 */}
            <div className="bg-[var(--background)] border border-[var(--border)] rounded-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                <Icons.user className="w-8 h-8 text-[var(--primary)]" />
              </div>
              <div className="mb-3 text-sm font-semibold text-[var(--primary)]">Step 1</div>
              <h3 className="text-lg sm:text-xl font-semibold text-[var(--text)] mb-3">
                Gate Meet & Greet
              </h3>
              <p className="text-sm sm:text-base text-[var(--textMuted)]">
                Your personal greeter meets you at the arrival gate with a professional sign bearing your name.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[var(--background)] border border-[var(--border)] rounded-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                <Icons.map className="w-8 h-8 text-[var(--primary)]" />
              </div>
              <div className="mb-3 text-sm font-semibold text-[var(--primary)]">Step 2</div>
              <h3 className="text-lg sm:text-xl font-semibold text-[var(--text)] mb-3">
                Guided Arrivals
              </h3>
              <p className="text-sm sm:text-base text-[var(--textMuted)]">
                We navigate the terminal, coordinate baggage claim, and provide assistance through customs/immigration if needed.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[var(--background)] border border-[var(--border)] rounded-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                <Icons.car className="w-8 h-8 text-[var(--primary)]" />
              </div>
              <div className="mb-3 text-sm font-semibold text-[var(--primary)]">Step 3</div>
              <h3 className="text-lg sm:text-xl font-semibold text-[var(--text)] mb-3">
                Chauffeur Transfer
              </h3>
              <p className="text-sm sm:text-base text-[var(--textMuted)]">
                Direct escort to your luxury vehicle where your professional chauffeur awaits to transport you to your destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-10 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-8">
          What's Included
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: Icons.user,
              text: "Personal meet & greet at arrival gate",
            },
            {
              icon: Icons.map,
              text: "Guided airport navigation and terminal escort",
            },
            {
              icon: Icons.briefcase,
              text: "Luggage assistance and coordination",
            },
            {
              icon: Icons.car,
              text: "Direct escort to luxury chauffeur vehicle",
            },
            {
              icon: Icons.star,
              text: "Ideal for executives, families, and VIP guests",
            },
            {
              icon: Icons.shield,
              text: "Customs/immigration assistance and coordination",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-[var(--surface)] border border-[var(--border)] rounded-lg hover:border-[var(--primary)] transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[var(--primary)]" />
                </div>
                <span className="text-sm sm:text-base text-[var(--text)] pt-2">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-6 p-4 bg-[var(--background)] border border-[var(--border)] rounded-lg">
          <p className="text-xs sm:text-sm text-[var(--textMuted)] italic">
            <strong>Note:</strong> Our VIP Arrival Service provides assistance and coordination through customs and immigration processes. We do not guarantee expedited clearance, as all passengers must comply with official procedures. Our role is to guide, assist, and ensure a smooth experience.
          </p>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-10 sm:py-16 bg-[var(--background)]">
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-8 text-center">
          Who It's For
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Icons.briefcase,
              title: "Business Executives",
              description: "Maximize productivity with seamless arrivals",
            },
            {
              icon: Icons.globe,
              title: "International Travelers",
              description: "Navigate customs and immigration with ease",
            },
            {
              icon: Icons.users,
              title: "Families & Groups",
              description: "Stress-free coordination for multiple passengers",
            },
            {
              icon: Icons.star,
              title: "VIP Guests",
              description: "Discreet, professional service for high-profile arrivals",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-[var(--surface)] border border-[var(--border)] rounded-lg"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-[var(--primary)]" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-[var(--text)] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--textMuted)]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-[var(--text)] text-white -mx-4 sm:-mx-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Arrive Like a VIP
            </h2>
            <p className="text-base sm:text-lg text-white/90 mb-8">
              Let us handle the arrival details while you relax.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="primary"
                as="a"
                href={`/${locale}/contact`}
                className="w-full sm:w-auto bg-white text-[var(--text)] hover:bg-white/90 !px-8 !py-3 text-base sm:text-lg font-semibold"
              >
                Request VIP Service
              </Button>
              <Button
                variant="ghost"
                as="a"
                href="https://accounts.oregontowncar.com/"
                className="w-full sm:w-auto border-white text-white hover:bg-white/10 !px-8 !py-3 text-base sm:text-lg font-semibold"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
