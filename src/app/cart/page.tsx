"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, X, ArrowRight, ShieldCheck, Truck } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, subtotal } = useCart();

  return (
    <div className="bg-background min-h-screen text-foreground font-sans selection:bg-accent selection:text-background pt-32 pb-40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">

        {/* FORMAL HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-end mb-20 border-b border-border pb-12"
        >
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-serif text-foreground tracking-tight uppercase font-light italic">Shopping Bag</h1>
            <p className="text-accent uppercase tracking-[0.6em] text-[9px] font-bold opacity-40">Your Curated Pieces ({cart.length})</p>
          </div>
          <Link href="/shop" className="text-foreground/40 hover:text-accent transition-all text-[10px] uppercase tracking-[0.4em] font-medium border-b border-border hover:border-accent pb-1 px-1">
            Back to Boutique
          </Link>
        </motion.div>

        {cart.length === 0 ? (
          <div className="text-center py-48 space-y-10">
            <p className="text-foreground/20 font-light text-lg italic tracking-widest">Your selection is currently empty.</p>
            <Link href="/shop" className="inline-block px-12 py-5 border border-border text-foreground uppercase tracking-[0.5em] text-[10px] font-medium rounded-full hover:bg-foreground hover:text-background transition-all duration-700">
              Explore Collections
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-start">

            {/* ITEMS LIST */}
            <div className="lg:col-span-7 space-y-16">
              <AnimatePresence mode="popLayout">
                {cart.map((item) => (
                  <motion.div
                    key={`${item.id}-${item.metal}-${item.size}`}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="flex flex-col md:flex-row gap-10 pb-16 border-b border-border last:border-0"
                  >
                    {/* Item Image */}
                    <Link href={`/product/${item.id}`} className="relative w-32 md:w-48 aspect-[4/5] bg-subtle border border-border overflow-hidden group flex-shrink-0">
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
                            <p className="text-accent uppercase tracking-[0.5em] text-[8px] font-bold">{item.category}</p>
                            <Link href={`/product/${item.id}`} className="font-serif text-2xl md:text-3xl text-foreground hover:opacity-70 transition-opacity uppercase font-light tracking-tight italic">
                              {item.name}
                            </Link>
                            <div className="flex gap-4 pt-2">
                              {item.metal && <span className="text-foreground/70 text-[9px] uppercase tracking-widest font-medium">Metal: {item.metal}</span>}
                              {item.size && <span className="text-foreground/70 text-[9px] uppercase tracking-widest font-medium px-4 border-l border-border">Size: {item.size}</span>}
                            </div>
                          </div>
                          <p className="font-serif text-xl md:text-2xl text-foreground/90 font-light">${(item.price * item.quantity).toLocaleString()}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-10">
                        <div className="flex items-center border border-border px-2 h-10">
                          <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 flex items-center justify-center text-foreground/50 hover:text-accent transition-all"><Minus className="w-3 h-3" /></button>
                          <span className="w-10 text-center text-[11px] font-bold text-foreground">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 flex items-center justify-center text-foreground/50 hover:text-accent transition-all"><Plus className="w-3 h-3" /></button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-[9px] text-foreground/40 hover:text-red-500 transition-all uppercase tracking-[0.3em] font-bold border-b border-transparent hover:border-red-400/20 pb-0.5">
                          Remove Piece
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* TRUST BADGES */}
              <div className="pt-12 border-t border-border flex justify-between items-center opacity-60">
                <div className="flex items-center gap-4">
                  <Truck className="w-4 h-4 text-accent" />
                  <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-foreground">Complimentary Insured Delivery</p>
                </div>
                <div className="flex items-center gap-4">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-foreground">Authenticity Guaranteed</p>
                </div>
              </div>
            </div>

            {/* SUMMARY SIDEBAR */}
            <div className="lg:col-span-5 self-start sticky top-36">
              <div className="bg-subtle p-12 md:p-14 border border-border rounded-[2.5rem] space-y-16 shadow-2xl relative overflow-hidden">
                {/* Subtle Ambient Background Highlight */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/[0.04] blur-3xl rounded-full" />

                <div className="space-y-10 relative z-10">
                  <h2 className="font-serif text-3xl text-foreground uppercase font-light tracking-[0.05em] italic border-b border-border pb-8 text-center">Order Summary</h2>
                  <div className="space-y-8 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] uppercase tracking-[0.4em] text-foreground/60 font-bold italic">Subtotal</span>
                      <span className="font-serif text-2xl font-light text-foreground">${subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] uppercase tracking-[0.4em] text-foreground/60 font-bold italic">Shipping</span>
                      <div className="text-right">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-black block">Complimentary</span>
                        <span className="text-[9px] text-foreground/40 uppercase tracking-widest italic font-bold">Insured Global Logistics</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-12 pt-6 relative z-10">
                  <div className="flex justify-between items-end border-t border-border pt-10">
                    <div className="space-y-2">
                      <span className="text-[12px] uppercase tracking-[0.6em] text-foreground font-black block">Grand Total</span>
                      <span className="text-[9px] text-foreground/40 uppercase tracking-[0.3em] font-bold italic">Reflective of all heritage curation</span>
                    </div>
                    <span className="font-serif text-5xl text-accent font-light tracking-tighter drop-shadow-sm">${subtotal.toLocaleString()}</span>
                  </div>

                  <div className="space-y-10">
                    <Link
                      href="/checkout"
                      className="w-full bg-foreground text-background py-6 uppercase tracking-[0.6em] text-[11px] font-black flex items-center justify-center gap-5 hover:opacity-95 transition-all duration-700 group/btn rounded-2xl shadow-xl hover:shadow-accent/5 border border-transparent"
                    >
                      Proceed <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-3 transition-transform duration-500" />
                    </Link>

                    <div className="flex flex-col items-center gap-8 opacity-70">
                      <p className="text-[9px] uppercase tracking-[0.5em] text-center font-black leading-loose text-foreground max-w-sm">Secure Merchant Encrypted Processing</p>
                      <div className="flex gap-6 grayscale opacity-60">
                        <div className="w-10 h-6 border border-border rounded-[2px] bg-foreground/5 shadow-inner" />
                        <div className="w-10 h-6 border border-border rounded-[2px] bg-foreground/5 shadow-inner" />
                        <div className="w-10 h-6 border border-border rounded-[2px] bg-foreground/5 shadow-inner" />
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
