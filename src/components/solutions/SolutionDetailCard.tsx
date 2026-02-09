import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { ParallaxCard } from '../ParallaxCard';

interface SolutionDetailCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

export const SolutionDetailCard: React.FC<SolutionDetailCardProps> = ({
  icon,
  title,
  subtitle,
  description,
  features
}) => {
  const getTryItNowLink = (title: string) => {
    switch (title) {
      case "Smart Sales Assistant":
        return "https://app.relevanceai.com/agents/d7b62b/00536847df27-4068-ab95-3e8bd4ba5f64/439b65f1-add4-497f-9dd5-88755300b74e/clone";
      case "Meeting Scheduler":
        return "https://app.relevanceai.com/agents/d7b62b/00536847df27-4068-ab95-3e8bd4ba5f64/cae3c06a-8245-4ca0-9a24-7ff8b3ea856c/clone";
      default:
        return "https://ove9zyb57n9.typeform.com/to/MNfUmmyF";
    }
  };

  return (
    <ParallaxCard className="p-6 md:p-8 lg:p-12 rounded-2xl bg-black/40 backdrop-blur-lg border border-indigo-500/20 hover:shadow-[0_0_50px_-12px_rgba(99,102,241,0.3)] transition-all duration-500 group">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-indigo-950/50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-indigo-500/30">
            <div className="text-indigo-400 transition-transform duration-300 group-hover:rotate-12">
              {icon}
            </div>
          </div>
        </div>

        <div className="flex-grow">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors font-display tracking-tight">
            {title}
          </h3>
          <p className="text-indigo-300 text-base md:text-lg mb-4 font-medium tracking-tight">{subtitle}</p>
          <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed font-light">{description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-indigo-950/50 border border-indigo-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 text-indigo-400" />
                </div>
                <span className="text-gray-300 text-base leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a 
              href={getTryItNowLink(title)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group/link"
            >
              Try it now
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </ParallaxCard>
  );
};