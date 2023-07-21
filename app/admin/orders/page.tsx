import { DataTable } from "@/components/DataTable";
import Heading from "@/components/Heading";
import { Separator } from "@/components/ui/separator";
import { ordersColumns } from "./components/TableColumns";

const data = [
  {
    id: "1",
    username: "Jhony",
    address: "Smith road #427",
    phone: "6423456345",
    totalPrice: "289.00",
    createdAt: "2022",
  },
  {
    id: "2",
    username: "Mabel",
    address: "Smith road #427",
    phone: "632325589",
    totalPrice: "50.00",
    createdAt: "2022",
  },
  {
    id: "3",
    username: "Rob",
    address: "Smith road #427",
    phone: "523435467",
    totalPrice: "100.00",
    createdAt: "2022",
  },
];

const Page = () => {
  return (
    <div>
      <div className="flex items-start">
        <Heading title="Orders" subtitle="Manage your orders" />
      </div>
      <Separator className="my-6" />
      <DataTable searchKey="username" data={data} columns={ordersColumns} />
    </div>
  );
};

export default Page;
