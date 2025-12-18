import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = { title: "Checkout – Shipping" };

function Crumbs() {
  return (
    <div className="flex items-center justify-center gap-3 text-[17px]">
      <span>Address</span>
      <span className="opacity-50">—</span>
      <span className="font-bold">Shipping</span>
      <span className="opacity-50">—</span>
      <span>Payment</span>
    </div>
  );
}

export default function CheckoutShipping() {
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
          <div className="space-y-4">
            <div className="border-2 border-black p-4">
              <div className="flex items-start gap-3">
                <span className="inline-block h-5 w-5 border border-black" />
                <div>
                  <p className="font-bold text-[16px] text-[#111]">
                    UPS/USPS Surepost
                  </p>
                  <p className="text-[16px]">4-7 Business Days</p>
                </div>
              </div>
            </div>
            <div className="border p-4 bg-white">
              <div className="flex items-start gap-3">
                <span className="inline-block h-5 w-5 border border-black" />
                <div>
                  <p className="font-bold text-[16px] text-[#111]">
                    UPS Ground Shipping
                  </p>
                  <p className="text-[16px]">3-5 Business Days</p>
                </div>
              </div>
            </div>

            <a
              href="/checkout/payment"
              className="inline-flex h-[50px] items-center justify-center w-full bg-black text-white border border-black"
            >
              Continue to payment
            </a>
          </div>

          <aside className="space-y-6">
            <div className="space-y-6">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="flex gap-3">
                  <div className="h-[133px] w-[129px] bg-[#c4c4c4]" />
                  <div className="text-[14px]">
                    <p className="text-[22px] leading-[30px] tracking-[-0.55px] font-semibold">
                      Natural Honey Bottle
                    </p>
                    <p>Size: {i === 0 ? "L" : "S"}</p>
                    <p>Quantity: 1</p>
                    <p className="text-[22px] font-semibold">
                      {i === 0 ? "$99" : "$89"}
                    </p>
                  </div>
                  <div className="ml-auto flex items-end text-[14px]">
                    <a className="underline" href="#">
                      Remove
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}
