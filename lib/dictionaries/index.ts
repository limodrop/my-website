export const dictionaries = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      fleet: "Fleet",
      contact: "Contact",
      cities: "Cities",
      countries: "Countries",
      worldwide: "Worldwide",
      about: "About",
      blog: "Blog",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      fleet: "Flota",
      contact: "Contacto",
      cities: "Ciudades",
      countries: "Países",
      worldwide: "Mundial",
      about: "Acerca de",
      blog: "Blog",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      fleet: "Flotte",
      contact: "Contact",
      cities: "Villes",
      countries: "Pays",
      worldwide: "Mondial",
      about: "À propos",
      blog: "Blog",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      fleet: "الأسطول",
      contact: "اتصل بنا",
      cities: "المدن",
      countries: "البلدان",
      worldwide: "عالمي",
      about: "معلومات عنا",
      blog: "المدونة",
    },
  },
  zh: {
    nav: {
      home: "首页",
      services: "服务",
      fleet: "车队",
      contact: "联系我们",
      cities: "城市",
      countries: "国家",
      worldwide: "全球",
      about: "关于我们",
      blog: "博客",
    },
  },
};

export type Dictionary = typeof dictionaries.en;
export type Locale = keyof typeof dictionaries;
