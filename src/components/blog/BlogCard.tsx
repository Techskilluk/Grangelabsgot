import React from 'react';
import { ParallaxCard } from '../ParallaxCard';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  excerpt,
  date,
  readTime,
  category
}) => {
  return (
    <ParallaxCard className="overflow-hidden rounded-xl bg-black/40 backdrop-blur-lg border border-indigo-500/20 hover:shadow-[0_0_30px_-12px_rgba(99,102,241,0.3)] transition-all duration-500 group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-indigo-600/90 backdrop-blur-sm text-white text-sm rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
          <span>{date}</span>
          <span>·</span>
          <span>{readTime} read</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {excerpt}
        </p>

        <button className="inline-flex items-center gap-2 text-indigo-400 text-sm hover:text-indigo-300 transition-colors group/button">
          Read More
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1" />
        </button>
      </div>
    </ParallaxCard>
  );
};