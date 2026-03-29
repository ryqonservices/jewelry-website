import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HighJewelryPage() {
  const pieces = [
    { title: "The Celestial Sapphire", desc: "A magnificent 25-carat untreated Ceylon sapphire gracefully embraced by an intricate webbing of platinum and brilliant-cut diamonds. Unique, captivating, and eternally elegant.", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&q=80" },
    { title: "Lumina Diamond Collar", desc: "A true masterpiece of high jewelry. Hundreds of custom-cut diamonds are seamlessly set into a fluid collar that drapes like liquid light over the collarbone.", img: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?auto=format&fit=crop&q=80" }
  ];

  return (
    <div className="bg-cream min-h-screen">
      <div className="relative h-[70vh] w-full mt-24">
        <Image src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80" alt="High Jewelry" fill className="object-cover" />
        <div className="absolute inset-0 bg-neutral-900/50 flex flex-col items-center justify-center p-6 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">The Pinnacle of Craft</p>
          <h1 className="text-5xl md:text-8xl font-serif text-white tracking-widest drop-shadow-2xl">High Jewelry</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32 space-y-32">
        {pieces.map((piece, i) => (
          <div key={i} className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'md:rtl' : ''}`}>
            <div className={`relative h-[600px] w-full rounded-3xl overflow-hidden shadow-luxury ${i % 2 !== 0 ? 'md:ltr' : ''}`}>
              <Image src={piece.img} alt={piece.title} fill className="object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className={`flex flex-col justify-center ${i % 2 !== 0 ? 'md:ltr text-right md:text-left' : ''}`}>
              <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">{piece.title}</h2>
              <p className="text-neutral-500 font-light text-xl leading-relaxed mb-10">{piece.desc}</p>
              <Link href="/appointment" className="inline-flex items-center gap-4 bg-neutral-900 text-cream px-8 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-gold transition-colors duration-300 rounded-full w-max">
                Inquire For Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

