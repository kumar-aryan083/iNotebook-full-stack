import { authOptions } from "@/app/api/lib/auth"
import prisma from "@/prisma"
import { getServerSession } from "next-auth"
import Card from "./Card";
import Link from "next/link";

export default async function Notes() {
    const session = await getServerSession(authOptions);
    const allNotes = await prisma.notes.findMany({
        where: {
            userId: Number(session?.user?.id)
        }
    })
    return <div>
        {allNotes.map(note => <Link href={`/note/${note.id}`} key={note.id}>
            <Card key={note.id} title={note.title} tag={note.tag} description={note.description} />
        </Link>
        )}
    </div>
}