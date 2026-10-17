"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { CatalogCategory, CatalogProduct, CatalogSubcategory } from "@/data/catalog";

const INITIAL_PRODUCT_COUNT = 6;
const INITIAL_GROUP_PRODUCT_COUNT = 3;

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
      <div className={`category-showcase-media is-${category.imageFit ?? "cover"}`}>
        <Image
          alt={category.imageAlt ?? `Selección de ${category.name.toLowerCase()}`}
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

function ProductItem({
  product,
  number,
  headingLevel = 3
}: {
  product: CatalogProduct;
  number: number;
  headingLevel?: 3 | 4;
}) {
  const ProductHeading = headingLevel === 4 ? "h4" : "h3";

  return (
    <article className={`catalog-product-item${product.image ? " has-image" : ""}`}>
      {product.image ? (
        <div className={`catalog-product-media is-${product.imageFit ?? "cover"}`}>
          <Image
            alt={product.imageAlt ?? product.name}
            height={product.imageHeight ?? 900}
            sizes="(min-width: 1100px) 18vw, (min-width: 700px) 28vw, 92vw"
            src={product.image}
            width={product.imageWidth ?? 1200}
          />
        </div>
      ) : null}
      <span>{String(number).padStart(2, "0")}</span>
      <ProductHeading>{product.name}</ProductHeading>
      {product.description ? <p>{product.description}</p> : null}
      {typeof product.price === "number" ? <p className="catalog-product-price">${product.price}</p> : null}
    </article>
  );
}

function ProductItems({
  className,
  headingLevel = 3,
  productNumbers,
  products
}: {
  className: string;
  headingLevel?: 3 | 4;
  productNumbers: ReadonlyMap<string, number>;
  products: CatalogProduct[];
}) {
  if (products.length === 0) return null;

  return (
    <div className={className}>
      {products.map((product) => (
        <ProductItem
          headingLevel={headingLevel}
          key={product.id}
          number={productNumbers.get(product.id) ?? 0}
          product={product}
        />
      ))}
    </div>
  );
}

function ProductGrid({
  products,
  subcategories
}: {
  products: CatalogProduct[];
  subcategories?: CatalogSubcategory[];
}) {
  const [expanded, setExpanded] = useState(false);
  const sortedSubcategories = useMemo(
    () => [...(subcategories ?? [])].sort((a, b) => a.order - b.order),
    [subcategories]
  );
  const groupedProducts = sortedSubcategories
    .map((subcategory) => ({
      ...subcategory,
      products: products.filter((product) => product.subcategoryId === subcategory.id)
    }))
    .filter((subcategory) => subcategory.products.length > 0);
  const isGrouped = groupedProducts.length > 0;
  const visibleProducts = expanded ? products : products.slice(0, INITIAL_PRODUCT_COUNT);
  const hasMore = isGrouped
    ? groupedProducts.some((subcategory) => subcategory.products.length > INITIAL_GROUP_PRODUCT_COUNT)
    : products.length > INITIAL_PRODUCT_COUNT;
  const productNumbers = new Map(products.map((product, index) => [product.id, index + 1]));
  const featuredProducts = visibleProducts.filter((product) => product.image);
  const textProducts = visibleProducts.filter((product) => !product.image);

  return (
    <div className="catalog-products" aria-live="polite">
      <div className="catalog-products-heading">
        <p>{products.length} {products.length === 1 ? "producto" : "productos"}</p>
        <span>Catálogo confirmado</span>
      </div>
      {isGrouped ? (
        <div className="catalog-product-groups">
          {groupedProducts.map((subcategory) => {
            const groupProducts = expanded
              ? subcategory.products
              : subcategory.products.slice(0, INITIAL_GROUP_PRODUCT_COUNT);
            const groupFeaturedProducts = groupProducts.filter((product) => product.image);
            const groupTextProducts = groupProducts.filter((product) => !product.image);
            const headingId = `catalog-subcategory-${subcategory.id}`;

            return (
              <section className="catalog-product-group" aria-labelledby={headingId} key={subcategory.id}>
                <div className="catalog-product-group-heading">
                  <h3 id={headingId}>{subcategory.name}</h3>
                  <span>{subcategory.products.length}</span>
                </div>
                <div className={`catalog-product-group-body${subcategory.image ? " has-image" : ""}`}>
                  {subcategory.image ? (
                    <div className="catalog-product-group-media">
                      <Image
                        alt={subcategory.imageAlt ?? `Selección de quesos ${subcategory.name.toLowerCase()}`}
                        height={subcategory.imageHeight ?? 853}
                        sizes="(min-width: 1100px) 18vw, (min-width: 700px) 34vw, 92vw"
                        src={subcategory.image}
                        width={subcategory.imageWidth ?? 1280}
                      />
                    </div>
                  ) : null}
                  <ProductItems
                    className="catalog-featured-grid"
                    headingLevel={4}
                    productNumbers={productNumbers}
                    products={groupFeaturedProducts}
                  />
                  <ProductItems
                    className="catalog-text-grid"
                    headingLevel={4}
                    productNumbers={productNumbers}
                    products={groupTextProducts}
                  />
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        <div className="catalog-product-layout">
          <ProductItems
            className="catalog-featured-grid"
            productNumbers={productNumbers}
            products={featuredProducts}
          />
          <ProductItems
            className="catalog-text-grid"
            productNumbers={productNumbers}
            products={textProducts}
          />
        </div>
      )}
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
        <ProductGrid
          key={activeCategory.id}
          products={activeProducts}
          subcategories={activeCategory.subcategories}
        />
      </div>
    </section>
  );
}
