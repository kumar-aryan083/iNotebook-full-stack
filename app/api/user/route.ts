import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const user = await prisma.user.create({
    data: {
      name: "Aryan Srivastava",
      email: "aryan@gmail.com",
      password: "qwerty",
    },
  });
  //   console.log(user);
  return NextResponse.json({
    message: "Demo User Created successfully",
  });
}
