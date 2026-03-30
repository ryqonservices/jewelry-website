"use client";

import Link from "next/link";
import { ChevronLeft, Lock } from "lucide-react";

export default function Checkout() {
  return (
    <div className="bg-[#050505] min-h-screen text-[#F3F3F3] font-sans selection:bg-gold selection:text-black pt-28 pb-40">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        
        {/* FORMAL HEADER NAVIGATION */}
        <div className="mb-16 flex items-center justify-between border-b border-white/5 pb-8">
           <Link href="/cart" className="flex items-center gap-2 text-white/30 hover:text-gold transition-colors text-[10px] uppercase tracking-[0.4em] font-medium">
             <ChevronLeft className="w-3 h-3" /> Return to Bag
           </Link>
           <div className="flex items-center gap-2 text-gold/60 uppercase tracking-[0.5em] text-[10px] font-bold">
             <Lock className="w-3 h-3" /> Secure Checkout
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* CHECKOUT FORM */}
          <div className="lg:col-span-7 space-y-16">
            
            {/* Section: Contact */}
            <section className="space-y-8">
              <h2 className="text-xl font-serif text-white tracking-widest uppercase font-light italic">Contact Details</h2>
              <div className="space-y-6">
                <div className="group">
                  <label htmlFor="email" className="block text-[9px] uppercase tracking-[0.6em] text-white/30 mb-3 font-bold group-focus-within:text-gold transition-colors">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-transparent border-b border-white/10 py-3 px-0 focus:border-gold outline-none transition-colors text-sm font-light placeholder:text-white/10" 
                    placeholder="name@domain.com" 
                  />
                </div>
              </div>
            </section>

            {/* Section: Shipping */}
            <section className="space-y-10">
              <h2 className="text-xl font-serif text-white tracking-widest uppercase font-light italic">Shipping Residence</h2>
              <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                <div className="group">
                  <label className="block text-[9px] uppercase tracking-[0.6em] text-white/30 mb-3 font-bold group-focus-within:text-gold transition-colors">First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 px-0 focus:border-gold outline-none transition-colors text-sm font-light" />
                </div>
                <div className="group">
                  <label className="block text-[9px] uppercase tracking-[0.6em] text-white/30 mb-3 font-bold group-focus-within:text-gold transition-colors">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 px-0 focus:border-gold outline-none transition-colors text-sm font-light" />
                </div>
                <div className="col-span-2 group">
                  <label className="block text-[9px] uppercase tracking-[0.6em] text-white/30 mb-3 font-bold group-focus-within:text-gold transition-colors">Full Address</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 px-0 focus:border-gold outline-none transition-colors text-sm font-light mb-4" placeholder="Street Address" />
                  <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 px-0 focus:border-gold outline-none transition-colors text-sm font-light" placeholder="Apartment, suite, etc. (optional)" />
                </div>
                <div className="group">
                  <label className="block text-[9px] uppercase tracking-[0.6em] text-white/30 mb-3 font-bold group-focus-within:text-gold transition-colors">City</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 px-0 focus:border-gold outline-none transition-colors text-sm font-light" />
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-[9px] uppercase tracking-[0.6em] text-white/30 mb-3 font-bold group-focus-within:text-gold transition-colors">State</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 px-0 focus:border-gold outline-none transition-colors text-sm font-light" />
                  </div>
                  <div className="group">
                    <label className="block text-[9px] uppercase tracking-[0.6em] text-white/30 mb-3 font-bold group-focus-within:text-gold transition-colors">ZIP</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 px-0 focus:border-gold outline-none transition-colors text-sm font-light" />
                  </div>
                </div>
              </div>
            </section>

            {/* Section: Payment */}
            <section className="space-y-10">
              <h2 className="text-xl font-serif text-white tracking-widest uppercase font-light italic">Payment Method</h2>
              <div className="border border-white/5 p-10 bg-[#080808] space-y-10">
                 <div className="group">
                    <label className="block text-[9px] uppercase tracking-[0.6em] text-white/30 mb-4 font-bold group-focus-within:text-gold transition-colors">Card Information</label>
                    <div className="flex border-b border-white/10 items-center focus-within:border-gold transition-colors">
                       <input type="text" className="w-full bg-transparent py-4 px-0 outline-none text-sm font-light tracking-[0.2em]" placeholder="0000 0000 0000 0000" />
                       <Lock className="w-3 h-3 text-white/10" />
                    </div>
                 </div>
                 <div className="grid grid-cols-2 gap-10">
                   <div className="group">
                     <label className="block text-[9px] uppercase tracking-[0.6em] text-white/30 mb-3 font-bold group-focus-within:text-gold transition-colors">Expiration</label>
                     <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 px-0 focus:border-gold outline-none transition-colors text-sm font-light" placeholder="MM/YY" />
                   </div>
                   <div className="group">
                     <label className="block text-[9px] uppercase tracking-[0.6em] text-white/30 mb-3 font-bold group-focus-within:text-gold transition-colors">CVC</label>
                     <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 px-0 focus:border-gold outline-none transition-colors text-sm font-light" placeholder="123" />
                   </div>
                 </div>
              </div>
            </section>

            <button type="button" className="w-full mt-10 bg-[#F3F3F3] text-black py-5 uppercase tracking-[0.6em] text-[10px] font-bold hover:bg-gold transition-all duration-700">
              Confirm & Finalize Order
            </button>
          </div>

          {/* SUMMARY SIDEBAR */}
          <div className="lg:col-span-5 lg:pl-10">
            <div className="bg-[#080808] p-10 border border-white/5 sticky top-36">
               <h3 className="font-serif text-xl mb-10 border-b border-white/5 pb-6 text-white uppercase font-light italic tracking-widest">Order Summary</h3>
               <ul className="space-y-8 mb-10 border-b border-white/5 pb-8">
                 <li className="flex justify-between items-start">
                   <div className="space-y-1">
                     <p className="text-[11px] text-white font-medium uppercase tracking-wider">Eternal Diamond Ring</p>
                     <p className="text-[9px] text-white/30 uppercase tracking-widest">Category: Rings | Qty: 1</p>
                   </div>
                   <span className="font-serif text-lg font-light">$1,250</span>
                 </li>
                 <li className="flex justify-between items-start">
                   <div className="space-y-1">
                     <p className="text-[11px] text-white font-medium uppercase tracking-wider">Luminous Pearl Necklace</p>
                     <p className="text-[9px] text-white/30 uppercase tracking-widest">Category: Necklaces | Qty: 2</p>
                   </div>
                   <span className="font-serif text-lg font-light">$1,700</span>
                 </li>
               </ul>
               
               <div className="space-y-4 mb-10">
                 <div className="flex justify-between text-white/30">
                    <span className="text-[10px] uppercase tracking-[0.4em]">Subtotal</span>
                    <span className="font-serif text-lg font-light">$2,950</span>
                 </div>
                 <div className="flex justify-between text-white/30">
                    <span className="text-[10px] uppercase tracking-[0.4em]">Delivery</span>
                    <span className="text-[9px] uppercase tracking-[0.4em] text-gold/60">Complimentary</span>
                 </div>
               </div>

               <div className="flex justify-between border-t border-white/10 pt-8 items-end">
                  <span className="text-[11px] uppercase tracking-[0.6em] text-white/40 mb-1">Total Due</span>
                  <span className="font-serif text-4xl text-gold font-light tracking-tight">$2,950</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
