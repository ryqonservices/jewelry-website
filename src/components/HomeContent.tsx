"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Gem, Shield, Award } from "lucide-react";
import { MOCK_PRODUCTS } from "@/data/mock";

const fadeInUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export function HomeContent() {
  const introRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: introProgressRaw } = useScroll({ target: introRef, offset: ["start start", "end end"] });
  const introProgress = useSpring(introProgressRaw, { stiffness: 150, damping: 40, restDelta: 0.001 });
  const text1Opacity = useTransform(introProgress, [0.05, 0.2, 0.3, 0.4], [0, 1, 1, 0]);
  const text1Y = useTransform(introProgress, [0.05, 0.2, 0.3, 0.4], [60, 0, 0, -60]);
  
  const text2Opacity = useTransform(introProgress, [0.35, 0.5, 0.65, 0.7], [0, 1, 1, 0]);
  const text2Y = useTransform(introProgress, [0.35, 0.5, 0.65, 0.7], [60, 0, 0, -60]);

  const text3Opacity = useTransform(introProgress, [0.65, 0.8, 0.9, 0.95], [0, 1, 1, 0]);
  const text3Y = useTransform(introProgress, [0.65, 0.8, 0.9, 0.95], [60, 0, 0, -60]);

  const detailsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: detailsProgressRaw } = useScroll({ target: detailsRef, offset: ["start start", "end end"] });
  const detailsProgress = useSpring(detailsProgressRaw, { stiffness: 150, damping: 40, restDelta: 0.001 });
  
  const ringScale = useTransform(detailsProgress, [0, 0.5], [0.8, 1]);
  const ringY = useTransform(detailsProgress, [0, 1], [100, -100]);
  
  const feature1Opacity = useTransform(detailsProgress, [0.2, 0.3, 0.4], [0, 1, 0]);
  const feature2Opacity = useTransform(detailsProgress, [0.4, 0.5, 0.6], [0, 1, 0]);
  const feature3Opacity = useTransform(detailsProgress, [0.6, 0.7, 0.8], [0, 1, 0]);

  return (
    <div className="w-full bg-black text-[#f5f5f7] font-sans selection:bg-[#0071e3] selection:text-white">
      
      {/* 1. HERO SECTION - Apple Style Image Sequence */}
      <HeroSequence />

      {/* 2. INTRO STORYTELLING - Apple Style Sticky Text Fade */}
      <section ref={introRef} className="relative h-[200vh] bg-black">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-6">
          <div className="absolute inset-0 z-0 opacity-20">
             <Image src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&q=80" alt="bg" fill className="object-cover" />
             <div className="absolute inset-0 bg-black/80 backdrop-blur-3xl" />
          </div>
          
          <div className="relative z-10 text-center max-w-5xl mx-auto">
            <motion.h2 style={{ opacity: text1Opacity, y: text1Y }} className="absolute inset-0 flex items-center justify-center text-4xl md:text-7xl font-semibold tracking-tighter leading-tight text-white">
              We didn't just design a ring.<br/><span className="bg-gradient-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent">We captured light itself.</span>
            </motion.h2>
            
            <motion.h2 style={{ opacity: text2Opacity, y: text2Y }} className="absolute inset-0 flex items-center justify-center text-4xl md:text-7xl font-semibold tracking-tighter leading-tight text-white">
              Forged in unyielding platinum.<br/>Set with <span className="text-[#0071e3]">flawless</span> precision.
            </motion.h2>
            
            <motion.h2 style={{ opacity: text3Opacity, y: text3Y }} className="absolute inset-0 flex items-center justify-center text-4xl md:text-7xl font-semibold tracking-tighter leading-tight text-white">
              A culmination of centuries<br/><span className="bg-gradient-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent">of high jewelry mastery.</span>
            </motion.h2>
          </div>
        </div>
      </section>

      {/* 3. THE DETAILS - Features Sticky Section */}
      <section ref={detailsRef} className="relative h-[200vh] bg-[#f5f5f7] text-[#1d1d1f]">
        <div className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 max-w-7xl mx-auto">
          
          <div className="w-full md:w-1/2 h-[50vh] md:h-screen flex items-center justify-center relative">
            <motion.div style={{ scale: ringScale, y: ringY }} className="relative w-full max-w-md aspect-square rounded-[3rem] overflow-hidden shadow-2xl border flex-shrink-0 border-black/5 bg-white">
              <Image src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80" alt="The Ring" fill className="object-cover" />
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative flex items-center justify-start md:pl-20">
            <motion.div style={{ opacity: feature1Opacity }} className="absolute">
              <div className="w-12 h-12 bg-[#1d1d1f] rounded-2xl flex items-center justify-center text-white mb-6">
                 <Gem className="w-6 h-6" />
              </div>
              <h3 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#1d1d1f] mb-4">VVS1 Clarity.</h3>
              <p className="text-xl text-[#1d1d1f]/60 font-medium max-w-sm leading-relaxed">Sourced from the most exclusive diamond mines, possessing near-perfect internal clarity and absolute colorlessness.</p>
            </motion.div>
            
            <motion.div style={{ opacity: feature2Opacity }} className="absolute">
               <div className="w-12 h-12 bg-[#1d1d1f] rounded-2xl flex items-center justify-center text-white mb-6">
                 <Shield className="w-6 h-6" />
               </div>
               <h3 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#1d1d1f] mb-4">18K Solid Gold.</h3>
               <p className="text-xl text-[#1d1d1f]/60 font-medium max-w-sm leading-relaxed">Melted and hand-poured in our Paris atelier. Hypoallergenic, substantial, and guaranteed to hold its luster forever.</p>
            </motion.div>

            <motion.div style={{ opacity: feature3Opacity }} className="absolute">
               <div className="w-12 h-12 bg-[#1d1d1f] rounded-2xl flex items-center justify-center text-white mb-6">
                 <Award className="w-6 h-6" />
               </div>
               <h3 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#1d1d1f] mb-4">Master Cut.</h3>
               <p className="text-xl text-[#1d1d1f]/60 font-medium max-w-sm leading-relaxed">58 intricate facets cut by laser precision to bounce optimal light. The brilliance must be seen to be believed.</p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 4. PRICE & PURCHASE SECTION - Formal Details Box */}
      <section className="py-40 bg-white text-[#1d1d1f] border-t border-[#e5e5ea]">
        <div className="max-w-5xl mx-auto px-6">
           <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
             className="flex flex-col md:flex-row justify-between items-start gap-16"
           >
              <motion.div variants={fadeInUp} className="md:w-1/2">
                <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-4">The Eternal<br/>Halo Ring</h2>
                <div className="flex gap-4 mb-8 text-xs uppercase tracking-wider font-semibold text-[#0071e3]">
                  <span>In Stock</span>
                  <span className="text-[#e5e5ea]">|</span>
                  <span>Free Overnight Shipping</span>
                </div>
                
                <p className="text-xl leading-relaxed text-[#1d1d1f]/70 font-medium mb-8">
                  The ultimate expression of commitment. Our flagship halo design surrounds a flawless center stone with a breathtaking circumference of pavé diamonds.
                </p>

                <div className="space-y-5 border-t border-b border-[#e5e5ea] py-6 mb-8">
                  <div className="flex justify-between text-[15px]"><span className="text-[#1d1d1f]/60 font-medium">Center Stone</span><span className="font-semibold">2.5 Carat Diamond</span></div>
                  <div className="flex justify-between text-[15px]"><span className="text-[#1d1d1f]/60 font-medium">Metal</span><span className="font-semibold">18k Yellow Gold</span></div>
                  <div className="flex justify-between text-[15px]"><span className="text-[#1d1d1f]/60 font-medium">SKU</span><span className="font-semibold">AUR-9921-G</span></div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="md:w-5/12 w-full bg-[#f5f5f7] p-10 md:p-12 rounded-[2.5rem] sticky top-32">
                 <p className="text-[13px] font-semibold tracking-wide text-[#1d1d1f]/50 mb-2 uppercase">Total Investment</p>
                 <h3 className="text-5xl font-semibold tracking-tight mb-8 text-[#1d1d1f]">$12,500</h3>
                 
                 <div className="flex flex-col gap-4">
                   <Link href="/cart" className="w-full bg-[#0071e3] text-white py-4 px-6 text-[15px] font-semibold text-center rounded-full hover:bg-[#0077ed] transition-colors duration-300 shadow-sm flex justify-center items-center gap-2">
                     Add To Bag
                   </Link>
                   <Link href="/collections" className="w-full bg-white text-[#1d1d1f] py-4 px-6 text-[15px] font-semibold text-center rounded-full hover:bg-white/80 transition-colors duration-300">
                     Explore More Collections
                   </Link>
                 </div>
                 
                 <p className="text-[12px] text-center text-[#1d1d1f]/40 font-medium mt-6">Taxes and duties calculated at checkout.</p>
              </motion.div>
           </motion.div>
        </div>
      </section>

      {/* 5. Additional Collections Grid */}
      <section className="py-32 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-6">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center mb-24">
             <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] mb-4">More Brilliance</motion.h2>
             <motion.p variants={fadeInUp} className="text-[#1d1d1f]/50 font-medium text-[15px]">From The House of Aurelia</motion.p>
           </motion.div>
           
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-3 gap-8">
             {MOCK_PRODUCTS.slice(1, 4).map((p) => (
               <Link href={`/product/${p.id}`} key={p.id} className="group cursor-pointer block">
                  <motion.div variants={fadeInUp} className="relative aspect-square bg-white rounded-[2rem] overflow-hidden shadow-sm mb-6 hover:shadow-xl transition-all duration-500">
                    <Image src={p.image} alt={p.name} fill className="object-cover p-8 group-hover:scale-105 transition-transform duration-700" />
                  </motion.div>
                  <div className="text-center">
                    <h3 className="font-semibold text-[17px] text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors tracking-tight">{p.name}</h3>
                    <p className="text-[#1d1d1f]/50 font-medium text-[15px] mt-1">${p.price.toLocaleString()}</p>
                  </div>
               </Link>
             ))}
           </motion.div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-32 md:py-40 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="mb-24"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-semibold tracking-tighter mb-4 text-white">A Word from Our Clients</motion.h2>
            <motion.p variants={fadeInUp} className="text-white/50 font-medium text-[15px]">Real experiences.</motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i} variants={fadeInUp}
                className="bg-[#1d1d1f] p-10 md:p-12 rounded-[2.5rem] hover:bg-[#2d2d2f] transition-colors duration-500"
              >
                <div className="flex text-[#0071e3] mb-8 justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-5 h-5 fill-currentColor" />
                  ))}
                </div>
                <p className="text-white/90 font-medium text-lg leading-relaxed mb-10 tracking-tight">
                  "The attention to detail and craftsmanship is unparalleled. I wear my Aurelia piece every day and it never fails to draw compliments."
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#2d2d2f] overflow-hidden relative">
                    <Image src={`https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80`} fill alt="Avatar" className="object-cover" />
                  </div>
                  <p className="text-[13px] text-white/50 font-semibold">Verified Buyer</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. Call To Action */}
      <section className="py-32 md:py-48 bg-white relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 text-[#1d1d1f]">
              Begin Your Journey
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl font-medium tracking-tight text-[#1d1d1f]/60 mb-12">
              Join our exclusive newsletter to receive early access to new collections and extraordinary events.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full sm:w-2/3 bg-[#f5f5f7] py-4 px-6 text-[#1d1d1f] placeholder:text-[#1d1d1f]/40 focus:outline-none focus:ring-2 focus:ring-[#0071e3]/50 transition-all rounded-full font-medium"
              />
              <button className="w-full sm:w-1/3 bg-[#1d1d1f] text-white py-4 px-6 text-[15px] font-semibold hover:bg-[#333336] transition-all rounded-full">
                Subscribe
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

function HeroSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress: rawProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const scrollYProgress = useSpring(rawProgress, { stiffness: 150, damping: 40, restDelta: 0.001 });

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const promises = [];
      for (let i = 1; i <= 240; i++) {
        const img = new window.Image();
        const num = i.toString().padStart(3, "0");
        img.src = `/images/herosection/ezgif-frame-${num}.jpg`;
        promises.push(
          new Promise<HTMLImageElement>((resolve) => {
            img.onload = () => resolve(img);
            img.onerror = () => resolve(img);
          })
        );
      }
      const loadedImages = await Promise.all(promises);
      setImages(loadedImages);
      setLoaded(true);
    };
    loadImages();
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!loaded || !canvasRef.current || images.length === 0) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;
    
    let frameIndex = Math.floor(latest * (images.length - 1));
    if (frameIndex < 0) frameIndex = 0;
    if (frameIndex >= images.length) frameIndex = images.length - 1;
    
    const img = images[frameIndex];
    if (img && img.width > 0) { 
      const { width, height } = canvasRef.current;
      const scale = Math.max(width / img.width, height / img.height);
      const x = (width / 2) - (img.width / 2) * scale;
      const y = (height / 2) - (img.height / 2) * scale;
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    }
  });

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        if (loaded && images.length > 0) {
           const ctx = canvasRef.current.getContext("2d");
           const img = images[0]; 
           if(ctx && img.width > 0) {
             const { width, height } = canvasRef.current;
             const scale = Math.max(width / img.width, height / img.height);
             const x = (width / 2) - (img.width / 2) * scale;
             const y = (height / 2) - (img.height / 2) * scale;
             ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
           }
        }
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [loaded, images]);

  const text1Opacity = useTransform(scrollYProgress, [0.05, 0.15, 0.25], [0, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0.05, 0.15, 0.25], [50, 0, -50]);

  const text2Opacity = useTransform(scrollYProgress, [0.35, 0.45, 0.55], [0, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.35, 0.45, 0.55], [50, 0, -50]);

  const text3Opacity = useTransform(scrollYProgress, [0.70, 0.80, 0.90], [0, 1, 0]);
  const text3Y = useTransform(scrollYProgress, [0.70, 0.80, 0.90], [50, 0, -50]);

  return (
    <div ref={containerRef} className="relative h-[450vh] bg-black w-full text-white font-sans">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        {!loaded && (
           <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black">
             <div className="w-8 h-8 border-t-2 border-white rounded-full animate-spin mb-4" />
             <p className="text-white/60 font-medium text-[12px] tracking-wide">Loading Experience</p>
           </div>
        )}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 opacity-100" />
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/50 via-transparent to-black/30 pointer-events-none" />
        
        <motion.div style={{ opacity: text1Opacity, y: text1Y }} className="absolute z-10 text-center pointer-events-none w-full px-6">
          <h2 className="text-5xl md:text-8xl font-semibold tracking-tighter text-white drop-shadow-lg">The New Masterpiece</h2>
        </motion.div>

        <motion.div style={{ opacity: text2Opacity, y: text2Y }} className="absolute z-10 text-center pointer-events-none w-full px-6">
          <h2 className="text-5xl md:text-8xl font-semibold tracking-tighter text-white drop-shadow-lg flex flex-col items-center"><span className="text-white/50 text-2xl md:text-4xl mb-2 tracking-tight">Precision.</span>Crafted to Perfection.</h2>
        </motion.div>

        <motion.div style={{ opacity: text3Opacity, y: text3Y }} className="absolute z-10 text-center pointer-events-none w-full px-6">
          <h2 className="text-5xl md:text-8xl font-semibold tracking-tighter bg-gradient-to-br from-white via-white to-[#0071e3] bg-clip-text text-transparent drop-shadow-lg">Defying Convention.</h2>
        </motion.div>
      </div>
    </div>
  );
}
