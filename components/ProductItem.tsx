import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
import { ImageIcon } from "lucide-react";
import Link from "next/link";
import { Product } from "@prisma/client";
import Image from "next/image";

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <Card className="overflow-hidden border-none shadow-none rounded-none">
      <CardHeader className="p-0">
        <AspectRatio ratio={8 / 9}>
          <Link href={`/${product.category}/${product.slug}`}>
            <div className="relative w-full h-full grid place-items-center bg-neutral-200">
              {product.image ? (
                <Image className=" object-cover" fill src={product.image} alt={product.name} />
              ) : (
                <ImageIcon className="w-8 h-8" />
              )}
            </div>
          </Link>
        </AspectRatio>
      </CardHeader>
      <CardContent className="mt-3 p-0">
        <Link href={`/${product.category}/${product.slug}`}>
          <CardTitle>{product.name}</CardTitle>
        </Link>
        <CardDescription className=" line-clamp-2">
          {product.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="pl-0">
        <h3>${product.price}</h3>
      </CardFooter>
    </Card>
  );
};

export default ProductItem;
