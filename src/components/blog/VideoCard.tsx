import React from 'react';
import { ParallaxCard } from '../ParallaxCard';
import { Play, Clock } from 'lucide-react';

interface VideoCardProps {
  thumbnail: string;
  title: string;
  duration: string;
  views: string;
  date: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({
  thumbnail,
  title,
  duration,
  views,
  date
}) => {
  return (
    <ParallaxCard className="overflow-hidden rounded-xl bg-black/40 backdrop-blur-lg border border-indigo-500/20 hover:shadow-[0_0_30px_-12px_rgba(99,102,241,0.3)] transition-all duration-500 group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full bg-indigo-600/90 flex items-center justify-center">
            <Play className="w-6 h-6 text-white fill-white" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs text-white flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {duration}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors line-clamp-2">
          {title}
        </h3>
        
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span>{views} views</span>
          <span>·</span>
          <span>{date}</span>
        </div>
      </div>
    </ParallaxCard>
  );
};