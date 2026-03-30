"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Clock, MapPin, Globe } from "lucide-react";

const fadeInUp: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: import("framer-motion").Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function AboutPage() {
  const milestones = [
    { year: "1924", title: "The First Forge", desc: "Arnaud Aurelia opens his small workshop in the heart of the Place Vendôme, Paris, dedicated to the art of light through stones.", img: "/images/rings/still-life-object.jpg" },
    { year: "1958", title: "Royal Commissions", desc: "Aurelia is chosen by the Royal House to craft the coronation crown gems, marking our entry into the world of elite high-jewelry.", img: "/images/Necklaces/flamenco-dancer-model-blue-outfit-dance-updo-romantic-posing.jpg" },
    { year: "2024", title: "A New Radiance", desc: "The House of Aurelia evolves for the digital age, bringing our century-old techniques to a global audience while maintaining our artisan soul.", img: "/images/bracelets/side-view-hand-wearing-gold-bracelet.jpg" }
  ];

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-gold selection:text-black pt-20">
      
      {/* 1. HERITAGE HERO */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <Image 
          src="/images/Necklaces/bust-showcase-jewelry-display-necklace-pendant-jewelry-lifestyle-fashion-accessories-mockup.jpg" 
          alt="Our Story Hero" 
          fill 
          priority
          className="object-cover opacity-60 grayscale" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="space-y-6"
          >
            <span className="text-gold uppercase tracking-[1em] text-[10px] md:text-sm font-black">Heritage of Excellence</span>
            <h1 className="text-7xl md:text-[12rem] font-serif text-white tracking-tighter leading-none italic uppercase drop-shadow-2xl font-black">Since 1924</h1>
          </motion.div>
        </div>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
           <span className="text-[8px] uppercase tracking-[0.6em] text-white/40">The Journey</span>
           <div className="w-px h-20 bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </section>

      {/* 2. THE PHILOSOPHY SECTION */}
      <section className="py-60 px-6 max-w-5xl mx-auto text-center space-y-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-12">
          <motion.div variants={fadeInUp} className="w-20 h-px bg-gold/50 mx-auto" />
          <motion.h2 variants={fadeInUp} className="text-5xl md:text-8xl font-serif italic text-white leading-tight uppercase tracking-tighter">"We do not cut <br/>diamonds. We <br/>release their <br/><span className="gold-gradient italic">light</span>."</motion.h2>
          <motion.p variants={fadeInUp} className="text-white/50 text-xl font-light leading-relaxed tracking-wide italic max-w-2xl mx-auto">
            Our philosophy has remained unchanged for a century. We believe that every stone has a story to tell, and our role as artisans is to provide the perfect stage for that narrative to unfold.
          </motion.p>
        </motion.div>
      </section>

      {/* 3. VERTICAL TIMELINE */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/5 md:block hidden" />
        
        {milestones.map((milestone, i) => (
          <div key={i} className={`flex flex-col md:flex-row items-center gap-16 md:gap-32 py-40 relative z-10 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
             <motion.div 
               initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2 }}
               className="md:w-1/2"
             >
               <div className="relative aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden group shadow-2xl border border-white/5">
                 <Image src={milestone.img} alt={milestone.title} fill className="object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale" />
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all" />
                 <span className="absolute top-10 right-10 text-gold text-5xl font-serif italic drop-shadow-2xl">{milestone.year}</span>
               </div>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="md:w-1/2 space-y-8 text-center md:text-left"
             >
                <h3 className="text-4xl md:text-6xl font-serif text-white tracking-tighter leading-none italic uppercase">{milestone.title}</h3>
                <p className="text-white/60 font-light text-xl leading-relaxed tracking-wide italic">
                  {milestone.desc}
                </p>
                <div className="w-12 h-px bg-gold/50 mx-auto md:mx-0" />
             </motion.div>
          </div>
        ))}
      </section>

      {/* 4. THE ATELIER SECTION */}
      <section className="py-40 bg-[#080808] border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div className="space-y-12">
              <div className="space-y-6">
                <Globe className="w-10 h-10 text-gold opacity-60" />
                <h2 className="text-6xl md:text-[9rem] font-serif text-white tracking-tighter leading-none italic uppercase">Global Soul</h2>
                <div className="w-20 h-px bg-gold/50" />
              </div>
              <p className="text-white/40 text-2xl font-light italic leading-relaxed">From the heart of Paris to the world’s most iconic addresses, our boutiques serve as sanctuaries for jewelry lovers who seek more than just metal and stone.</p>
              <div className="grid grid-cols-2 gap-10">
                 <div className="space-y-2"><p className="text-white font-serif italic text-3xl italic">Paris</p><p className="text-[9px] uppercase tracking-[0.4em] text-gold font-black">Place Vendôme</p></div>
                 <div className="space-y-2"><p className="text-white font-serif italic text-3xl italic">New York</p><p className="text-[9px] uppercase tracking-[0.4em] text-gold font-black">Fifth Avenue</p></div>
              </div>
           </div>
           <div className="relative aspect-square">
             <div className="absolute inset-0 border border-gold/20 rounded-full animate-spin-slow p-20">
               <div className="w-full h-full rounded-full border border-gold/10 flex items-center justify-center">
                  <span className="text-gold uppercase tracking-[1em] text-[8px] font-black -rotate-90">Experience Mastery</span>
               </div>
             </div>
             <div className="absolute inset-24 rounded-full overflow-hidden border border-white/5">
                <Image src="/images/Earrings/portrait-young-female-with-beautiful-make-up-earrings-with-gems-isolated.jpg" alt="Atelier" fill className="object-cover" />
             </div>
           </div>
        </div>
      </section>

    </div>
  );
}
