import Image from "next/image";
import Link from "next/link";
import { Gift } from "lucide-react";

export default function GiftsPage() {
  const categories = [
    { title: "Gifts for Her", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80" },
    { title: "Gifts for Him", img: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80" },
    { title: "Anniversary", img: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80" },
    { title: "Personalized", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80" },
  ];

  return (
    <div className="bg-cream min-h-screen pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6 text-center mb-24">
        <div className="flex justify-center mb-6">
          <div className="bg-gold p-4 rounded-full shadow-luxury text-white">
            <Gift className="w-8 h-8" />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif text-neutral-900 mb-6 drop-shadow-sm">The Art of Gifting</h1>
        <p className="text-neutral-500 max-w-2xl mx-auto text-lg font-light tracking-wide">
          Give a gift wrapped in signature AURELIA ribbon. From delicate pendants to statement timepieces, find the perfect expression of your affection.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {categories.map((c, i) => (
          <Link href="/shop" key={i} className="group relative h-[400px] rounded-[3rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700">
            <Image src={c.img} alt={c.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-neutral-900/40 group-hover:bg-neutral-900/20 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl font-serif text-white tracking-widest drop-shadow-md">{c.title}</h2>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="bg-neutral-900 text-cream py-24 rounded-[3rem] mx-6 px-6 text-center shadow-2xl">
         <h2 className="text-4xl font-serif mb-6 drop-shadow-lg">Signature Packaging</h2>
         <p className="text-white/80 max-w-xl mx-auto font-light leading-relaxed mb-10 text-lg">
           Every purchase arrives in our iconic cream leather box, tied with golden ribbon, complete with a personalized message card.
         </p>
         <button className="bg-gold hover:bg-gold/80 transition-colors text-white px-10 py-4 uppercase tracking-widest text-xs font-bold rounded-full shadow-lg">
           View Gift Guide
         </button>
      </div>
    </div>
  );
}

