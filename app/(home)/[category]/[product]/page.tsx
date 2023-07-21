import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ImageIcon } from "lucide-react";
import ProductList from "@/components/ProductList";

const Page = () => {
  return (
    <div className="py-16">
      <div className="container pb-8 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <div className="aspect-square w-full h-full grid place-items-center bg-neutral-200">
            <ImageIcon className="w-8 h-8" />
          </div>
        </div>
        <div className="flex flex-col gap-y-4 w-full md:w-1/2">
          <h2 className="text-4xl font-semibold tracking-tight">
            Product title
          </h2>
          <h2 className="text-xl text-neutral-400 tracking-tight">
            Product Description
          </h2>
          <h2 className="text-3xl font-semibold tracking-tight">$300.00</h2>
          <div>
            <Button size="lg">Add to cart</Button>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <ProductList />
    </div>
  );
};

export default Page;
