"use client";

import { useState } from "react";

export default function ProductActions({ price }) {
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <div className="mt-6">
        <p className="text-[18px] opacity-50">Size</p>
        <div className="mt-2 flex gap-2">
          {["S", "M", "L"].map((s) => (
            <button
              key={s}
              onClick={() => setSelectedSize(s)}
              className={`inline-flex h-[50px] w-[50px] items-center justify-center border border-black transition-colors ${
                selectedSize === s
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <span className="opacity-50">Quantity</span>
        <div className="h-[44px] w-[100px] border border-black flex items-center justify-between px-3">
          <button
            onClick={handleDecrease}
            className="opacity-50 hover:opacity-100 cursor-pointer"
          >
            –
          </button>
          <span>{quantity}</span>
          <button
            onClick={handleIncrease}
            className="opacity-50 hover:opacity-100 cursor-pointer"
          >
            +
          </button>
        </div>
      </div>

      <button className="mt-4 inline-flex h-[50px] items-center justify-center px-6 bg-black text-white border border-black hover:bg-gray-800 transition-colors">
        Add to Cart - ${(price * quantity).toFixed(2)}
      </button>

      <div className="mt-2 text-[14px] opacity-50">
        <span>Free standard shipping</span>
        <a href="#" className="ml-4 underline hover:opacity-100">
          Free Returns
        </a>
      </div>
    </>
  );
}
