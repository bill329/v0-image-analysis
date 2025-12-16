import type { Metadata } from "next";
import { blogs } from "@/json/blogs";
import BlogClient from "./BlogClient";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Stone Concepts",
      description:
        "Explore expert insights on granite, quartz, and marble countertops by Stone Concepts.",
    };
  }

  return {
    title: blog.seoTitle,
    description: `Read expert insights on ${blog.category.toLowerCase()} by Stone Concepts. Learn about granite, quartz & marble countertops, installation tips, and kitchen design guidance.`,
    alternates: {
      canonical: `https://www.stoneconcepts.net/blogs/${blog.slug}`,
    },
    openGraph: {
      title: blog.title,
      description: `Expert ${blog.category.toLowerCase()} insights from Stone Concepts.`,
      url: `https://www.stoneconcepts.net/blogs/${blog.slug}`,
      siteName: "Stone Concepts",
      type: "article",
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return <div className="p-10 text-center">Blog not found</div>;
  }

  return <BlogClient blog={blog} />;
}
