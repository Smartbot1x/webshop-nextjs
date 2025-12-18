"use client";
import React from "react";
import Image from "next/image";

export default function ProductCard({ title, price, image, href = "#" }) {
  return (
    <a href={href} className="block group">
      <div className="aspect-[368/320] w-full bg-[#c4c4c4] overflow-hidden">
        {image && (
          <Image
            src={image}
            alt={title}
            width={368}
            height={320}
            className="h-full w-full object-cover transition-transform group-hover:scale-[1.03]"
          />
        )}
      </div>
      <div className="mt-2 flex items-center justify-between">
        <h3 className="text-[17px] font-bold tracking-[-0.4px]">{title}</h3>
        {price != null && <p className="text-[17px]">${price}</p>}
      </div>
    </a>
  );
}
