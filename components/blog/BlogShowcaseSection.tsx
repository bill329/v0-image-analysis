"use client";
import { ArrowRight, BookOpen } from "lucide-react";
import BlogCard from "./BlogCard";
import { useRouter } from "next/navigation";
import { blogsMinimalData } from "@/json/blogs";
import { Button } from "../ui/button";
import Link from "next/link";

export default function BlogShowcaseSection() {
  const router = useRouter();

  const handleBlogClick = () => {
    router.push("/blogs");
  };

  return (
    <section className="py-20 from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Latest Insights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Stone Concepts Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the Stone Concepts Blog for guidance on creating your dream
            kitchen.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="flex flex-wrap justify-evenly gap-8 mb-12">
          {blogsMinimalData.map((blog) => (
            <BlogCard key={blog.id} {...blog} onClick={handleBlogClick} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button asChild size="lg" className="group">
            <Link href="/blogs">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>

    </section>
  );
}
