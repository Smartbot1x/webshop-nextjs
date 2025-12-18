"use client";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-5">
        <div className="md:col-span-2">
          <h3 className="text-[36px] leading-[44px] font-semibold tracking-[-1.5px]">
            Sign up for our newsletter
          </h3>
          <p className="mt-2 text-[14px] text-black/80 max-w-md">
            Be the first to know about our special offers, news, and updates.
          </p>
          <form
            className="mt-4 flex gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              aria-label="Email Address"
              placeholder="Email Address"
              className="h-10 w-64 rounded border border-black px-3 placeholder:text-[#A9ABBD]"
            />
            <button className="h-10 px-4 border border-black text-black hover:bg-black hover:text-white transition">
              Sign Up
            </button>
          </form>
        </div>
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i}>
            <h4 className="text-[16px] font-semibold">Lorem Ipsum</h4>
            <ul className="mt-2 text-[16px] text-black/60 leading-[26px]">
              {Array.from({ length: 5 }).map((__, j) => (
                <li key={j}>Lorem</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="h-[45px] w-full bg-black flex items-center justify-center">
        <p className="text-white text-[12px] tracking-[2px] uppercase">
          Copyrights site.com. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
