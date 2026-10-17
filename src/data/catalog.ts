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
  subcategories?: CatalogSubcategory[];
};

export type CatalogSubcategory = {
  id: string;
  name: string;
  order: number;
  image?: string;
  imageAlt?: string;
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
  subcategoryId?: string;
};

export const catalogCategories: CatalogCategory[] = [
  { id: "semillas", name: "Semillas", description: "Semillas, frutos secos y complementos del catálogo.", image: assetPath("/images/catalog/branded/category-semillas-branded.webp"), illustration: assetPath("/images/illustrations/gourmet-pattern.svg"), imageWidth: 1280, imageHeight: 853, order: 1 },
  { id: "productos-oaxaquenos", name: "Productos oaxaqueños", description: "Productos tradicionales de la selección oaxaqueña.", image: assetPath("/images/catalog/branded/category-productos-oaxaquenos-branded.webp"), illustration: assetPath("/images/illustrations/register-mark.svg"), imageWidth: 1280, imageHeight: 853, order: 2 },
  { id: "lacteos-derivados", name: "Lácteos y derivados", description: "Lácteos y preparaciones derivadas disponibles en el catálogo.", image: assetPath("/images/catalog/branded/category-lacteos-branded.webp"), illustration: assetPath("/images/illustrations/cheese-wheel.svg"), imageWidth: 1280, imageHeight: 853, order: 3 },
  { id: "jaleas-miel", name: "Jaleas y miel", description: "Jaleas y miel reunidas en una selección breve.", image: assetPath("/images/catalog/branded/category-jaleas-miel-branded.webp"), illustration: assetPath("/images/illustrations/gourmet-pattern.svg"), imageWidth: 1280, imageHeight: 853, order: 4 },
  { id: "panaderia-artesanal", name: "Panadería artesanal", description: "Panes y piezas tradicionales del catálogo.", image: assetPath("/images/catalog/branded/category-panaderia-branded.webp"), illustration: assetPath("/images/illustrations/register-mark.svg"), imageWidth: 1280, imageHeight: 853, order: 5 },
  {
    id: "quesos",
    name: "Quesos",
    description: "Una selección de quesos nacionales y de importación para cada gusto y paladar.",
    image: assetPath("/images/products/client/web/queso-oaxaca.webp"),
    imageAlt: "Queso Oaxaca de Cremería D’Oly",
    imageFit: "contain",
    imageWidth: 1200,
    imageHeight: 960,
    order: 6,
    subcategories: [
      { id: "suaves", name: "Suaves", order: 1, image: assetPath("/images/catalog/collections/quesos-suaves-doly.webp"), imageAlt: "Selección editorial de quesos suaves", imageWidth: 1280, imageHeight: 853 },
      { id: "semi-duros", name: "Semi-duros", order: 2, image: assetPath("/images/catalog/collections/quesos-semi-duros-doly.webp"), imageAlt: "Selección editorial de quesos semi-duros", imageWidth: 1280, imageHeight: 853 },
      { id: "duros", name: "Duros", order: 3, image: assetPath("/images/catalog/collections/quesos-duros-doly.webp"), imageAlt: "Selección editorial de quesos duros", imageWidth: 1280, imageHeight: 853 }
    ]
  },
  { id: "carnes-embutidos", name: "Charcutería", description: "Charcutería nacional y de importación.", image: assetPath("/images/catalog/collections/charcuteria-doly.webp"), imageAlt: "Selección editorial de charcutería nacional y de importación", imageWidth: 1280, imageHeight: 853, order: 7 },
  { id: "productos-frescos", name: "Productos frescos", description: "Productos frescos que complementan el catálogo.", image: assetPath("/images/products/client/web/homologated/huevos-homologado.webp"), imageAlt: "Huevos disponibles en Cremería D’Oly", imageFit: "contain", imageWidth: 730, imageHeight: 1200, order: 8 }
];

export const catalogProducts: CatalogProduct[] = [
  { id: "nuez", name: "Nuez", categoryId: "semillas", image: assetPath("/images/catalog/products/nuez-doly.webp"), imageAlt: "Representación editorial provisional de nuez para el catálogo de Cremería D’Oly", imageWidth: 1280, imageHeight: 853 },
  { id: "almendra", name: "Almendra", categoryId: "semillas" },
  { id: "arandano", name: "Arándano", categoryId: "semillas", image: assetPath("/images/catalog/products/arandano-doly.webp"), imageAlt: "Representación editorial provisional de arándano para el catálogo de Cremería D’Oly", imageWidth: 1280, imageHeight: 853 },
  { id: "cacahuate-sin-sal", name: "Cacahuate sin sal", categoryId: "semillas" },
  { id: "datiles", name: "Dátiles", categoryId: "semillas" },
  { id: "ciruela-sin-hueso", name: "Ciruela sin hueso", categoryId: "semillas" },
  { id: "pimienta-negra-bola", name: "Pimienta negra bola", categoryId: "semillas" },
  { id: "ajonjoli-tostado", name: "Ajonjolí tostado", categoryId: "semillas" },
  { id: "granola", name: "Granola", categoryId: "semillas", image: assetPath("/images/catalog/products/granola-doly.webp"), imageAlt: "Representación editorial provisional de granola para el catálogo de Cremería D’Oly", imageWidth: 1280, imageHeight: 853 },
  { id: "tlayudas", name: "Tlayudas", categoryId: "productos-oaxaquenos", image: assetPath("/images/catalog/products/tlayudas-doly.webp"), imageAlt: "Representación editorial provisional de tlayudas para el catálogo de Cremería D’Oly", imageWidth: 1280, imageHeight: 853 },
  { id: "asiento", name: "Asiento", categoryId: "productos-oaxaquenos" },
  { id: "chapulines", name: "Chapulines", categoryId: "productos-oaxaquenos", image: assetPath("/images/catalog/products/chapulines-doly.webp"), imageAlt: "Representación editorial provisional de chapulines para el catálogo de Cremería D’Oly", imageWidth: 1280, imageHeight: 853 },
  { id: "totopos", name: "Totopos", categoryId: "productos-oaxaquenos" },
  { id: "cacahuate-con-ajo", name: "Cacahuate con ajo", categoryId: "productos-oaxaquenos" },
  { id: "mole-negro", name: "Mole negro", categoryId: "productos-oaxaquenos", image: assetPath("/images/catalog/products/mole-negro-doly.webp"), imageAlt: "Representación editorial provisional de mole negro para el catálogo de Cremería D’Oly", imageWidth: 1280, imageHeight: 853 },
  { id: "mole-rojo", name: "Mole rojo", categoryId: "productos-oaxaquenos" },
  { id: "mole-colorado", name: "Mole colorado", categoryId: "productos-oaxaquenos" },
  { id: "natas", name: "Natas", categoryId: "lacteos-derivados", image: assetPath("/images/catalog/products/natas-doly.webp"), imageAlt: "Representación editorial provisional de natas para el catálogo de Cremería D’Oly", imageWidth: 1280, imageHeight: 853 },
  { id: "cremas", name: "Cremas", categoryId: "lacteos-derivados" },
  { id: "mantequilla-hierbas-ajo", name: "Mantequilla de hierbas finas y ajo", categoryId: "lacteos-derivados", image: assetPath("/images/catalog/products/mantequilla-hierbas-ajo-doly.webp"), imageAlt: "Representación editorial provisional de mantequilla con hierbas finas y ajo para el catálogo de Cremería D’Oly", imageWidth: 1280, imageHeight: 853 },
  { id: "jaleas", name: "Jaleas", categoryId: "jaleas-miel", image: assetPath("/images/catalog/products/jaleas-doly.webp"), imageAlt: "Representación editorial provisional de jaleas para el catálogo de Cremería D’Oly", imageWidth: 1280, imageHeight: 853 },
  { id: "miel", name: "Miel", categoryId: "jaleas-miel", image: assetPath("/images/catalog/products/miel-doly.webp"), imageAlt: "Representación editorial provisional de miel para el catálogo de Cremería D’Oly", imageWidth: 1280, imageHeight: 853 },
  { id: "pan-de-oaxaca", name: "Pan de Oaxaca", categoryId: "panaderia-artesanal", image: assetPath("/images/catalog/products/pan-oaxaca-doly.webp"), imageAlt: "Representación editorial provisional de pan de Oaxaca para el catálogo de Cremería D’Oly", imageWidth: 1280, imageHeight: 853 },
  { id: "marranitos-piloncillo", name: "Marranitos de piloncillo", categoryId: "panaderia-artesanal", image: assetPath("/images/catalog/products/marranitos-piloncillo-doly.webp"), imageAlt: "Representación editorial provisional de marranitos de piloncillo para el catálogo de Cremería D’Oly", imageWidth: 1280, imageHeight: 853 },
  { id: "queso-oaxaca", name: "Queso Oaxaca", categoryId: "quesos", subcategoryId: "suaves", image: assetPath("/images/products/client/web/queso-oaxaca.webp"), imageAlt: "Queso Oaxaca de Cremería D’Oly", imageFit: "contain", imageWidth: 1200, imageHeight: 960 },
  { id: "queso-panela", name: "Queso Panela", categoryId: "quesos", subcategoryId: "suaves", image: assetPath("/images/products/client/web/queso-panela.webp"), imageAlt: "Queso Panela de Cremería D’Oly", imageFit: "contain", imageWidth: 1200, imageHeight: 960 },
  { id: "doble-crema", name: "Doble Crema", categoryId: "quesos", subcategoryId: "suaves" },
  { id: "queso-feta", name: "Queso Feta", categoryId: "quesos", subcategoryId: "suaves" },
  { id: "queso-cabra", name: "Queso de Cabra", categoryId: "quesos", subcategoryId: "suaves" },
  { id: "canasto", name: "Canasto", categoryId: "quesos", subcategoryId: "suaves" },
  { id: "mozzarella", name: "Mozzarella", categoryId: "quesos", subcategoryId: "suaves" },
  { id: "requeson-ricotta", name: "Requesón o Ricotta", categoryId: "quesos", subcategoryId: "suaves" },
  { id: "adobera", name: "Adobera (Queso tipo Ranchero)", categoryId: "quesos", subcategoryId: "suaves" },
  { id: "manchego", name: "Manchego", categoryId: "quesos", subcategoryId: "semi-duros" },
  { id: "chihuahua", name: "Chihuahua", categoryId: "quesos", subcategoryId: "semi-duros" },
  { id: "gouda-holandes", name: "Gouda Holandés", categoryId: "quesos", subcategoryId: "semi-duros", image: assetPath("/images/products/client/web/homologated/gouda-holandes-homologado.webp"), imageAlt: "Queso Gouda Holandés disponible en Cremería D’Oly", imageFit: "contain", imageWidth: 1200, imageHeight: 960 },
  { id: "gouda", name: "Gouda", categoryId: "quesos", subcategoryId: "semi-duros" },
  { id: "edam", name: "Edam", categoryId: "quesos", subcategoryId: "semi-duros" },
  { id: "port-salut", name: "Port Salut", categoryId: "quesos", subcategoryId: "semi-duros" },
  { id: "queso-cheddar", name: "Queso Cheddar", categoryId: "quesos", subcategoryId: "semi-duros", image: assetPath("/images/products/client/web/homologated/queso-cheddar-homologado.webp"), imageAlt: "Queso Cheddar disponible en Cremería D’Oly", imageFit: "contain", imageWidth: 712, imageHeight: 1200 },
  { id: "monterrey-jack", name: "Monterrey Jack", categoryId: "quesos", subcategoryId: "semi-duros" },
  { id: "cotija", name: "Cotija", categoryId: "quesos", subcategoryId: "duros" },
  { id: "parmesano", name: "Parmesano", categoryId: "quesos", subcategoryId: "duros" },
  { id: "anejo", name: "Añejo", categoryId: "quesos", subcategoryId: "duros" },
  { id: "pecorino", name: "Pecorino", categoryId: "quesos", subcategoryId: "duros" },
  { id: "manchego-oveja", name: "Manchego de Oveja", categoryId: "quesos", subcategoryId: "duros" },
  { id: "jamon-pierna", name: "Jamón de pierna", categoryId: "carnes-embutidos" },
  { id: "jamon-pavo", name: "Jamón de pavo", categoryId: "carnes-embutidos" },
  { id: "jamon-serrano", name: "Jamón Serrano", categoryId: "carnes-embutidos", image: assetPath("/images/products/client/web/homologated/jamon-serrano-homologado.webp"), imageAlt: "Jamón serrano disponible en Cremería D’Oly", imageFit: "contain", imageWidth: 1100, imageHeight: 1200 },
  { id: "salami", name: "Salami", categoryId: "carnes-embutidos" },
  { id: "pepperoni", name: "Pepperoni", categoryId: "carnes-embutidos" },
  { id: "lomo-canadiense", name: "Lomo canadiense", categoryId: "carnes-embutidos" },
  { id: "lomo-embuchado", name: "Lomo embuchado", categoryId: "carnes-embutidos" },
  { id: "chorizo-espanol", name: "Chorizo español", categoryId: "carnes-embutidos" },
  { id: "longaniza", name: "Longaniza", categoryId: "carnes-embutidos", image: assetPath("/images/products/client/web/longaniza.webp"), imageAlt: "Longaniza disponible en Cremería D’Oly", imageFit: "contain", imageWidth: 1200, imageHeight: 960 },
  { id: "chorizo-pamplona", name: "Chorizo Pamplona", categoryId: "carnes-embutidos" },
  { id: "salchicha-carne-pavo", name: "Salchicha de carne y pavo", categoryId: "carnes-embutidos" },
  { id: "queso-puerco", name: "Queso de puerco", categoryId: "carnes-embutidos" },
  { id: "salamanca", name: "Salamanca", categoryId: "carnes-embutidos" },
  { id: "cecina", name: "Cecina", categoryId: "carnes-embutidos", image: assetPath("/images/products/client/web/homologated/cecina-homologado.webp"), imageAlt: "Cecina disponible en Cremería D’Oly", imageFit: "contain", imageWidth: 1122, imageHeight: 1200 },
  { id: "huevos", name: "Huevos", categoryId: "productos-frescos", image: assetPath("/images/products/client/web/homologated/huevos-homologado.webp"), imageAlt: "Huevos disponibles en Cremería D’Oly", imageFit: "contain", imageWidth: 730, imageHeight: 1200 }
];
