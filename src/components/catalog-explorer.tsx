"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { CatalogCategory, CatalogProduct } from "@/data/catalog";

const INITIAL_PRODUCT_COUNT = 6;

type CatalogExplorerProps = {
  categories: CatalogCategory[];
  products: CatalogProduct[];
};

function CategorySelector({
  categories,
  activeId,
  onChange
}: {
  categories: CatalogCategory[];
  activeId: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="category-selector">
      <p>Categorías</p>
      <div className="category-buttons" aria-label="Categorías del catálogo">
        {categories.map((category, index) => (
          <button
            aria-pressed={category.id === activeId}
            className={category.id === activeId ? "is-active" : undefined}
            key={category.id}
            onClick={() => onChange(category.id)}
            type="button"
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {category.name}
          </button>
        ))}
      </div>
      <label className="category-select">
        <span>Selecciona una categoría</span>
        <select value={activeId} onChange={(event) => onChange(event.target.value)}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </label>
    </div>
  );
}

function CategoryShowcase({ category }: { category: CatalogCategory }) {
  if (!category.image) return null;

  return (
    <figure className="category-showcase" key={category.id}>
      <div className="category-showcase-media">
        <Image
          alt={`Selección de ${category.name.toLowerCase()}`}
          height={category.imageHeight ?? 853}
          priority={category.order === 1}
          sizes="(min-width: 1100px) 30vw, (min-width: 700px) 42vw, 92vw"
          src={category.image}
          width={category.imageWidth ?? 1280}
        />
        {category.illustration ? (
          <Image
            aria-hidden="true"
            alt=""
            className="category-showcase-illustration"
            height={160}
            src={category.illustration}
            width={220}
          />
        ) : null}
      </div>
      <figcaption>
        <span>Selección actual</span>
        <strong>{category.name}</strong>
        {category.description ? <p>{category.description}</p> : null}
      </figcaption>
    </figure>
  );
}

function ProductItem({ product, number }: { product: CatalogProduct; number: number }) {
  return (
    <article className="catalog-product-item">
      <span>{String(number).padStart(2, "0")}</span>
      <h3>{product.name}</h3>
      {product.description ? <p>{product.description}</p> : null}
      {typeof product.price === "number" ? <p className="catalog-product-price">${product.price}</p> : null}
    </article>
  );
}

function ProductGrid({ products }: { products: CatalogProduct[] }) {
  const [expanded, setExpanded] = useState(false);
  const visibleProducts = expanded ? products : products.slice(0, INITIAL_PRODUCT_COUNT);
  const hasMore = products.length > INITIAL_PRODUCT_COUNT;

  return (
    <div className="catalog-products" aria-live="polite">
      <div className="catalog-products-heading">
        <p>{products.length} {products.length === 1 ? "producto" : "productos"}</p>
        <span>Catálogo confirmado</span>
      </div>
      <div className="catalog-product-grid">
        {visibleProducts.map((product, index) => (
          <ProductItem key={product.id} number={index + 1} product={product} />
        ))}
      </div>
      {hasMore ? (
        <button className="catalog-more" onClick={() => setExpanded((value) => !value)} type="button">
          <span aria-hidden="true">{expanded ? "−" : "+"}</span>
          {expanded ? "Ver menos productos" : "Ver más productos"}
        </button>
      ) : null}
    </div>
  );
}

export function CatalogExplorer({ categories, products }: CatalogExplorerProps) {
  const sortedCategories = useMemo(() => [...categories].sort((a, b) => a.order - b.order), [categories]);
  const [activeId, setActiveId] = useState(sortedCategories[0]?.id ?? "");
  const activeCategory = sortedCategories.find((category) => category.id === activeId) ?? sortedCategories[0];
  const activeProducts = products.filter((product) => product.categoryId === activeCategory?.id);

  if (!activeCategory) return null;

  return (
    <section className="catalog-explorer" aria-labelledby="active-category-title">
      <CategorySelector activeId={activeCategory.id} categories={sortedCategories} onChange={setActiveId} />
      <div className="catalog-active">
        <div className="catalog-active-heading">
          <p>Explora la selección</p>
          <h2 id="active-category-title">{activeCategory.name}</h2>
        </div>
        <CategoryShowcase category={activeCategory} />
        <ProductGrid key={activeCategory.id} products={activeProducts} />
      </div>
    </section>
  );
}
