import AddToCartButton from "@/components/AddToCartButton";
import { getProductById } from "@/lib/action";import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductById(id);
console.log("product:", product);
  return (
    <main className="container mx-auto px-4 pt-28 pb-10">
      <Link
        href="/"
        className="text-blue-600 hover:underline text-sm mb-6 inline-block"
      >
        ← Back to products
      </Link>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col md:flex-row gap-10">

        <div className="relative w-full md:w-80 h-80 flex-shrink-0 bg-gray-50 rounded-xl flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain p-6"
          />
        </div>

        <div className="flex flex-col flex-1">
          <span className="text-xs text-blue-500 font-medium uppercase mb-2">
            {product.category}
          </span>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {product.title}
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            {product.description}
          </p>

          <div className="flex items-center gap-4 mt-auto">
            <span className="text-3xl font-bold text-blue-600">
              ${product.price}
            </span>
<AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </main>
  );
}