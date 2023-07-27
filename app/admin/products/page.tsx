import { DataTable } from "@/components/DataTable";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import Link from "next/link";
import { productColumns } from "./components/TableColumns";
import { getProducts } from "@/actions/products";

const Page = async () => {
  const products = await getProducts();
  return (
    <div>
      <div className="flex items-start justify-between">
        <Heading title="Products" subtitle="Manage your products" />
        <Button asChild>
          <Link href="/admin/products/create">
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </Button>
      </div>
      <Separator className="my-6" />
      <DataTable searchKey="name" data={products} columns={productColumns} />
    </div>
  );
};

export default Page;
