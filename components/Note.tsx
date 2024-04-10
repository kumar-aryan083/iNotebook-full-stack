import prisma from "@/prisma"

export const Notee = async ({ id }: any) => {
    const note = await prisma.notes.findUnique({
        where: {
            id: Number(id)
        }
    })
    return <div className="flex flex-col h-screen">
        <div className="m-6 border-4 p-6">
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

    </div>
}