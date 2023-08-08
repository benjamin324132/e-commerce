import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ImageIcon } from "lucide-react";
import { getProductBySlug } from "@/actions/products";
import { notFound } from "next/navigation";
import { Product } from "@prisma/client";
import { Metadata } from "next";
import AddToCartForm from "@/components/forms/AddToCartForm";
import RecomendedProducts from "@/components/RecomendedProducts";
import Image from "next/image";
import { wait } from "@/lib/utils";

interface IParams {
  product: string;
}

const getProduct = async (slug: string) => {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/products/${slug}`);
    const product = await data.json();
    return product;
  } catch (error) {
    return null;
  }
};

export const generateMetadata = async ({
  params,
}: {
  params: IParams;
}): Promise<Metadata> => {
  const product: Product = await getProduct(params.product);
  if (!product) {
    return {};
  }
  return {
    title: product.name,
    description: product.description,
  };
};

const Page = async ({ params }: { params: IParams }) => {
  //const product: Product = await getProductBySlug(params.product);
  const product: Product = await getProduct(params.product);

  if (!product) {
    notFound();
  }

  return (
    <div className="py-16">
      <div className="container pb-8 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <div className="relative aspect-square w-full h-full grid place-items-center bg-neutral-200">
          {product.image ? (
                <Image className=" object-cover" fill src={product.image} alt={product.name} />
              ) : (
                <ImageIcon className="w-8 h-8" />
              )}
          </div>
        </div>
        <div className="flex flex-col gap-y-4 w-full md:w-1/2">
          <h2 className="text-lg capitalize text-neutral-400 tracking-tight">
            {product.category}
          </h2>
          <h2 className="text-4xl font-semibold tracking-tight">
            {product.name}
          </h2>
          <h2 className="text-3xl font-semibold tracking-tight">
            ${product.price}
          </h2>
          <AddToCartForm product={product} />
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Description</AccordionTrigger>
              <AccordionContent>{product.description}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <RecomendedProducts id={product.id} category={product.category} />
    </div>
  );
};

export default Page;
