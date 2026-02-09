import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useMouseParallax } from '../hooks/useMouseParallax';
import { useSmoothTransition } from '../hooks/useSmoothTransition';
import { useRevealEffect } from '../hooks/useRevealEffect';
import { AnimatedTitle } from './AnimatedTitle';
import { ParallaxCard } from './ParallaxCard';

export const Hero = () => {
  const mousePosition = useMouseParallax(0.05);
  const sectionRef = useSmoothTransition();
  const [titleRef, titleTransform] = useRevealEffect('right');
  const [contentRef, contentTransform] = useRevealEffect('left');

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden perspective-container bg-black">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-glow" />
      <div 
        className="absolute inset-0 -z-10 transition-transform duration-300 ease-out"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          opacity: 0.1,
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`
        }}
      />
      
      <div className="container mx-auto px-6 py-24">
        <ParallaxCard className="max-w-4xl mx-auto bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-indigo-500/20 shadow-[0_0_50px_-12px_rgba(99,102,241,0.25)]">
          <div 
            ref={titleRef} 
            className="section-transition"
            style={{ 
              transform: titleTransform,
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div className="inline-flex items-center gap-2 bg-indigo-950/50 px-4 py-2 rounded-full mb-8 animate-float border border-indigo-500/30">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-indigo-400 font-medium">
                Revolutionizing Workflow Management
              </span>
            </div>
            
            <AnimatedTitle 
              text="Transform Your Team's Productivity"
              className="text-6xl font-bold mb-8 reveal-text"
            />
          </div>
          
          <div 
            ref={contentRef}
            className="section-transition"
            style={{ 
              transform: contentTransform,
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
            }}
          >
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Streamline collaboration, automate workflows, and boost efficiency with our 
              next-generation project management platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-500 transition-all duration-300 flex items-center gap-2 hover:gap-4 shadow-[0_0_20px_0_rgba(99,102,241,0.3)]">
                Start Free Trial
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="px-8 py-4 bg-indigo-950/50 text-indigo-300 rounded-lg font-medium border border-indigo-500/30 hover:bg-indigo-900/50 transition-all duration-300 hover:scale-105">
                Watch Demo
              </button>
            </div>
          </div>
        </ParallaxCard>
      </div>
    </section>
  );
};