import Link from "next/link";
import { HelpCircle, ChevronRight } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    { q: "How long does bespoke design take?", a: "Custom creations typically require 4-8 weeks from the initial consultation to final delivery, depending on the complexity of the design." },
    { q: "Do you offer resizing?", a: "Yes, we offer one complimentary resizing for all rings within the first 90 days of purchase." },
    { q: "What is your return policy?", a: "Engraved and bespoke items are final sale. All other pieces may be returned within 30 days in pristine condition with original packaging." },
    { q: "How should I clean the jewelry at home?", a: "We recommend using mild soap, warm water, and a very soft brush. Avoid exposing your pieces to harsh chemicals or extreme temperatures." },
    { q: "Do you ship internationally?", a: "Yes, AURELIA offers fully insured worldwide shipping. Delivery times vary by region, typically taking 3-7 business days." }
  ];

  return (
    <div className="bg-white min-h-screen pt-40 pb-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <HelpCircle className="w-12 h-12 text-gold mx-auto mb-6" />
          <h1 className="text-5xl font-serif text-neutral-900 mb-6 drop-shadow-sm">Frequently Asked Questions</h1>
          <p className="text-neutral-500 text-lg font-light tracking-wide">
            Find answers to common inquiries regarding our pieces, services, and policies.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {faqs.map((faq, i) => (
            <div key={i} className="group bg-beige p-8 rounded-3xl cursor-pointer hover:shadow-lg transition-all duration-300 border border-neutral-100">
               <div className="flex justify-between items-center mb-4">
                 <h3 className="font-serif text-xl text-neutral-900 group-hover:text-gold transition-colors">{faq.q}</h3>
                 <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-gold transition-colors" />
               </div>
               <p className="text-neutral-600 font-light leading-relaxed">
                 {faq.a}
               </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center border-t border-neutral-100 pt-12">
          <p className="text-neutral-500 mb-6">Still need assistance?</p>
          <Link href="/client-services" className="inline-flex items-center gap-2 bg-neutral-900 text-cream px-8 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-gold transition-colors duration-300 rounded-full shadow-lg">
            Contact Client Services
          </Link>
        </div>
      </div>
    </div>
  );
}
