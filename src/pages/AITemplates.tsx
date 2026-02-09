import React, { useState } from 'react';
import { Bot, Brain, Calendar, MessageSquare, Search, Users, Workflow, Code2 } from 'lucide-react';
import { AnimatedTitle } from '../components/AnimatedTitle';
import { TemplateCard } from '../components/templates/TemplateCard';
import { CategoryFilter } from '../components/templates/CategoryFilter';

const templates = [
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Customer Service Bot",
    description: "Pre-trained AI assistant for handling customer inquiries and support tickets",
    category: "Customer Service",
    rating: 4.8,
    downloads: 2345,
    isPremium: false
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Sales Lead Qualifier",
    description: "AI-powered lead scoring and qualification system",
    category: "Sales",
    rating: 4.9,
    downloads: 1876,
    isPremium: true
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Smart Scheduler",
    description: "Intelligent meeting scheduler with natural language processing",
    category: "Productivity",
    rating: 4.7,
    downloads: 3421,
    isPremium: false
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Email Assistant",
    description: "AI email writer and response generator",
    category: "Communication",
    rating: 4.6,
    downloads: 2198,
    isPremium: true
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "HR Interview Assistant",
    description: "AI-powered interview question generator and response analyzer",
    category: "HR",
    rating: 4.8,
    downloads: 1543,
    isPremium: false
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "Workflow Automator",
    description: "Smart process automation template with custom triggers",
    category: "Productivity",
    rating: 4.9,
    downloads: 2876,
    isPremium: true
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Code Assistant",
    description: "AI pair programming helper with code suggestions",
    category: "Development",
    rating: 4.7,
    downloads: 3198,
    isPremium: false
  }
];

const categories = ["All", "Customer Service", "Sales", "Productivity", "Communication", "HR", "Development"];

export const AITemplates = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === "All" || template.category === selectedCategory;
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-black pt-24 pb-32">
      <div className="relative">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-glow" />
        
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <AnimatedTitle 
              text="Free AI Templates"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            />
            <p className="text-xl text-indigo-300 max-w-2xl mx-auto">
              Jumpstart your AI implementation with our collection of pre-built templates
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 mb-12">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search templates..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 bg-black/40 backdrop-blur-lg border border-indigo-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500/50"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTemplates.map((template, index) => (
                <TemplateCard key={index} {...template} />
              ))}
            </div>

            {filteredTemplates.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">
                  No templates found matching your criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};