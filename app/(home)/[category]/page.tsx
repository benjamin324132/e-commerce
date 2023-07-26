import ProductList from "@/components/ProductList";
import { allCategories } from "@/config/categories";
import { notFound } from "next/navigation";

interface IParams {
  category: string;
}

const Page = ({ params }: { params: IParams }) => {
  const category = allCategories.some((cat) => cat.slug.replace("/", "") == params.category)
  
  if(!category){
    return notFound();
  }
  
  return (
    <div className="py-8">
      <ProductList />
    </div>
  );
};

export default Page;
