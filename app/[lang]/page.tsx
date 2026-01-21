import { messages } from "@/lib/i18n/messages"
import { Locale } from "@/lib/i18n/types"

export default function LangHome({
  params
}: {
  params: { lang: Locale }
}) {
  const t = messages[params.lang]

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">{t.title}</h1>
      <p className="text-lg text-gray-700">{t.description}</p>

      <a
        href="https://book.oregontowncar.com"
        className="inline-block px-6 py-3 bg-black text-white rounded"
      >
        {t.book}
      </a>
    </div>
  )
}
