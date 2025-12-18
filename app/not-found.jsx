import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#eff2f6]">
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

      <main className="flex-1 mx-auto max-w-6xl px-4 py-20 w-full">
        <div className="text-center">
          <h1 className="text-[56px] leading-[62px] font-semibold tracking-[-2.4px] text-black">
            404
          </h1>
          <p className="mt-6 text-[20px] leading-[28px] text-[#979797] tracking-[-0.4px]">
            Page not found
          </p>
          <p className="mt-3 text-[18px] leading-[26px] text-[#979797]">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex h-[50px] items-center justify-center px-8 bg-black text-white border border-black hover:bg-white hover:text-black transition"
            >
              Go Home
            </Link>
            <Link
              href="/products"
              className="inline-flex h-[50px] items-center justify-center px-8 bg-white text-black border border-black hover:bg-black hover:text-white transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
