import { signUpSchema } from "@/validations/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = signUpSchema.parse(body);

    return NextResponse.json("Register users route");
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
}
