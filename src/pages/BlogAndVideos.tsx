import React, { useState, useEffect } from 'react';
import { AnimatedTitle } from '../components/AnimatedTitle';
import { BlogCard } from '../components/blog/BlogCard';
import { VideoCard } from '../components/blog/VideoCard';
import Parser from 'rss-parser';

interface SubstackPost {
  title: string;
  link: string;
  content: string;
  pubDate: string;
  categories: string[];
}

// Sample blog posts while Substack integration is being set up
const samplePosts = [
  {
    title: "Revolutionizing Business Operations with AI",
    content: "Discover how artificial intelligence is transforming the way businesses operate in 2024. From automated customer service to intelligent decision-making systems, we explore the latest innovations that are helping companies scale efficiently.",
    link: "https://grangelabs.substack.com",
    pubDate: new Date().toISOString(),
    categories: ["AI Innovation"]
  },
  {
    title: "The Future of Work: AI Agents and Human Collaboration",
    content: "Explore how AI agents are becoming integral team members in modern workplaces. Learn about the synergy between human expertise and artificial intelligence, and how this partnership is reshaping productivity and creativity.",
    link: "https://grangelabs.substack.com",
    pubDate: new Date(Date.now() - 86400000).toISOString(),
    categories: ["Future of Work"]
  },
  {
    title: "Building Scalable AI Solutions for Enterprise",
    content: "A deep dive into the architecture and best practices for implementing enterprise-grade AI solutions. From choosing the right models to ensuring security and compliance, we cover everything you need to know.",
    link: "https://grangelabs.substack.com",
    pubDate: new Date(Date.now() - 172800000).toISOString(),
    categories: ["Enterprise AI"]
  }
];

const videos = [
  {
    thumbnail: "https://images.unsplash.com/photo-1676277791608-ac54525aa38f",
    title: "Getting Started with AI Sales Agents",
    duration: "12:34",
    views: "2.4K",
    date: "2 days ago"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    title: "AI Automation Workshop: From Basics to Advanced",
    duration: "45:21",
    views: "1.8K",
    date: "1 week ago"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1676277791608-ac54525aa38f",
    title: "The Future of Work: AI Integration Strategies",
    duration: "28:15",
    views: "3.2K",
    date: "2 weeks ago"
  }
];

export const BlogAndVideos = () => {
  const [activeTab, setActiveTab] = useState<'blog' | 'videos'>('blog');
  const [blogPosts, setBlogPosts] = useState<SubstackPost[]>(samplePosts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubstackPosts = async () => {
      try {
        setLoading(true);
        // Note: This is a placeholder for the actual Substack integration
        // When the Substack RSS feed is properly set up, uncomment and update the following code:
        
        /*
        const parser = new Parser();
        const feed = await parser.parseURL('https://grangelabs.substack.com/feed');
        
        const posts = feed.items.map(item => ({
          title: item.title || '',
          link: item.link || '',
          content: item.content || '',
          pubDate: item.pubDate || '',
          categories: item.categories || []
        }));

        setBlogPosts(posts);
        */
        
        setError(null);
      } catch (err) {
        console.error('Error fetching Substack posts:', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (activeTab === 'blog') {
      fetchSubstackPosts();
    }
  }, [activeTab]);

  // Function to extract excerpt from HTML content
  const getExcerpt = (content: string) => {
    const div = document.createElement('div');
    div.innerHTML = content;
    const text = div.textContent || div.innerText;
    return text.substring(0, 150) + '...';
  };

  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Function to estimate read time
  const getReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const div = document.createElement('div');
    div.innerHTML = content;
    const text = div.textContent || div.innerText;
    const words = text.trim().split(/\s+/).length;
    const readTime = Math.ceil(words / wordsPerMinute);
    return `${readTime} min`;
  };

  return (
    <main className="min-h-screen bg-black pt-24 pb-32">
      <div className="relative">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-glow" />
        
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <AnimatedTitle 
              text="Latest Updates & Resources"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            />
            <p className="text-xl text-indigo-300 max-w-2xl mx-auto">
              Stay up to date with the latest AI trends, tutorials, and implementation guides
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveTab('blog')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === 'blog'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-indigo-950/50 text-gray-300 hover:bg-indigo-900/50 border border-indigo-500/30'
                }`}
              >
                Blog Posts
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === 'videos'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-indigo-950/50 text-gray-300 hover:bg-indigo-900/50 border border-indigo-500/30'
                }`}
              >
                Video Tutorials
              </button>
            </div>

            {activeTab === 'blog' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading ? (
                  <div className="col-span-full text-center py-12">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-indigo-500 border-t-transparent"></div>
                    <p className="mt-4 text-gray-400">Loading blog posts...</p>
                  </div>
                ) : error ? (
                  <div className="col-span-full text-center py-12">
                    <p className="text-red-400">{error}</p>
                  </div>
                ) : blogPosts.length === 0 ? (
                  <div className="col-span-full text-center py-12">
                    <p className="text-gray-400">No blog posts found.</p>
                  </div>
                ) : (
                  blogPosts.map((post, index) => (
                    <BlogCard
                      key={index}
                      image="https://images.unsplash.com/photo-1677442136019-21780ecad995"
                      title={post.title}
                      excerpt={getExcerpt(post.content)}
                      date={formatDate(post.pubDate)}
                      readTime={getReadTime(post.content)}
                      category={post.categories[0] || 'AI Trends'}
                    />
                  ))
                )}
              </div>
            )}

            {activeTab === 'videos' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video, index) => (
                  <VideoCard key={index} {...video} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};