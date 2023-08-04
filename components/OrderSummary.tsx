"use client";
import useCart from "@/hooks/useCart";
import { Separator } from "./ui/separator";
import { useMemo } from "react";

const OrderSumary = () => {
  const cart = useCart();
  
  const total = useMemo(() => {
    const sum = cart.items.reduce(
      (acc, item) => (acc += parseInt(item.price)),
      0
    );
    return sum;
  }, [cart.items]);

  return (
    <div className="md:w-1/3 md:p-8 mt-8 md:m-0 flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">Order summary</h2>
      <Separator />
      <div className="flex items-center justify-between">
        <h3 className="font-bold">Products</h3>
        <h3 className="font-bold">250.00</h3>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="font-bold">Delivery</h3>
        <h3 className="font-bold">20.00</h3>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="font-bold">Tax</h3>
        <h3 className="font-bold">30.00</h3>
      </div>
      <Separator />
      <div className="flex items-center justify-between">
        <h3 className="font-bold">Total</h3>
        <h3 className="font-bold">${total}</h3>
      </div>
    </div>
  );
};

export default OrderSumary;