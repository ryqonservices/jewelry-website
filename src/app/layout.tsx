import { Bodoni_Moda, Tenor_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="en" suppressHydrationWarning className={`${tenor.variable} ${bodoni.variable} scroll-smooth`}>
      <body className="font-sans antialiased min-h-screen transition-colors duration-300">
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
          <CartProvider>
            <Navbar />
            <main className="relative min-h-screen">
              {children}
            </main>
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
