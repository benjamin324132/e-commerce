import { DataTable } from "@/components/DataTable";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import Link from "next/link";
import { productColumns } from "./components/TableColumns";

const data = [
  {
    id: "1",
    name: "Book 1",
    price: "200",
    category: "Drama",
    createdAt: "2023",
  },
  {
    id: "2",
    name: "First Blood 456",
    price: "450",
    category: "Drama",
    createdAt: "2003",
  },
  {
    id: "3",
    name: "Canada 34",
    price: "120",
    category: "Action",
    createdAt: "2023",
  },
];

const Page = () => {
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
      <DataTable searchKey="name" data={data} columns={productColumns} />
    </div>
  );
};

export default Page;
