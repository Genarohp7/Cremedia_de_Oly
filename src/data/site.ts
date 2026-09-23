import { assetPath } from "@/lib/asset-path";

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
  siteUrl: "https://genarohp7.github.io/Cremedia_de_Oly",
  metadataBase: "https://genarohp7.github.io",
  logo: assetPath("/images/brand/cremeria-doly-logo-original.jpeg"),
  ogImage: assetPath("/og.svg"),
  navigation: [
    { label: "Inicio", href: assetPath("/") },
    { label: "Productos", href: assetPath("/productos/") },
    { label: "Nosotros", href: assetPath("/#nosotros") },
    { label: "Sucursales", href: assetPath("/#sucursales") },
    { label: "Contacto", href: assetPath("/#contacto") }
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
