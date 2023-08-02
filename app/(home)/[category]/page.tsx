import { getProductsByCategory } from "@/actions/products";
import ProductList from "@/components/ProductList";
import { allCategories } from "@/config/categories";
import { notFound } from "next/navigation";

interface IParams {
  category: string;
}

const Page = async ({ params }: { params: IParams }) => {
  const category = allCategories.some((cat) => cat.slug.replace("/", "") == params.category)
  
  if(!category){
    return notFound();
  }

  const products = await getProductsByCategory(params.category);
  
  return (
    <div className="py-8">
      <ProductList title={params.category} products={products} />
    </div>
  );
};

export default Page;
