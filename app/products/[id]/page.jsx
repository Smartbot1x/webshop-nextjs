import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductActions from "../../components/ProductActions";
import Image from "next/image";

async function getProduct(id) {
  // Try DummyJSON, then FakeStore
  try {
    const r = await fetch(`https://dummyjson.com/products/${id}`, {
      cache: "no-store",
    });
    if (!r.ok) throw new Error();
    const d = await r.json();
    // Remove duplicates by using a Set
    // Get unique images and ensure we have exactly 4 for the grid
    const allImages = [d.thumbnail, ...(d.images || [])];
    const uniqueImages = [...new Set(allImages)];
    // If we have fewer than 4 images, repeat them to fill the grid
    const displayImages = [];
    for (let i = 0; i < 4; i++) {
      displayImages.push(uniqueImages[i % uniqueImages.length]);
    }
    return {
      id: d.id,
      title: d.title,
      description: d.description,
      price: d.price,
      images: displayImages,
    };
  } catch {
    try {
      const r2 = await fetch(`https://fakestoreapi.com/products/${id}`, {
        cache: "no-store",
      });
      if (!r2.ok) throw new Error();
      const d2 = await r2.json();
      // For FakeStore API, also create 4 images
      const displayImages = new Array(4).fill(d2.image);
      return {
        id: d2.id,
        title: d2.title,
        description: d2.description,
        price: d2.price,
        images: displayImages,
      };
    } catch {
      return null;
    }
  }
}

export default async function ProductDetail({ params }) {
  const { id } = await params;
  const item = await getProduct(id);

  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-10">
        {!item ? (
          <p className="text-[#979797]">Product not found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 2x2 Product Image Grid */}
            <div className="grid grid-cols-2 gap-3">
              {item.images.map((src, idx) => (
                <div
                  key={idx}
                  className="aspect-square bg-[#c4c4c4] overflow-hidden"
                >
                  {src && (
                    <Image
                      src={src}
                      alt={item.title}
                      width={800}
                      height={800}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
            <div>
              <h1 className="text-[36px] leading-[44px] font-semibold tracking-[-1.5px]">
                {item.title}
              </h1>
              <p className="mt-2 text-[18px]">${item.price}</p>
              <p className="mt-4 text-[20px] leading-[28px] text-[#0d0d0d] opacity-70">
                {item.description}
              </p>

              <ProductActions price={item.price} />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
