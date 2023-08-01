import prismaDb from "@/lib/db";
import { NextResponse } from "next/server";

interface IParams {
  slug: string;
}

export async function GET(req: Request, { params }: { params: IParams }) {
  const product = await prismaDb.product.findFirst({
    where: {
      slug: params.slug,
    },
  });

  if (!product) {
    return new Response("Product not found", { status: 404 });
  }

  return NextResponse.json(product);
}
