"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, Search, Gem } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useCart } from "@/context/CartContext";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const { cartCount } = useCart();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "High Jewelry", href: "/high-jewelry" },
    { name: "Engagement", href: "/engagement" },
    { name: "Collections", href: "/collections" },
    { name: "Gifts", href: "/gifts" },
    { name: "Our Story", href: "/about" },
    { name: "Boutique", href: "/shop" },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled 
          ? "bg-background/90 py-5 border-b border-border/40 shadow-sm backdrop-blur-2xl" 
          : "bg-gradient-to-b from-background/40 to-transparent py-8"
      }`}>
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 flex justify-between items-center text-foreground">
          
          <div className="flex items-center gap-10">
            <Link href="/" className="hover:opacity-80 transition-all duration-500 flex items-center gap-3 group">
              <Gem className="w-5 h-5 text-foreground group-hover:rotate-[360deg] transition-transform duration-1000" />
              <span className="text-2xl font-serif tracking-tighter uppercase italic font-bold">
                Aurelia
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex flex-1 justify-center items-center gap-12 text-[12px] font-serif font-medium tracking-[0.3em] uppercase italic">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                   key={link.name} 
                   href={link.href} 
                   className={`transition-all duration-500 relative group drop-shadow-md ${isActive ? "text-foreground" : "text-foreground/80 hover:text-foreground"}`}
                >
                  {link.name}
                  <motion.span 
                    className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-[1px] bg-foreground transition-all duration-500 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                    initial={false}
                  />
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-8 md:gap-10">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            
            <Link href="/search" className="text-foreground/80 hover:text-foreground transition-all duration-500 hidden sm:block">
              <Search className="w-5 h-5 drop-shadow-sm" />
            </Link>

            <Link href="/cart" className="text-foreground/80 hover:text-foreground transition-all duration-500 relative group flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 drop-shadow-sm" />
              <div className="flex flex-col -space-y-1">
                 <motion.span 
                   key={cartCount}
                   initial={{ scale: 0.5, opacity: 0 }}
                   animate={{ scale: 1, opacity: 1 }}
                   className="text-[12px] font-serif font-bold uppercase tracking-widest text-foreground drop-shadow-sm"
                 >
                   {cartCount}
                 </motion.span>
              </div>
            </Link>

            <button className="lg:hidden text-foreground/80 hover:text-foreground transition-all" onClick={() => setIsMobileMenuOpen(true)}>
               <Menu className="w-6 h-6 drop-shadow-sm" />
            </button>
          </div>

        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-background/95 text-foreground flex flex-col font-sans"
          >
            <div className="px-6 py-6 flex justify-between items-center border-b border-border">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                 <Gem className="w-5 h-5 opacity-80" />
              </Link>
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="w-6 h-6 opacity-80" />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-6 px-8 py-10 flex-1 overflow-y-auto">
              {navLinks.map((link, i) => (
                 <motion.div 
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 + 0.1 }}
                    key={link.name}
                 >
                    <Link href={link.href} className="text-2xl font-bold tracking-tight hover:opacity-60 transition-colors block border-b border-border pb-4" onClick={() => setIsMobileMenuOpen(false)}>
                      {link.name}
                    </Link>
                 </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
