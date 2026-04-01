"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, ChevronDown, Bell, Shield, Sparkles, Globe, ArrowRight, Heart } from "lucide-react";
import { MOCK_PRODUCTS } from "@/data/mock";

// --- ANIMATION VARIANTS ---
const fadeInUp: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: import("framer-motion").Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

// --- HERO SECTION ---
function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.currentTime >= 5) {
        video.currentTime = 0;
        video.play();
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <video 
        ref={videoRef}
        src="/images/hero-video/hero-luxury-background.mp4"
        muted
        playsInline
        autoPlay
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1.5, ease: "easeOut" }}
         className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
      >
        <motion.div 
           initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
           className="mb-8"
        >
           <div className="w-px h-16 bg-gradient-to-t from-gold to-transparent mx-auto" />
           <span className="text-gold uppercase tracking-[0.5em] text-[10px] md:text-xs font-bold block mt-4">Fine Jewelry • Paris</span>
        </motion.div>
        <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-serif text-white tracking-tighter mb-4 drop-shadow-[0_0_30px_rgba(0,0,0,0.8)] font-bold font-black leading-none select-none uppercase italic">AURELIA</h1>
        <p className="text-white/40 uppercase tracking-[1em] text-[10px] md:text-sm font-light">Experience the Light</p>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10 flex flex-col items-center gap-4 text-white/40 group cursor-pointer">
           <span className="text-[9px] uppercase tracking-widest group-hover:text-gold transition-colors">Begin the Story</span>
           <ChevronDown className="w-4 h-4 text-gold group-hover:scale-125 transition-transform" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// --- PRODUCT CARD ---
function ProductCard({ product }: { product: any }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="group"
    >
      {/* Formal Image Container */}
      <div className="relative aspect-[3.2/4.2] rounded-[2rem] overflow-hidden bg-[#080808] mb-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] border border-white/5 transition-all duration-700 hover:border-gold/20 hover:shadow-gold/5">
        <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
        
        {product.isNew && (
          <span className="absolute top-10 left-1/2 -translate-x-1/2 bg-gold/90 text-black text-[8px] font-black uppercase tracking-[0.3em] px-5 py-2 rounded-full backdrop-blur-md shadow-xl">
            Nouveauté
          </span>
        )}
        
        {/* Hidden discrete button */}
        <Link href={`/product/${product.id}`} className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
           <span className="bg-white text-black px-10 py-5 rounded-full text-[9px] font-black uppercase tracking-[0.4em] translate-y-10 group-hover:translate-y-0 transition-all duration-700 shadow-2xl hover:bg-gold">
              Inquire
           </span>
        </Link>
        
        <button className="absolute top-8 right-8 p-3 rounded-full bg-black/40 text-white/40 hover:text-red-500 hover:bg-black/60 transition-all active:scale-90 z-20">
           <Heart className="w-4 h-4" />
        </button>
      </div>

      {/* Formal Text Arrangement */}
      <div className="text-center px-4 space-y-4">
        <div className="space-y-1">
          <p className="text-gold uppercase tracking-[0.4em] text-[8px] font-black mb-2 opacity-80">{product.category}</p>
          <h3 className="text-white font-serif text-2xl md:text-3xl tracking-tight leading-tight group-hover:text-gold transition-colors duration-500 px-2">
            {product.name}
          </h3>
        </div>
        
        <div className="flex flex-col items-center gap-4">
           <div className="w-8 h-px bg-white/10" />
           <p className="text-white font-serif text-xl md:text-2xl italic tracking-tight opacity-70">
             From ${product.price.toLocaleString()}
           </p>
        </div>
      </div>
    </motion.div>
  );
}

// --- MAIN PAGE ---
export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center text-white">
        <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }} transition={{ duration: 3, repeat: Infinity }} className="text-gold text-7xl font-serif mb-16 tracking-tighter">A</motion.div>
        <div className="w-60 h-px bg-white/5 rounded-full overflow-hidden relative">
          <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5 }} className="h-full bg-gold shadow-[0_0_15px_#D4AF37]" />
        </div>
        <p className="text-gold text-[10px] uppercase tracking-[0.8em] mt-10 font-bold opacity-60">Forging Your Experience</p>
      </div>
    );
  }

  return (
    <main className="bg-background selection:bg-accent selection:text-background min-h-screen">
      {/* 1. HERO (Video Background) */}
      <HeroSection />

      {/* VIDEO FLOW SECTION 1 */}
      <section className="py-40 px-6 md:px-24 max-w-7xl mx-auto overflow-hidden">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="flex flex-col md:flex-row items-center gap-16 md:gap-32">
          <motion.div variants={fadeInUp} className="md:w-1/2 space-y-10">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-px bg-accent" />
              <span className="text-accent uppercase tracking-[0.5em] text-[10px] font-black">The Art of Brilliance</span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground leading-[0.9] tracking-tighter drop-shadow-2xl font-bold">Perfected by <br/><span className="italic">Nature</span></h2>
            <p className="text-foreground/60 font-light text-xl leading-relaxed max-w-md italic">Our stone selection process is legendary. One in a thousand diamonds makes the cut for an Aurelia setting.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 1.2 }}
            className="md:w-1/2 aspect-[3.5/4.5] w-full relative rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,1)] bg-neutral-900/50 border border-white/5"
          >
             <video src="/video/1.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>
      </section>

      {/* VIDEO FLOW SECTION 2 */}
      <section className="py-40 px-6 md:px-24 max-w-7xl mx-auto overflow-hidden bg-background">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="flex flex-col-reverse md:flex-row items-center gap-16 md:gap-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 1.2 }}
            className="md:w-1/2 aspect-[3.5/4.5] w-full relative rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,1)] bg-neutral-900/50 border border-white/5"
          >
             <video src="/video/2.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
          </motion.div>
          <motion.div variants={fadeInUp} className="md:w-1/2 space-y-10">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-px bg-accent" />
              <span className="text-accent uppercase tracking-[0.5em] text-[10px] font-bold">Unrivaled Legacy</span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground leading-[0.9] tracking-tighter font-bold">Solid <br/><span className="italic">Foundations</span></h2>
            <p className="text-foreground/60 font-light text-xl leading-relaxed max-w-md">Every piece is hand-poured in our Paris atelier. Hypoallergenic, substantial, and guaranteed for life.</p>
            <div className="flex gap-16 pt-6">
               <motion.div whileInView={{ opacity: [0, 1], y: [10, 0] }} transition={{ delay: 0.5 }}>
                 <p className="text-foreground text-5xl font-serif">100%</p>
                 <p className="text-foreground/40 uppercase text-[9px] tracking-[0.3em] mt-3 font-bold">Ethical Gold</p>
               </motion.div>
               <motion.div whileInView={{ opacity: [0, 1], y: [10, 0] }} transition={{ delay: 0.7 }}>
                 <p className="text-foreground text-5xl font-serif">Hand</p>
                 <p className="text-foreground/40 uppercase text-[9px] tracking-[0.3em] mt-3 font-bold">Polished</p>
               </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* VIDEO FLOW SECTION 3 */}
      <section className="py-40 px-6 md:px-24 max-w-7xl mx-auto overflow-hidden">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="flex flex-col md:flex-row items-center gap-16 md:gap-32">
          <motion.div variants={fadeInUp} className="md:w-1/2 space-y-10">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-px bg-accent" />
              <span className="text-accent uppercase tracking-[0.5em] text-[10px] font-bold">Future Heritage</span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground leading-[0.9] tracking-tighter font-bold">A New <br/><span className="italic">Radiance</span></h2>
            <p className="text-foreground/60 font-light text-xl leading-relaxed max-w-md">Join the inner circle and be the first to experience our seasonal high-jewelry drops before they hit the public collection.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 1.2 }}
            className="md:w-1/2 aspect-[3.5/4.5] w-full relative rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,1)] bg-neutral-900/50 border border-white/5"
          >
             <video src="/video/3.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="py-48 px-8 max-w-7xl mx-auto bg-background">
         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-32">
           <motion.h2 variants={fadeInUp} className="text-6xl md:text-8xl font-serif text-foreground mb-12 tracking-tighter uppercase italic">Collections</motion.h2>
           <motion.div variants={fadeInUp} className="w-24 h-px bg-accent/20 mx-auto" />
         </motion.div>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { name: 'Rings', icon: '/images/rings/still-life-object.jpg', href: '/shop?category=rings' },
              { name: 'Necklaces', icon: '/images/Necklaces/luxury-shine-diamonds-digital-art.jpg', href: '/shop?category=necklaces' },
              { name: 'Bracelets', icon: '/images/bracelets/side-view-silver-bracelets-with-diamonds-black-wall.jpg', href: '/shop?category=bracelets' },
              { name: 'Earrings', icon: '/images/Earrings/still-life-aesthetic-earrings.jpg', href: '/shop?category=earrings' }
            ].map((cat, i) => (
              <Link href={cat.href} key={cat.name}>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 1 }}
                  className="relative h-[600px] rounded-[3.5rem] overflow-hidden group cursor-pointer shadow-[0_30px_70px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9)] border border-border"
                >
                   <Image src={cat.icon} alt={cat.name} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s]" />
                   <div className="absolute inset-0 bg-background/60 group-hover:bg-background/10 transition-all duration-700" />
                   <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-foreground">
                    <h3 className="text-current text-3xl md:text-4xl font-serif mb-6 tracking-tight uppercase opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 text-center italic">
                      {cat.name}
                    </h3>
                    <div className="flex items-center gap-4 text-current text-[9px] uppercase tracking-[0.5em] translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 font-black">
                      Explore Shop <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
         </div>
      </section>

      {/* BENEFITS SECTION INSIDE CARD */}
      <section className="py-48 px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="max-w-7xl mx-auto bg-subtle border border-border rounded-[4rem] p-16 md:p-32 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Accent Light */}
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-accent/[0.03] blur-[120px] rounded-full" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 relative z-10">
            {[
              { Icon: Shield, title: 'Insured Delivery', p: 'Complimentary global overnight shipping, fully insured from our vault to yours.' },
              { Icon: Sparkles, title: 'Life Care', p: 'Our commitment is eternal. We provide comprehensive cleaning and maintenance for life.' },
              { Icon: Globe, title: 'Pure Origin', p: 'Every stone follows the Kimberley Process, ensuring a sustainable and ethical path.' },
              { Icon: Bell, title: 'Concierge', p: 'Dedicated expert advisors available 24/7 for personalized styling and guidance.' }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} className="space-y-6">
                 <div className="w-16 h-16 rounded-2xl bg-background border border-border flex items-center justify-center group shadow-sm">
                   <item.Icon className="w-7 h-7 text-foreground/40 group-hover:text-accent group-hover:scale-110 transition-all duration-500" />
                 </div>
                 <h4 className="text-foreground font-serif text-3xl tracking-tighter italic">{item.title}</h4>
                 <p className="text-foreground/50 text-sm leading-relaxed font-light italic">{item.p}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SIGNATURE PIECES */}
      <section className="py-48 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-10">
             <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
               <h2 className="text-6xl md:text-7xl font-serif text-foreground mb-8 tracking-tighter leading-none">The Vault</h2>
               <p className="text-foreground/40 text-xl font-light tracking-wide italic">"A curated selection of our most rare and masterful pieces."</p>
             </motion.div>
             <Link href="/shop" className="group text-foreground uppercase tracking-[0.4em] text-[10px] flex items-center gap-4 font-black p-4 border border-border rounded-2xl hover:bg-subtle transition-all">
               The Full Collection <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform duration-500" />
             </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24">
             {MOCK_PRODUCTS.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-64 px-8 relative overflow-hidden bg-background text-center border-t border-border">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.03)_0%,_transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.03)_0%,_transparent_60%)]" />
         <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative z-10 max-w-4xl mx-auto space-y-16">
            <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-serif text-foreground tracking-tighter leading-none italic">Eternal Circle</h2>
            <div className="space-y-4">
              <p className="text-accent uppercase tracking-[0.8em] text-[10px] font-black">Private Invitation Only</p>
              <p className="text-foreground/50 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">Gain access to extraordinary events and exclusive heritage releases from the House of Aurelia.</p>
            </div>
            <form className="flex flex-col md:flex-row gap-6 max-w-2xl mx-auto">
               <input 
                 type="email" 
                 placeholder="your@address.com" 
                 className="flex-1 bg-subtle border border-border px-10 py-6 text-foreground text-lg focus:outline-none focus:border-accent transition-all rounded-3xl placeholder:text-foreground/20" 
                 required
               />
               <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-14 py-6 bg-accent text-background font-black uppercase tracking-[0.3em] text-[10px] rounded-3xl hover:opacity-80 transition-all shadow-xl">Subscribe</motion.button>
            </form>
            <p className="text-foreground/20 text-[9px] uppercase tracking-widest">By joining, you agree to our private membership terms & conditions.</p>
         </motion.div>
      </section>
    </main>
  );
}
