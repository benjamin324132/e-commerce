import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import SearchForm from "./forms/SearchForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { allCategories } from "@/config/categories";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon className="w-7 h-7 cursor-pointer block md:hidden" />
      </SheetTrigger>
      <SheetContent className="pt-12">
        <SearchForm />
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Site</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-y-4">
                <Link href="/">Site</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Categories</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-y-4">
                {allCategories.map((c) => (
                  <Link href={c.slug} key={c.slug}>
                    {c.label}
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
