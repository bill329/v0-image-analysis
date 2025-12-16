import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

const BlogCard = ({
  title,
  image,
  date,
  category,
  slug,
}: {
  title: string;
  image: string;
  date: string;
  category: string;
  slug: string;
}) => {
  return (
    <Link
      href={`/blogs/${slug}`}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 max-w-sm cursor-pointer"
    >
      <div className="p-6 pb-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
      </div>

      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6 pt-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
        <button className="text-blue-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
          Read More
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </Link>
  );
};

export default BlogCard;
