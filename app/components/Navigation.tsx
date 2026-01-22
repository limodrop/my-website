import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { getDictionary } from "@/app/i18n";

export default async function Navigation({ locale }: { locale: string }) {
  const dict = await getDictionary(locale);

  const navItems = [
    { href: "", label: dict.nav.home },
    { href: "services", label: dict.nav.services },
    { href: "fleet", label: dict.nav.fleet },
    { href: "cities", label: dict.nav.cities },
    { href: "countries", label: dict.nav.countries },
    { href: "worldwide", label: dict.nav.worldwide },
    { href: "about", label: dict.nav.about },
    { href: "contact", label: dict.nav.contact },
  ];

  return (
    <nav className="w-full border-b border-[#D1D1D1] bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Left side navigation */}
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}/${item.href}`}
              className="text-sm hover:text-[#0067B8] transition text-[#1B1B1B] font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right side language switcher */}
        <LanguageSwitcher currentLocale={locale} />
      </div>
    </nav>
  );
}
