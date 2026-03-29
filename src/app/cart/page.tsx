"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MOCK_PRODUCTS } from "@/data/mock";
import { Minus, Plus, X, ArrowRight } from "lucide-react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { product: MOCK_PRODUCTS[0], quantity: 1 },
    { product: MOCK_PRODUCTS[1], quantity: 2 },
  ]);

  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    const newItems = [...cartItems];
    newItems[index].quantity = newQuantity;
    setCartItems(newItems);
  };

  const removeItem = (index: number) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = 0; // Complimentary

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-12 text-center">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-24 flex flex-col items-center">
          <p className="text-neutral-500 mb-8 font-light text-lg">Your shopping cart is empty.</p>
          <Link href="/shop" className="bg-neutral-900 text-cream px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-gold transition-colors">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="hidden md:grid grid-cols-5 text-xs text-neutral-400 uppercase tracking-widest border-b border-neutral-200 pb-4 mb-4">
              <div className="col-span-2">Product</div>
              <div className="text-center">Price</div>
              <div className="text-center">Quantity</div>
              <div className="text-right">Total</div>
            </div>

            {cartItems.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center border-b border-neutral-100 pb-8">
                <div className="col-span-2 flex gap-6">
                  <div className="relative w-24 h-32 bg-beige flex-shrink-0 rounded-2xl overflow-hidden shadow-sm">
                    <Image src={item.product.image} alt={item.product.name} fill className="object-cover p-2 hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xs text-neutral-400 tracking-widest uppercase mb-1">{item.product.category}</p>
                    <Link href={`/product/${item.product.id}`} className="font-serif text-lg text-neutral-900 hover:text-gold transition-colors mb-2">
                      {item.product.name}
                    </Link>
                    <button onClick={() => removeItem(index)} className="flex items-center gap-1 text-xs text-neutral-500 hover:text-red-500 transition-colors uppercase tracking-widest">
                      <X className="w-3 h-3" /> Remove
                    </button>
                    <div className="md:hidden mt-4 font-medium tracking-wider text-neutral-900">
                      ${item.product.price}
                    </div>
                  </div>
                </div>

                <div className="hidden md:block text-center text-neutral-600 tracking-wider">
                  ${item.product.price}
                </div>

                <div className="flex justify-center">
                  <div className="flex items-center border border-neutral-200 w-28 h-10 rounded-full overflow-hidden bg-white shadow-sm">
                    <button onClick={() => updateQuantity(index, item.quantity - 1)} className="w-10 h-full flex items-center justify-center text-neutral-400 hover:text-gold hover:bg-neutral-50 transition-colors">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="flex-grow text-center text-sm font-medium">{item.quantity}</span>
                    <button onClick={() => updateQuantity(index, item.quantity + 1)} className="w-10 h-full flex items-center justify-center text-neutral-400 hover:text-gold hover:bg-neutral-50 transition-colors">
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <div className="text-right font-medium tracking-wider text-neutral-900">
                  ${item.product.price * item.quantity}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-beige p-8 md:p-10 self-start sticky top-32 rounded-[2.5rem] shadow-sm">
            <h2 className="font-serif text-2xl mb-8 border-b border-neutral-200 pb-4 text-neutral-900">Order Summary</h2>
            <div className="flex justify-between mb-4 text-neutral-600">
              <span className="text-sm font-light">Subtotal</span>
              <span className="tracking-wider">${subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-8 text-neutral-600">
              <span className="text-sm font-light">Shipping</span>
              <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Complimentary</span>
            </div>
            <div className="flex justify-between border-t border-neutral-200 pt-6 mb-8 text-neutral-900">
              <span className="font-medium">Total</span>
              <span className="font-serif text-2xl tracking-wider">${(subtotal + shipping).toLocaleString()}</span>
            </div>
            
            <Link 
              href="/checkout" 
              className="w-full bg-neutral-900 text-cream py-5 uppercase tracking-[0.2em] text-xs font-bold hover:bg-gold hover:text-white transition-all duration-500 rounded-full flex items-center justify-center gap-2 shadow-xl hover:-translate-y-1 hover:shadow-luxury"
            >
              Secure Checkout <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="mt-6 flex flex-col gap-4 text-center">
              <div className="flex justify-center gap-4">
                 <div className="w-8 h-5 bg-neutral-200 rounded-sm"></div>
                 <div className="w-8 h-5 bg-neutral-200 rounded-sm"></div>
                 <div className="w-8 h-5 bg-neutral-200 rounded-sm"></div>
              </div>
              <p className="text-xs text-neutral-400 font-light">Payments are secure and encrypted.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
