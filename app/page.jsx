import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SectionHeading from "./components/SectionHeading";
import Hero from "./components/Hero";
import { InView } from "./components/InView";
import { AnimatedProductGrid } from "./components/AnimatedProductGrid";
import { fetchProducts } from "../lib/api";

export default async function Home() {
  // Fetch product groups for hero, categories, latest, and products
  const [heroProducts, categoryTiles, latestArrivals, products] =
    await Promise.all([
      fetchProducts({ limit: 5, skip: 0 }),
      fetchProducts({ limit: 3, skip: 0 }),
      fetchProducts({ limit: 3, skip: 3 }),
      fetchProducts({ limit: 3, skip: 6 }),
    ]);
  return (
    <div>
      {/* Announcement bar */}
      <div className="w-full bg-black text-white">
        <div className="mx-auto max-w-6xl h-[45px] flex items-center justify-between px-4 text-[16px] tracking-[-0.6px]">
          <span>USD</span>
          <span className="text-center">
            FREE SHIPPING ON ALL HERMAN MILLER! FEB. 25–28.
          </span>
          <span>Support</span>
        </div>
      </div>

      <Navbar />
      <Hero initialItems={heroProducts} />

      {/* Categories (using first 3 products as tiles) */}
      <InView
        viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        <section className="py-16" aria-labelledby="categories">
          <SectionHeading
            id="categories"
            title="Categories"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ctaLabel="Shop All"
            ctaHref="/products"
          />
          <AnimatedProductGrid items={categoryTiles} type="category" />
        </section>
      </InView>

      {/* Latest arrivals (populate with next 3 products) */}
      <InView
        viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        <section className="py-16" aria-labelledby="latest">
          <SectionHeading
            id="latest"
            title="Our latest arrivals"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ctaLabel="Shop All"
            ctaHref="/products"
          />
          <AnimatedProductGrid items={latestArrivals} type="latest" />
        </section>
      </InView>

      {/* Our Products (API-driven) */}
      <InView
        viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        <section className="py-16" aria-labelledby="products">
          <SectionHeading
            id="products"
            title="Our Products"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ctaLabel="Shop All"
            ctaHref="/products"
          />
          <AnimatedProductGrid items={products} type="products" />
        </section>
      </InView>

      <Footer />
    </div>
  );
}
