import React from 'react';
import { ParallaxCard } from '../ParallaxCard';
import { ArrowRight, Star } from 'lucide-react';

interface TemplateCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  category: string;
  rating: number;
  downloads: number;
  isPremium?: boolean;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({
  icon,
  title,
  description,
  category,
  rating,
  downloads,
  isPremium = false
}) => {
  return (
    <ParallaxCard className="p-6 rounded-xl bg-black/40 backdrop-blur-lg border border-indigo-500/20 hover:shadow-[0_0_30px_-12px_rgba(99,102,241,0.3)] transition-all duration-500 group">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-indigo-950/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-indigo-500/30">
          <div className="text-indigo-400 transition-transform duration-300 group-hover:rotate-12">
            {icon}
          </div>
        </div>

        {isPremium && (
          <div className="px-2 py-1 bg-indigo-500/20 rounded-full text-xs font-medium text-indigo-300 border border-indigo-500/30">
            Premium
          </div>
        )}
      </div>

      <h3 className="text-xl font-bold text-white mt-4 mb-2 group-hover:text-indigo-400 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
        {description}
      </p>

      <div className="flex items-center gap-4 mb-4 text-sm">
        <span className="text-indigo-300">{category}</span>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-gray-300">{rating.toFixed(1)}</span>
        </div>
        <span className="text-gray-400">{downloads} downloads</span>
      </div>

      <button className="w-full px-4 py-2 bg-indigo-600/20 text-indigo-400 rounded-lg font-medium border border-indigo-500/30 hover:bg-indigo-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/button">
        View Template
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1" />
      </button>
    </ParallaxCard>
  );
};