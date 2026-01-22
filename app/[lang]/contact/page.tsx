import { getDictionary } from "@/app/i18n";
import { Locale } from "@/lib/i18n/types";
import { PageShell } from "@/app/ui/layout/PageShell";
import BookingForm from "@/app/components/BookingForm";

export default async function ContactPage({ params }: { params: { lang: Locale } }) {
  const locale = params.lang;
  const dict = await getDictionary(locale);

  return (
    <PageShell>
      <h1 className="text-4xl font-semibold text-[var(--text)] mb-4">
        Contact Us
      </h1>

      <p className="text-lg text-[var(--textMuted)] mb-8">
        Reach out for bookings, corporate accounts, or general inquiries.
      </p>

      <div className="max-w-2xl">
        <BookingForm locale={locale} />
      </div>
    </PageShell>
  );
}
              <div className="text-3xl">📍</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Headquarters</h3>
                <p className="text-gray-700">{contact.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl">🕐</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Hours</h3>
                <p className="text-gray-700">{contact.hours}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl">🌍</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Worldwide Coverage</h3>
                <p className="text-gray-700">
                  Serving {serviceArea.countries.length} countries with 24/7 support
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600"
                  placeholder="How can we help you?"
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-yellow-600 text-black font-bold rounded-lg hover:bg-yellow-500 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gray-300 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-xl font-semibold">Interactive Map</p>
              <p className="text-sm">Portland Headquarters + Worldwide Locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black py-16 px-4">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to Book?</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Skip the form - book your ride instantly through our online system
          </p>
          <a
            href={booking.bookingUrl}
            className="inline-block px-8 py-4 bg-black text-white font-bold text-lg rounded-lg hover:bg-gray-900 transition"
          >
            📍 Book Online Now
          </a>
        </div>
      </section>
    </div>
  )
}
