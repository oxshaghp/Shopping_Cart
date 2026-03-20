"use client";

import { useCartStore } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { items, removeItem, increaseQty, decreaseQty, totalPrice } =
    useCartStore();

  if (items.length === 0) {
    return (
      <main className="container mx-auto px-4 pt-28 pb-10 text-center">
        <p className="text-gray-400 text-lg mb-4">Your cart is empty 🛒</p>
        <Link
          href="/"
          className="text-blue-600 hover:underline"
        >
          ← Back to products
        </Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 pt-28 pb-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8">


        <div className="flex-1 flex flex-col gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-4"
            >

              <div className="relative w-20 h-20 flex-shrink-0 bg-gray-50 rounded-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-800 line-clamp-1">
                  {item.title}
                </p>
                <p className="text-blue-600 font-bold mt-1">${item.price}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold transition-colors"
                >
                  −
                </button>
                <span className="text-sm font-semibold w-4 text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold transition-colors"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="text-red-400 hover:text-red-600 transition-colors text-sm"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="lg:w-72">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-24">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Order Summary
            </h2>
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Subtotal</span>
              <span>${totalPrice().toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500 mb-6">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="border-t border-gray-100 pt-4 flex justify-between font-bold text-gray-800">
              <span>Total</span>
              <span>${totalPrice().toFixed(2)}</span>
            </div>
            <button className="w-full mt-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium">
              Checkout
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}