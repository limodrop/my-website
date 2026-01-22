export default function PowerFooter() {
  return (
    <footer className="bg-black text-white py-10 px-6 text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold mb-2">Oregon Town Car</h4>
          <p className="text-gray-400">Premium chauffeur service across Oregon and beyond.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Explore</h4>
          <ul className="space-y-1 text-gray-300">
            <li><a href="/fleet" className="hover:underline">Fleet</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/cities" className="hover:underline">Cities</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-gray-300">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Built With</h4>
          <ul className="space-y-1 text-gray-300">
            <li>Next.js + Tailwind CSS</li>
            <li>AI-Powered Intelligence</li>
            <li>Admin-Editable CMS</li>
            <li>Global Multilingual Engine</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Oregon Town Car. All rights reserved.
      </div>
    </footer>
  )
}
