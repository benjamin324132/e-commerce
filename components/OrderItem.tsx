import { Order } from "@prisma/client";
import moment from "moment";

interface OrderItemProsp {
  order: Order;
}

const OrderItem: React.FC<OrderItemProsp> = ({ order }) => {
  return (
    <div className="p-4 md:p-6 flex flex-col gap-y-2 border w-full">
      <h3 className="font-semibold">{order.id}</h3>
      <h3>{moment(order.createdAt).format("MMMM DD, yyyy")}</h3>
      <h3>{order.name}</h3>
      <h3>{order.email}</h3>
      <h3>{order.phone}</h3>
      <h3>
        {order.address}, <span>{order.zipCode}</span>, <span>{order.city}</span>
      </h3>
    </div>
  );
};

export default OrderItem;
