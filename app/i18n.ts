// Simple i18n dictionary system
const dictionaries = {
  en: {
    nav: {
      services: "Our Services",
      fleet: "Our Fleet",
      cities: "Cities",
      countries: "Countries",
    },
  },
  es: {
    nav: {
      services: "Nuestros Servicios",
      fleet: "Nuestra Flota",
      cities: "Ciudades",
      countries: "Países",
    },
  },
};

export async function getDictionary(locale: string = "en") {
  return dictionaries[locale as keyof typeof dictionaries] || dictionaries.en;
}
