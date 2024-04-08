import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./api/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session.user || !session.user.id) {
    redirect("/api/auth/signin")
  } else {
    redirect("/dashboard")
  }
}
