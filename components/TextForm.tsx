"use client";

import { addNote } from "@/app/api/lib/actions/addNote";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const TextForm = () => {
  const router = useRouter();
  const [title, setTitle] = useState('')
  const [tag, setTag] = useState('')
  const [description, setDescription] = useState('')
  return (
    <div className="flex justify-center h-full">
      <form className="flex flex-col border-2 p-6 mt-14">
        <div className="flex justify-center text-2xl mb-2">
          <h2>Add Note</h2>
        </div>
        <input className="m-2 p-2 bg-gray-200 rounded-lg" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input className="m-2 p-2 bg-gray-200 rounded-lg" type="text" placeholder="Tag" value={tag} onChange={(e) => setTag(e.target.value)} />
        <textarea
          name="description"
          id="description"
          cols={40}
          rows={10}
          placeholder="Description"
          value={description} onChange={(e) => setDescription(e.target.value)}
          className="m-2 p-2 bg-gray-200 rounded-lg"
          required
        ></textarea>
        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2" onClick={async (e) => {
          e.preventDefault();
          await addNote(title, tag, description)
          router.push('/dashboard')
          router.refresh()
        }} disabled={!title || !description}>Add Note</button>
      </form>
    </div>
  );
};
