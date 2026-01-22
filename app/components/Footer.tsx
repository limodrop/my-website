import Link from "next/link";
import { getDictionary } from "@/app/i18n";

export default async function Footer({ locale }: { locale: string }) {
  const dict = await getDictionary(locale);
  
  return (
    <footer className="border-t border-[#D1D1D1] bg-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-[#5A5A5A]">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div>
            <h4 className="text-[#1B1B1B] font-semibold mb-3">{dict.nav.services}</h4>
            <ul className="space-y-2">
              <li><Link href={`/${locale}/services`} className="hover:text-[#0067B8]">All Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#1B1B1B] font-semibold mb-3">{dict.nav.fleet}</h4>
            <ul className="space-y-2">
              <li><Link href={`/${locale}/fleet`} className="hover:text-[#0067B8]">Our Fleet</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#1B1B1B] font-semibold mb-3">{dict.nav.cities}</h4>
            <ul className="space-y-2">
              <li><Link href={`/${locale}/cities`} className="hover:text-[#0067B8]">Cities</Link></li>
              <li><Link href={`/${locale}/countries`} className="hover:text-[#0067B8]">Countries</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#1B1B1B] font-semibold mb-3">{dict.nav.about}</h4>
            <ul className="space-y-2">
              <li><Link href={`/${locale}/about`} className="hover:text-[#0067B8]">About Us</Link></li>
              <li><Link href={`/${locale}/contact`} className="hover:text-[#0067B8]">Contact</Link></li>
            </ul>
          </div>
        </div>

        <p className="text-center text-[#5A5A5A] text-sm">
          {dict.footer.globalMessage}
        </p>
      </div>
    </footer>
  );
}
