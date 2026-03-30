"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Clock } from "lucide-react";

const fadeInUp: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: import("framer-motion").Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function CollectionsPage() {
  const categories = [
    { name: 'Rings', img: '/images/rings/beautiful-engagement-ring-with-diamonds.jpg', count: '12 Pieces', href: '/shop?category=rings' },
    { name: 'Necklaces', img: '/images/Necklaces/bust-showcase-jewelry-display-necklace-pendant-jewelry-lifestyle-fashion-accessories-mockup.jpg', count: '08 Pieces', href: '/shop?category=necklaces' },
    { name: 'Bracelets', img: '/images/bracelets/side-view-hand-wearing-gold-bracelet.jpg', count: '15 Pieces', href: '/shop?category=bracelets' },
    { name: 'Earrings', img: '/images/Earrings/aesthetic-golden-earrings-arrangement.jpg', count: '10 Pieces', href: '/shop?category=earrings' },
    { name: 'High Jewelry', img: '/images/rings/still-life-object.jpg', count: '04 Pieces', href: '/high-jewelry' },
    { name: 'Wedding', img: '/images/rings/beautiful-engagement-ring-with-diamonds (1).jpg', count: '06 Pieces', href: '/engagement' }
  ];

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-gold selection:text-black pt-20">
      
      {/* 1. MINIMALIST HEADER */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="space-y-6">
           <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-black">Universe of Light</span>
           <h1 className="text-6xl md:text-9xl font-serif text-white tracking-tighter leading-none italic uppercase">The <br/><span className="gold-gradient">Discovery</span></h1>
        </motion.div>
      </section>

      {/* 2. COLLECTION MOSAIC GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-60">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {categories.map((cat, i) => (
            <motion.div 
              key={cat.name}
              variants={fadeInUp}
              className={`relative overflow-hidden group shadow-2xl border border-white/5 ${i === 1 || i === 4 ? 'md:aspect-[3/4] md:h-[700px]' : 'md:aspect-square md:h-[550px]'}`}
            >
              <Link href={cat.href} className="w-full h-full block">
                <Image src={cat.img} alt={cat.name} fill className="object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-1000" />
                
                <div className="absolute bottom-12 left-12 right-12 flex flex-col items-center text-center space-y-6">
                   <div className="w-12 h-px bg-gold/50 group-hover:w-24 transition-all duration-700 mx-auto" />
                   <div className="space-y-2">
                     <h3 className="text-white text-4xl md:text-5xl font-serif tracking-tight leading-none italic uppercase group-hover:text-gold transition-colors">{cat.name}</h3>
                     <p className="text-white/40 uppercase tracking-[0.3em] text-[9px] font-black">{cat.count}</p>
                   </div>
                   <div className="flex items-center gap-4 text-gold text-[8px] uppercase tracking-[0.6em] translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 font-bold bg-black/40 px-8 py-3 rounded-full backdrop-blur-md">
                     Browse Collection <ArrowRight className="w-4 h-4" />
                   </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. FINAL REACH */}
      <section className="py-60 px-6 text-center bg-[#080808]">
         <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="max-w-3xl mx-auto space-y-12">
            <h2 className="text-5xl md:text-8xl font-serif text-white tracking-tighter leading-none italic uppercase">Indulge in <br/>extraordinary</h2>
            <p className="text-white/50 text-xl font-light leading-relaxed max-w-2xl mx-auto italic tracking-wide">Whether you are searching for a personal milestone or a gift of lasting impact, our collections are a celebration of mastery in every detail.</p>
            <Link href="/shop" className="inline-block px-14 py-7 bg-white text-black uppercase tracking-[0.4em] text-[10px] font-black rounded-3xl hover:bg-gold hover:text-black transition-all shadow-luxury">
               Explore Full Boutique
            </Link>
         </motion.div>
      </section>

    </div>
  );
}
