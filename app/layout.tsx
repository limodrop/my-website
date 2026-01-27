
import { BackToTopButton } from "@/app/components/BackToTopButton";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Use a client-side hook to get the pathname
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const canonicalUrl = `https://www.oregontowncar.com${pathname}`;
  return (
    <html>
      <head>
        <link rel="canonical" href={canonicalUrl} />
      </head>
      <body>
        {children}
        <BackToTopButton />
      </body>
    </html>
  );
}
