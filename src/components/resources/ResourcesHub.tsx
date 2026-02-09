import React from 'react';
import { Sparkles, Users, Lightbulb, ArrowRight } from 'lucide-react';
import { AnimatedTitle } from '../AnimatedTitle';
import { BenefitCard } from './BenefitCard';
import { TemplatePreview } from './TemplatePreview';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export const ResourcesHub = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const benefits = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Premium AI Templates Library",
      features: [
        "Curated collection of ready-to-use AI agent templates",
        "Step-by-step automation workflows",
        "Regular updates with new templates"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Personalized Support",
      features: [
        "Direct 1:1 technical assistance",
        "Implementation guidance",
        "Custom solution recommendations"
      ]
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Community Benefits",
      features: [
        "Connect with fellow AI enthusiasts",
        "Share experiences and best practices",
        "Early access to new features and templates"
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-black py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-glow" />
      
      {/* Animated background elements */}
      <div className="absolute top-1/3 left-1/4 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-[30rem] h-[30rem] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <AnimatedTitle 
            text="Join Our Exclusive AI Community"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 reveal-text"
          />
          <p className="text-base sm:text-lg md:text-xl text-indigo-300 max-w-2xl mx-auto">
            Unlock a world of AI possibilities with our premium templates, personalized support, and thriving community.
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 stagger-animate"
          data-visible={isVisible}
        >
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>

        <TemplatePreview />

        <div className="text-center mt-16">
          <a 
            href="https://ove9zyb57n9.typeform.com/to/MNfUmmyF"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-500 transition-all duration-300 hover:gap-4 shadow-[0_0_30px_0_rgba(99,102,241,0.4)]"
          >
            Join Now
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          
          <p className="mt-8 text-sm sm:text-base text-indigo-300 font-medium">
            Limited-time offer: Get immediate access to 20+ premium templates when you join today!
          </p>
          
          <p className="mt-4 text-xs sm:text-sm text-gray-400">
            *All templates are compatible with leading AI platforms and come with detailed documentation.
          </p>
        </div>
      </div>
    </section>
  );
};