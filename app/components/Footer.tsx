import Link from "next/link";
import { getDictionary } from "@/app/i18n";
import { theme } from "@/app/ui/theme";

export default async function Footer({ locale }: { locale: string }) {
  const dict = await getDictionary(locale);
  
  return (
    <footer 
      className="border-t py-10 mt-20"
      style={{
        backgroundColor: theme.colors.surface,
        borderColor: theme.colors.border,
      }}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div>
            <h4 
              className="font-semibold mb-3"
              style={{ color: theme.colors.text }}
            >
              {dict.nav.services}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href={`/${locale}/services`} 
                  className="hover:underline"
                  style={{ color: theme.colors.textMuted }}
                >
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 
              className="font-semibold mb-3"
              style={{ color: theme.colors.text }}
            >
              {dict.nav.fleet}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href={`/${locale}/fleet`} 
                  className="hover:underline"
                  style={{ color: theme.colors.textMuted }}
                >
                  Our Fleet
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 
              className="font-semibold mb-3"
              style={{ color: theme.colors.text }}
            >
              {dict.nav.cities}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href={`/${locale}/cities`} 
                  className="hover:underline"
                  style={{ color: theme.colors.textMuted }}
                >
                  Cities
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/countries`} 
                  className="hover:underline"
                  style={{ color: theme.colors.textMuted }}
                >
                  Countries
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 
              className="font-semibold mb-3"
              style={{ color: theme.colors.text }}
            >
              {dict.nav.about}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href={`/${locale}/about`} 
                  className="hover:underline"
                  style={{ color: theme.colors.textMuted }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/contact`} 
                  className="hover:underline"
                  style={{ color: theme.colors.textMuted }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p 
          className="text-center text-sm"
          style={{ color: theme.colors.textMuted }}
        >
          {dict.footer.globalMessage}
        </p>
      </div>
    </footer>
  );
}
