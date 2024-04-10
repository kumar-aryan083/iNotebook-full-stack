"use client"

import { signOut } from "next-auth/react"
import Link from "next/link";
import { useRouter } from "next/navigation"


export const Appbar = () => {
    const router = useRouter();
    return <header className="flex justify-between border-b-4 px-4 sticky top-0 z-50 bg-gray-200">
        <Link className="text-lg flex flex-col justify-center" href={'/'}>
            iNotebook
        </Link>
        <div className="flex flex-col justify-center pt-2">
            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={async () => {
                await signOut()
                router.push("/")
            }}>Logout</button>
        </div>
    </header>
}