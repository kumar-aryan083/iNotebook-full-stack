"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@/prisma";

export async function addNote(title: string, tag: string, description: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user || !session.user?.id) {
    return {
      message: "Unauthenticated request",
    };
  }
  await prisma.notes.create({
    data: {
      title: title,
      tag: tag,
      description: description,
      userId: Number(session?.user?.id),
    },
  });
  return {
    message: "Done",
  };
}
