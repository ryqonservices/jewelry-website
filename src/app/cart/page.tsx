"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, X, ArrowRight, ShieldCheck, Truck } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, subtotal } = useCart();

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-gold selection:text-black pt-32 pb-40">
      <div className="max-w-[1250px] mx-auto px-6 md:px-12">
        
        {/* MINIMAL HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-end mb-16 border-b border-white/5 pb-10"
        >
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-serif text-white italic tracking-tighter uppercase font-black">Shopping Bag</h1>
            <p className="text-gold uppercase tracking-[0.4em] text-[8px] font-black opacity-60 italic">Your Personal Selection ({cart.length})</p>
          </div>
          <Link href="/shop" className="text-white/30 hover:text-gold transition-all text-[9px] uppercase tracking-[0.4em] font-black border-b border-transparent hover:border-gold pb-1.5 transition-all">Continue to Boutique</Link>
        </motion.div>

        {cart.length === 0 ? (
          <div className="text-center py-40 space-y-8">
            <p className="text-white/20 font-light text-xl italic tracking-wide">No pieces currently selected.</p>
            <Link href="/shop" className="inline-block px-10 py-5 bg-gold text-black uppercase tracking-[0.4em] text-[10px] font-black rounded-full hover:bg-white transition-all">
              Browse Collections
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-start">
            
            {/* COMPACT ITEMS LIST (COLUMN 8) */}
            <div className="lg:col-span-8 space-y-12">
              <AnimatePresence mode="popLayout">
                {cart.map((item, index) => (
                  <motion.div 
                    key={`${item.id}-${item.metal}-${item.size}`}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="flex flex-col md:flex-row gap-8 pb-12 border-b border-white/5 last:border-0"
                  >
                    {/* Compact Image */}
                    <Link href={`/product/${item.id}`} className="relative w-32 md:w-44 aspect-[4/5] bg-[#0c0c0c] rounded-3xl overflow-hidden border border-white/5 group flex-shrink-0 shadow-lg">
                      <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-105 p-3" />
                    </Link>

                    {/* Compact Content */}
                    <div className="flex-grow flex flex-col justify-between py-2 space-y-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <p className="text-gold uppercase tracking-[0.4em] text-[8px] font-black mb-1 opacity-70">{item.category}</p>
                            <Link href={`/product/${item.id}`} className="font-serif text-2xl md:text-3xl text-white italic hover:text-gold transition-all leading-tight uppercase font-black uppercase">
                              {item.name}
                            </Link>
                          </div>
                          <p className="font-serif text-2xl italic tracking-tight text-white font-black opacity-90">${(item.price * item.quantity).toLocaleString()}</p>
                        </div>
                        <div className="flex gap-4">
                           {item.metal && <span className="text-white/20 text-[8px] font-black uppercase tracking-widest border border-white/5 px-4 py-1.5 rounded-full bg-white/5">Metal: {item.metal}</span>}
                           {item.size && <span className="text-white/20 text-[8px] font-black uppercase tracking-widest border border-white/5 px-4 py-1.5 rounded-full bg-white/5">Size: {item.size}</span>}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-white/5 w-32 h-12 rounded-xl overflow-hidden bg-white/5 px-1">
                          <button onClick={() => updateQuantity(item.id, -1)} className="w-9 h-9 flex items-center justify-center text-white/20 hover:text-gold transition-all"><Minus className="w-3.5 h-3.5" /></button>
                          <span className="flex-grow text-center text-[10px] font-black font-sans">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="w-9 h-9 flex items-center justify-center text-white/20 hover:text-gold transition-all"><Plus className="w-3.5 h-3.5" /></button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="flex items-center gap-2 text-[8px] text-white/20 hover:text-red-500 transition-all uppercase tracking-[0.4em] font-black">
                          <X className="w-3.5 h-3.5" /> Remove
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {/* COMPACT TRUST BADGES */}
              <div className="pt-8 border-t border-white/5 grid grid-cols-2 gap-8 opacity-40">
                 <div className="flex items-center gap-4">
                    <Truck className="w-4 h-4 text-gold" />
                    <p className="text-[8px] uppercase tracking-[0.3em] font-black">Insured Priority Express</p>
                 </div>
                 <div className="flex items-center gap-4 justify-end">
                    <ShieldCheck className="w-4 h-4 text-gold" />
                    <p className="text-[8px] uppercase tracking-[0.3em] font-black">Signature Certification</p>
                 </div>
              </div>
            </div>

            {/* MINIMAL SIDE SUMMARY (COLUMN 4) */}
            <div className="lg:col-span-4 self-start sticky top-36">
              <div className="bg-[#080808]/50 backdrop-blur-3xl p-12 rounded-[3rem] border border-white/10 space-y-20 shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                 
                 <div className="space-y-10">
                   <h2 className="font-serif text-3xl italic uppercase border-b border-white/5 pb-8 font-black tracking-tighter">Summary</h2>
                   <div className="space-y-8 px-2">
                      <div className="flex justify-between items-center text-white/30">
                        <span className="text-[9px] uppercase tracking-[0.5em] font-black">Subtotal</span>
                        <span className="font-serif text-2xl tracking-tight">${subtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center text-white/30">
                        <span className="text-[9px] uppercase tracking-[0.5em] font-black">Express Delivery</span>
                        <span className="text-[8px] uppercase tracking-[0.4em] text-gold font-bold bg-gold/5 px-4 py-1.5 rounded-full border border-gold/10">Complimentary</span>
                      </div>
                   </div>
                </div>

                <div className="space-y-10 pt-4 border-t border-white/5">
                  <div className="flex justify-between items-end px-2">
                    <span className="text-[10px] uppercase tracking-[0.8em] font-black text-white/20 mb-3">Total</span>
                    <span className="font-serif text-6xl tracking-tighter italic text-gold font-black leading-none">${subtotal.toLocaleString()}</span>
                  </div>
                  
                  <div className="space-y-8">
                    <Link 
                      href="/checkout" 
                      className="w-full bg-white text-black py-8 uppercase tracking-[0.6em] text-[10px] font-black rounded-3xl flex items-center justify-center gap-4 hover:shadow-[0_0_50px_rgba(212,175,55,0.4)] hover:bg-gold transition-all duration-1000 group/btn"
                    >
                      Checkout Securely <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                    </Link>
                    
                    <div className="flex flex-col items-center gap-4 text-center px-4">
                       <p className="text-[7px] uppercase tracking-[0.6em] text-white/20 font-black">Encrypted SSL • GIA Authenticated • Elite Logistics</p>
                       <div className="flex gap-4 opacity-10">
                          <div className="w-10 h-6 bg-white rounded-sm" />
                          <div className="w-10 h-6 bg-white rounded-sm" />
                          <div className="w-10 h-6 bg-white rounded-sm" />
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
