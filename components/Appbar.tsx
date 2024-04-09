"use client"

import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"


export const Appbar = () => {
    const router = useRouter();
    return <div className="flex justify-between border-b px-4">
        <div className="text-lg flex flex-col justify-center">
            iNotebook
        </div>
        <div className="flex flex-col justify-center pt-2">
            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={async () => {
                await signOut()
                router.push("/api/auth/signin")
            }}>Logout</button>
        </div>
    </div>
}