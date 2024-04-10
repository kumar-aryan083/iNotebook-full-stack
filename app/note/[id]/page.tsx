import { Notee } from "@/components/Note";

export default function Note({ params }: { params: { id: string } }) {
    return <Notee id={params.id} />
}