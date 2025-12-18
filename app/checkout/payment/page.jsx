import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = { title: "Checkout – Payment" };

function Crumbs() {
  return (
    <div className="flex items-center justify-center gap-3 text-[17px]">
      <span>Address</span>
      <span className="opacity-50">—</span>
      <span>Shipping</span>
      <span className="opacity-50">—</span>
      <span className="font-bold">Payment</span>
    </div>
  );
}

export default function CheckoutPayment() {
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
            <div className="flex gap-2">
              <div className="flex items-center justify-center h-[38px] w-[153px] border border-[#1d4d90] bg-white text-[14px]">
                PayPal
              </div>
              <div className="flex items-center justify-center h-[38px] w-[153px] bg-black text-white text-[14px]">
                Credit Card
              </div>
            </div>

            <p className="text-[20px] leading-[28px]">Payment Details</p>

            <form className="space-y-3">
              <input
                placeholder="Cardholder Name"
                className="h-10 w-full border border-black px-3 placeholder:text-[#A9ABBD]"
              />
              <input
                placeholder="Card Number"
                className="h-10 w-full border border-black px-3 placeholder:text-[#A9ABBD]"
              />
              <div className="grid grid-cols-3 gap-3">
                <input
                  placeholder="Month"
                  className="h-10 border border-black px-3 placeholder:text-[#A9ABBD]"
                />
                <input
                  placeholder="Year"
                  className="h-10 border border-black px-3 placeholder:text-[#A9ABBD]"
                />
                <input
                  placeholder="CVC"
                  className="h-10 border border-black px-3 placeholder:text-[#A9ABBD]"
                />
              </div>

              <div className="flex items-center justify-between pt-3 text-[14px]">
                <span>Save card data for future payments</span>
                <div className="h-6 w-10 bg-black rounded-full" />
              </div>

              <a
                href="/confirmation"
                className="inline-flex h-[50px] items-center justify-center w-full bg-black text-white border border-black"
              >
                Pay with card
              </a>
            </form>
          </div>

          <aside className="space-y-6">
            <p className="text-[20px] leading-[28px]">Your cart</p>
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-3 pb-4 border-b">
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
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}
