import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Phone } from "lucide-react";

export default function StoresPage() {
  const stores = [
    { city: "New York", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80", addr: "767 5th Ave, New York, NY 10153", hours: "Mon-Sat: 10am - 7pm" },
    { city: "Paris", img: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?auto=format&fit=crop&q=80", addr: "23 Place Vendôme, 75001 Paris", hours: "Mon-Sat: 10:30am - 7pm" },
    { city: "Milan", img: "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?auto=format&fit=crop&q=80", addr: "Via Monte Napoleone, 8, 20121 Milano", hours: "Mon-Sat: 10am - 7:30pm" },
    { city: "Tokyo", img: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80", addr: "3-chōme-14-1 Shinjuku, Tokyo", hours: "Daily: 10am - 8pm" }
  ];

  return (
    <div className="bg-background min-h-screen pt-40 pb-24 text-foreground selection:bg-accent selection:text-background">
      <div className="max-w-7xl mx-auto px-6 text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-6 tracking-tighter italic uppercase">Our Boutiques</h1>
        <p className="text-foreground/50 max-w-2xl mx-auto text-lg font-light tracking-wide italic">
          Step into the world of AURELIA. Experience our exceptional creations in person and enjoy personalized consultations in luxuriously appointed spaces.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 pb-32">
        {stores.map((store, i) => (
          <div key={i} className="bg-subtle rounded-[3rem] overflow-hidden shadow-xl group transition-all duration-500 border border-border">
            <div className="relative h-72 w-full overflow-hidden">
              <Image src={store.img} alt={store.city} fill className="object-cover group-hover:scale-105 transition-transform duration-[2s]" />
              <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-1000" />
            </div>
            <div className="p-12 text-center space-y-10">
              <div className="space-y-4">
                 <h2 className="text-4xl font-serif text-foreground italic uppercase tracking-tight">{store.city}</h2>
                 <div className="w-12 h-px bg-accent/20 mx-auto" />
              </div>

              <div className="flex flex-col gap-5 items-center text-foreground/40 text-xs font-medium uppercase tracking-widest">
                <span className="flex items-center gap-3"><MapPin className="w-4 h-4 text-accent/60"/> {store.addr}</span>
                <span className="flex items-center gap-3"><Clock className="w-4 h-4 text-accent/60"/> {store.hours}</span>
                <span className="flex items-center gap-3"><Phone className="w-4 h-4 text-accent/60"/> +1 (800) 123-4567</span>
              </div>

              <div className="pt-4">
                <Link href="/appointment" className="inline-block px-10 py-5 bg-foreground text-background uppercase tracking-[0.4em] text-[9px] font-black rounded-full hover:opacity-90 transition-all shadow-xl">
                   Request Private Discovery
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

