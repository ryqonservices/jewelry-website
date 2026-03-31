import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-subtle text-foreground py-24 px-8 md:px-16 border-t border-border">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-2 text-2xl font-serif tracking-widest group">
             <span className="group-hover:opacity-60 transition-opacity duration-500 font-bold uppercase italic">AURELIA</span>
          </Link>
          <p className="text-foreground/60 text-sm max-w-xs leading-relaxed">
            Timeless elegance crafted for the modern individual. Experience the luxury of fine jewelry, redefined.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="font-serif text-lg font-medium tracking-tight">Shop</h4>
          <div className="flex flex-col gap-4">
            <Link href="/shop" className="text-foreground/60 hover:text-foreground transition-colors text-sm">Rings</Link>
            <Link href="/shop" className="text-foreground/60 hover:text-foreground transition-colors text-sm">Necklaces</Link>
            <Link href="/shop" className="text-foreground/60 hover:text-foreground transition-colors text-sm">Bracelets</Link>
            <Link href="/shop" className="text-foreground/60 hover:text-foreground transition-colors text-sm">Earrings</Link>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="font-serif text-lg font-medium tracking-tight">Company</h4>
          <div className="flex flex-col gap-4">
            <Link href="/about" className="text-foreground/60 hover:text-foreground transition-colors text-sm">Our Story</Link>
            <Link href="/sustainability" className="text-foreground/60 hover:text-foreground transition-colors text-sm">Sustainability</Link>
            <Link href="/client-services" className="text-foreground/60 hover:text-foreground transition-colors text-sm">Contact Us</Link>
            <Link href="/faq" className="text-foreground/60 hover:text-foreground transition-colors text-sm">FAQ</Link>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="font-serif text-lg font-medium tracking-tight">Contact Us</h4>
          <div className="flex flex-col gap-4 text-foreground/60 text-sm">
            <span className="flex items-center gap-3 hover:text-foreground transition-colors cursor-pointer leading-tight">
              <MapPin className="w-4 h-4" /> 5th Avenue, New York, NY
            </span>
            <span className="flex items-center gap-3 hover:text-foreground transition-colors cursor-pointer">
              <Phone className="w-4 h-4" /> +1 (800) 123-4567
            </span>
            <span className="flex items-center gap-3 hover:text-foreground transition-colors cursor-pointer">
              <Mail className="w-4 h-4" /> clientservices@aurelia.com
            </span>
          </div>
          <div className="flex gap-6 mt-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-foreground transition-all duration-300 transform hover:-translate-y-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-foreground transition-all duration-300 transform hover:-translate-y-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-foreground transition-all duration-300 transform hover:-translate-y-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto border-t border-border mt-20 pt-8 text-center text-foreground/40 text-xs tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} AURELIA Luxury Jewelry. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}
