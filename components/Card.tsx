// components/Card.js
"use client"

import { useRouter } from "next/navigation";

interface CardProps {
    title: string,
    tag: string,
    description: string
}
const Card = ({ title, tag, description }: CardProps) => {
    const router = useRouter();
    return (
        <div className="flex justify-between overflow-hidden max-w-lg rounded whitespace-pre-wrap shadow-2xl bg-white mx-auto">
            <div className="px-6 py-4 ">
                <div className="font-bold text-xl mb-2 cursor-pointer">{title}</div>
                <p className="text-gray-700 text-base w-80 truncate ">{description}</p>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{tag}</span>
            </div>
        </div>
    );
};

export default Card;
