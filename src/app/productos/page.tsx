import type { Metadata } from "next";
import { CatalogExplorer } from "@/components/catalog-explorer";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { catalogCategories, catalogProducts } from "@/data/catalog";
import { siteConfig } from "@/data/site";

const description =
  "Conoce la selección de quesos, semillas, productos oaxaqueños, lácteos y especialidades gourmet de Cremería D’Oly.";

export const metadata: Metadata = {
  title: "Productos | Cremería D’Oly",
  description,
  alternates: {
    canonical: siteConfig.siteUrl ? `${siteConfig.siteUrl}/productos/` : undefined
  }
};

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main className="catalog-page">
        <header className="catalog-hero">
          <div>
            <p>Catálogo Cremería D’Oly</p>
            <h1>Productos</h1>
          </div>
          <p>{description}</p>
        </header>
        <CatalogExplorer categories={catalogCategories} products={catalogProducts} />
      </main>
      <SiteFooter />
    </>
  );
}
