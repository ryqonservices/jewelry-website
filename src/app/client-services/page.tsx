import Link from "next/link";
import { ConciergeBell, PenTool, RefreshCw, Send } from "lucide-react";

export default function ClientServicesPage() {
  const services = [
    { title: "Complimentary Cleaning", icon: RefreshCw, desc: "Visit any boutique for a complimentary ultrasonic cleaning and prong inspection to ensure your piece lasts forever." },
    { title: "Bespoke Design", icon: PenTool, desc: "Work with our master artisans to design a custom piece from scratch or reimagine a family heirloom." },
    { title: "Secure Shipping", icon: Send, desc: "All AURELIA orders are shipped via insured overnight delivery, requiring a signature upon arrival." },
    { title: "Personal Shopper", icon: ConciergeBell, desc: "Let our styling experts curate a selection tailored perfectly to your taste, style, or specific gifting needs." },
  ];

  return (
    <div className="bg-cream min-h-screen pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6 text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-serif text-neutral-900 mb-6 drop-shadow-sm">Client Services</h1>
        <p className="text-neutral-500 max-w-2xl mx-auto text-lg font-light tracking-wide">
          At AURELIA, our relationship with you begins at the moment of purchase. We are dedicated to providing lifetime care for your exquisite pieces.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-neutral-100 flex flex-col items-start gap-6">
              <div className="w-16 h-16 bg-beige rounded-full flex items-center justify-center text-gold">
                <Icon className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-serif text-neutral-900">{s.title}</h2>
              <p className="text-neutral-500 leading-relaxed font-light text-lg">{s.desc}</p>
              <Link href="/appointment" className="mt-auto pt-8 font-medium text-xs uppercase tracking-widest text-gold hover:text-neutral-900 transition-colors">
                Learn More
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
