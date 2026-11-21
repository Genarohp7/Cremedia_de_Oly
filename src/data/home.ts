import { assetPath } from "@/lib/asset-path";

export type FeaturedHomeSlide = {
  id: string;
  image: string;
  category: string;
  label: string;
  alt: string;
  width: number;
  height: number;
  fit: "cover" | "contain";
  productId?: string;
};

export const featuredHomeSlides: FeaturedHomeSlide[] = [
  {
    id: "queso-cheddar",
    image: assetPath("/images/products/client/web/nov-2026/queso-cheddar-cliente.webp"),
    category: "Quesos",
    label: "Queso Cheddar",
    alt: "Queso Cheddar Navarro disponible en Cremería D’Oly",
    width: 812,
    height: 1313,
    fit: "contain",
    productId: "queso-cheddar"
  },
  {
    id: "seleccion-artesanal-quesos",
    image: assetPath("/images/products/client/web/nov-2026/seleccion-artesanal-quesos.webp"),
    category: "Quesos",
    label: "Selección artesanal",
    alt: "Selección artesanal de quesos con hierbas y chiles",
    width: 1280,
    height: 720,
    fit: "contain"
  },
  {
    id: "seleccion-gourmet-quesos",
    image: assetPath("/images/products/client/web/nov-2026/seleccion-gourmet-quesos.webp"),
    category: "Quesos",
    label: "Selección gourmet",
    alt: "Cuñas de queso gourmet sobre una tabla de madera",
    width: 720,
    height: 505,
    fit: "contain"
  },
  {
    id: "flor-jamaica",
    image: assetPath("/images/products/client/web/nov-2026/flor-jamaica.webp"),
    category: "Despensa gourmet",
    label: "Flor de Jamaica",
    alt: "Flor de Jamaica disponible en Cremería D’Oly",
    width: 720,
    height: 907,
    fit: "contain",
    productId: "flor-jamaica"
  },
  {
    id: "pesto-ravioli",
    image: assetPath("/images/products/client/web/nov-2026/pesto-ravioli.webp"),
    category: "Despensa gourmet",
    label: "Pesto + Ravioli",
    alt: "Pesto rojo, pesto genovés y ravioli disponibles en Cremería D’Oly",
    width: 720,
    height: 481,
    fit: "contain"
  }
];
