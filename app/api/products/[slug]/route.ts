import { NextResponse } from "next/server";

interface IParams {
  slug: string;
}

export async function GET(req: Request, { params }: { params: IParams }) {
  return NextResponse.json(`Single product route ${params.slug}`);
}
