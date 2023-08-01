import { getProducts } from "@/actions/products";
import Banner from "@/components/Banner";
import ExploreCategories from "@/components/ExploreCategories";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="w-full">
      <Hero />
      <ExploreCategories />
      <ProductList products={products} />
      <Banner />
    </main>
  );
}
