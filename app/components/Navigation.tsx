import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { getDictionary } from "@/app/i18n";
import { theme } from "@/app/ui/theme";

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
    <nav
      className="w-full border-b px-6 py-4"
      style={{
        backgroundColor: theme.colors.surface,
        borderColor: theme.colors.border,
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}/${item.href}`}
              className="text-sm font-medium transition hover:underline"
              style={{ color: theme.colors.text }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <LanguageSwitcher currentLocale={locale} />
      </div>
    </nav>
  );
}
