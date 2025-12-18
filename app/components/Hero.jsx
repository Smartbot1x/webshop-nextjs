"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchProducts } from "../../lib/api";

export default function Hero({ initialItems = [] }) {
  const [slides, setSlides] = useState(initialItems);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(!initialItems.length);
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialItems && initialItems.length) return;
    let active = true;
    (async () => {
      try {
        setLoading(true);
        const data = await fetchProducts({ limit: 6, skip: 0 });
        if (active) {
          setSlides(data || []);
          setIndex(0);
        }
      } catch (e) {
        if (active) setError("Could not load hero products.");
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [initialItems]);

  const hasSlides = slides && slides.length > 0;
  const current = hasSlides ? slides[index % slides.length] : null;

  const goPrev = () => {
    if (!hasSlides) return;
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    if (!hasSlides) return;
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section aria-label="Hero" className="relative w-full bg-[#eff2f6]">
      <div className="relative mx-auto max-w-6xl overflow-hidden bg-[#c4c4c4] h-80">
        {current && current.image ? (
          <Link
            href={current.id ? `/products/${current.id}` : "/products"}
            className="absolute inset-0 block"
            aria-label={
              current.title ? `View ${current.title}` : "View product"
            }
          >
            <Image
              src={current.image}
              alt={current.title}
              fill
              priority
              className="object-scale-down"
            />
            <div className="absolute inset-0 bg-black/10" aria-hidden />
          </Link>
        ) : (
          <div className="absolute inset-0 bg-[#c4c4c4]" aria-hidden />
        )}

        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white text-black/80 p-2 shadow hover:bg-black hover:text-white transition z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            aria-hidden
          >
            <path
              d="M15.5 5.5 9 12l6.5 6.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white text-black/80 p-2 shadow hover:bg-black hover:text-white transition z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            aria-hidden
          >
            <path
              d="M8.5 5.5 15 12l-6.5 6.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {loading && (
          <div className="absolute inset-0 flex items-center justify-center text-white text-sm bg-black/20">
            Loading…
          </div>
        )}
        {error && !loading && (
          <div className="absolute inset-0 flex items-center justify-center text-white text-sm bg-black/30">
            {error}
          </div>
        )}
      </div>
    </section>
  );
}
