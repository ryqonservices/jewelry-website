"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * ANIMATION VARIANTS
 * Using refined, slower transitions for a luxury feel.
 */
const fadeInUp: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1.2, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
};

const staggerContainer: import("framer-motion").Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.1
    } 
  }
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
    <div className="bg-[#050505] min-h-screen text-[#F3F3F3] font-sans selection:bg-gold selection:text-black pt-20">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-48 pb-32 px-6 max-w-[1400px] mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1.5, ease: "easeOut" }} 
          className="space-y-8"
        >
           <div className="flex items-center justify-center gap-4">
             <div className="h-[1px] w-8 bg-gold/40" />
             <span className="text-gold uppercase tracking-[0.6em] text-[10px] font-medium">Metier d&apos;Art</span>
             <div className="h-[1px] w-8 bg-gold/40" />
           </div>
           
           <h1 className="text-6xl md:text-[140px] font-serif tracking-tighter leading-[0.85] uppercase">
             The <br/>
             <span className="italic font-light opacity-80">Collection</span>
           </h1>
           
           <p className="max-w-xl mx-auto text-white/40 text-xs md:text-sm uppercase tracking-[0.3em] leading-loose font-light">
             A curation of exceptional craftsmanship, where each piece tells a story of light, legacy, and timeless elegance.
           </p>
        </motion.div>
      </section>

      {/* 2. COLLECTION GALLERY GRID */}
      <section className="max-w-[1600px] mx-auto px-6 pb-64">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          {categories.map((cat, i) => (
            <motion.div 
              key={cat.name}
              variants={fadeInUp}
              className="group cursor-pointer"
            >
              <Link href={cat.href} className="block space-y-8">
                {/* Image Container with Consistent Aspect Ratio for Alignment */}
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900 border border-white/5 luxury-shadow">
                  <Image 
                    src={cat.img} 
                    alt={cat.name} 
                    fill 
                    className="object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                  />
                  
                  {/* Subtle Gold Border Hover Overlay */}
                  <div className="absolute inset-0 border-[0px] group-hover:border-[1px] border-gold/30 transition-all duration-700 pointer-events-none" />
                  
                  {/* Dark Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                </div>

                {/* Content Area - Clean & Aligned */}
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="space-y-1">
                    <p className="text-gold/60 uppercase tracking-[0.4em] text-[8px] font-bold">{cat.count}</p>
                    <h3 className="text-white text-3xl md:text-4xl font-serif tracking-tight uppercase group-hover:text-gold/90 transition-colors duration-500">
                      {cat.name}
                    </h3>
                  </div>
                  
                  {/* View Details Label */}
                  <div className="flex items-center gap-2 overflow-hidden">
                    <div className="h-[1px] w-0 group-hover:w-8 bg-gold/50 transition-all duration-700" />
                    <span className="text-[9px] uppercase tracking-[0.5em] text-white/30 group-hover:text-white/70 transition-colors duration-500 font-bold">
                      Explore
                    </span>
                    <ArrowRight className="w-3 h-3 text-gold/50 group-hover:translate-x-1 transition-transform duration-500" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. FINAL CALL TO ACTION */}
      <section className="py-72 px-6 text-center border-t border-white/[0.03] bg-[#030303]">
         <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.5 }}
            className="max-w-4xl mx-auto space-y-16"
         >
            <div className="space-y-6">
              <span className="text-gold uppercase tracking-[0.6em] text-[10px] font-bold">The Aurelia Legacy</span>
              <h2 className="text-5xl md:text-8xl font-serif text-white tracking-tighter leading-[0.9] uppercase">
                Timeless<br/>
                <span className="italic font-light opacity-70">Mastery</span>
              </h2>
            </div>
            
            <p className="text-white/40 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto tracking-wide">
              Every creation is a testament to our pursuit of brilliance. Experience the convergence of high-jewelry heritage and contemporary vision.
            </p>
            
            <Link href="/shop" className="relative inline-block px-14 py-6 group">
                <span className="absolute inset-0 bg-white rounded-full transition-transform duration-500 group-hover:scale-105" />
                <span className="relative text-black uppercase tracking-[0.5em] text-[10px] font-heavy">
                  Visit The Boutique
                </span>
            </Link>
         </motion.div>
      </section>

    </div>
  );
}
