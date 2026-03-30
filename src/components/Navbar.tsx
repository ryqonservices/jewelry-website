"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, Search, Gem } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useCart } from "@/context/CartContext";

export function Navbar() {
  const { cartCount } = useCart();
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
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled ? "bg-black/90 py-5 border-b border-gold/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)]" : "bg-transparent py-10"
      } backdrop-blur-3xl`}>
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 flex justify-between items-center text-white">
          
          <Link href="/" className="hover:text-gold transition-all duration-700 flex items-center gap-4 group">
            <Gem className="w-6 h-6 text-gold group-hover:rotate-[360deg] transition-transform duration-1000" />
            <span className="text-3xl font-serif tracking-tighter uppercase italic font-black">
              Aurelia
            </span>
          </Link>

          <div className="hidden lg:flex flex-1 justify-center items-center gap-12 text-[10px] font-black tracking-[0.5em] uppercase text-white/40">
            {navLinks.map((link) => (
              <Link 
                 key={link.name} 
                 href={link.href} 
                 className="hover:text-gold transition-all duration-700 relative group"
              >
                {link.name}
                <motion.span 
                  className="absolute -bottom-2 left-0 w-0 h-px bg-gold transition-all duration-700 group-hover:w-full"
                  initial={false}
                />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-10">
            <Link href="/search" className="text-white/40 hover:text-gold transition-all duration-500 hidden sm:block">
              <Search className="w-5 h-5" />
            </Link>
            <Link href="/cart" className="text-white/40 hover:text-gold transition-all duration-500 relative group flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              <div className="flex flex-col -space-y-1">
                 <motion.span 
                   key={cartCount}
                   initial={{ scale: 0.5, opacity: 0 }}
                   animate={{ scale: 1, opacity: 1 }}
                   className="text-[10px] font-black uppercase tracking-widest text-gold"
                 >
                   {cartCount}
                 </motion.span>
              </div>
            </Link>
            <button className="md:hidden text-white/40 hover:text-gold transition-all" onClick={() => setIsMobileMenuOpen(true)}>
               <Menu className="w-7 h-7" />
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
            className="fixed inset-0 z-[60] bg-black/95 text-white flex flex-col font-sans"
          >
            <div className="px-6 py-6 flex justify-between items-center border-b border-white/10">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                 <Gem className="w-5 h-5 opacity-80" />
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-6 h-6 opacity-80" />
              </button>
            </div>
            <div className="flex flex-col gap-6 px-8 py-12 flex-1 overflow-y-auto">
              {navLinks.map((link, i) => (
                 <motion.div 
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 + 0.1 }}
                    key={link.name}
                 >
                    <Link href={link.href} className="text-3xl font-semibold tracking-tight hover:text-[#0071e3] transition-colors block border-b border-white/10 pb-4" onClick={() => setIsMobileMenuOpen(false)}>
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
