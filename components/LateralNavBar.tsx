"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { signOut } from "next-auth/react";

interface LateralNavBarProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export function LateralNavBar({
  className,
  items,
  ...props
}: LateralNavBarProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === item.href
              ? "bg-neutral-100 hover:bg-neutral-100"
              : "hover:bg-transparent hover:underline",
            "justify-start"
          )}
        >
          {item.title}
        </Link>
      ))}
      <Button
        onClick={() => signOut()}
        variant="ghost"
        className={" hover:bg-neutral-100 justify-start"}
      >
        Sign Out
      </Button>
    </nav>
  );
}
