"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full bg-white/90 backdrop-blur sticky top-0 z-50 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="font-inter font-bold text-[20px] tracking-tight"
            >
              Website
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-[17px] tracking-tight">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "Shop" },
                { href: "/favorites", label: "Favorites" },
                { href: "/orders", label: "My Orders" },
                { href: "#", label: "Qura'an" },
                { href: "#", label: "Dua" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:opacity-80"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-5">
            <input
              aria-label="Search"
              placeholder="Search"
              className="hidden sm:block h-9 w-44 rounded border border-black/20 px-3 text-[15px] placeholder:text-[#979797] focus:outline-none focus:ring-2 focus:ring-black/20"
            />
            <Link
              href="/cart"
              className="relative inline-flex text-[17px]"
              aria-label="Cart"
            >
              🛒 <span className="sr-only">0 items</span>
              <span
                className="absolute -top-1 -right-2 text-[12px]"
                aria-hidden="true"
              >
                0
              </span>
            </Link>
            <Link href="/login" className="text-[17px]">
              Login
            </Link>
            <button
              aria-label="Toggle menu"
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded border border-black/10"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Open menu</span>☰
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-black/5 py-3 text-[17px] space-y-2">
            {[
              { href: "/", label: "Home" },
              { href: "/products", label: "Shop" },
              { href: "/favorites", label: "Favorites" },
              { href: "/orders", label: "My Orders" },
            ].map((item) => (
              <Link key={item.label} href={item.href} className="block">
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="h-[1px] w-full bg-black/10" />
    </header>
  );
}
