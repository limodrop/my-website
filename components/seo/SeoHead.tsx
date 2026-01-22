import Head from "next/head"

const SUPPORTED_LANGS = ["en", "es", "fr"]
const BASE_URL = "https://oregontowncar.com"

export function SeoHead({
  lang,
  path
}: {
  lang: string
  path: string
}) {
  const canonical = `${BASE_URL}/${lang}${path}`

  return (
    <Head>
      <link rel="canonical" href={canonical} />
      {SUPPORTED_LANGS.map((l) => (
        <link
          key={l}
          rel="alternate"
          hrefLang={l}
          href={`${BASE_URL}/${l}${path}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}/en${path}`} />
    </Head>
  )
}
