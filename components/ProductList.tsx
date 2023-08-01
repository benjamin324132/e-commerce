import { Product } from "@prisma/client";
import ProductItem from "./ProductItem";

interface ProductListProps {
  products: Product[]
}

const ProductList: React.FC<ProductListProps> = ({
  products
}) => {
  return (
    <div className="container space-y-6">
      <h2 className="text-4xl font-extrabold">Products</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products?.map((product) => <ProductItem key={product.id} product={product} />)}
      </div>
    </div>
  );
};

export default ProductList;
