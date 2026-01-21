import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../lib/api";
import { useState } from "react";
import { Link } from "react-router-dom";

// shadcn/ui
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const categories = [
  "All",
  "Technology",
  "Design",
  "Business",
  "Lifestyle",
  "Travel",
  "Food",
];

export default function Home() {
  const { data: blogs = [] } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = blogs.filter(
    (b) =>
      (category === "All" || b.category === category) &&
      b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-10">
      {/* HERO */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-12 rounded-xl text-center">
        <h1 className="text-4xl font-bold mb-3">
          Discover Amazing Stories
        </h1>

        <input
          className="mt-4 px-4 py-2 w-2/3 text-black rounded"
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* CATEGORIES */}
      <div className="mt-10 flex gap-3 flex-wrap">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-4 py-2 rounded ${
              category === c
                ? "bg-indigo-600 text-white"
                : "bg-gray-200"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* BLOG CARDS (shadcn/ui) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {filtered.map((b) => (
          <Link to={`/blog/${b.id}`} key={b.id}>
            <Card className="hover:shadow-xl transition cursor-pointer h-full">
              <img
                src={b.image}
                alt={b.title}
                className="h-44 w-full object-cover rounded-t-lg"
              />

              <CardHeader>
                <span className="text-xs text-indigo-600">
                  {b.category}
                </span>

                <CardTitle className="mt-2 text-lg">
                  {b.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {Array.isArray(b.content)
                    ? b.content[0]
                    : b.content}
                </p>

                <p className="text-xs text-gray-500 mt-3">
                  By {b.author} • {b.read} min read
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* NEWSLETTER */}
      <div className="mt-24 bg-indigo-600 text-white py-16 px-6 text-center rounded-2xl">
        <h2 className="text-3xl font-bold mb-3">
          Never Miss a Story
        </h2>

        <p className="mb-6 text-indigo-100">
          Subscribe to get the latest blogs delivered straight to your inbox.
        </p>

        <div className="flex justify-center gap-2 flex-wrap">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 py-3 w-80 text-black rounded-md outline-none"
          />

          <button className="bg-black px-6 py-3 rounded-md hover:bg-gray-900">
            Subscribe
          </button>
        </div>

        <p className="text-xs mt-4 text-indigo-200">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
