import Banner from "@/components/Banner";
import ExploreCategories from "@/components/ExploreCategories";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <ExploreCategories />
      <ProductList />
      <Banner />
    </main>
  )
}
