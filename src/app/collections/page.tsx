import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CollectionsPage() {
  const collections = [
    { title: "The Aurora Collection", text: "Inspired by the dancing lights of the northern skies. Featuring vibrant sapphires and emeralds set in swirling diamond halos.", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&q=80" },
    { title: "Heritage Classics", text: "The foundation of AURELIA. Timeless, elegant designs that have dressed royalty and movie stars for over a century.", img: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80" },
    { title: "Modernist Angles", text: "A bold new direction utilizing geometric cuts, mixed metals, and architectural silhouettes for the contemporary spirit.", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&q=80" },
  ];

  return (
    <div className="bg-cream min-h-screen pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6 text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-serif text-neutral-900 mb-6 drop-shadow-sm">Collections</h1>
        <p className="text-neutral-500 max-w-2xl mx-auto text-lg font-light tracking-wide">
          Every AURELIA collection tells a story. From nature-inspired motifs to architectural triumphs, discover the thematic suites that define our house.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {collections.map((c, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-xl mb-12">
              <Image src={c.img} alt={c.title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000 origin-center" />
              <div className="absolute inset-0 bg-neutral-900/30 group-hover:bg-neutral-900/10 transition-colors duration-700" />
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">{c.title}</h2>
                <p className="text-neutral-500 font-light text-lg leading-relaxed">{c.text}</p>
              </div>
              <Link href="/shop" className="inline-flex items-center gap-4 bg-white border border-neutral-200 text-neutral-900 px-8 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-gold hover:text-white hover:border-gold transition-all duration-300 rounded-full shrink-0">
                Explore Collection <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

