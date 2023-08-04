import { DataTable } from "@/components/DataTable";
import Heading from "@/components/Heading";
import { Separator } from "@/components/ui/separator";
import { ordersColumns } from "./components/TableColumns";
import { getOrders } from "@/actions/orders";


const Page = async () => {
  const orders = await getOrders();
  return (
    <div>
      <div className="flex items-start">
        <Heading title="Orders" subtitle="Manage your orders" />
      </div>
      <Separator className="my-6" />
      <DataTable searchKey="name" data={orders} columns={ordersColumns} />
    </div>
  );
};

export default Page;
