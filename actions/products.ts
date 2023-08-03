"use server";

import { ProductType } from "@/components/admin/AddProductForm";
import prismaDb from "@/lib/db";

export const getProducts = async () => {
  const products = await prismaDb.product.findMany();

  return products;
};

export const getProduct = async (id: string) => {
  const product = await prismaDb.product.findUnique({
    where: {
      id,
    },
  });

  return product;
};

export const getProductBySlug = async (slug: string) => {
  const product = await prismaDb.product.findFirst({
    where: {
      slug,
    },
  });

  return product;
};

export const getProductsByCategory = async (category: string) => {
  const products = await prismaDb.product.findMany({
    where: {
      category,
    },
  });

  return products;
};

export const searchProducts = async (query?: string) => {
  const products = await prismaDb.product.findMany({
    where: {
      name:{
        contains:query,
      },
    },
  });

  return products;
};


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

export const updateProduct = async (values: ProductType, id: string) => {
  const productExist = await prismaDb.product.findUnique({
    where: {
      id,
    },
  });

  if (!productExist) {
    throw new Error("Product not found");
  }

  if (productExist.slug !== values.slug) {
    const slugExist = await prismaDb.product.findFirst({
      where: {
        slug: values.slug,
      },
    });
    if (slugExist) {
      throw new Error("Product slug already exist");
    }
  }

  const product = await prismaDb.product.update({
    where: {
      id,
    },
    data: {
      ...values,
    },
  });
  return product;
};

export const deleteProduct = async (id: string) => {
  const product = await prismaDb.product.delete({
    where: {
      id,
    },
  });

  return product;
};
