import { api } from "@/lib/api/apiClient"

export default async function Footer() {
  const footer = await api.getFooter()

  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
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
          <p>24/7 Service Available</p>
        </div>

      </div>
    </footer>
  )
}
