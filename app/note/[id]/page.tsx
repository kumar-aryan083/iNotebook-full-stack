import { authOptions } from "@/app/api/lib/auth";
import { Appbar } from "@/components/Appbar";
import { Notee } from "@/components/Note";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Note({ params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    if (session?.user || session?.user?.id) {
        return <div>
            <Appbar />
            <Notee id={params.id} />
        </div>
    } else {
        redirect('/api/auth/signin')
    }
}