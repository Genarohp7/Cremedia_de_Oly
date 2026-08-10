import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { assetPath } from "@/lib/asset-path";

const title = "Cremería D’Oly | Quesos y productos gourmet";
const description =
  "Descubre Cremería D’Oly, una selección de quesos, productos artesanales y productos gourmet pensados para disfrutar los buenos sabores.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: siteConfig.businessName,
  metadataBase: new URL(siteConfig.metadataBase),
  alternates: {
    canonical: siteConfig.siteUrl || undefined
  },
  openGraph: {
    title,
    description,
    siteName: siteConfig.businessName,
    locale: "es_MX",
    type: "website",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Cremería D’Oly, mi pequeño gran gourmet" }]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [siteConfig.ogImage]
  },
  icons: {
    icon: assetPath("/favicon.svg"),
    apple: assetPath("/apple-icon.svg")
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  themeColor: "#080808",
  colorScheme: "dark light"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body>{children}</body>
    </html>
  );
}
