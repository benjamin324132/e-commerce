import { checkAdmin } from "@/actions/admin";
import prismaDb from "@/lib/db";
import { productSchema } from "@/validations/product";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const products = await prismaDb.product.findMany();

  return NextResponse.json(products);
}

export async function POST(req: Request) {
  try {
    const isAdmin = await checkAdmin();

    if (!isAdmin) {
      return new Response("Action not allowed", { status: 401 });
    }
    const body = await req.json();
    const { name, slug, description, category, price, image } =
      productSchema.parse(body);

    const productExist = await prismaDb.product.findMany({
      where: {
        slug,
      },
    });

    if (productExist.length > 0) {
      return new Response("Product slug already exist", { status: 400 });
    }

    const product = await prismaDb.product.create({
      data: {
        name,
        slug,
        description,
        category,
        price,
        image,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
}
