import Link from "next/link";
import { getDictionary } from "@/app/i18n";

export default async function Footer({ locale }: { locale: string }) {
  const dict = await getDictionary(locale);
  
  return (
    <footer className="border-t border-gray-800 bg-black py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-gray-400">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div>
            <h4 className="text-white font-semibold mb-3">{dict.nav.services}</h4>
            <ul className="space-y-2">
              <li><Link href={`/${locale}/services`} className="hover:text-yellow-400">All Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">{dict.nav.fleet}</h4>
            <ul className="space-y-2">
              <li><Link href={`/${locale}/fleet`} className="hover:text-yellow-400">Our Fleet</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">{dict.nav.cities}</h4>
            <ul className="space-y-2">
              <li><Link href={`/${locale}/cities`} className="hover:text-yellow-400">Cities</Link></li>
              <li><Link href={`/${locale}/countries`} className="hover:text-yellow-400">Countries</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">{dict.nav.about}</h4>
            <ul className="space-y-2">
              <li><Link href={`/${locale}/about`} className="hover:text-yellow-400">About Us</Link></li>
              <li><Link href={`/${locale}/contact`} className="hover:text-yellow-400">Contact</Link></li>
            </ul>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm">
          {dict.footer.globalMessage}
        </p>
      </div>
    </footer>
  );
}
