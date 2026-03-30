import { Bodoni_Moda, Tenor_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

const tenor = Tenor_Sans({
  variable: "--font-tenor",
  subsets: ["latin"],
  weight: ["400"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aurelia | Luxury Jewelry",
  description: "Experience timeless elegance with our selection of fine jewelry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${tenor.variable} ${bodoni.variable} scroll-smooth`}>
      <body className="font-sans bg-[#050505] text-[#F3F3F3] antialiased min-h-screen">
        <CartProvider>
          <Navbar />
          <div className="relative">
            {children}
          </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
