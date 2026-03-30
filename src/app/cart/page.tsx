"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, X, ArrowRight, ShieldCheck, Truck } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, subtotal } = useCart();

  return (
    <div className="bg-[#050505] min-h-screen text-[#F3F3F3] font-sans selection:bg-gold selection:text-black pt-32 pb-40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* FORMAL HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-end mb-20 border-b border-white/5 pb-12"
        >
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-serif text-white tracking-tight uppercase font-light italic">Shopping Bag</h1>
            <p className="text-gold uppercase tracking-[0.6em] text-[9px] font-bold opacity-40">Your Curated Pieces ({cart.length})</p>
          </div>
          <Link href="/shop" className="text-white/40 hover:text-gold transition-all text-[10px] uppercase tracking-[0.4em] font-medium border-b border-white/10 hover:border-gold pb-1 px-1">
            Back to Boutique
          </Link>
        </motion.div>

        {cart.length === 0 ? (
          <div className="text-center py-48 space-y-10">
            <p className="text-white/20 font-light text-lg italic tracking-widest">Your selection is currently empty.</p>
            <Link href="/shop" className="inline-block px-12 py-5 border border-white/20 text-white uppercase tracking-[0.5em] text-[10px] font-medium rounded-full hover:bg-white hover:text-black transition-all duration-700">
              Explore Collections
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-start">
            
            {/* ITEMS LIST */}
            <div className="lg:col-span-8 space-y-16">
              <AnimatePresence mode="popLayout">
                {cart.map((item) => (
                  <motion.div 
                    key={`${item.id}-${item.metal}-${item.size}`}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="flex flex-col md:flex-row gap-10 pb-16 border-b border-white/5 last:border-0"
                  >
                    {/* Item Image */}
                    <Link href={`/product/${item.id}`} className="relative w-32 md:w-48 aspect-[4/5] bg-neutral-900 border border-white/5 overflow-hidden group flex-shrink-0">
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill 
                        className="object-cover transition-transform duration-[1.5s] group-hover:scale-105 p-4 opacity-90 group-hover:opacity-100" 
                      />
                    </Link>

                    {/* Item Content */}
                    <div className="flex-grow flex flex-col justify-between py-1">
                      <div className="space-y-6">
                        <div className="flex justify-between items-start gap-6">
                          <div className="space-y-2">
                            <p className="text-gold/60 uppercase tracking-[0.5em] text-[8px] font-bold">{item.category}</p>
                            <Link href={`/product/${item.id}`} className="font-serif text-2xl md:text-3xl text-white hover:text-gold/80 transition-colors uppercase font-light tracking-tight italic">
                              {item.name}
                            </Link>
                            <div className="flex gap-4 pt-2">
                               {item.metal && <span className="text-white/30 text-[9px] uppercase tracking-widest">Metal: {item.metal}</span>}
                               {item.size && <span className="text-white/30 text-[9px] uppercase tracking-widest px-4 border-l border-white/10">Size: {item.size}</span>}
                            </div>
                          </div>
                          <p className="font-serif text-xl md:text-2xl text-white/90 font-light">${(item.price * item.quantity).toLocaleString()}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-10">
                        <div className="flex items-center border border-white/10 px-2 h-10">
                          <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 flex items-center justify-center text-white/30 hover:text-gold transition-all"><Minus className="w-3 h-3" /></button>
                          <span className="w-10 text-center text-[11px] font-medium">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 flex items-center justify-center text-white/30 hover:text-gold transition-all"><Plus className="w-3 h-3" /></button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-[9px] text-white/20 hover:text-red-400/70 transition-all uppercase tracking-[0.3em] font-bold border-b border-transparent hover:border-red-400/20 pb-0.5">
                          Remove Piece
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {/* TRUST BADGES */}
              <div className="pt-12 border-t border-white/5 flex justify-between items-center opacity-30">
                 <div className="flex items-center gap-4">
                    <Truck className="w-4 h-4 text-gold/60" />
                    <p className="text-[9px] uppercase tracking-[0.4em] font-medium">Complimentary Insured Delivery</p>
                 </div>
                 <div className="flex items-center gap-4">
                    <ShieldCheck className="w-4 h-4 text-gold/60" />
                    <p className="text-[9px] uppercase tracking-[0.4em] font-medium">Authenticity Guaranteed</p>
                 </div>
              </div>
            </div>

            {/* SUMMARY SIDEBAR */}
            <div className="lg:col-span-4 self-start sticky top-36">
              <div className="bg-[#080808] p-12 border border-white/5 space-y-16">
                 <div className="space-y-8">
                   <h2 className="font-serif text-2xl uppercase font-light tracking-widest italic border-b border-white/5 pb-6">Summary</h2>
                   <div className="space-y-6 pt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] uppercase tracking-[0.5em] text-white/30">Subtotal</span>
                        <span className="font-serif text-xl font-light">${subtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] uppercase tracking-[0.5em] text-white/30">Shipping</span>
                        <span className="text-[9px] uppercase tracking-[0.4em] text-gold/60">Complimentary</span>
                      </div>
                   </div>
                </div>

                <div className="space-y-10 pt-4">
                  <div className="flex justify-between items-end border-t border-white/10 pt-8">
                    <span className="text-[11px] uppercase tracking-[0.6em] text-white/40 mb-2">Estimated Total</span>
                    <span className="font-serif text-4xl text-gold font-light tracking-tight">${subtotal.toLocaleString()}</span>
                  </div>
                  
                  <div className="space-y-8">
                    <Link 
                      href="/checkout" 
                      className="w-full bg-[#F3F3F3] text-black py-5 uppercase tracking-[0.6em] text-[10px] font-bold flex items-center justify-center gap-4 hover:bg-gold transition-all duration-700 group/btn"
                    >
                      Proceed to Checkout <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform duration-500" />
                    </Link>
                    
                    <div className="flex flex-col items-center gap-6 opacity-30">
                       <p className="text-[8px] uppercase tracking-[0.5em] text-center font-medium leading-loose">Secure payment processing • Worldwide logistics</p>
                       <div className="flex gap-4 grayscale brightness-200">
                          <div className="w-8 h-5 border border-white/20 rounded-[1px]" />
                          <div className="w-8 h-5 border border-white/20 rounded-[1px]" />
                          <div className="w-8 h-5 border border-white/20 rounded-[1px]" />
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
