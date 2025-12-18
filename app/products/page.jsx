import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductsGrid from "./ProductsGrid";
import { fetchProducts } from "../../lib/api";

export default async function ProductsPage() {
  const items = await fetchProducts({ limit: 6 });
  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-6">
          <h1 className="text-[36px] leading-[44px] font-semibold tracking-[-1.5px]">
            Shop
          </h1>
          <p className="mt-2 text-[20px] leading-[28px] text-[#979797] max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8">
          <aside>
            <p className="text-[22px] font-semibold tracking-[-0.55px]">
              Filters
            </p>
            <p className="mt-3 text-[14px] font-bold">Categories</p>
            <ul className="mt-2 space-y-2 text-[13px]">
              {["Itar", "Kafan", "Caps", "Food"].map((name) => (
                <li key={name} className="flex items-center gap-2">
                  <span className="inline-block h-4 w-4 border border-black" />
                  {name}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-3 inline-block text-[14px] text-[#c4c4c4] underline"
            >
              Clear filters
            </a>
          </aside>

          <section>
            <ProductsGrid initialItems={items} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
