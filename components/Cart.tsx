import { CalendarDays, ShoppingBag } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import { Separator } from "./ui/separator";

export function CartMenu() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link href="/cart">
          <ShoppingBag className="w-7 h-7" />
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className=" w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-3 w-full">
            <h4 className="text-md font-semibold">Your shopping bag</h4>
            <Separator />
            <div className="flex gap-x-4">
              <div className="relative w-24 h-24 bg-neutral-200 rounded-md overflow-hidden"></div>
              <div>
                <h3 className=" font-semibold">Product title</h3>
                <h3 className=" text-sm text-neutral-300">Product price</h3>
              </div>
            </div>
            <div className="flex gap-x-4">
              <div className="relative w-24 h-24 bg-neutral-200 rounded-md overflow-hidden"></div>
              <div>
                <h3 className=" font-semibold">Product title</h3>
                <h3 className=" text-sm text-neutral-300">Product price</h3>
              </div>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <h3 className="font-bold">Total</h3>
              <h3 className="font-bold">300.00</h3>
            </div>
            <Button className="w-full" size="lg" asChild>
              <Link href="/cart">Proceed to checkout</Link>
            </Button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
