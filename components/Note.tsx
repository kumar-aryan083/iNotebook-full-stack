
import prisma from "@/prisma";
import { DeleteButton } from "./DeleteButton";
import { authOptions } from "@/app/api/lib/auth";
import { getServerSession } from "next-auth";

export async function Notee({ id }: any) {
    const session = await getServerSession(authOptions);
    if (!session?.user || !session?.user?.id) {
        return {
            message: "Unauthenticated request",
        };
    }
    const note = await prisma.notes.findUnique({
        where: {
            id: Number(id)
        }
    })
    return <div className="flex flex-col h-screen">
        <div className="flex justify-between m-6 border-4 p-6">
            <div>
                <div className="flex p-2">
                    <h1 className="text-xl font-semibold">
                        Title-
                    </h1>
                    <div className="ml-2 mt-1">
                        {note?.title}
                    </div>
                </div>
                <div className="flex p-2">
                    <h1 className="text-xl font-semibold">
                        Tag-
                    </h1>
                    <div className="ml-2 mt-1">
                        {note?.tag}
                    </div>
                </div>
                <div className="flex p-2">
                    <h1 className=" flex text-xl font-semibold">
                        Description-
                    </h1>
                    <div className="ml-2">
                        {note?.description}
                    </div>
                </div>
            </div>
            <div>
                <DeleteButton noteId={note?.id} />
            </div>
        </div>
    </div> as any
}
