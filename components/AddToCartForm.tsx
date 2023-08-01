"use client";
import { Product } from "@prisma/client";
import { Button } from "./ui/button";
import useCart from "@/hooks/useCart";

interface AddToCartFormProps {
  product: Product;
}

const AddToCartForm: React.FC<AddToCartFormProps> = ({ product }) => {
  const cart = useCart();
  return (
    <div>
      <Button size="lg" onClick={() => cart.addItem(product)}>Add to cart</Button>
    </div>
  );
};

export default AddToCartForm;
