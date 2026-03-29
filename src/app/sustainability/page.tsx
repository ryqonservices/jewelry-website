import Image from "next/image";
import Link from "next/link";
import { Leaf, Recycle, HeartHandshake } from "lucide-react";

export default function SustainabilityPage() {
  const pillars = [
    { title: "Conflict-Free Diamonds", icon: HeartHandshake, text: "We strictly adhere to the Kimberley Process, ensuring every stone is 100% ethically sourced and conflict-free." },
    { title: "Recycled Precious Metals", icon: Recycle, text: "Over 80% of the gold and platinum used in our ateliers comes from refined, recycled sources to minimize environmental impact." },
    { title: "Carbon Neutrality", icon: Leaf, text: "Our boutiques and workshops are powered entirely by renewable energy, completely offsetting our carbon footprint." }
  ];

  return (
    <div className="bg-cream min-h-screen pt-40 pb-32">
       <div className="max-w-7xl mx-auto px-6 text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-serif text-neutral-900 mb-6 drop-shadow-sm">Sustainability</h1>
        <p className="text-neutral-500 max-w-2xl mx-auto text-lg font-light tracking-wide">
          At AURELIA, we believe that true luxury cannot exist without profound respect for the earth that provides our precious materials.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-32 grid grid-cols-1 md:grid-cols-3 gap-8">
         {pillars.map((p, i) => {
           const Icon = p.icon;
           return (
             <div key={i} className="bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-neutral-100 flex flex-col items-center text-center gap-6">
               <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                 <Icon className="w-10 h-10" />
               </div>
               <h2 className="text-2xl font-serif text-neutral-900">{p.title}</h2>
               <p className="text-neutral-500 leading-relaxed font-light text-base">{p.text}</p>
             </div>
           );
         })}
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
          <Image src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?auto=format&fit=crop&q=80" alt="Nature" fill className="object-cover" />
          <div className="absolute inset-0 bg-neutral-900/40 flex flex-col items-center justify-center text-center px-4">
             <h2 className="text-4xl md:text-5xl font-serif text-white tracking-widest drop-shadow-2xl mb-6">A Promise for the Future</h2>
             <Link href="/about" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-gold hover:text-white transition-colors border border-gold hover:border-white px-8 py-4 rounded-full">
               Read Our Full Story
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

