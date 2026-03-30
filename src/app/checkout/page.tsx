"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, Lock } from "lucide-react";
import { useCart } from "@/context/CartContext";

// EXTENDING WINDOW TYPE FOR RAZORPAY
declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function Checkout() {
  const { cart, subtotal } = useCart();
  
  // FORM STATE
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zip: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  // HANDLE INPUT CHANGES
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const key = id === "email" ? "email" : id;
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  // LOAD RAZORPAY SCRIPT
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // VALIDATION & PAYMENT HANDLER
  const handlePayment = async () => {
    // 1. COMPREHENSIVE VALIDATION
    const { email, firstName, lastName, address, city, zip } = formData;
    if (!email || !firstName || !lastName || !address || !city || !zip) {
      alert("Please perfect your identity and delivery details before proceeding.");
      return;
    }

    if (!email.includes("@")) {
      alert("Please provide a valid corporate or personal email address.");
      return;
    }

    if (cart.length === 0) {
      alert("Your shopping bag is empty. Please select a piece to proceed.");
      return;
    }

    setIsLoading(true);

    // 2. INITIALIZE RAZORPAY (TEST MODE)
    try {
      const options = {
        key: "rzp_test_sample_key", // Dummy Key for Simulation
        amount: subtotal * 100, // Real amount in paise
        currency: "USD",
        name: "AURELIA HERITAGE",
        description: "Boutique Jewelry Selection Acquisition",
        image: "/logo.png",
        handler: function (response: any) {
          alert(`Acquisition Successful. Payment ID: ${response.razorpay_payment_id}`);
          window.location.href = "/"; // Success Redirect
        },
        prefill: {
          name: `${firstName} ${lastName}`,
          email: email,
          contact: "9999999999",
        },
        notes: {
          address: address,
        },
        theme: {
          color: "#002B5B", // Matches Razorpay Premium Navy
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Razorpay instance failure:", error);
      alert("Secure payment gateway is currently transitioning. Please try again shortly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-background min-h-screen text-foreground font-sans selection:bg-accent selection:text-background pt-32 pb-40">
      <div className="max-w-[1250px] mx-auto px-6 md:px-12">

        {/* SECURE HEADER */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-border pb-12 gap-10">
          <div className="space-y-4">
             <Link href="/cart" className="group inline-flex items-center gap-4 text-foreground/50 hover:text-accent transition-all text-[11px] font-black uppercase tracking-[0.4em]">
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" /> Back to Shopping Bag
            </Link>
            <h1 className="text-4xl md:text-6xl font-serif text-foreground tracking-tighter transition-all uppercase font-light italic leading-none">Checkout</h1>
          </div>
          <div className="flex items-center gap-4 bg-subtle px-8 py-4 rounded-2xl border border-border">
            <Lock className="w-4 h-4 text-accent" />
            <span className="text-foreground/70 uppercase tracking-[0.5em] text-[10px] font-black italic">Encrypted Secure Portal</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 xl:gap-28 items-start">

          {/* CHECKOUT FORM */}
          <div className="lg:col-span-7 space-y-20">
            
            {/* Section 1: Contact */}
            <section className="space-y-12 bg-subtle/40 p-10 md:p-14 rounded-[3rem] border border-border shadow-sm">
              <div className="flex items-center gap-6">
                 <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center font-serif italic text-accent text-xl">01</div>
                 <h2 className="text-2xl font-serif text-foreground tracking-widest uppercase font-light italic text-foreground">Identity & Contact</h2>
              </div>
              <div className="space-y-8">
                <div className="group space-y-4">
                   <label htmlFor="email" className="block text-[10px] uppercase tracking-[0.5em] text-foreground font-black group-focus-within:text-accent transition-colors">Personal Email Address</label>
                   <input 
                     type="email" 
                     id="email" 
                     value={formData.email}
                     onChange={handleInputChange}
                     className="w-full bg-background border border-border rounded-xl py-5 px-8 focus:border-accent outline-none transition-all text-base font-medium placeholder:text-foreground/20 shadow-inner text-foreground" 
                     placeholder="aurelia@heritage.com" 
                   />
                </div>
              </div>
            </section>

            {/* Section 2: Shipping */}
            <section className="space-y-12 bg-subtle/40 p-10 md:p-14 rounded-[3rem] border border-border shadow-sm">
               <div className="flex items-center gap-6">
                 <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center font-serif italic text-accent text-xl">02</div>
                 <h2 className="text-2xl font-serif text-foreground tracking-widest uppercase font-light italic">Delivery Residence</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <div className="group space-y-4">
                  <label className="block text-[10px] uppercase tracking-[0.5em] text-foreground font-black group-focus-within:text-accent transition-colors">First Name</label>
                  <input id="firstName" value={formData.firstName} onChange={handleInputChange} type="text" className="w-full bg-background border border-border rounded-xl py-5 px-8 focus:border-accent outline-none transition-all text-base font-medium shadow-inner text-foreground" />
                </div>
                <div className="group space-y-4">
                  <label className="block text-[10px] uppercase tracking-[0.5em] text-foreground font-black group-focus-within:text-accent transition-colors">Last Name</label>
                  <input id="lastName" value={formData.lastName} onChange={handleInputChange} type="text" className="w-full bg-background border border-border rounded-xl py-5 px-8 focus:border-accent outline-none transition-all text-base font-medium shadow-inner text-foreground" />
                </div>
                <div className="md:col-span-2 group space-y-4">
                  <label className="block text-[10px] uppercase tracking-[0.5em] text-foreground font-black group-focus-within:text-accent transition-colors">Residence Address</label>
                  <input id="address" value={formData.address} onChange={handleInputChange} type="text" className="w-full bg-background border border-border rounded-xl py-5 px-8 focus:border-accent outline-none transition-all text-base font-medium shadow-inner text-foreground" placeholder="Full Street Address" />
                </div>
                <div className="group space-y-4">
                  <label className="block text-[10px] uppercase tracking-[0.5em] text-foreground font-black group-focus-within:text-accent transition-colors">City</label>
                  <input id="city" value={formData.city} onChange={handleInputChange} type="text" className="w-full bg-background border border-border rounded-xl py-5 px-8 focus:border-accent outline-none transition-all text-base font-medium shadow-inner text-foreground" />
                </div>
                <div className="group space-y-4">
                  <label className="block text-[10px] uppercase tracking-[0.5em] text-foreground font-black group-focus-within:text-accent transition-colors">Zip Code</label>
                  <input id="zip" value={formData.zip} onChange={handleInputChange} type="text" className="w-full bg-background border border-border rounded-xl py-5 px-8 focus:border-accent outline-none transition-all text-base font-medium shadow-inner text-foreground" />
                </div>
              </div>
            </section>

            {/* Section 3: Razorpay Payment */}
            <section className="space-y-12 bg-subtle/40 p-10 md:p-14 rounded-[3rem] border border-border shadow-sm">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center font-serif italic text-accent text-xl">03</div>
                <h2 className="text-2xl font-serif text-foreground tracking-widest uppercase font-light italic">Secure Payment</h2>
              </div>
              <div className="space-y-10">
                 <div className="p-10 bg-background border border-border rounded-[2rem] flex flex-col items-center gap-8 text-center shadow-inner relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[#002B5B]/[0.01] group-hover:bg-[#002B5B]/[0.03] transition-colors duration-700" />
                    
                    <div className="relative z-10 space-y-5">
                       <div className="flex justify-center">
                          <div className="bg-[#002B5B] px-8 py-3 rounded-xl flex items-center gap-3">
                             <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center font-black text-[#002B5B] text-[9px]">R</div>
                             <span className="text-white font-black uppercase tracking-[0.4em] text-[10px]">Razorpay Secure</span>
                          </div>
                       </div>
                       <p className="text-[10px] text-foreground/50 font-bold uppercase tracking-[0.3em] max-w-[280px] mx-auto leading-relaxed">
                         Instant acquisition via Global Credit Cards, UPI, and Corporate Banking.
                       </p>
                    </div>

                    <div className="flex items-center gap-6 grayscale opacity-40">
                       <div className="w-8 h-5 border border-border rounded-[2px] bg-foreground/5" />
                       <div className="w-8 h-5 border border-border rounded-[2px] bg-foreground/5" />
                       <div className="w-8 h-5 border border-border rounded-[2px] bg-foreground/5" />
                    </div>
                 </div>
              </div>
            </section>

            <button 
              onClick={handlePayment}
              disabled={isLoading}
              type="button" 
              className="w-full mt-14 bg-[#002B5B] text-white py-8 rounded-[2rem] uppercase tracking-[0.6em] text-[12px] font-black hover:bg-[#003d80] transition-all duration-700 shadow-2xl shadow-[#002B5B]/20 disabled:opacity-50"
            >
              {isLoading ? "Synchronizing Secure Portal..." : "Launch Razorpay & Finalize"}
            </button>
          </div>

          {/* SUMMARY SIDEBAR */}
          <div className="lg:col-span-5 self-start sticky top-36">
            <div className="bg-subtle/60 p-16 md:p-20 border border-border rounded-[4rem] shadow-2xl relative overflow-hidden backdrop-blur-sm">
               <h3 className="font-serif text-3xl mb-12 border-b border-border pb-8 text-foreground uppercase font-light italic tracking-tight relative z-10">Curation Summary</h3>
               <ul className="space-y-12 mb-12 border-b border-border pb-12 relative z-10 font-sans">
                 {cart.map((item) => (
                   <li key={item.id} className="flex justify-between items-start gap-8">
                     <div className="space-y-2 text-foreground">
                       <p className="text-[12px] font-black uppercase tracking-wider">{item.name}</p>
                       <p className="text-[9px] text-foreground/60 uppercase tracking-widest font-bold">Qty: {item.quantity.toString().padStart(2, '0')} | {item.metal || 'Standard'}</p>
                     </div>
                     <span className="font-serif text-2xl font-light text-foreground tracking-tight">${(item.price * item.quantity).toLocaleString()}</span>
                   </li>
                 ))}
               </ul>

               <div className="space-y-10 relative z-10 font-sans text-foreground">
                 <div className="flex justify-between">
                    <span className="text-[11px] uppercase tracking-[0.4em] font-black text-foreground/60 italic">Selection Subtotal</span>
                    <span className="font-serif text-2xl font-light tracking-tight">${subtotal.toLocaleString()}</span>
                 </div>
                 <div className="flex justify-between border-t border-border pt-10 items-end relative z-10">
                   <div className="space-y-2">
                     <span className="text-[13px] uppercase tracking-[0.6em] font-black block">Grand Total Due</span>
                     <span className="text-[9px] text-foreground/50 uppercase tracking-[0.2em] font-bold italic italic">Reflective of all heritage taxes</span>
                   </div>
                   <span className="font-serif text-5xl text-accent font-light tracking-tighter drop-shadow-sm">${subtotal.toLocaleString()}</span>
                 </div>
               </div>

               <div className="mt-16 pt-10 border-t border-border">
                 <div className="flex items-center gap-6 opacity-60">
                    <Lock className="w-5 h-5 text-accent" />
                    <p className="text-[10px] uppercase tracking-[0.4em] font-black leading-relaxed text-foreground">Secure Enterprise Encryption</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
