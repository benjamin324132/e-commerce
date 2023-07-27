"use server";

import { ProductType } from "@/components/admin/AddProductForm";
import prismaDb from "@/lib/db";

export const getProducts = async () =>{
    const products = await prismaDb.product.findMany()

    return products;
}

export const addProduct = async (values: ProductType) => {
    const productExist = await prismaDb.product.findMany({
      where: {
        slug: values.slug,
      },
    });

    if (productExist.length > 0) {
      throw new Error("Product slug already exist");
    }

    const product = await prismaDb.product.create({
      data: {
        ...values,
      },
    });
    return product;
};
