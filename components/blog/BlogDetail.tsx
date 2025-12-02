import { blogs } from "@/json/blogs";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

const BlogDetail = ({
  blog,
  onBack,
}: {
  blog: (typeof blogs)[0];
  onBack: () => void;
}) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="from-gray-50 to-gray-100 border-b">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Articles</span>
          </button>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              {blog.category}
            </span>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>{blog.readTime}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {blog.title}
          </h1>

          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>{blog.date}</span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-6 -mt-8">
        <div className="rounded-xl overflow-hidden shadow-2xl">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-96 object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">{blog.content}</div>
      </div>
    </div>
  );
};

export default BlogDetail;