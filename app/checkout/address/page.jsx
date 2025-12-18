import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = { title: "Checkout – Address" };

function Crumbs() {
  return (
    <div className="flex items-center justify-center gap-3 text-[17px]">
      <span className="font-bold">Address</span>
      <span className="opacity-50">—</span>
      <span>Shipping</span>
      <span className="opacity-50">—</span>
      <span>Payment</span>
    </div>
  );
}

export default function CheckoutAddress() {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-[36px] leading-[44px] tracking-[-1.5px] font-semibold">
          Checkout
        </h1>
        <div className="mt-4">
          <Crumbs />
        </div>

        <section className="mt-10 grid grid-cols-1 lg:grid-cols-[460px_1fr] gap-10">
          <form className="space-y-3" aria-labelledby="shipping-info">
            <p id="shipping-info" className="text-[20px] leading-[28px]">
              Shipping Information
            </p>
            <div className="grid grid-cols-2 gap-3">
              <input
                placeholder="First Name"
                className="h-10 border border-black px-3 placeholder:text-[#A9ABBD]"
              />
              <input
                placeholder="Last Name"
                className="h-10 border border-black px-3 placeholder:text-[#A9ABBD]"
              />
            </div>
            <input
              placeholder="Address"
              className="h-10 w-full border border-black px-3 placeholder:text-[#A9ABBD]"
            />
            <input
              placeholder="Apartment, suite, etc (optional)"
              className="h-10 w-full border border-black px-3 placeholder:text-[#A9ABBD]"
            />
            <input
              placeholder="City"
              className="h-10 w-full border border-black px-3 placeholder:text-[#A9ABBD]"
            />
            <div className="grid grid-cols-3 gap-3">
              <input
                placeholder="Country"
                className="h-10 border border-black px-3 placeholder:text-[#A9ABBD]"
              />
              <input
                placeholder="City"
                className="h-10 border border-black px-3 placeholder:text-[#A9ABBD]"
              />
              <input
                placeholder="Zipcode"
                className="h-10 border border-black px-3 placeholder:text-[#A9ABBD]"
              />
            </div>
            <input
              placeholder="Optional"
              className="h-10 w-full border border-black px-3 placeholder:text-[#A9ABBD]"
            />

            <div className="flex items-center gap-2 pt-2 text-[14px] text-[#979797]">
              <span className="inline-block h-5 w-5 border border-black" />
              Save contact information
            </div>

            <a
              href="/checkout/shipping"
              className="mt-4 inline-flex h-[50px] items-center justify-center w-full bg-black text-white border border-black"
            >
              Continue to shipping
            </a>
          </form>

          <aside className="space-y-6">
            <div className="h-10 w-full border border-black px-3 flex items-center text-[14px] placeholder:text-[#A9ABBD]">
              Enter coupon code here
            </div>
            <div className="space-y-2 text-[14px]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$188</span>
              </div>
              <div className="flex justify-between opacity-70">
                <span>Shipping</span>
                <span>Calculated at the next step</span>
              </div>
              <div className="h-px bg-black/20" />
              <div className="flex justify-between">
                <span>Total</span>
                <span>$188</span>
              </div>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}
