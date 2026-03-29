import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="relative h-[60vh] w-full mt-24">
        <Image 
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80" 
          alt="Our Heritage" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-neutral-900/40 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-serif text-white tracking-widest text-center">Our Story<br/><span className="text-2xl font-light italic mt-4 block">A Legacy of Light</span></h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-serif text-neutral-900 mb-6 drop-shadow-sm">The Heritage of AURELIA</h2>
          <p className="text-neutral-600 mb-6 leading-relaxed font-light text-lg">
            Founded with a vision to redefine luxury jewelry, AURELIA has spent decades perfecting the harmonious balance between timeless elegance and modern design. Each piece we create is an ode to the exceptional beauty of natural gemstones and the unparalleled mastery of our artisans.
          </p>
          <p className="text-neutral-600 leading-relaxed font-light text-lg">
            Our founders believed that jewelry should be more than mere ornamentation; it should be a vessel of emotion, a deeply personal emblem of lifes most meaningful moments. This philosophy permeates every sketch, every casting, and every polished facet that leaves our atelier.
          </p>
        </div>
        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
          <Image src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80" alt="Crafting" fill className="object-cover" />
        </div>
      </div>

      <div className="bg-neutral-900 text-cream py-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl order-2 md:order-1">
            <Image src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&q=80" alt="Diamond Selection" fill className="object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-serif mb-6 text-white drop-shadow-sm">Immaculate Craftsmanship</h2>
            <p className="text-white/80 mb-6 leading-relaxed font-light text-lg">
              There is no compromise in our pursuit of perfection. From the meticulous selection of ethically sourced diamonds to the precision of our hand-finished settings, our master jewelers pour their hearts into a craft that borders on alchemy.
            </p>
            <Link href="/collections" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-gold hover:text-white transition-colors mt-8">
              Explore The Collections <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

