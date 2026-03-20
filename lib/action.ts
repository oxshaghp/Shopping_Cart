// First Get Products Action
export const getProducts = async () => {
    try{
        const res = await fetch("https://fakestoreapi.com/products",{
            next: { revalidate: 3600 }, // Revalidate every 60 seconds
        });
        const data = await res.json();
        return data;
    }catch(err){
        console.error("Error fetching products:", err);
    }
}
// Get Single Product Action
export async function getProductById(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error("Product not found");

  return res.json();
}