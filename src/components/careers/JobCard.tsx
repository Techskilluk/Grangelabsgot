import React, { useState } from 'react';
import { ParallaxCard } from '../ParallaxCard';
import { ArrowRight, Share2 } from 'lucide-react';
import { ShareModal } from './ShareModal';

interface JobCardProps {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

export const JobCard: React.FC<JobCardProps> = ({
  title,
  department,
  location,
  type,
  description
}) => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [shareCount, setShareCount] = useState(0);

  const handleShare = () => {
    setIsShareModalOpen(true);
  };

  const handleShareComplete = () => {
    setShareCount(prev => prev + 1);
  };

  // Generate a URL-friendly slug from the job title
  const getJobSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  };

  // Construct the shareable URL
  const getShareableUrl = () => {
    const baseUrl = window.location.origin;
    const path = window.location.pathname;
    const slug = getJobSlug(title);
    return `${baseUrl}${path}?role=${encodeURIComponent(slug)}`;
  };

  return (
    <ParallaxCard className="p-6 rounded-xl bg-black/40 backdrop-blur-lg border border-indigo-500/20 hover:shadow-[0_0_30px_-12px_rgba(99,102,241,0.3)] transition-all duration-500 group">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-indigo-950/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-indigo-500/30">
          <div className="text-indigo-400 transition-transform duration-300 group-hover:rotate-12">
            {department === "Engineering" ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </div>
        </div>

        <div className="px-2 py-1 bg-indigo-500/20 rounded-full text-xs font-medium text-indigo-300 border border-indigo-500/30">
          {department}
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mt-4 mb-2 group-hover:text-indigo-400 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
        {description}
      </p>

      <div className="flex items-center gap-4 mb-4 text-sm">
        <span className="text-indigo-300">{location}</span>
        <span>•</span>
        <span className="text-gray-300">{type}</span>
      </div>

      <div className="flex gap-2">
        <a
          href="https://ove9zyb57n9.typeform.com/to/e6qdPC18"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium border border-indigo-500/30 hover:bg-indigo-500 transition-all duration-300 flex items-center justify-center gap-2 group/button shadow-[0_0_20px_0_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_0_rgba(99,102,241,0.5)]"
          onClick={() => {
            // Track application click (implement your analytics here)
            console.log('Application clicked:', title);
          }}
        >
          Apply Now
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1" />
        </a>

        <button
          onClick={handleShare}
          className="px-4 py-2 bg-indigo-950/50 text-indigo-400 rounded-lg font-medium border border-indigo-500/30 hover:bg-indigo-900/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 relative group/share"
        >
          <Share2 className="w-4 h-4" />
          {shareCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {shareCount}
            </span>
          )}
          <span className="sr-only">Share</span>
        </button>
      </div>

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        onShare={handleShareComplete}
        jobTitle={title}
        jobUrl={getShareableUrl()}
      />
    </ParallaxCard>
  );
};