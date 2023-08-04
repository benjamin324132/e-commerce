"use server";

import { CheckoutInfo } from "@/components/CheckoutForm";
import prismaDb from "@/lib/db";
import { getCurrentUser } from "./getCurrentUser";

export const getOrders = async () => {
  const orders = await prismaDb.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return orders;
};

export const createOrder = async (
  values: CheckoutInfo,
  productIds: string[]
) => {
  const user = await getCurrentUser();
  if (!user) {
    return;
  }

  const order = await prismaDb.order.create({
    data: {
      ...values,
      userId: user.id,
      products: {
        create: productIds.map((pId: string) => ({
          product: {
            connect: {
              id: pId,
            },
          },
        })),
      },
    },
  });
  return order;
};
