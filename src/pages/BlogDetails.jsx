import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../lib/api";

export default function BlogDetails() {
  const { id } = useParams();

  const { data: blogs = [] } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">Blog not found</h2>
        <Link to="/" className="text-indigo-600 underline mt-4 inline-block">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-10">
      <Link to="/" className="text-indigo-600 underline">
        ← Back to Home
      </Link>

      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-96 object-cover rounded-xl mt-6"
      />

      <div className="mt-6">
        <span className="text-sm text-indigo-600">
          {blog.category}
        </span>

        <h1 className="text-4xl font-bold mt-2">
          {blog.title}
        </h1>

        <p className="text-sm text-gray-500 mt-2">
          By {blog.author} • {blog.read} min read
        </p>

        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          {blog.content}
        </p>
      </div>
    </div>
  );
}
