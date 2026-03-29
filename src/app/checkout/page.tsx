"use client";

import Link from "next/link";
import { ChevronLeft, Lock, ArrowRight } from "lucide-react";

export default function Checkout() {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
      <div className="mb-12 flex items-center justify-between">
         <Link href="/cart" className="flex items-center gap-2 text-neutral-500 hover:text-gold transition-colors text-sm uppercase tracking-widest">
           <ChevronLeft className="w-4 h-4" /> Return to Cart
         </Link>
         <div className="flex items-center gap-2 text-gold uppercase tracking-widest text-xs font-medium">
           <Lock className="w-4 h-4" /> Secure Checkout
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-serif text-neutral-900 mb-8 border-b border-neutral-200 pb-4">Contact Information</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 font-medium">Email Address</label>
              <input type="email" id="email" className="w-full bg-transparent border border-neutral-300 py-3 px-4 focus:ring-1 focus:ring-gold outline-none focus:border-gold transition-colors text-neutral-900" placeholder="jane@example.com" />
            </div>

            <h2 className="text-2xl font-serif text-neutral-900 mb-8 mt-12 border-b border-neutral-200 pb-4">Shipping Address</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 font-medium">First Name</label>
                <input type="text" className="w-full bg-transparent border border-neutral-300 py-3 px-4 focus:ring-1 focus:ring-gold outline-none focus:border-gold transition-colors text-neutral-900" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 font-medium">Last Name</label>
                <input type="text" className="w-full bg-transparent border border-neutral-300 py-3 px-4 focus:ring-1 focus:ring-gold outline-none focus:border-gold transition-colors text-neutral-900" />
              </div>
            </div>
            
            <div>
              <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 font-medium">Address</label>
              <input type="text" className="w-full bg-transparent border border-neutral-300 py-3 px-4 focus:ring-1 focus:ring-gold outline-none focus:border-gold transition-colors text-neutral-900 mb-4" placeholder="Street Address" />
              <input type="text" className="w-full bg-transparent border border-neutral-300 py-3 px-4 focus:ring-1 focus:ring-gold outline-none focus:border-gold transition-colors text-neutral-900" placeholder="Apartment, suite, etc. (optional)" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 font-medium">City</label>
                <input type="text" className="w-full bg-transparent border border-neutral-300 py-3 px-4 focus:ring-1 focus:ring-gold outline-none focus:border-gold transition-colors text-neutral-900" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 font-medium">State</label>
                  <input type="text" className="w-full bg-transparent border border-neutral-300 py-3 px-4 focus:ring-1 focus:ring-gold outline-none focus:border-gold transition-colors text-neutral-900" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 font-medium">ZIP</label>
                  <input type="text" className="w-full bg-transparent border border-neutral-300 py-3 px-4 focus:ring-1 focus:ring-gold outline-none focus:border-gold transition-colors text-neutral-900" />
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-serif text-neutral-900 mb-8 mt-12 border-b border-neutral-200 pb-4">Payment</h2>
            <div className="border border-neutral-300 p-6 bg-white shadow-sm space-y-6">
               <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 font-medium">Card Number</label>
                  <div className="flex border border-neutral-300 items-center overflow-hidden focus-within:ring-1 focus-within:ring-gold focus-within:border-gold transition-colors">
                     <input type="text" className="w-full bg-transparent py-3 px-4 outline-none text-neutral-900" placeholder="0000 0000 0000 0000" />
                     <div className="px-4 text-neutral-400"><Lock className="w-4 h-4"/></div>
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 font-medium">Expiration</label>
                   <input type="text" className="w-full bg-transparent border border-neutral-300 py-3 px-4 focus:ring-1 focus:ring-gold outline-none focus:border-gold transition-colors text-neutral-900" placeholder="MM/YY" />
                 </div>
                 <div>
                   <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 font-medium">CVC</label>
                   <input type="text" className="w-full bg-transparent border border-neutral-300 py-3 px-4 focus:ring-1 focus:ring-gold outline-none focus:border-gold transition-colors text-neutral-900" placeholder="123" />
                 </div>
               </div>
            </div>

            <button type="button" className="w-full mt-12 bg-neutral-900 text-cream py-5 uppercase tracking-widest text-sm font-medium hover:bg-gold hover:text-white transition-colors shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-luxury flex justify-center items-center gap-2 group">
              Complete Order <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        <div className="lg:border-l border-neutral-200 lg:pl-16">
          <div className="bg-beige p-8 sticky top-32">
             <h3 className="font-serif text-2xl mb-8 border-b border-neutral-200 pb-4 text-neutral-900">Summary</h3>
             <ul className="space-y-6 mb-8 border-b border-neutral-200 pb-8">
               <li className="flex justify-between text-neutral-900">
                 <span className="text-sm">Eternal Diamond Ring<span className="text-neutral-500 ml-2">x1</span></span>
                 <span className="tracking-wider">$1,250</span>
               </li>
               <li className="flex justify-between text-neutral-900">
                 <span className="text-sm">Luminous Pearl Necklace<span className="text-neutral-500 ml-2">x2</span></span>
                 <span className="tracking-wider">$1,700</span>
               </li>
             </ul>
             <div className="flex justify-between mb-4 text-neutral-600">
                <span className="font-light">Subtotal</span>
                <span className="tracking-wider">${2950}</span>
             </div>
             <div className="flex justify-between mb-8 text-neutral-600">
                <span className="font-light">Shipping</span>
                <span className="uppercase tracking-widest text-gold text-xs font-medium">Complimentary</span>
             </div>
             <div className="flex justify-between border-t border-neutral-200 pt-6 text-neutral-900 text-lg">
                <span className="font-medium">Total</span>
                <span className="font-serif text-2xl tracking-wider">${2950}</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
