import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeading from "../components/SectionHeading";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../../lib/api";

export default async function FavoritesPage() {
  const items = await fetchProducts({ limit: 3 });
  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <header className="text-center max-w-3xl mx-auto">
          <h1 className="text-[56px] leading-[62px] tracking-[-2.4px] font-semibold">
            Favorites
          </h1>
          <p className="mt-2 text-[20px] leading-[28px] text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href="/products"
            className="mt-6 inline-flex h-[50px] items-center justify-center px-6 border border-black"
          >
            Shop All
          </a>
        </header>

        <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <ProductCard
              key={p.id}
              title={p.title}
              price={p.price}
              image={p.image}
              href={`/products/${p.id}`}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
