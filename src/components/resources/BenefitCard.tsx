import React from 'react';
import { Check } from 'lucide-react';
import { ParallaxCard } from '../ParallaxCard';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  features: string[];
}

export const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  features
}) => {
  return (
    <ParallaxCard className="p-8 rounded-2xl bg-black/40 backdrop-blur-lg border border-indigo-500/20 hover:shadow-[0_0_30px_-12px_rgba(99,102,241,0.3)] transition-all duration-500 group">
      <div className="w-12 h-12 bg-indigo-950/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-indigo-500/30">
        <div className="text-indigo-400 transition-transform duration-300 group-hover:rotate-12">
          {icon}
        </div>
      </div>

      <h3 className="text-lg sm:text-xl font-bold text-white mb-6 group-hover:text-indigo-400 transition-colors">
        {title}
      </h3>

      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-indigo-950/50 border border-indigo-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-indigo-400" />
            </div>
            <span className="text-sm sm:text-base text-gray-300 leading-relaxed">{feature}</span>
          </div>
        ))}
      </div>
    </ParallaxCard>
  );
};