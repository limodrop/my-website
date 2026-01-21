import { serverApi } from "@/lib/api/serverClient"

export default async function Footer() {
  const [footer, serviceArea] = await Promise.all([
    serverApi.getFooter(),
    serverApi.getServiceArea(),
  ])

  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="container mx-auto px-4 space-y-8">
        
        {/* WORLDWIDE BANNER */}
        <div className="text-center py-6 bg-yellow-600 text-black rounded-lg font-semibold">
          🌍 Serving clients worldwide — 50 U.S. states + {serviceArea.countries.length} countries
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-xl font-bold mb-3">{footer.company}</h3>
            <p>{footer.address}</p>
            <p>{footer.phone}</p>
            <p>{footer.email}</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {footer.links.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Service Hours</h3>
            <p>24/7 Worldwide Service Available</p>
            <p className="mt-2 text-sm text-gray-400">
              {serviceArea.specialNotes}
            </p>
          </div>

        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} {footer.company}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
