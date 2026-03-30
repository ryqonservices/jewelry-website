"use client";

import { use, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MOCK_PRODUCTS } from "@/data/mock";
import { ChevronLeft, Plus, Minus, Check, Star, Share2, Heart, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const productId = unwrappedParams.id;
  const product = MOCK_PRODUCTS.find((p) => p.id === productId) || MOCK_PRODUCTS[0];
  
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [selectedMetal, setSelectedMetal] = useState(product.variations?.metals?.[0] || "");
  const [selectedSize, setSelectedSize] = useState(product.variations?.sizes?.[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeTab, setActiveTab] = useState("details");

  useEffect(() => {
    setSelectedImage(product.image);
    setSelectedMetal(product.variations?.metals?.[0] || "");
    setSelectedSize(product.variations?.sizes?.[0] || "");
  }, [product]);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity: quantity,
      metal: selectedMetal,
      size: selectedSize
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-gold selection:text-black pt-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
        
        {/* TOP NAVIGATION */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-20">
          <Link href="/shop" className="group inline-flex items-center gap-4 text-white/30 hover:text-gold transition-all text-[10px] font-black uppercase tracking-[0.4em]">
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" /> Back to Boutique
          </Link>
        </motion.div>

        {/* MAIN PRODUCT GRID - PERFECTLY BALANCED 2-COL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 xl:gap-40 items-center">
          
          {/* GALLERY - LEFT COLUMN */}
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} 
              className="relative aspect-square bg-[#0c0c0c] overflow-hidden rounded-[3.5rem] shadow-[0_60px_120px_-30px_rgba(0,0,0,1)] border border-white/5 group"
            >
              <AnimatePresence mode="wait">
                <motion.div 
                  key={selectedImage} 
                  initial={{ opacity: 0, scale: 1.05 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0, scale: 0.95 }} 
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
                  className="w-full h-full"
                >
                  <Image src={selectedImage} alt={product.name} fill className="object-cover transition-transform duration-[3s] hover:scale-105 p-6" />
                </motion.div>
              </AnimatePresence>
              <div className="absolute top-10 right-10 flex flex-col gap-5">
                 <button className="p-4 rounded-full bg-black/40 backdrop-blur-2xl text-white/40 hover:text-white border border-white/10 shadow-2xl transition-all"><Share2 className="w-4 h-4" /></button>
                 <button className="p-4 rounded-full bg-black/40 backdrop-blur-2xl text-white/40 hover:text-red-500 border border-white/10 shadow-2xl transition-all"><Heart className="w-4 h-4" /></button>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-4 gap-6 px-10">
              {(product.images || [product.image]).map((img, i) => (
                 <motion.div 
                   key={i} 
                   onClick={() => setSelectedImage(img)}
                   className={`relative aspect-square bg-[#0c0c0c] cursor-pointer rounded-2xl overflow-hidden border transition-all duration-700 ${selectedImage === img ? 'border-gold shadow-[0_0_30px_rgba(212,175,55,0.2)]' : 'border-white/5 opacity-30 hover:opacity-100 scale-95 hover:scale-100'}`}
                 >
                  <Image src={img} alt={`${product.name} detail ${i}`} fill className="object-cover p-2" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* PRODUCT INFO - RIGHT COLUMN - VERTICALLY CENTERED */}
          <div className="flex flex-col space-y-16">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="space-y-12">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <span className="w-10 h-px bg-gold/50" />
                  <p className="text-gold uppercase tracking-[0.6em] text-[10px] font-black">{product.category}</p>
                </div>
                <h1 className="text-6xl md:text-[6.5rem] font-serif text-white tracking-tighter leading-[0.9] italic uppercase font-black">{product.name}</h1>
                <div className="flex items-center gap-10">
                   <p className="text-4xl md:text-5xl font-serif text-white italic tracking-tight opacity-90">${product.price.toLocaleString()}</p>
                   <div className="h-6 w-px bg-white/10" />
                   <div className="flex text-gold">
                     {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-gold" />)}
                   </div>
                </div>
              </div>

              {/* SELECTION AREA */}
              <div className="space-y-12 py-10 border-y border-white/5">
                {/* METALS */}
                {product.variations?.metals && (
                  <div className="space-y-6">
                    <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/40">Select Your Metal</p>
                    <div className="flex gap-4">
                      {product.variations.metals.map((metal) => (
                        <button 
                          key={metal} 
                          onClick={() => setSelectedMetal(metal)}
                          className={`px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all duration-700 ${selectedMetal === metal ? 'bg-white text-black border-white shadow-[0_0_30px_rgba(255,255,255,0.3)]' : 'bg-transparent text-white/30 border-white/10 hover:border-white/50'}`}
                        >
                          {metal}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* SIZES */}
                {product.variations?.sizes && (
                  <div className="space-y-6">
                    <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/40">Choose Size</p>
                    <div className="flex gap-4">
                      {product.variations.sizes.map((size) => (
                        <button 
                          key={size} 
                          onClick={() => setSelectedSize(size)}
                          className={`w-14 h-14 rounded-full flex items-center justify-center text-[10px] font-black border transition-all duration-700 ${selectedSize === size ? 'bg-gold text-black border-gold shadow-[0_0_40px_rgba(212,175,55,0.4)] scale-110' : 'bg-white/5 text-white/30 border-white/10 hover:border-white/50'}`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* ACTION AREA */}
              <div className="space-y-10">
                <div className="flex items-center justify-between">
                  <p className="text-[9px] font-black uppercase tracking-[0.5em] text-white/20">Quantity</p>
                  <div className="flex items-center w-36 border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-2xl px-1">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-12 h-12 flex items-center justify-center hover:text-gold transition-all"><Minus className="w-4 h-4" /></button>
                    <div className="flex-grow text-center text-white text-sm font-black">{quantity}</div>
                    <button onClick={() => setQuantity(quantity + 1)} className="w-12 h-12 flex items-center justify-center hover:text-gold transition-all"><Plus className="w-4 h-4" /></button>
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  className={`w-full py-8 uppercase tracking-[0.5em] text-[11px] font-black transition-all duration-700 flex items-center justify-center gap-5 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(212,175,55,0.3)] ${
                    added ? "bg-white text-black" : "bg-gold text-black hover:bg-white shadow-[0_0_50px_rgba(212,175,55,0.4)]"
                  }`}
                >
                  {added ? <><Check className="w-6 h-6"/> Added to Shopping Bag</> : <><ShoppingBag className="w-5 h-5"/> Add to Shopping Bag</>}
                </motion.button>
              </div>

              {/* TABS / STORYTELLING */}
              <div className="pt-10">
                <div className="flex gap-10 border-b border-white/5 pb-5">
                   {["Details", "Materials", "Shipping"].map((tab) => (
                     <button key={tab} onClick={() => setActiveTab(tab.toLowerCase())} className={`relative py-1 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-700 ${activeTab === tab.toLowerCase() ? "text-gold" : "text-white/30 hover:text-white"}`}>
                       {tab}
                       {activeTab === tab.toLowerCase() && <motion.div layoutId="tab-underline-lux" className="absolute -bottom-[2px] left-0 right-0 h-px bg-gold" />}
                     </button>
                   ))}
                </div>
                <div className="py-10 min-h-[160px]">
                  <AnimatePresence mode="wait">
                    <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="text-white/40 text-lg font-light italic leading-loose">
                      {activeTab === "details" && <p>{product.description}</p>}
                      {activeTab === "materials" && (
                         <ul className="grid grid-cols-2 gap-x-12 gap-y-4">
                           {product.materials.map((m, i) => <li key={i} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-white/30"><div className="w-1.5 h-1.5 bg-gold" /> {m}</li>)}
                         </ul>
                      )}
                      {activeTab === "shipping" && <p>Complimentary signature delivery and returns within 30 days. Insured worldwide shipping handled by our private logistics network.</p>}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

            </motion.div>
          </div>
        </div>

        {/* RELATED PIECES */}
        <div className="mt-60 border-t border-white/5 pt-32">
           <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-5xl md:text-[9rem] font-serif text-center mb-32 italic tracking-tighter uppercase leading-none font-black">You May Also Like</motion.h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {MOCK_PRODUCTS.filter(p => p.id !== product.id).slice(0, 4).map((p, i) => (
                <motion.div key={p.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                  <Link href={`/product/${p.id}`} className="group text-center space-y-10 block">
                    <div className="relative aspect-[3.2/4.2] bg-[#0c0c0c] overflow-hidden rounded-[3rem] shadow-[0_45px_100px_-25px_rgba(0,0,0,1)] border border-white/5 group-hover:border-gold/30 transition-all duration-1000">
                      <Image src={p.image} alt={p.name} fill className="object-cover transition-all duration-[2s] group-hover:scale-105 p-6"/>
                    </div>
                    <div className="space-y-3">
                       <p className="text-[9px] text-gold uppercase tracking-[0.5em] font-black">{p.category}</p>
                       <h3 className="font-serif text-3xl md:text-3xl text-white italic transition-all duration-700 uppercase">{p.name}</h3>
                       <p className="text-white font-serif italic text-2xl opacity-60">${p.price.toLocaleString()}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
