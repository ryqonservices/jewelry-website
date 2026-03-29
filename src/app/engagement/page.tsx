import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

export default function EngagementPage() {
  const rings = [
    { title: "The Classic Halo", img: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&q=80" },
    { title: "Radiant Solitaire", img: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80" },
    { title: "Vintage Three-Stone", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="relative h-[60vh] w-full mt-24">
        <Image src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&q=80" alt="Engagement" fill className="object-cover object-top" />
        <div className="absolute inset-0 bg-neutral-900/40 flex flex-col items-center justify-center text-center px-4">
          <Heart className="text-white w-8 h-8 mb-4" />
          <h1 className="text-5xl md:text-7xl font-serif text-white tracking-widest drop-shadow-2xl">Bridal & Engagement</h1>
          <p className="text-white/90 text-xl font-light mt-6 max-w-2xl">An eternal promise deserves an extraordinary symbol. Explore breathtaking engagement rings crafted to celebrate your unique love story.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-serif text-neutral-900 mb-16">Find The Perfect Ring</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rings.map((ring, i) => (
             <Link href="/shop" key={i} className="group flex flex-col items-center">
                <div className="relative w-full aspect-square bg-beige rounded-[2rem] overflow-hidden mb-6 shadow-sm hover:shadow-xl transition-all duration-700">
                  <Image src={ring.img} alt={ring.title} fill className="object-cover p-10 group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <h3 className="font-serif text-2xl text-neutral-900 group-hover:text-gold transition-colors">{ring.title}</h3>
                <span className="text-neutral-500 uppercase tracking-widest text-xs mt-3 border-b border-transparent group-hover:border-gold pb-1 transition-all">Discover</span>
             </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

