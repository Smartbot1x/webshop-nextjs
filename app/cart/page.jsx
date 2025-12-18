import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = { title: "Your Cart" };

export default function CartPage() {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-[36px] leading-[44px] tracking-[-1.5px] font-semibold">
          Your cart
        </h1>
        <p className="mt-2 text-[16px]">
          Not ready to checkout?{" "}
          <a href="/products" className="underline">
            Continue Shopping
          </a>
        </p>

        <section className="mt-10 grid grid-cols-1 lg:grid-cols-[560px_1fr] gap-10">
          <div className="space-y-6">
            {[
              { size: "L", price: 99 },
              { size: "S", price: 89 },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 pb-6 border-b">
                <div className="h-[133px] w-[129px] bg-[#c4c4c4]" />
                <div className="flex-1">
                  <p className="text-[22px] leading-[30px] tracking-[-0.55px] font-semibold">
                    Natural Honey Bottle
                  </p>
                  <p className="text-[14px]">Size: {item.size}</p>
                  <p className="text-[14px]">Quantity: 1</p>
                  <p className="text-[22px] leading-[30px] tracking-[-0.55px] font-semibold">
                    ${item.price}
                  </p>
                  <p className="text-[14px] text-[#0d0d0d]">by Vendor Name</p>
                </div>
                <div className="flex items-end text-[14px]">
                  <a className="underline" href="#">
                    Remove
                  </a>
                </div>
              </div>
            ))}

            <details>
              <summary className="text-[22px] font-semibold tracking-[-0.55px] cursor-pointer">
                Order Information
              </summary>
              <div className="mt-3 space-y-4 text-[16px] text-[#909090]">
                <details>
                  <summary className="font-semibold cursor-pointer">
                    Return Policy
                  </summary>
                  <p className="mt-2">
                    This is our example return policy which is everything you
                    need to know about our returns.
                  </p>
                </details>
                <details>
                  <summary className="font-semibold cursor-pointer">
                    Shipping Options
                  </summary>
                </details>
                <details>
                  <summary className="font-semibold cursor-pointer">
                    Shipping Options
                  </summary>
                </details>
              </div>
            </details>
          </div>

          <aside className="space-y-4">
            <p className="text-[22px] leading-[30px] tracking-[-0.55px] font-semibold">
              Order Summary
            </p>
            <input
              placeholder="Enter coupon code here"
              className="h-10 w-full border border-black px-3 placeholder:text-[#A9ABBD]"
            />
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
            <a
              href="/checkout/address"
              className="inline-flex h-[50px] items-center justify-center w-full bg-black text-white border border-black"
            >
              Continue to checkout
            </a>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}
