
import BlogCard from "@/components/blog/BlogCard";
import { blogs } from "@/json/blogs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen Countertop Blog | Granite, Quartz & Marble Guides | Stone Concepts",
  description:
    "Expert granite, quartz & marble countertop installation in Berlin, MA. Custom fabrication, quality craftsmanship. Serving Eastern MA. Free consultation: +1(978) 568-1911",
  alternates: {
    canonical: "https://www.stoneconcepts.net/blogs",
  },
};

const Blogs = () => {
  return (
    <div className="min-h-screen from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Stone Concepts Blog | Countertop Guides & Kitchen Design Insights
        </h1>
        <p className="text-gray-600 mb-12">
          Read expert articles on granite, quartz and marble countertops,
          kitchen remodel planning, installation tips and design inspiration.
          Explore the Stone Concepts Blog for guidance on creating your dream
          kitchen.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center place-items-center">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              {...blog}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
