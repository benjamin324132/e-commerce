import { searchProducts } from "@/actions/products";
import ProductList from "@/components/ProductList";

interface IParams {
  searchParams: {
    q?: string;
  };
}

const Page: React.FC<IParams> = async ({ searchParams }) => {
  const products = await searchProducts(searchParams.q);
  return (
    <div className="py-8">
      <ProductList title="Search" products={products} />
    </div>
  );
};

export default Page;
