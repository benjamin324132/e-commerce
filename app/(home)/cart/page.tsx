"use client";
import Heading from "@/components/Heading";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useCart from "@/hooks/useCart";
import { ImageIcon, Trash } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

const Page = () => {
  const cart = useCart();
  const total = useMemo(() => {
    const sum = cart.items.reduce(
      (acc, item) => (acc += parseInt(item.price)),
      0
    );
    return sum;
  }, [cart.items]);

  return (
    <div className="container">
      <Heading title="Your cart" />
      <div className="my-8 flex flex-col md:flex-row md:space-x-6">
        <div className="flex-1 space-y-4">
          {cart.items.map((item) => (
            <div key={item.id} className="flex gap-x-4 relative">
              <div className="relative w-40 h-40  md:w-80 md:h-80 bg-neutral-200 rounded-md overflow-hidden">
                <AspectRatio ratio={1 / 1}>
                  <div className="w-full h-full grid place-items-center bg-neutral-200">
                    <ImageIcon className="w-8 h-8" />
                  </div>
                </AspectRatio>
              </div>
              <div>
                <h3 className="text-xl md:text-3xl font-semibold">
                  {item.name}
                </h3>
                <h3 className="text-sm md:text-xl text-neutral-300">
                  ${item.price}
                </h3>
              </div>
              <div onClick={() => cart.removeItem(item.id)} className="absolute top-0 right-0 cursor-pointer">
                <Trash />
              </div>
            </div>
          ))}
        </div>
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
          <Button className="w-full" size="lg" asChild>
            <Link href="/#">Proceed to checkout</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
