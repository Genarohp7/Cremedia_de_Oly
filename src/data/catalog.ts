import { assetPath } from "@/lib/asset-path";

export type CatalogCategory = {
  id: string;
  name: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
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
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  imageWidth?: number;
  imageHeight?: number;
  description?: string;
  price?: number;
};

export const catalogCategories: CatalogCategory[] = [
  { id: "semillas", name: "Semillas", description: "Semillas, frutos secos y complementos del catálogo.", image: assetPath("/images/catalog/branded/category-semillas-branded.webp"), illustration: assetPath("/images/illustrations/gourmet-pattern.svg"), imageWidth: 1280, imageHeight: 853, order: 1 },
  { id: "productos-oaxaquenos", name: "Productos oaxaqueños", description: "Productos tradicionales de la selección oaxaqueña.", image: assetPath("/images/catalog/branded/category-productos-oaxaquenos-branded.webp"), illustration: assetPath("/images/illustrations/register-mark.svg"), imageWidth: 1280, imageHeight: 853, order: 2 },
  { id: "lacteos-derivados", name: "Lácteos y derivados", description: "Lácteos y preparaciones derivadas disponibles en el catálogo.", image: assetPath("/images/catalog/branded/category-lacteos-branded.webp"), illustration: assetPath("/images/illustrations/cheese-wheel.svg"), imageWidth: 1280, imageHeight: 853, order: 3 },
  { id: "jaleas-miel", name: "Jaleas y miel", description: "Jaleas y miel reunidas en una selección breve.", image: assetPath("/images/catalog/branded/category-jaleas-miel-branded.webp"), illustration: assetPath("/images/illustrations/gourmet-pattern.svg"), imageWidth: 1280, imageHeight: 853, order: 4 },
  { id: "panaderia-artesanal", name: "Panadería artesanal", description: "Panes y piezas tradicionales del catálogo.", image: assetPath("/images/catalog/branded/category-panaderia-branded.webp"), illustration: assetPath("/images/illustrations/register-mark.svg"), imageWidth: 1280, imageHeight: 853, order: 5 },
  { id: "quesos", name: "Quesos", description: "La selección de quesos confirmada por el cliente.", image: assetPath("/images/products/client/web/queso-oaxaca.webp"), imageAlt: "Queso Oaxaca de Cremería D’Oly", imageFit: "contain", imageWidth: 1200, imageHeight: 960, order: 6 },
  { id: "carnes-embutidos", name: "Carnes y embutidos", description: "Carnes y embutidos disponibles en la selección.", image: assetPath("/images/products/client/web/longaniza.webp"), imageAlt: "Longaniza disponible en Cremería D’Oly", imageFit: "contain", imageWidth: 1200, imageHeight: 960, order: 7 },
  { id: "productos-frescos", name: "Productos frescos", description: "Productos frescos que complementan el catálogo.", image: assetPath("/images/products/client/web/huevos.webp"), imageAlt: "Huevos disponibles en Cremería D’Oly", imageFit: "contain", imageWidth: 730, imageHeight: 1200, order: 8 }
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
  { id: "gouda-holandes", name: "Gouda Holandés", categoryId: "quesos", image: assetPath("/images/products/client/web/gouda-holandes.webp"), imageAlt: "Queso Gouda Holandés disponible en Cremería D’Oly", imageFit: "contain", imageWidth: 1200, imageHeight: 960 },
  { id: "queso-cheddar", name: "Queso Cheddar", categoryId: "quesos", image: assetPath("/images/products/client/web/queso-cheddar.webp"), imageAlt: "Queso Cheddar disponible en Cremería D’Oly", imageFit: "contain", imageWidth: 712, imageHeight: 1200 },
  { id: "queso-oaxaca", name: "Queso Oaxaca", categoryId: "quesos", image: assetPath("/images/products/client/web/queso-oaxaca.webp"), imageAlt: "Queso Oaxaca de Cremería D’Oly", imageFit: "contain", imageWidth: 1200, imageHeight: 960 },
  { id: "queso-panela", name: "Queso Panela", categoryId: "quesos", image: assetPath("/images/products/client/web/queso-panela.webp"), imageAlt: "Queso Panela de Cremería D’Oly", imageFit: "contain", imageWidth: 1200, imageHeight: 960 },
  { id: "jamon-serrano", name: "Jamón Serrano", categoryId: "carnes-embutidos", image: assetPath("/images/products/client/web/jamon-serrano.webp"), imageAlt: "Jamón serrano disponible en Cremería D’Oly", imageFit: "contain", imageWidth: 1100, imageHeight: 1200 },
  { id: "cecina", name: "Cecina", categoryId: "carnes-embutidos", image: assetPath("/images/products/client/web/cecina.webp"), imageAlt: "Cecina disponible en Cremería D’Oly", imageFit: "contain", imageWidth: 1122, imageHeight: 1200 },
  { id: "longaniza", name: "Longaniza", categoryId: "carnes-embutidos", image: assetPath("/images/products/client/web/longaniza.webp"), imageAlt: "Longaniza disponible en Cremería D’Oly", imageFit: "contain", imageWidth: 1200, imageHeight: 960 },
  { id: "huevos", name: "Huevos", categoryId: "productos-frescos", image: assetPath("/images/products/client/web/huevos.webp"), imageAlt: "Huevos disponibles en Cremería D’Oly", imageFit: "contain", imageWidth: 730, imageHeight: 1200 }
];
