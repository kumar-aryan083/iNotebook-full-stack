"use client"

import { useRouter } from "next/navigation"

export const Button = () => {
    const router = useRouter()
    return <button className="bg-slate-800 text-white p-2 px-4 rounded-lg m-4" onClick={() => {
        router.push('/createnote')
    }}>Add new note</button>
}