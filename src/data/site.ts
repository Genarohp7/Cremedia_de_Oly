import { assetPath } from "@/lib/asset-path";

export const siteConfig = {
  businessName: "Cremería D’Oly",
  claim: "Mi pequeño gran gourmet",
  description:
    "Quesos, productos artesanales y una selección gourmet para disfrutar los buenos sabores.",
  siteUrl: "https://genarohp7.github.io/Cremedia_de_Oly",
  metadataBase: "https://genarohp7.github.io",
  logo: assetPath("/images/brand/cremeria-doly-logo-official.png"),
  ogImage: assetPath("/og.svg"),
  navigation: [
    { label: "Inicio", href: assetPath("/") },
    { label: "Productos", href: assetPath("/productos/") },
    { label: "Nosotros", href: assetPath("/#nosotros") },
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
  location: {
    mapsUrl: "https://maps.app.goo.gl/4b3j2R9cJD6TqkzY9",
    mapsEmbedUrl: "https://www.google.com/maps?q=19.554866,-99.2571542&z=18&output=embed"
  }
};

export const hasContact =
  Boolean(siteConfig.contact.phone) ||
  Boolean(siteConfig.contact.whatsapp) ||
  Boolean(siteConfig.contact.email) ||
  Boolean(siteConfig.social.facebook) ||
  Boolean(siteConfig.social.instagram);
