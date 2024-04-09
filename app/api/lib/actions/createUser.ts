"use server";
import prisma from "@/prisma";

export async function createUser(
  name: string,
  email: string,
  password: string
) {
  await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: password,
    },
  });
  return {
    message: "User created successfully",
  };
}
