import { getServerSession } from "next-auth";
import { authOptions } from "../api/lib/auth";
import { redirect } from "next/navigation";
import { Button } from "@/components/Button";
import Notes from "@/components/notes";

export default async function Dashboard() {

    const session = await getServerSession(authOptions);
    if (session?.user || session?.user?.id) {
        return <div>
            <Button />
            <div className="flex justify-center m-2">
                <h1 className="text-3xl">
                    Your Notes
                </h1>
            </div>
            <Notes />
        </div>
    } else {
        redirect('/api/auth/signin')
    }
}