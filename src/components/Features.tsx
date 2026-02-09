import React from 'react';
import { Brain, Rocket, BarChart3, Sparkles } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useSmoothTransition } from '../hooks/useSmoothTransition';
import { AnimatedTitle } from './AnimatedTitle';
import { ParallaxCard } from './ParallaxCard';

const features = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'AI-Powered Insights',
    description: 'Transform data into actionable growth strategies with predictive AI'
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Automated Growth',
    description: 'Scale operations exponentially through intelligent automation'
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Performance Boost',
    description: 'Maximize efficiency with AI-optimized workflow automation'
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Smart Solutions',
    description: 'Custom AI solutions designed to accelerate your business growth'
  }
];

export const Features = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const sectionRef = useSmoothTransition();

  return (
    <section ref={sectionRef} className="py-32 bg-black relative scroll-reveal overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-glow" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
      
      <div className="container mx-auto px-6">
        <div className="text-center relative">
          <AnimatedTitle 
            text="Scale Your Business Growth with AI"
            className="text-6xl font-bold mb-6 reveal-text"
          />
          <p className="text-2xl text-indigo-300 max-w-2xl mx-auto mb-20 leading-relaxed">
            We help ambitious companies leverage AI to accelerate growth without expanding headcount.
          </p>
        </div>
        
        <div 
          ref={ref}
          className="stagger-animate perspective-container"
          data-visible={isVisible}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {features.map((feature, index) => (
              <ParallaxCard
                key={index}
                className="p-8 rounded-2xl bg-black/40 backdrop-blur-lg border border-indigo-500/20 hover:shadow-[0_0_30px_-12px_rgba(99,102,241,0.3)] transition-all duration-500 group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-indigo-950/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-indigo-500/30">
                  <div className="text-indigo-400 transition-transform duration-300 group-hover:rotate-12">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-indigo-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
              </ParallaxCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};