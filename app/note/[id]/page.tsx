import { Appbar } from "@/components/Appbar";
import { Notee } from "@/components/Note";

export default function Note({ params }: { params: { id: string } }) {
    return <div>
        <Appbar />
        <Notee id={params.id} />
    </div>
}