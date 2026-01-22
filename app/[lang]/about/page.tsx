import { getDictionary } from "@/app/i18n";
import { Locale } from "@/lib/i18n/types";
import { PageShell } from "@/app/ui/layout/PageShell";
import BookingCTA from "@/app/components/BookingCTA";

export default async function AboutPage({ params }: { params: { lang: Locale } }) {
  const locale = params.lang;
  const dict = await getDictionary(locale);

  return (
    <PageShell>
      <h1 className="text-4xl font-semibold text-[var(--text)] mb-4">
        About Oregon Town Car
      </h1>

      <p className="text-lg text-[var(--textMuted)] mb-8">
        Premium chauffeur service built on reliability, professionalism, and global reach.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className="
            p-6 rounded-lg
            bg-[var(--surface)]
            border border-[var(--border)]
            shadow-sm
          "
        >
          <h3 className="text-2xl font-semibold text-[var(--text)] mb-3">Our Mission</h3>
          <p className="text-[var(--textMuted)] leading-relaxed">
            To deliver world-class transportation with a focus on safety, comfort, and
            exceptional service — whether you're traveling across town or across the world.
          </p>
        </div>

        <div
          className="
            p-6 rounded-lg
            bg-[var(--surface)]
            border border-[var(--border)]
            shadow-sm
          "
        >
          <h3 className="text-2xl font-semibold text-[var(--text)] mb-3">Our Network</h3>
          <p className="text-[var(--textMuted)] leading-relaxed">
            We operate in 50 U.S. states and 13 countries, partnering with vetted
            professional chauffeurs to ensure consistent quality everywhere you travel.
          </p>
        </div>
      </div>

      <BookingCTA locale={locale} />
    </PageShell>
  );
}
              <div className="text-5xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold mb-2">Premium Fleet</h3>
              <p className="text-gray-600">Luxury vehicles everywhere</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold mb-2">24/7 Service</h3>
              <p className="text-gray-600">Always available, always reliable</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY HISTORY */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Founded with a vision to redefine luxury transportation, Oregon Town Car has grown 
              from a local Portland service to a global brand synonymous with excellence. Our 
              journey began with a simple promise: to treat every client like family and every 
              ride like it matters.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Today, we serve clients in {serviceArea.countries.length} countries, managing thousands of 
              rides monthly while maintaining the personalized service that defined our beginnings. 
              Our professional chauffeurs, premium vehicles, and commitment to punctuality have 
              earned us the trust of executives, celebrities, and discerning travelers worldwide.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Whether you need airport transportation in Portland or corporate service in Paris, 
              you'll experience the same level of luxury, professionalism, and attention to detail 
              that has become our signature.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black py-16 px-4">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">Experience the Difference</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Book your next ride and discover why clients worldwide trust {settings.siteName}
          </p>
          <a
            href="https://book.oregontowncar.com"
            className="inline-block px-8 py-4 bg-black text-white font-bold text-lg rounded-lg hover:bg-gray-900 transition"
          >
            📍 Book Now
          </a>
        </div>
      </section>
    </div>
  )
}
