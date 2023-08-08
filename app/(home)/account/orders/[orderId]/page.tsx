import { getOrderById } from "@/actions/orders";
import OrderDetailed from "@/components/OrderDetailed";

interface IParams {
  orderId: string;
}

const Page = async ({ params }: { params: IParams }) => {
  const order = await getOrderById(params.orderId);

  return (
    //@ts-ignore
    <OrderDetailed order={order} />
  );
};

export default Page;
