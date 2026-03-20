import Link from "next/link";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col">
      
      <div className="relative h-48 mb-4 bg-gray-50 rounded-xl flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-2/2 h-2/2 object-contain"
        />
      </div>

      <div className="flex flex-col flex-1">
        <span className="text-xs text-blue-500 font-medium uppercase mb-1">
          {product.category}
        </span>
        <h2 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2">
          {product.title}
        </h2>
        <p className="text-blue-600 font-bold text-lg mt-auto mb-4">
          ${product.price}
        </p>

        <div className="flex gap-2">
          <Link
            href={`/products/${product.id}`}
            className="flex-1 text-center text-sm py-2 rounded-xl border border-blue-200 text-blue-600 hover:bg-blue-50 transition-colors"
          >
            Details
          </Link>
          <button className="flex-1 text-sm py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}