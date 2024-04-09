"use client"

import { createUser } from "@/app/api/lib/actions/createUser";
import { useRouter } from "next/navigation";
import { useState } from "react";

function SignupComponent() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="flex justify-center h-screen">
            <form className="my-auto border-4 p-8 rounded-lg">
                <h2 className="flex justify-center text-2xl mb-4">Signup</h2>
                <div className="m-2 flex flex-col text-xl">
                    <label className="mb-2">Name: </label>
                    <input className="p-2 rounded-lg bg-gray-200" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
                </div>
                <div className="m-2 flex flex-col text-xl">
                    <label className="mb-2">Email: </label>
                    <input className="p-2 rounded-lg bg-gray-200" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
                </div>
                <div className="flex flex-col m-2 text-xl mb-6">
                    <label className="mb-2">Password: </label>
                    <input className="p-2  rounded-lg bg-gray-200" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
                </div>
                <div className="flex justify-center">
                    <button onClick={async (e) => {
                        e.preventDefault();
                        await createUser(name, email, password);
                        router.push('/api/auth/signin')
                    }} className="bg-slate-800 text-white p-2 px-4 rounded-lg" type="submit">Signup</button>
                </div>
            </form>
        </div>
    )
}

export default SignupComponent