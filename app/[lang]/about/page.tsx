import { serverApi } from "@/lib/api/serverClient"

export default async function AboutPage() {
  const [settings, serviceArea] = await Promise.all([
    serverApi.getSettings(),
    serverApi.getServiceArea(),
  ])

  return (
    <div className="space-y-0">
      {/* HERO */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-24 px-4">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">{settings.siteName}</h1>
          <p className="text-2xl text-gray-300 max-w-2xl mx-auto">
            {settings.tagline}
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            To provide the world's finest chauffeur service experience, combining luxury, 
            reliability, and professionalism across every journey. From local transfers to 
            international travel, we set the standard for premium transportation.
          </p>
        </div>
      </section>

      {/* WORLDWIDE COVERAGE */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Global Excellence</h2>
            <p className="text-xl text-gray-600">
              Operating in {serviceArea.countries.length} countries with the same commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold mb-2">{serviceArea.countries.length} Countries</h3>
              <p className="text-gray-600">Worldwide service coverage</p>
            </div>
            
            <div className="text-center p-6">
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
