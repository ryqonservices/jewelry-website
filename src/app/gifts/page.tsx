"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gift, Sparkles, Heart, Clock } from "lucide-react";
import { MOCK_PRODUCTS } from "@/data/mock";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function GiftsPage() {
  const giftSelections = MOCK_PRODUCTS.slice(0, 4);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-gold selection:text-black pt-20">
      
      {/* 1. ATMOSPHERIC GIFT HERO */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <Image 
          src="/images/bracelets/luxury-jewellery-display (1).jpg" 
          alt="Gifts Hero" 
          fill 
          priority
          className="object-cover opacity-70" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="space-y-6"
          >
            <Gift className="w-10 h-10 text-gold mx-auto mb-8 opacity-60" />
            <h1 className="text-6xl md:text-[10rem] font-serif text-white tracking-tighter leading-none italic uppercase drop-shadow-2xl">The Perfect <br/>Gesture</h1>
            <p className="text-white/60 uppercase tracking-[0.8em] text-[10px] md:text-sm font-black">Luxurious Gifting Collections</p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE ART OF PRESENTATION */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-20">
           <div className="md:w-1/2 space-y-12">
              <div className="space-y-6">
                <Sparkles className="w-8 h-8 text-gold opacity-60" />
                <h2 className="text-5xl md:text-8x font-serif text-white tracking-tighter leading-none italic uppercase">Beyond <br/>the Jewel</h2>
                <div className="w-12 h-px bg-gold/50" />
              </div>
              <p className="text-white/50 text-xl font-light leading-relaxed tracking-wide italic">
                Every Aurelia gift is an experience from the moment it is received. Our signature packaging, handcrafted in heavy velvet and gold-stamped linen, ensures that the anticipation of discovery is as beautiful as the gift itself.
              </p>
              <ul className="space-y-6">
                 <li className="flex items-center gap-4 text-white/40 uppercase tracking-[0.4em] text-[10px] font-black"><Heart className="w-4 h-4 text-gold" /> Personalized Gift Notes</li>
                 <li className="flex items-center gap-4 text-white/40 uppercase tracking-[0.4em] text-[10px] font-black"><Sparkles className="w-4 h-4 text-gold" /> Signature Velvet Box</li>
                 <li className="flex items-center gap-4 text-white/40 uppercase tracking-[0.4em] text-[10px] font-black"><Clock className="w-4 h-4 text-gold" /> Priority Secure Delivery</li>
              </ul>
           </div>
           <div className="md:w-1/2">
              <div className="aspect-square rounded-full overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(212,175,55,0.05)] relative p-20">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.1)_0%,_transparent_70%)]" />
                 <div className="relative w-full h-full rounded-full overflow-hidden border border-white/5">
                   <Image src="/images/Necklaces/luxury-shine-diamonds-digital-art.jpg" alt="Gift Box" fill className="object-cover" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. CURATED SELECTION */}
      <section className="py-40 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-24 space-y-4">
             <h2 className="text-5xl md:text-8xl font-serif text-white italic tracking-tighter leading-none uppercase">Curated Gems</h2>
             <p className="text-gold uppercase tracking-[0.5em] text-[10px] font-black">For life&apos;s extraordinary chapters</p>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {giftSelections.map((p, i) => (
                <motion.div 
                  key={p.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/product/${p.id}`} className="group text-center space-y-8">
                    <div className="relative aspect-[3.5/4.5] bg-[#0c0c0c] overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/5 group-hover:border-gold/30 transition-all duration-700">
                      <Image src={p.image} alt={p.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110 p-4"/>
                    </div>
                    <div className="space-y-2">
                       <h3 className="font-serif text-2xl md:text-3xl text-white italic group-hover:text-gold transition-colors">{p.name}</h3>
                       <p className="text-white/60 tracking-tight text-xl font-serif italic">${p.price.toLocaleString()}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
           </div>
           
           <div className="mt-24 text-center">
              <Link href="/shop" className="inline-block px-14 py-7 border border-gold text-gold uppercase tracking-[0.4em] text-[10px] font-black rounded-3xl hover:bg-gold hover:text-black transition-all shadow-luxury">
                 Explore Gift Concierge
              </Link>
           </div>
        </div>
      </section>

    </div>
  );
}
