import { Appbar } from "@/components/Appbar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/lib/auth";

export default async function Dashboard() {
    const session = await getServerSession(authOptions);
    return <div>
        <Appbar />
        Dashboard page
        {JSON.stringify(session?.user?.id)}
    </div>

}