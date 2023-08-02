import { getProductsByCategory } from "@/actions/products";
import ProductList from "./ProductList";

interface RecomendedProductsProps {
  id?: string
  category: string;
}

const RecomendedProducts: React.FC<RecomendedProductsProps> = async ({
  id,
  category,
}) => {
  const products = await getProductsByCategory(category);
  const filteredP = products.filter((p) => p.id !== id);
  return (
    <div>
      <ProductList title="Recomended" products={filteredP} />
    </div>
  );
};

export default RecomendedProducts;
