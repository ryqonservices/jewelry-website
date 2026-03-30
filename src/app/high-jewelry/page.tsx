"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Clock } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function HighJewelryPage() {
  const pieces = [
    { 
      title: "The Celestial Sapphire", 
      desc: "A magnificent untreated Ceylon sapphire gracefully embraced by an intricate webbing of platinum and custom-cut diamonds. An eternal masterpiece of light.", 
      img: "/images/rings/beautiful-engagement-ring-with-diamonds (1).jpg",
      tag: "Collection 2026"
    },
    { 
      title: "Lumina Diamond Collar", 
      desc: "Hundreds of custom-cut diamonds are seamlessly set into a fluid collar that drapes like liquid light over the collarbone. Handcrafted in our Paris atelier.", 
      img: "/images/Necklaces/bust-showcase-jewelry-display-necklace-pendant-jewelry-lifestyle-fashion-accessories-mockup.jpg",
      tag: "Pièce Unique"
    },
    { 
      title: "The Golden Constellation", 
      desc: "An architectural marvel featuring gold orbits and moissanite stars that trace the patterns of the night sky across the wrist.", 
      img: "/images/bracelets/luxury-jewellery-display.jpg",
      tag: "Masterpiece"
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-gold selection:text-black">
      
      {/* 1. ATMOSPHERIC HERO */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <Image 
          src="/images/rings/still-life-object.jpg" 
          alt="High Jewelry Hero" 
          fill 
          priority
          className="object-cover opacity-70" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="space-y-6"
          >
            <span className="text-gold uppercase tracking-[0.8em] text-[10px] md:text-xs font-black">The Pinnacle of Craft</span>
            <h1 className="text-6xl md:text-[10rem] font-serif text-white tracking-tighter leading-none italic uppercase drop-shadow-2xl">High Jewelry</h1>
          </motion.div>
        </div>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }} 
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-24 bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </section>

      {/* 2. STORYTELLING INTRO */}
      <section className="py-40 px-6 max-w-5xl mx-auto text-center space-y-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-10">
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-7xl font-serif italic text-white leading-tight">
            "Rare stones. <br/>Masterful artistry. <br/>Ethereal brilliance."
          </motion.h2>
          <motion.div variants={fadeInUp} className="w-20 h-px bg-gold/50 mx-auto" />
          <motion.p variants={fadeInUp} className="text-white/50 text-xl font-light leading-relaxed tracking-wide italic max-w-3xl mx-auto">
            The Aurelia High Jewelry collection represents the absolute apex of our craft. Every piece is a unique creation, handcrafted over hundreds of hours by our master gem-setters and designers. These are not merely objects—they are legacies in light.
          </motion.p>
        </motion.div>
      </section>

      {/* 3. MASTERPIECES GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20 divide-y divide-white/10">
        {pieces.map((piece, i) => (
          <div key={i} className="py-32 flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            <motion.div 
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className={`w-full lg:w-3/5 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}
            >
              <div className="relative aspect-[3/4] md:aspect-[16/9] lg:aspect-[4/5] rounded-[3rem] overflow-hidden group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border border-white/5">
                <Image 
                  src={piece.img} 
                  alt={piece.title} 
                  fill 
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-1000" />
                <span className="absolute top-10 left-10 bg-black/40 backdrop-blur-md text-gold text-[8px] font-black uppercase tracking-[0.4em] px-6 py-2 rounded-full border border-gold/20 shadow-2xl">
                  {piece.tag}
                </span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`w-full lg:w-2/5 space-y-10 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}
            >
              <div className="space-y-4">
                <h3 className="text-4xl md:text-6xl font-serif text-white tracking-tighter leading-none italic uppercase">{piece.title}</h3>
                <div className="w-12 h-px bg-gold/50" />
              </div>
              <p className="text-white/60 font-light text-xl leading-relaxed tracking-wide italic">
                {piece.desc}
              </p>
              <Link href="/appointment" className="group flex items-center gap-4 text-gold uppercase tracking-[0.5em] text-[10px] font-black transition-all hover:text-white">
                Book a Private Discovery <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform duration-500" />
              </Link>
            </motion.div>
          </div>
        ))}
      </section>

      {/* 4. MACRO GALLERY - THE DETAILS */}
      <section className="py-40 bg-[#080808] border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-24 space-y-6">
             <h4 className="text-gold uppercase tracking-[0.5em] text-[10px] font-black">L&apos;Excellence</h4>
             <h2 className="text-5xl md:text-8xl font-serif text-white italic tracking-tighter uppercase leading-none">The Details of Mastery</h2>
           </div>
           
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "/images/rings/beautiful-engagement-ring-with-diamonds.jpg",
                "/images/Necklaces/flamenco-dancer-model-blue-outfit-dance-updo-romantic-posing.jpg",
                "/images/Earrings/aesthetic-golden-earrings-arrangement.jpg",
                "/images/bracelets/side-view-hand-wearing-gold-bracelet.jpg"
              ].map((img, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-square rounded-3xl overflow-hidden border border-white/5 shadow-2xl group cursor-pointer"
                >
                  <Image src={img} alt="Detail" fill className="object-cover transition-all duration-1000 grayscale group-hover:grayscale-0" />
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 5. CTA - CONSULTATION */}
      <section className="py-64 px-6 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.05)_0%,_transparent_70%)]" />
         <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="relative z-10 max-w-3xl mx-auto space-y-12">
            <h2 className="text-6xl md:text-[9rem] font-serif text-white tracking-tighter leading-none italic uppercase">Confidential discovery</h2>
            <div className="space-y-12">
               <p className="text-white/50 text-xl font-light max-w-2xl mx-auto italic tracking-wide">Our high jewelry pieces are strictly unique creations. We invite you to experience them in person within our private salons.</p>
               <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                  <Link href="/appointment" className="px-14 py-7 bg-gold text-black uppercase tracking-[0.4em] text-[10px] font-black rounded-3xl hover:bg-white transition-all shadow-luxury">
                    Request Appointment
                  </Link>
                  <Link href="/stores" className="text-white uppercase tracking-[0.4em] text-[10px] font-black border-b border-white/20 hover:border-gold hover:text-gold pb-1 transition-all">
                    Find our Salons
                  </Link>
               </div>
            </div>
         </motion.div>
      </section>
    </div>
  );
}
