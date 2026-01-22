import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="
        mt-20 py-14 border-t
        bg-[var(--surface)]
        text-[var(--text)]
        border-[var(--border)]
      "
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* SERVICES */}
        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <Link href="/services" className="block hover:underline">
            All Services
          </Link>
        </div>

        {/* FLEET */}
        <div>
          <h4 className="font-semibold mb-3">Fleet</h4>
          <Link href="/fleet" className="block hover:underline">
            Our Fleet
          </Link>
        </div>

        {/* CITIES + COUNTRIES */}
        <div>
          <h4 className="font-semibold mb-3">Locations</h4>
          <Link href="/cities" className="block hover:underline mb-2">
            Cities
          </Link>
          <Link href="/countries" className="block hover:underline mb-2">
            Countries
          </Link>
          <Link href="/worldwide" className="block hover:underline">
            Worldwide
          </Link>
        </div>

        {/* ABOUT / CONTACT */}
        <div>
          <h4 className="font-semibold mb-3">About</h4>
          <Link href="/about" className="block hover:underline mb-2">
            About Us
          </Link>
          <Link href="/contact" className="block hover:underline">
            Contact
          </Link>
        </div>
      </div>

      <p className="text-center mt-10 text-[var(--textMuted)]">
        © {new Date().getFullYear()} Oregon Town Car - Premium Chauffeur Service Worldwide
      </p>
    </footer>
  );
}
