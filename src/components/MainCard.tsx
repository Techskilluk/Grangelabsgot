import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useMouseParallax } from '../hooks/useMouseParallax';
import { useSmoothTransition } from '../hooks/useSmoothTransition';
import { useRevealEffect } from '../hooks/useRevealEffect';
import { AnimatedTitle } from './AnimatedTitle';
import { ParallaxCard } from './ParallaxCard';
import { useNavigate } from 'react-router-dom';
import { AuditFormModal } from './AuditFormModal';

export const MainCard = () => {
  const mousePosition = useMouseParallax(0.05);
  const sectionRef = useSmoothTransition();
  const [titleRef, titleTransform] = useRevealEffect('right');
  const [contentRef, contentTransform] = useRevealEffect('left');
  const navigate = useNavigate();
  const [isAuditFormOpen, setIsAuditFormOpen] = useState(false);

  const handleLearnMore = () => {
    navigate('/learn');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden perspective-container bg-black">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-glow" />
      
      {/* Enhanced animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      
      <div 
        className="absolute inset-0 -z-10 transition-transform duration-300 ease-out"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          opacity: 0.1,
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`
        }}
      />
      
      <div className="container mx-auto px-6 py-24 mt-16">
        <ParallaxCard className="max-w-4xl mx-auto bg-black/40 backdrop-blur-lg rounded-2xl p-12 border border-indigo-500/20 shadow-[0_0_80px_-12px_rgba(99,102,241,0.3)]">
          <div 
            ref={titleRef} 
            className="section-transition"
            style={{ 
              transform: titleTransform,
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div className="inline-flex items-center gap-2 bg-indigo-950/50 px-6 py-3 rounded-full mb-10 animate-float border border-indigo-500/30">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-xs sm:text-sm text-indigo-400 font-medium">
                AI-Powered Business Growth
              </span>
            </div>
            
            <AnimatedTitle 
              text="Transform your business with AI"
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 reveal-text"
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
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              We help scaling companies implement AI strategies that drive efficiency, boost revenue, and accelerate growth—without increasing headcount.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="https://ove9zyb57n9.typeform.com/to/MNfUmmyF"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-500 transition-all duration-300 flex items-center justify-center gap-2 hover:gap-4 shadow-[0_0_30px_0_rgba(99,102,241,0.4)]"
              >
                Work with us
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <button 
                onClick={() => setIsAuditFormOpen(true)}
                className="px-8 py-4 bg-indigo-950/50 text-indigo-300 rounded-lg font-medium border border-indigo-500/30 hover:bg-indigo-900/50 transition-all duration-300 hover:scale-105 hover:border-indigo-400/50 text-center"
              >
                Free Audit
              </button>
            </div>
          </div>
        </ParallaxCard>
      </div>

      <AuditFormModal 
        isOpen={isAuditFormOpen}
        onClose={() => setIsAuditFormOpen(false)}
      />
    </section>
  );
};