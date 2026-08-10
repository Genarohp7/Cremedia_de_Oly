export type Location = {
  id: string;
  name: string;
  address: string;
  phone: string;
  whatsapp: string;
  hours: string;
  mapsUrl: string;
  latitude: number | null;
  longitude: number | null;
};

export const siteConfig = {
  businessName: "Cremería D’Oly",
  claim: "Mi pequeño gran gourmet",
  description:
    "Quesos, productos artesanales y una selección gourmet para disfrutar los buenos sabores.",
  siteUrl: "",
  logo: "/images/brand/cremeria-doly-logo-original.jpeg",
  ogImage: "/og.svg",
  navigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "Productos", href: "#productos" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Sucursales", href: "#sucursales" },
    { label: "Contacto", href: "#contacto" }
  ],
  categories: [
    {
      id: "quesos",
      number: "01",
      title: "Quesos",
      intro: "Texturas, cortes y sabores para una mesa que se disfruta con calma.",
      image: "/images/generated/categoria-quesos.png",
      illustration: "/images/illustrations/cheese-wedge.svg"
    },
    {
      id: "artesanales",
      number: "02",
      title: "Productos artesanales",
      intro: "Selección cercana, pensada para acompañar momentos sencillos y bien cuidados.",
      image: "/images/generated/categoria-artesanales.png",
      illustration: "/images/illustrations/gourmet-pattern.svg"
    },
    {
      id: "gourmet",
      number: "03",
      title: "Productos gourmet",
      intro: "Detalles elegidos para quienes encuentran gusto en combinar, probar y compartir.",
      image: "/images/generated/categoria-gourmet.png",
      illustration: "/images/illustrations/cheese-wheel.svg"
    }
  ],
  contact: {
    phone: "",
    whatsapp: "",
    email: ""
  },
  social: {
    facebook: "",
    instagram: ""
  },
  locations: [] as Location[]
};

export const hasContact =
  Boolean(siteConfig.contact.phone) ||
  Boolean(siteConfig.contact.whatsapp) ||
  Boolean(siteConfig.contact.email) ||
  Boolean(siteConfig.social.facebook) ||
  Boolean(siteConfig.social.instagram);
