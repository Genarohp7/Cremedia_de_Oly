import { assetPath } from "@/lib/asset-path";

export type CatalogCategory = {
  id: string;
  name: string;
  description?: string;
  image?: string;
  illustration?: string;
  order: number;
  imageWidth?: number;
  imageHeight?: number;
};

export type CatalogProduct = {
  id: string;
  name: string;
  categoryId: string;
  image?: string;
  description?: string;
  price?: number;
};

export const catalogCategories: CatalogCategory[] = [
  { id: "semillas", name: "Semillas", description: "Semillas, frutos secos y complementos del catálogo.", image: assetPath("/images/catalog/category-semillas.webp"), illustration: assetPath("/images/illustrations/gourmet-pattern.svg"), imageWidth: 1280, imageHeight: 853, order: 1 },
  { id: "productos-oaxaquenos", name: "Productos oaxaqueños", description: "Productos tradicionales de la selección oaxaqueña.", image: assetPath("/images/catalog/category-productos-oaxaquenos.webp"), illustration: assetPath("/images/illustrations/register-mark.svg"), imageWidth: 1280, imageHeight: 853, order: 2 },
  { id: "lacteos-derivados", name: "Lácteos y derivados", description: "Lácteos y preparaciones derivadas disponibles en el catálogo.", image: assetPath("/images/catalog/category-lacteos.webp"), illustration: assetPath("/images/illustrations/cheese-wheel.svg"), imageWidth: 1280, imageHeight: 853, order: 3 },
  { id: "jaleas-miel", name: "Jaleas y miel", description: "Jaleas y miel reunidas en una selección breve.", image: assetPath("/images/catalog/category-jaleas-miel.webp"), illustration: assetPath("/images/illustrations/gourmet-pattern.svg"), imageWidth: 1280, imageHeight: 853, order: 4 },
  { id: "panaderia-artesanal", name: "Panadería artesanal", description: "Panes y piezas tradicionales del catálogo.", image: assetPath("/images/catalog/category-panaderia.webp"), illustration: assetPath("/images/illustrations/register-mark.svg"), imageWidth: 1280, imageHeight: 853, order: 5 },
  { id: "quesos", name: "Quesos", description: "La selección de quesos confirmada por el cliente.", image: assetPath("/images/catalog/category-quesos.webp"), illustration: assetPath("/images/illustrations/cheese-wedge.svg"), imageWidth: 1280, imageHeight: 853, order: 6 }
];

export const catalogProducts: CatalogProduct[] = [
  { id: "nuez", name: "Nuez", categoryId: "semillas" },
  { id: "almendra", name: "Almendra", categoryId: "semillas" },
  { id: "arandano", name: "Arándano", categoryId: "semillas" },
  { id: "cacahuate-sin-sal", name: "Cacahuate sin sal", categoryId: "semillas" },
  { id: "datiles", name: "Dátiles", categoryId: "semillas" },
  { id: "ciruela-sin-hueso", name: "Ciruela sin hueso", categoryId: "semillas" },
  { id: "pimienta-negra-bola", name: "Pimienta negra bola", categoryId: "semillas" },
  { id: "ajonjoli-tostado", name: "Ajonjolí tostado", categoryId: "semillas" },
  { id: "granola", name: "Granola", categoryId: "semillas" },
  { id: "tlayudas", name: "Tlayudas", categoryId: "productos-oaxaquenos" },
  { id: "asiento", name: "Asiento", categoryId: "productos-oaxaquenos" },
  { id: "chapulines", name: "Chapulines", categoryId: "productos-oaxaquenos" },
  { id: "totopos", name: "Totopos", categoryId: "productos-oaxaquenos" },
  { id: "cacahuate-con-ajo", name: "Cacahuate con ajo", categoryId: "productos-oaxaquenos" },
  { id: "mole-negro", name: "Mole negro", categoryId: "productos-oaxaquenos" },
  { id: "mole-rojo", name: "Mole rojo", categoryId: "productos-oaxaquenos" },
  { id: "mole-colorado", name: "Mole colorado", categoryId: "productos-oaxaquenos" },
  { id: "natas", name: "Natas", categoryId: "lacteos-derivados" },
  { id: "cremas", name: "Cremas", categoryId: "lacteos-derivados" },
  { id: "mantequilla-hierbas-ajo", name: "Mantequilla de hierbas finas y ajo", categoryId: "lacteos-derivados" },
  { id: "jaleas", name: "Jaleas", categoryId: "jaleas-miel" },
  { id: "miel", name: "Miel", categoryId: "jaleas-miel" },
  { id: "pan-de-oaxaca", name: "Pan de Oaxaca", categoryId: "panaderia-artesanal" },
  { id: "marranitos-piloncillo", name: "Marranitos de piloncillo", categoryId: "panaderia-artesanal" },
  { id: "gouda-holandes", name: "Gouda Holandés", categoryId: "quesos" }
];
