"use client";

import { useState, useTransition } from "react";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../../lib/api";

export default function ProductsGrid({ initialItems = [], pageSize = 6 }) {
  const [items, setItems] = useState(initialItems);
  const [skip, setSkip] = useState(initialItems.length || 0);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState(null);

  const onLoadMore = () => {
    if (isPending) return;
    setError(null);
    startTransition(async () => {
      try {
        const more = await fetchProducts({ limit: pageSize, skip });
        if (more && more.length) {
          setItems((prev) => [...prev, ...more]);
          setSkip((prev) => prev + more.length);
        }
      } catch (e) {
        setError("Failed to load more products. Please try again.");
      }
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4 text-[14px]">
        <span className="text-black">Showing {items.length} Products</span>
        <div className="flex items-center gap-2">
          <span className="opacity-50">Sort By</span>
          <div className="h-9 w-40 border border-[#1C275A] px-3 flex items-center justify-between">
            <span className="font-bold text-[14px]">Popular</span>
            <span className="opacity-50">▾</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((p) => (
          <ProductCard
            key={`${p.source || "p"}-${p.id}-${p.image}`}
            title={p.title}
            price={p.price}
            image={p.image}
            href={`/products/${p.id}`}
          />
        ))}
      </div>

      {error && (
        <p className="mt-4 text-red-600 text-sm" role="alert">
          {error}
        </p>
      )}

      <div className="flex justify-center">
        <button
          type="button"
          onClick={onLoadMore}
          disabled={isPending}
          className="mt-8 inline-flex h-[50px] items-center justify-center px-6 border border-black disabled:opacity-60"
        >
          {isPending ? "Loading…" : "Load more products"}
        </button>
      </div>
    </div>
  );
}
