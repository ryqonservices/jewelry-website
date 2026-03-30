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
    <div className="bg-background min-h-screen text-foreground font-sans selection:bg-accent selection:text-background pt-20">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-48 pb-32 px-6 max-w-[1400px] mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1.5, ease: "easeOut" }} 
          className="space-y-8"
        >
           <div className="flex items-center justify-center gap-4">
             <div className="h-[1px] w-8 bg-accent/20" />
             <span className="text-accent uppercase tracking-[0.6em] text-[10px] font-medium">Metier d&apos;Art</span>
             <div className="h-[1px] w-8 bg-accent/20" />
           </div>
           
           <h1 className="text-6xl md:text-[140px] font-serif tracking-tighter leading-[0.85] uppercase">
             The <br/>
             <span className="italic font-light opacity-80">Collection</span>
           </h1>
           
           <p className="max-w-xl mx-auto text-foreground/40 text-xs md:text-sm uppercase tracking-[0.3em] leading-loose font-light">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24"
        >
          {categories.map((cat, i) => (
            <motion.div 
              key={cat.name}
              variants={fadeInUp}
              className="group cursor-pointer"
            >
              <Link href={cat.href} className="block space-y-8">
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-subtle border border-border shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] dark:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] transition-all duration-700 group-hover:shadow-accent/5">
                  <Image 
                    src={cat.img} 
                    alt={cat.name} 
                    fill 
                    className="object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                  />
                  
                  {/* Subtle Accent Border Hover Overlay */}
                  <div className="absolute inset-0 border-[0px] group-hover:border-[1px] border-accent/20 transition-all duration-700 pointer-events-none" />
                  
                  {/* Dark Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent group-hover:opacity-40 transition-opacity duration-700" />
                </div>

                {/* Content Area */}
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="space-y-1">
                    <p className="text-accent/60 uppercase tracking-[0.4em] text-[8px] font-bold">{cat.count}</p>
                    <h3 className="text-foreground text-3xl md:text-5xl font-serif tracking-tight uppercase group-hover:opacity-70 transition-opacity duration-500 italic">
                      {cat.name}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-2 overflow-hidden">
                    <div className="h-[1px] w-0 group-hover:w-8 bg-accent/50 transition-all duration-700" />
                    <span className="text-[9px] uppercase tracking-[0.5em] text-foreground/30 group-hover:text-foreground transition-colors duration-500 font-black">
                      Explore
                    </span>
                    <ArrowRight className="w-3 h-3 text-accent transition-transform duration-500" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. FINAL CALL TO ACTION INSIDE CARD */}
      <section className="px-6 pb-64">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.5 }}
          className="max-w-[1400px] mx-auto bg-subtle border border-border rounded-[4rem] p-24 md:p-40 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Ambient Light Effect */}
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-accent/[0.02] blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-accent/[0.02] blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 space-y-16">
            <div className="space-y-6">
              <span className="text-accent uppercase tracking-[0.6em] text-[10px] font-bold block">The Aurelia Legacy</span>
              <h2 className="text-5xl md:text-[8rem] font-serif text-foreground tracking-tighter leading-[0.85] uppercase">
                Timeless<br/>
                <span className="italic font-light opacity-70">Mastery</span>
              </h2>
            </div>
            
            <p className="text-foreground/40 text-base md:text-xl font-light leading-relaxed max-w-2xl mx-auto tracking-wide italic">
              Every creation is a testament to our pursuit of brilliance. Experience the convergence of high-jewelry heritage and contemporary vision.
            </p>
            
            <div className="pt-8">
              <Link href="/shop" className="relative inline-block px-14 py-7 group">
                  <span className="absolute inset-0 bg-foreground rounded-[2rem] transition-transform duration-500 group-hover:scale-105" />
                  <span className="relative text-background uppercase tracking-[0.5em] text-[10px] font-black">
                    Visit The Boutique
                  </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
