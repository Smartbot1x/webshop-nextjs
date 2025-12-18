import "./globals.css";

import { Public_Sans, Inter } from "next/font/google";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: { default: "Webshop", template: "%s | Webshop" },
  description: "Ecommerce demo using Next.js + Tailwind based on Figma.",
  openGraph: {
    title: "Webshop",
    description: "Ecommerce demo using Next.js + Tailwind based on Figma.",
    type: "website",
    url: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${publicSans.variable} ${inter.variable} antialiased bg-background-primary text-text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
