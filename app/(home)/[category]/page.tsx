import { getProductsByCategory } from "@/actions/products";
import ProductList from "@/components/ProductList";
import { allCategories } from "@/config/categories";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface IParams {
  category: string;
}

export const generateMetadata = async ({
  params,
}: {
  params: IParams;
}): Promise<Metadata> => {
  const category = allCategories.find((cat) => cat.slug.replace("/", "") == params.category)
  if (!category) {
    return {};
  }
  return {
    title: category.label,

  };
};

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
