import React from 'react';
import { ParallaxCard } from '../ParallaxCard';
import { ArrowRight } from 'lucide-react';

interface Tool {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

interface ToolsSectionProps {
  tools: Tool[];
}

export const ToolsSection: React.FC<ToolsSectionProps> = ({ tools }) => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-glow" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-display tracking-tight">
            Powerful Tools for AI Development
          </h2>
          <p className="text-lg text-indigo-300 max-w-2xl mx-auto leading-relaxed">
            Everything you need to build, deploy, and scale your AI solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <ParallaxCard
              key={index}
              className="p-6 rounded-xl bg-black/40 backdrop-blur-lg border border-indigo-500/20 hover:shadow-[0_0_30px_-12px_rgba(99,102,241,0.3)] transition-all duration-500 group"
            >
              <div className="w-12 h-12 bg-indigo-950/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-indigo-500/30">
                <div className="text-indigo-400 transition-transform duration-300 group-hover:rotate-12">
                  {tool.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors font-display tracking-tight">
                {tool.title}
              </h3>
              
              <p className="text-gray-300 mb-6 text-base leading-relaxed">
                {tool.description}
              </p>

              <ul className="space-y-2 mb-6">
                {tool.features.map((feature, idx) => (
                  <li key={idx} className="text-base text-gray-400 flex items-center gap-2 leading-relaxed">
                    <div className="w-1 h-1 bg-indigo-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="https://ove9zyb57n9.typeform.com/to/MNfUmmyF"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-indigo-400 text-sm hover:text-indigo-300 transition-colors group/link"
              >
                Learn more
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
              </a>
            </ParallaxCard>
          ))}
        </div>
      </div>
    </section>
  );
};