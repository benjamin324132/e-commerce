import { getProduct } from "@/actions/products";
import Heading from "@/components/Heading";
import AddProductForm from "@/components/admin/AddProductForm";
import { Separator } from "@/components/ui/separator";
import { Product } from "@prisma/client";
import { notFound } from "next/navigation";

interface IParams {
  productId: string;
}

const Page = async ({ params }: { params: IParams }) => {
  let product: Product | null = null;

  if (params.productId !== "create") {
    product = await getProduct(params.productId);

    if (!product) {
      notFound();
    }
  }

  return (
    <div>
      <div className="flex items-start justify-between">
        <Heading
          title="Create product"
          subtitle="Add a new product to your store"
        />
      </div>
      <Separator className="my-6" />
      <AddProductForm product={product} />
    </div>
  );
};

export default Page;
