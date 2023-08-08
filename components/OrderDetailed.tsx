import moment from "moment";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { Order, Product } from "@prisma/client";

interface OrderDetailedProps {
  order: Order & {
    products: {
      product: Product;
    }[];
  };
}

const OrderDetailed: React.FC<OrderDetailedProps> = ({ order }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <div>
        <h2 className="text-xl font-semibold">Order</h2>
        <h3>{order?.id}</h3>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Date</h2>
        <h3>{moment(order?.createdAt).format("MMMM DD, yyyy")}</h3>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Name</h2>
        <h3>
          {order?.name} {order?.lastName}
        </h3>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Email</h2>
        <h3>{order?.email}</h3>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Address</h2>
        <h3>
          {order?.address}, {order?.zipCode}, {order?.city}
        </h3>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Phone</h2>
        <h3>{order?.phone}</h3>
      </div>
      <div>
        <h3 className="text-2xl font-semibold">Products</h3>
        <div className="mt-4 flex flex-col gap-y-4">
          {order?.products.map((p) => (
            <div key={p.product.id} className="flex gap-x-4 relative">
              <div className="relative w-40 h-40  md:w-80 md:h-80 bg-neutral-200 rounded-md overflow-hidden">
                <AspectRatio ratio={1 / 1}>
                  <div className=" w-40 h-40  md:w-80 md:h-80 grid place-items-center bg-neutral-200">
                    {p.product.image ? (
                      <Image
                        className=" object-cover"
                        fill
                        src={p.product.image}
                        alt={p.product.name}
                      />
                    ) : (
                      <ImageIcon className="w-8 h-8" />
                    )}
                  </div>
                </AspectRatio>
              </div>
              <div>
                <h3 className="text-xl md:text-3xl font-semibold">
                  {p.product.name}
                </h3>
                <h3 className="text-sm md:text-xl text-neutral-300">
                  ${p.product.price}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderDetailed;
