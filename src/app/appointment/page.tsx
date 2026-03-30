"use client";

import Image from "next/image";
import { Check } from "lucide-react";

export default function AppointmentPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Appointment Requested!");
    window.location.href = "/";
  };

  return (
    <div className="bg-white min-h-screen pt-40 pb-32">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Image */}
        <div className="relative h-[800px] w-full rounded-[3rem] overflow-hidden shadow-2xl hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&q=80"
            alt="Consultation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-neutral-900/10" />
        </div>

        {/* Right Form */}
        <div className="bg-beige p-10 md:p-16 rounded-[3rem] shadow-sm border border-neutral-200">
          <h1 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-4">
            Book an Appointment
          </h1>

          <p className="text-neutral-500 font-light mb-12 text-lg">
            Schedule a private consultation at one of our boutiques. Our experts will guide you through our collections over complimentary champagne.
          </p>

          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>

            {/* Name */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full border border-neutral-300 px-4 py-4 rounded-xl focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full border border-neutral-300 px-4 py-4 rounded-xl focus:outline-none focus:border-gold transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 font-medium">
                Email Address
              </label>
              <input
                type="email"
                required
                className="w-full border border-neutral-300 px-4 py-4 rounded-xl focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            {/* Interest */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 font-medium">
                Interest
              </label>
              <select className="w-full border border-neutral-300 px-4 py-4 rounded-xl focus:outline-none focus:border-gold transition-colors bg-white">
                <option>Engagement Ring</option>
                <option>High Jewelry Viewing</option>
                <option>Repairs & Maintenance</option>
                <option>Bespoke Design</option>
              </select>
            </div>

            {/* Boutique */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 font-medium">
                Preferred Boutique
              </label>
              <select className="w-full border border-neutral-300 px-4 py-4 rounded-xl focus:outline-none focus:border-gold transition-colors bg-white">
                <option>New York, 5th Ave</option>
                <option>Paris, Place Vendôme</option>
                <option>Milan, Via Monte Napoleone</option>
                <option>Tokyo, Shinjuku</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-8 bg-neutral-900 text-cream w-full py-5 uppercase tracking-[0.2em] text-xs font-bold rounded-full hover:bg-gold transition-colors shadow-lg flex justify-center gap-2 items-center"
            >
              Request VIP Appointment
              <Check className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}