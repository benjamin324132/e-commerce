import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <div className="container space-y-6">
      <h2 className="text-4xl font-extrabold">Products</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[1,2,3,4].map((item) => <ProductItem />)}
      </div>
    </div>
  );
};

export default ProductList;
