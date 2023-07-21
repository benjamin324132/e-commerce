import Heading from "@/components/Heading";
import AddProductForm from "@/components/admin/AddProductForm";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import Link from "next/link";

interface IParams {
  productId: string;
}

const Page = ({ params }: { params: IParams }) => {
  return (
    <div>
      <div className="flex items-start justify-between">
        <Heading
          title="Create product"
          subtitle="Add a new product to your store"
        />
      </div>
      <Separator className="my-6" />
      <AddProductForm />
    </div>
  );
};

export default Page;
