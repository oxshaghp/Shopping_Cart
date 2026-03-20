import ProductCard from "@/components/productCart";
import { getProducts } from "@/lib/action";

type product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}


export default async function Home() {
  const products = await getProducts();
  return (
    <section className="container mx-auto mt-30">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
