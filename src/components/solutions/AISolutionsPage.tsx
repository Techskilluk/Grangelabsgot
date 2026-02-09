import React from 'react';
import { SolutionCard } from './SolutionCard';
import { Brain, Calendar, PhoneCall } from 'lucide-react';
import { AnimatedTitle } from '../AnimatedTitle';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export const AISolutionsPage = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const solutions = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Sales Agent",
      subtitle: "24/7 Virtual Sales Representative",
      description: "Automate your sales process with an AI agent that handles lead qualification, product inquiries, and customer interactions. Seamlessly integrates with your CRM to track and optimize every conversation.",
      features: [
        "Natural language communication",
        "Lead qualification automation",
        "CRM integration",
        "24/7 availability",
        "Multi-channel support",
        "Performance analytics"
      ]
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Automated Scheduler",
      subtitle: "Smart Calendar Management",
      description: "Eliminate scheduling headaches with an AI system that manages your calendar intelligently. Handles time zones, preferences, and complex scheduling scenarios automatically.",
      features: [
        "Multi-calendar sync",
        "Smart availability detection",
        "Automated confirmations",
        "Time zone handling",
        "Buffer time management",
        "Meeting preferences"
      ]
    },
    {
      icon: <PhoneCall className="w-8 h-8" />,
      title: "AI Receptionist",
      subtitle: "Intelligent Call Management",
      description: "Transform your customer service with a 24/7 virtual receptionist that handles calls, routes inquiries, and manages appointments with professional efficiency.",
      features: [
        "Professional greeting",
        "Smart call routing",
        "Appointment management",
        "Multilingual support",
        "Message taking",
        "Priority handling"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-glow" />
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <AnimatedTitle 
            text="AI Solutions for Modern Business"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 reveal-text"
          />
          <p className="text-base sm:text-lg md:text-xl text-indigo-300 max-w-3xl mx-auto">
            Leverage cutting-edge AI technology to automate core business functions and scale your operations efficiently.
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 stagger-animate"
          data-visible={isVisible}
        >
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
      </div>
    </div>
  );
};