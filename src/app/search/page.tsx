import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

export default function SearchPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream px-6 py-40 text-center relative overflow-hidden">
      
      <div className="absolute inset-0 z-0 opacity-10 blur-sm mix-blend-multiply">
         <Image src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80" alt="bg" fill className="object-cover" />
      </div>

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-serif text-neutral-900 mb-12 drop-shadow-sm">Discover</h1>
        
        <div className="w-full relative mb-16 group">
          <input 
            type="text" 
            placeholder="Search by collection, category, or product..." 
            className="w-full bg-white/50 backdrop-blur-md rounded-full shadow-lg border border-neutral-200 py-6 px-10 text-2xl font-light text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-500 hover:shadow-xl"
            autoFocus
          />
          <button className="absolute right-6 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-gold transition-colors">
            <Search className="w-8 h-8" />
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.2em] font-medium text-neutral-500">
           <span className="text-gold font-bold">Trending:</span>
           <Link href="/shop" className="hover:text-gold transition-colors hover:underline underline-offset-4 decoration-gold">Diamond Rings</Link>
           <span className="hidden sm:inline">|</span>
           <Link href="/shop" className="hover:text-gold transition-colors hover:underline underline-offset-4 decoration-gold">Tennis Bracelets</Link>
           <span className="hidden sm:inline">|</span>
           <Link href="/collections" className="hover:text-gold transition-colors hover:underline underline-offset-4 decoration-gold">The Aurora Collection</Link>
        </div>
      </div>
    </div>
  );
}

