import React, { useEffect, useRef } from 'react';
import { useMouseParallax } from '../hooks/useMouseParallax';

export const ParallaxSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMouseParallax(0.03);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scrolled = window.scrollY;
      const rate = scrolled * 0.5;
      sectionRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div 
        ref={sectionRef}
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2,
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`
        }}
      />
      
      <div className="relative container mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl animate-slide-up">
          <h2 className="text-5xl font-bold mb-6 gradient-animate bg-gradient-to-r from-indigo-400 via-white to-indigo-400 bg-clip-text text-transparent">
            The Future of Work is Here
          </h2>
          <p className="text-xl text-indigo-300 mb-8">
            Join thousands of teams already using our platform to transform their workflow
            and achieve unprecedented productivity.
          </p>
          <button className="group px-8 py-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-500 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_0_rgba(99,102,241,0.3)]">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};