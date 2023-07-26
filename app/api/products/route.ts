import { productSchema } from "@/validations/product";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.json("Products route");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {name, slug, description, category, price, image} = productSchema.parse(body);



    return NextResponse.json("Products route");
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
}
