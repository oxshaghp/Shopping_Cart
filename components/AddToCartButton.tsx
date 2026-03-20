"use client"; 

import { useCartStore } from "@/lib/store";

type Props = {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
};

export default function AddToCartButton({ product }: Props) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <button
      onClick={() => addItem(product)}
      className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium"
    >
      Add to cart
    </button>
  );
}