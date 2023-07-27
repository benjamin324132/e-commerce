import prismaDb from "@/lib/db";
import { signUpSchema } from "@/validations/auth";
import { NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = signUpSchema.parse(body);

    const userExist = await prismaDb.user.findUnique({
      where: {
        email,
      },
    });

    if (userExist) {
      return new Response("User already exist", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismaDb.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response("Invalid Credentials", { status: 400 });
    }
    return new Response("Something went wrong", { status: 500 });
  }
}
