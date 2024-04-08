"use client"

import { signIn } from "next-auth/react";
import { useState } from "react";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = await signIn('credentials', {
            username: email,
            password: password,
            redirect: true,
            callbackUrl: '/'
        })
    }
    return (
        <div className="flex justify-center h-screen">
            <form onSubmit={handleSubmit} className="my-auto border-2 p-10 bg-gray-200 rounded-lg">
                <h2 className="flex justify-center text-xl">Login</h2>
                <div className="m-2 flex flex-col text-xl">
                    <label className="mb-2">Email: </label>
                    <input className="p-2 outline-none rounded-lg bg-transparent bg-gray-100" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
                </div>
                <div className="flex flex-col m-2 text-xl mb-6">
                    <label className="mb-2">Password: </label>
                    <input className="p-2 outline-none rounded-lg bg-transparent bg-gray-100" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
                </div>
                <div className="flex justify-center">
                    <button className="bg-slate-700 text-white p-2 px-4 rounded-lg" type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login