"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MOCK_PRODUCTS } from "@/data/mock";
import { ChevronDown, ShoppingBag, Eye, Star } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

function ShopContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("featured");

  useEffect(() => {
    if (categoryParam) {
      const normalized = categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1).toLowerCase();
      const availableCategories = ["All", "Rings", "Necklaces", "Bracelets", "Earrings"];
      if (availableCategories.includes(normalized)) {
        setSelectedCategory(normalized);
      }
    }
  }, [categoryParam]);

  const categories = ["All", "Rings", "Necklaces", "Bracelets", "Earrings"];

  const filteredProducts = MOCK_PRODUCTS.filter(p => 
    selectedCategory === "All" || p.category === selectedCategory
  ).sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    return 0;
  });

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-gold selection:text-black">
      
      {/* 1. CINEMATIC SHOP HEADER */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto text-center border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.05)_0%,_transparent_70%)]" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8 relative z-10"
        >
          <span className="text-gold uppercase tracking-[0.8em] text-[10px] font-black">House of Aurelia</span>
          <h1 className="text-6xl md:text-9xl font-serif text-white tracking-tighter leading-none italic uppercase">The Boutique</h1>
          <div className="flex items-center justify-center gap-6">
            <div className="w-12 h-px bg-gold/30" />
            <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-black">Explore Our Signature Collections</p>
            <div className="w-12 h-px bg-gold/30" />
          </div>
        </motion.div>
      </section>

      {/* 2. PREMIUM FILTERS BAR */}
      <section className="sticky top-20 z-40 bg-black/80 backdrop-blur-2xl border-y border-white/5 py-8 mb-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          
          <div className="flex items-center gap-10 overflow-x-auto w-full md:w-auto pb-4 md:pb-0 no-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-shrink-0 uppercase tracking-[0.4em] text-[9px] font-black transition-all duration-700 relative group ${
                  selectedCategory === category ? "text-gold" : "text-white/30 hover:text-white"
                }`}
              >
                {category}
                <motion.div 
                  initial={false}
                  animate={selectedCategory === category ? { width: "100%", opacity: 1 } : { width: "10%", opacity: 0 }}
                  className="absolute -bottom-3 left-0 h-px bg-gold"
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-8 w-full md:w-auto justify-end">
            <div className="relative group">
              <button className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.3em] text-white border border-white/10 px-10 py-4 rounded-full hover:border-gold/50 transition-all bg-[#080808] shadow-2xl">
                {sortBy === "featured" ? "Featured" : sortBy === "price-low" ? "Price: Low to High" : "Price: High to Low"} <ChevronDown className="w-3 h-3 text-gold" />
              </button>
              <div className="absolute right-0 top-full mt-4 w-60 bg-[#0c0c0c] border border-white/5 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 rounded-2xl overflow-hidden py-4 z-50">
                {["featured", "price-low", "price-high"].map((type) => (
                  <button 
                    key={type}
                    onClick={() => setSortBy(type)}
                    className="w-full px-8 py-4 text-left text-[9px] uppercase tracking-widest hover:bg-gold/10 hover:text-gold transition-all font-black text-white/50"
                  >
                    {type === "featured" ? "Featured Selection" : type === "price-low" ? "Low to High" : "High to Low"}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. IMPRESSIVE PRODUCT GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-60">
        <motion.div 
          layout
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-32"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}

function ProductCard({ product }: { product: any }) {
  return (
    <motion.div
      layout
      variants={fadeInUp}
      exit={{ opacity: 0, scale: 0.9 }}
      className="group flex flex-col cursor-pointer"
    >
       <Link href={`/product/${product.id}`} className="relative aspect-[3.2/4.2] overflow-hidden bg-[#0c0c0c] mb-12 rounded-[2.5rem] shadow-[0_45px_100px_-25px_rgba(0,0,0,0.9)] border border-white/5 group transition-all duration-1000 hover:border-gold/30">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110 p-2"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000" />
          
          {/* Status Badges */}
          <div className="absolute top-8 left-8 flex flex-col gap-3">
             {product.isNew && <span className="bg-gold text-black text-[8px] font-black uppercase tracking-[0.4em] px-5 py-2 rounded-full shadow-2xl">New Arrival</span>}
             {product.bestseller && <span className="bg-white/10 backdrop-blur-md text-white/80 text-[8px] font-black uppercase tracking-[0.4em] px-5 py-2 rounded-full shadow-2xl border border-white/10">Bestseller</span>}
          </div>

          {/* Quick Actions */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-1000">
             <div className="bg-white text-black px-12 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.5em] shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex items-center gap-3">
                <Eye className="w-4 h-4" /> View Piece
             </div>
          </div>
          
          <div className="absolute bottom-10 inset-x-10 flex justify-between items-center translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 delay-100">
             <button className="bg-black/60 backdrop-blur-md text-white p-5 rounded-full hover:bg-gold hover:text-black transition-all border border-white/10" onClick={(e) => { e.preventDefault(); }}>
                <ShoppingBag className="w-5 h-5" />
             </button>
             <div className="flex text-gold h-min">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-2.5 h-2.5 fill-gold" />)}
             </div>
          </div>
       </Link>

       <div className="text-center px-6 space-y-6">
          <div className="space-y-3">
            <p className="text-gold uppercase tracking-[0.5em] text-[10px] font-black opacity-80">{product.category}</p>
            <Link href={`/product/${product.id}`} className="font-serif text-3xl md:text-4xl text-white tracking-tighter leading-none hover:text-gold transition-all block italic uppercase">
              {product.name}
            </Link>
          </div>
          
          <div className="flex flex-col items-center gap-6">
             <div className="w-10 h-px bg-white/10" />
             <p className="text-white font-serif text-2xl italic tracking-tight opacity-90">
               ${product.price.toLocaleString()}
             </p>
          </div>
       </div>
    </motion.div>
  );
}

export default function Shop() {
  return (
    <Suspense fallback={<div className="bg-black min-h-screen flex items-center justify-center"><p className="text-gold font-serif italic text-2xl animate-pulse">Loading Collections...</p></div>}>
      <ShopContent />
    </Suspense>
  );
}
