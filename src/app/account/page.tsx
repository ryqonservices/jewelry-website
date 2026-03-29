import Image from "next/image";
import Link from "next/link";
import { User, LogIn, Mail } from "lucide-react";

export default function AccountPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-6 py-40">
      
      <div className="bg-white rounded-[3rem] shadow-2xl max-w-5xl w-full border border-neutral-100 flex overflow-hidden">
         
         <div className="w-full md:w-1/2 p-12 md:p-16 flex flex-col items-center justify-center text-center">
             <User className="w-12 h-12 text-gold mb-6" />
             <h1 className="text-4xl font-serif text-neutral-900 mb-8 drop-shadow-sm">Client Portal</h1>
             
             <form className="w-full flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); alert("Logged in successfully!"); window.location.href='/'; }}>
               <input 
                 type="email" 
                 placeholder="Email Address" 
                 className="w-full border border-neutral-300 px-4 py-4 rounded-xl focus:outline-none focus:border-gold transition-colors text-center" 
                 required 
               />
               <input 
                 type="password" 
                 placeholder="Password" 
                 className="w-full border border-neutral-300 px-4 py-4 rounded-xl focus:outline-none focus:border-gold transition-colors text-center" 
                 required 
               />
               
               <div className="flex justify-between items-center px-2">
                 <label className="flex items-center gap-2 text-xs text-neutral-500 cursor-pointer hover:text-gold transition-colors">
                   <input type="checkbox" className="accent-gold rounded" /> Remember Me
                 </label>
                 <Link href="#" className="text-xs text-neutral-500 hover:text-gold transition-colors">Forgot Password?</Link>
               </div>

               <button type="submit" className="w-full bg-neutral-900 text-cream py-5 uppercase tracking-[0.2em] text-xs font-bold hover:bg-gold transition-all duration-300 shadow-sm flex items-center justify-center gap-2 rounded-full mt-4 hover:shadow-xl hover:-translate-y-1">
                 Sign In <LogIn className="w-4 h-4" />
               </button>
             </form>

             <div className="mt-12 pt-8 border-t border-neutral-100 w-full text-center">
                <p className="text-neutral-400 text-sm font-light mb-4">Don't have an account?</p>
                <Link href="#" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold font-bold hover:text-neutral-900 transition-colors">
                  Create Account <Mail className="w-4 h-4"/>
                </Link>
             </div>
         </div>

         <div className="hidden md:block w-1/2 relative bg-neutral-900">
            <Image src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80" alt="Account" fill className="object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent flex items-end p-12">
               <p className="text-white font-serif italic text-2xl drop-shadow-lg leading-relaxed max-w-sm">"Your personal gateway to the extraordinary world of AURELIA."</p>
            </div>
         </div>

      </div>
    </div>
  );
}

