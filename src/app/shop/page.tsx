"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MOCK_PRODUCTS } from "@/data/mock";
import { Filter, ChevronDown, ShoppingBag } from "lucide-react";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("featured");

  const categories = ["All", "Rings", "Necklaces", "Bracelets", "Earrings"];

  const filteredProducts = MOCK_PRODUCTS.filter(p => 
    selectedCategory === "All" || p.category === selectedCategory
  ).sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    return 0; // featured
  });

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-32">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center mb-16 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-serif text-neutral-900 mb-6 drop-shadow-sm">AURELIA High Jewelry</h1>
        <p className="text-neutral-500 max-w-xl text-lg font-light tracking-wide">
          Discover our magnificent creations, meticulously brought to life by master artisans.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6 border-b border-neutral-200 pb-8">
        <div className="flex items-center gap-6 overflow-x-auto w-full md:w-auto pb-4 md:pb-0 hide-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap uppercase tracking-[0.2em] text-xs font-medium transition-colors ${
                selectedCategory === category 
                  ? "text-gold border-b border-gold pb-1" 
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex gap-4 items-center w-full md:w-auto justify-between flex-shrink-0">
          <button className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-neutral-500 md:hidden border border-neutral-300 px-4 py-2 rounded-full">
            <Filter className="w-4 h-4" /> Filter
          </button>
          
          <div className="relative group z-30">
            <button className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-900 hover:text-gold transition-colors bg-white border border-neutral-200 px-6 py-3 rounded-full shadow-sm">
              Sort By <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute right-0 top-full mt-2 w-56 bg-white/95 backdrop-blur-md border border-neutral-100 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right group-hover:scale-100 scale-95 flex flex-col rounded-2xl overflow-hidden py-2">
              <button onClick={() => setSortBy("featured")} className="px-6 py-3 text-left text-sm hover:bg-neutral-50 hover:text-gold transition-colors font-medium">Featured</button>
              <button onClick={() => setSortBy("price-low")} className="px-6 py-3 text-left text-sm hover:bg-neutral-50 hover:text-gold transition-colors font-medium">Price: Low to High</button>
              <button onClick={() => setSortBy("price-high")} className="px-6 py-3 text-left text-sm hover:bg-neutral-50 hover:text-gold transition-colors font-medium">Price: High to Low</button>
            </div>
          </div>
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16"
      >
        <AnimatePresence>
          {filteredProducts.map((product) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              key={product.id}
              className="group flex flex-col"
            >
               <Link href={`/product/${product.id}`} className="relative aspect-[4/5] overflow-hidden bg-beige mb-6 block rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-700">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 p-6"
                  />
                  {(product.isNew || product.bestseller) && (
                     <div className="absolute top-4 left-4 flex gap-2">
                        {product.isNew && <span className="bg-white/90 backdrop-blur-sm text-neutral-900 text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-sm">New</span>}
                        {product.bestseller && <span className="bg-gold/90 backdrop-blur-sm text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-sm">Best Seller</span>}
                     </div>
                  )}
                  <button 
                    className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-neutral-900 p-4 rounded-full opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-gold hover:text-white shadow-luxury"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </button>
               </Link>
               <div className="flex flex-col flex-grow text-center px-4">
                 <p className="text-[10px] text-gold uppercase tracking-[0.2em] mb-2 font-medium">{product.category}</p>
                 <Link href={`/product/${product.id}`} className="font-serif text-lg text-neutral-900 mb-2 hover:text-gold transition-colors">
                   {product.name}
                 </Link>
                 <p className="text-neutral-600 mt-auto tracking-[0.1em] font-medium text-sm">${product.price.toLocaleString()}</p>
               </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
