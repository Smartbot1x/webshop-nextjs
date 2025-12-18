"use client";

import { motion } from "motion/react";
import ProductCard from "./ProductCard";

export function AnimatedProductGrid({ items, type = "default" }) {
  return (
    <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.length === 0 && (
        <p className="text-center col-span-full text-secondary">
          {type === "products"
            ? "Products are unavailable right now. Please try again later."
            : "No items to show."}
        </p>
      )}
      {items.map((p) => (
        <motion.div
          key={`${type}-${p.id}`}
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            },
          }}
        >
          <ProductCard
            title={p.title}
            price={type === "category" ? undefined : p.price}
            image={p.image}
          />
        </motion.div>
      ))}
    </div>
  );
}
