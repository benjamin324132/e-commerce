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

const ProductItem = () => {
  return (
    <Card className="overflow-hidden border-none shadow-none rounded-none">
      <CardHeader className="p-0">
        <AspectRatio ratio={8 / 9}>
          <Link href="/category/product">
            <div className="w-full h-full grid place-items-center bg-neutral-200">
              <ImageIcon className="w-8 h-8" />
            </div>
          </Link>
        </AspectRatio>
      </CardHeader>
      <CardContent className="mt-3 p-0">
        <Link href="/category/product">
          <CardTitle>Product title</CardTitle>
        </Link>
        <CardDescription>Product Description</CardDescription>
      </CardContent>
      <CardFooter className="pl-0">
        <h3>$300</h3>
      </CardFooter>
    </Card>
  );
};

export default ProductItem;
