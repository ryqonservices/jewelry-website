"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, Search, Gem } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
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
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-black/95 py-3 border-b border-white/10" : "bg-[#1d1d1f]/90 py-4"
      } backdrop-blur-md`}>
        <div className="max-w-[1024px] mx-auto px-6 flex justify-between items-center text-white/90">
          
          <Link href="/" className="hover:text-white transition-all duration-300 flex items-center gap-2">
            <Gem className="w-4 h-4 opacity-80" />
            <span className={`text-[12px] font-semibold tracking-tight transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 hidden md:block'}`}>
              The Eternal Halo
            </span>
          </Link>

          <div className="hidden md:flex flex-1 justify-center items-center gap-8 text-[11px] font-medium tracking-tight font-sans opacity-80">
            {navLinks.map((link) => (
              <Link 
                 key={link.name} 
                 href={link.href} 
                 className="hover:text-white transition-opacity duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <Link href="/search" className="opacity-70 hover:opacity-100 transition-all duration-300 hidden sm:block">
              <Search className="w-4 h-4" />
            </Link>
            <Link href="/cart" className="opacity-70 hover:opacity-100 transition-all duration-300 relative group">
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -top-1 -right-2 bg-[#0071e3] text-[9px] w-3.5 h-3.5 flex items-center justify-center rounded-full font-bold">2</span>
            </Link>
            <Link href="/cart" className="bg-[#0071e3] text-white px-4 py-1.5 rounded-full hover:bg-[#0077ed] transition-colors text-[11px] font-semibold shadow-sm ml-2">
              Buy
            </Link>
            <button className="md:hidden opacity-70 hover:opacity-100 transition-opacity" onClick={() => setIsMobileMenuOpen(true)}>
               <Menu className="w-5 h-5" />
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
