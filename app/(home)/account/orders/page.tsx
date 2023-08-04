import { getUserOrders } from "@/actions/orders";
import OrderItem from "@/components/OrderItem";

const Page = async () => {
  const orders = await getUserOrders();
  return (
    <div className="flex flex-col gap-y-4">
      {orders.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  );
};

export default Page;
