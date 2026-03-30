"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Sparkles, Shield } from "lucide-react";
import { MOCK_PRODUCTS } from "@/data/mock";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

export default function EngagementPage() {
  const engagementRings = MOCK_PRODUCTS.filter(p => p.category === 'Rings').slice(0, 4);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-gold selection:text-black pt-20">
      
      {/* 1. ROMANTIC HERO */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <Image 
          src="/images/rings/beautiful-engagement-ring-with-diamonds.jpg" 
          alt="Engagement Hero" 
          fill 
          priority
          className="object-cover opacity-80" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="space-y-8"
          >
            <span className="text-gold uppercase tracking-[0.8em] text-[10px] md:text-xs font-black">Promises in Light</span>
            <h1 className="text-6xl md:text-[11rem] font-serif text-white tracking-tighter leading-none italic uppercase drop-shadow-2xl">Eternal Love</h1>
            <p className="text-white/60 uppercase tracking-[0.6em] text-[10px] md:text-sm font-black">Engagement & Bridal</p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE SYMBOL SECTION - CENTERED ELEGANCE */}
      <section className="py-40 px-6 max-w-4xl mx-auto text-center space-y-16">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <Heart className="w-12 h-12 text-gold mx-auto mb-10 opacity-60" />
          <h2 className="text-4xl md:text-7xl font-serif italic text-white leading-tight">"A ring is a circle <br/>with no end. <br/>A promise with no limit."</h2>
          <div className="w-20 h-px bg-gold/50 mx-auto mt-12" />
          <p className="text-white/50 text-xl font-light leading-relaxed tracking-wide italic mt-12">
            Selecting an engagement ring is one of the most significant moments of your life. Every Aurelia diamond is chosen for its unique soul, fire, and brilliance, ensuring that your promise is as enduring as the stone itself.
          </p>
        </motion.div>
      </section>

      {/* 3. THE COLLECTION - REFINED GRID */}
      <section className="py-40 bg-[#060606]">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
             <div className="space-y-4">
               <h2 className="text-5xl md:text-8xl font-serif text-white italic tracking-tighter leading-none uppercase">The Solitaires</h2>
               <p className="text-gold uppercase tracking-[0.5em] text-[10px] font-black">Bespoke Settings</p>
             </div>
             <Link href="/shop" className="group text-white uppercase tracking-[0.5em] text-[10px] flex items-center gap-4 font-black border-b border-white/20 pb-2 hover:border-gold hover:text-gold transition-all">
               View All Rings <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform duration-500" />
             </Link>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {engagementRings.map((ring, i) => (
                <motion.div 
                  key={ring.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <Link href={`/product/${ring.id}`} className="block space-y-8">
                    <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-[#111] border border-white/5 group-hover:border-gold/30 shadow-2xl transition-all duration-1000">
                      <Image src={ring.image} alt={ring.name} fill className="object-cover transition-transform duration-[1.5s] group-hover:scale-110 p-4" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700" />
                    </div>
                    <div className="text-center space-y-2">
                       <h3 className="font-serif text-3xl text-white italic group-hover:text-gold transition-colors">{ring.name}</h3>
                       <p className="text-white/60 tracking-tight text-xl font-serif italic">${ring.price.toLocaleString()}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 4. BESPOKE PROCESS - SPLIT LAYOUT */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-20 xl:gap-40">
           <div className="md:w-1/2 relative">
             <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_40px_100px_-30px_rgba(0,0,0,1)] border border-white/5 relative z-10 transition-transform duration-1000 hover:scale-[1.02]">
               <Image src="/images/rings/beautiful-engagement-ring-with-diamonds (1).jpg" alt="Bespoke" fill className="object-cover" />
             </div>
             <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold/5 blur-[120px] rounded-full" />
           </div>
           <div className="md:w-1/2 space-y-12">
              <div className="space-y-6">
                <Sparkles className="w-10 h-10 text-gold opacity-60" />
                <h2 className="text-6xl md:text-8xl font-serif text-white tracking-tighter leading-none italic uppercase">Made just <br/>for you</h2>
                <div className="w-12 h-px bg-gold/50" />
              </div>
              <p className="text-white/60 font-light text-xl leading-relaxed tracking-wide italic">
                Aurelia offers a truly bespoke experience for our engagement and bridal clients. Work directly with our master designers in Paris to create a unique symbolic token that captures the unique story of your love.
              </p>
              <ul className="space-y-4">
                 <li className="flex items-center gap-4 text-white/40 uppercase tracking-[0.4em] text-[10px] font-black"><Shield className="w-4 h-4 text-gold" /> Certified Ethical Diamonds</li>
                 <li className="flex items-center gap-4 text-white/40 uppercase tracking-[0.4em] text-[10px] font-black"><Sparkles className="w-4 h-4 text-gold" /> GIA & Kimberley Certification</li>
              </ul>
              <Link href="/appointment" className="inline-block px-14 py-7 bg-gold text-black uppercase tracking-[0.4em] text-[10px] font-black rounded-3xl hover:bg-white transition-all shadow-luxury">
                 Request Consultation
              </Link>
           </div>
        </div>
      </section>

    </div>
  );
}
