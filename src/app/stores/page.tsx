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
    <div className="bg-cream min-h-screen pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6 text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-serif text-neutral-900 mb-6 drop-shadow-sm">Our Boutiques</h1>
        <p className="text-neutral-500 max-w-2xl mx-auto text-lg font-light tracking-wide">
          Step into the world of AURELIA. Experience our exceptional creations in person and enjoy personalized consultations in luxuriously appointed spaces.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {stores.map((store, i) => (
          <div key={i} className="bg-white rounded-[3rem] overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500 border border-neutral-100">
            <div className="relative h-64 w-full overflow-hidden">
              <Image src={store.img} alt={store.city} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-neutral-900/20" />
            </div>
            <div className="p-10 text-center">
              <h2 className="text-3xl font-serif text-neutral-900 mb-6">{store.city}</h2>
              <div className="flex flex-col gap-3 items-center text-neutral-500 text-sm font-light mb-8">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gold"/> {store.addr}</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-gold"/> {store.hours}</span>
                <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-gold"/> +1 (800) 123-4567</span>
              </div>
              <Link href="/appointment" className="uppercase tracking-widest text-xs font-bold text-neutral-900 border-b-2 border-gold pb-1 hover:text-gold transition-colors">
                Book Appointment Here
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

