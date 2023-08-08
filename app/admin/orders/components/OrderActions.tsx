"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { OrdersColumn } from "./TableColumns";
import { Button } from "@/components/ui/button";
import { Edit, Eye, MoreVertical, Trash } from "lucide-react";
import { useTransition } from "react";
import { useToast } from "@/components/ui/use-toast";

import { useRouter } from "next/navigation";
import { confirmDialog } from "@/hooks/useConfirmDialog";
import { deleteOrder } from "@/actions/orders";

interface OrderActionsProps {
  order: OrdersColumn;
}

const OrderActions: React.FC<OrderActionsProps> = ({ order }) => {
  let [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const router = useRouter();

  const deleteAction = () => {
    confirmDialog(`You are deleting ${order.id} from orders`, () => {
      startTransition(async () => {
        try {
          await deleteOrder(order.id);
          router.refresh();
          toast({
            title: "Deleted succesfully",
          });
        } catch (error) {
          console.log(error);
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
          onClick={() => router.push(`/admin/orders/${order.id}`)}
        >
          <Eye className="mr-2 h-4 w-4" /> View
        </DropdownMenuItem>
        {/*<DropdownMenuItem onClick={deleteAction} className=" text-red-500">
          <Trash className="mr-2 h-4 w-4" /> Delete
         </DropdownMenuItem>*/}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default OrderActions;
