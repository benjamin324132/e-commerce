"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ProductColumn } from "./TableColumns";
import { Button } from "@/components/ui/button";
import { Edit, Eye, MoreVertical, Trash } from "lucide-react";
import { useTransition } from "react";
import { useToast } from "@/components/ui/use-toast";
import { deleteProduct } from "@/actions/products";
import { useRouter } from "next/navigation";
import { confirmDialog } from "@/hooks/useConfirmDialog";

interface PoductActionsProps {
  product: ProductColumn;
}

const ProductActions: React.FC<PoductActionsProps> = ({ product }) => {
  let [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const router = useRouter();

  const deleteAction = () => {
    confirmDialog(`You are deleting ${product.name} from products`, () => {
      startTransition(async () => {
        try {
          await deleteProduct(product.id);
          router.refresh();
          toast({
            title: "Deleted succesfully",
          });
        } catch (error) {
          toast({
            title: "Something went wrong",
          });
        }
      });
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => router.push(`/${product.category}/${product.slug}`)}
        >
          <Eye className="mr-2 h-4 w-4" /> View
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => router.push(`/admin/products/${product.id}`)}
        >
          <Edit className="mr-2 h-4 w-4" /> Update
        </DropdownMenuItem>
        <DropdownMenuItem onClick={deleteAction} className=" text-red-500">
          <Trash className="mr-2 h-4 w-4" /> Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProductActions;
