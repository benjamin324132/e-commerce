"use client";
import { CalendarDays, ImageIcon, ShoppingBag } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import { Separator } from "./ui/separator";
import useCart from "@/hooks/useCart";
import { useMemo } from "react";
import Image from "next/image";

export function CartMenu() {
  const cart = useCart();
  const total = useMemo(() => {
    const sum = cart.items.reduce(
      (acc, item) => (acc += parseInt(item.price)),
      0
    );
    return sum;
  }, [cart.items]);

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link href="/cart">
          <ShoppingBag className="w-7 h-7" />
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className=" w-80">
        {cart.items.length > 0 ? (
          <div className="flex justify-between space-x-4">
            <div className="space-y-3 w-full">
              <h4 className="text-md font-semibold">Your shopping bag</h4>
              <Separator />
              {cart.items.map((item) => (
                <div key={item.id} className="flex gap-x-4">
                  <div className="relative w-24 h-24 bg-neutral-200 rounded-md overflow-hidden grid place-items-center">
                    {item.image ? (
                      <Image
                        className=" object-cover"
                        fill
                        src={item.image}
                        alt={item.name}
                      />
                    ) : (
                      <ImageIcon className="w-4 h-4" />
                    )}
                  </div>
                  <div>
                    <h3 className=" font-semibold">{item.name}</h3>
                    <h3 className=" text-sm text-neutral-300">${item.price}</h3>
                  </div>
                </div>
              ))}
              <Separator />
              <div className="flex items-center justify-between">
                <h3 className="font-bold">Total</h3>
                <h3 className="font-bold">${total}</h3>
              </div>
              <Button className="w-full" size="lg" asChild>
                <Link href="/checkout">Proceed to checkout</Link>
              </Button>
            </div>
          </div>
        ) : (
          <h3 className=" text-xl font-extrabold text-center">
            Your cart is empty
          </h3>
        )}
      </HoverCardContent>
    </HoverCard>
  );
}
