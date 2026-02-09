import React from 'react';
import { Check } from 'lucide-react';
import { ParallaxCard } from '../ParallaxCard';

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

export const SolutionCard: React.FC<SolutionCardProps> = ({
  icon,
  title,
  subtitle,
  description,
  features
}) => {
  return (
    <ParallaxCard className="p-8 rounded-2xl bg-black/40 backdrop-blur-lg border border-indigo-500/20 hover:shadow-[0_0_50px_-12px_rgba(99,102,241,0.3)] transition-all duration-500 group">
      <div className="w-16 h-16 bg-indigo-950/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-indigo-500/30">
        <div className="text-indigo-400 transition-transform duration-300 group-hover:rotate-12">
          {icon}
        </div>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
        {title}
      </h3>
      <p className="text-indigo-300 text-base sm:text-lg mb-4">{subtitle}</p>
      <p className="text-sm sm:text-base text-gray-300 mb-8 leading-relaxed">{description}</p>

      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-indigo-950/50 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 text-indigo-400" />
            </div>
            <span className="text-sm sm:text-base text-gray-300">{feature}</span>
          </div>
        ))}
      </div>
    </ParallaxCard>
  );
};