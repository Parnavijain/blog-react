import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addBlog } from "../lib/api";
import { useNavigate } from "react-router-dom";

export default function AddBlog() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [form, setForm] = useState({
    title: "",
    category: "Technology",
    content: "",
    author: "",
    image: "",
  });

  const mutation = useMutation({
    mutationFn: addBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      navigate("/");
    },
  });

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Add New Blog</h2>

      <input
        className="w-full border p-2 mb-3 rounded"
        placeholder="Title"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <input
        className="w-full border p-2 mb-3 rounded"
        placeholder="Author"
        onChange={(e) => setForm({ ...form, author: e.target.value })}
      />

      <input
        className="w-full border p-2 mb-3 rounded"
        placeholder="Image URL"
        onChange={(e) => setForm({ ...form, image: e.target.value })}
      />

      <select
        className="w-full border p-2 mb-3 rounded"
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      >
        <option>Technology</option>
        <option>Design</option>
        <option>Business</option>
        <option>Lifestyle</option>
        <option>Travel</option>
        <option>Food</option>
      </select>

      <textarea
        className="w-full border p-2 mb-4 rounded"
        placeholder="Blog content"
        rows="4"
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      />

      <button
        onClick={() => mutation.mutate(form)}
        className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
      >
        Publish Blog
      </button>
    </div>
  );
}
