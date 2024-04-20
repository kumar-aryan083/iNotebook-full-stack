"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@/prisma";

export async function deleteNote(id: any) {
  const session = await getServerSession(authOptions);
  if (!session?.user || !session?.user?.id) {
    return {
      message: "Unauthenticated request",
    };
  }
  await prisma.notes.delete({
    where: {
      id: Number(id),
    },
  });
  return {
    message: "Note deleted successfully",
  };
}
