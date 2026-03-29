"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MOCK_PRODUCTS } from "@/data/mock";
import { ChevronLeft, Plus, Minus, Check, Star } from "lucide-react";

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const productId = unwrappedParams.id;
  const product = MOCK_PRODUCTS.find((p) => p.id === productId) || MOCK_PRODUCTS[0];
  
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <Link href="/shop" className="inline-flex items-center gap-2 text-neutral-500 hover:text-gold transition-colors text-sm uppercase tracking-widest mb-12">
        <ChevronLeft className="w-4 h-4" /> Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
        {/* Images */}
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square bg-beige overflow-hidden group cursor-zoom-in rounded-[3rem] shadow-sm"
          >
            <Image 
              src={product.image}
              alt={product.name}
              fill
              className="object-cover p-8 md:p-16 hover:scale-110 transition-transform duration-1000 origin-center"
            />
          </motion.div>
          <div className="flex gap-4">
            {[1, 2, 3].map((i) => (
               <div key={i} className={`relative aspect-square w-24 bg-beige cursor-pointer rounded-[1rem] overflow-hidden ${i === 1 ? 'border-2 border-gold ring-2 ring-gold/20' : 'opacity-70 hover:opacity-100 transition-opacity'}`}>
                <Image 
                  src={product.image}
                  alt={`${product.name} view ${i}`}
                  fill
                  className="object-cover p-4"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col"
        >
          <p className="text-xs text-neutral-400 uppercase tracking-widest mb-4">{product.category}</p>
          <h1 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6 leading-tight">{product.name}</h1>
          <div className="flex items-center gap-4 mb-6">
             <p className="text-2xl tracking-wider text-neutral-800">${product.price}</p>
             <div className="flex text-gold">
               {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-currentColor" />)}
             </div>
             <span className="text-neutral-500 text-sm underline decoration-neutral-200 underline-offset-4">(12 Reviews)</span>
          </div>

          <div className="h-px w-full bg-neutral-200 mb-10" />

          <p className="text-neutral-600 font-light leading-relaxed mb-10">
            {product.description}
          </p>

          <div className="flex flex-col gap-8 mb-12">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-900 mb-4">Quantity</p>
              <div className="flex items-center w-36 border border-neutral-300 rounded-full overflow-hidden bg-white shadow-sm">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center text-neutral-500 hover:text-gold hover:bg-neutral-50 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="flex-grow text-center text-neutral-900 font-medium text-sm">{quantity}</div>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center text-neutral-500 hover:text-gold hover:bg-neutral-50 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button 
              onClick={handleAddToCart}
              className={`w-full py-5 uppercase tracking-[0.2em] text-xs font-bold transition-all duration-500 flex items-center justify-center gap-3 rounded-full shadow-lg ${
                added ? "bg-green-600 text-white scale-105" : "bg-neutral-900 text-cream hover:bg-gold hover:shadow-luxury hover:-translate-y-1"
              }`}
            >
              {added ? <><Check className="w-5 h-5"/> Added to Cart</> : "Add to Cart"}
            </button>
          </div>

          {/* Accordion equivalent using simple tabs */}
          <div className="border-t border-b border-neutral-200 mt-auto">
            <div className="flex w-full">
               {["description", "materials", "shipping"].map((tab) => (
                 <button 
                   key={tab}
                   onClick={() => setActiveTab(tab)}
                   className={`flex-grow py-4 text-xs font-medium uppercase tracking-widest border-b-2 transition-colors ${
                     activeTab === tab ? "border-gold text-neutral-900" : "border-transparent text-neutral-400 hover:text-neutral-900"
                   }`}
                 >
                   {tab}
                 </button>
               ))}
            </div>
            <div className="py-8 min-h-32 text-neutral-600 font-light text-sm leading-relaxed">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeTab === "description" && <p>{product.description}</p>}
                  {activeTab === "materials" && (
                     <ul className="list-disc pl-5 space-y-2 text-neutral-500">
                       {product.materials.map((m, i) => <li key={i}>{m}</li>)}
                       <li>Ethically Sourced</li>
                       <li>Handcrafted Finish</li>
                     </ul>
                  )}
                  {activeTab === "shipping" && (
                    <div className="space-y-4">
                      <p><strong>Complimentary Shipping & Returns</strong></p>
                      <p>We offer secure, complimentary standard shipping for all orders within the continental US. Express options available at checkout.</p>
                      <p>Need to return? We accept unworn items within 30 days of delivery.</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </motion.div>
      </div>

      <div className="mt-32 border-t border-neutral-200 pt-16">
         <h2 className="text-3xl font-serif text-center mb-16">You May Also Like</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MOCK_PRODUCTS.slice(0, 4).filter(p => p.id !== product.id).slice(0, 3).map((p) => (
              <Link href={`/product/${p.id}`} key={p.id} className="group text-center flex flex-col items-center">
                 <div className="relative aspect-[4/5] bg-beige mb-6 overflow-hidden rounded-[2rem] w-full shadow-sm hover:shadow-xl transition-shadow duration-700">
                   <Image src={p.image} alt={p.name} fill className="object-cover p-8 group-hover:scale-110 transition-transform duration-1000 ease-out"/>
                 </div>
                 <p className="text-[10px] text-gold uppercase tracking-[0.2em] mb-2 font-medium">{p.category}</p>
                 <h3 className="font-serif text-lg text-neutral-900 mb-2 group-hover:text-gold transition-colors">{p.name}</h3>
                 <p className="text-neutral-600 tracking-[0.1em] text-sm mt-auto font-medium">${p.price.toLocaleString()}</p>
              </Link>
            ))}
         </div>
      </div>
    </div>
  );
}
