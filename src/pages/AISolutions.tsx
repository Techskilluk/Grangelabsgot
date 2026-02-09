import React from 'react';
import { Brain, Calendar, PhoneCall, ArrowRight, Play, Wrench, Settings, Code, Box } from 'lucide-react';
import { AnimatedTitle } from '../components/AnimatedTitle';
import { SolutionDetailCard } from '../components/solutions/SolutionDetailCard';
import { TryOutSection } from '../components/solutions/TryOutSection';
import { ToolsSection } from '../components/solutions/ToolsSection';

const solutions = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Smart Sales Assistant",
    subtitle: "Your 24/7 Sales Team",
    description: "Your tireless AI sales champion that never sleeps, never takes breaks, and consistently delivers results. Perfect for ambitious businesses ready to scale their sales operations.",
    features: [
      "Lightning-fast responses to inquiries 24/7/365",
      "Smart lead qualification that never misses an opportunity",
      "Seamless integration with your favorite CRM",
      "Multi-channel support across all platforms",
      "Real-time performance analytics",
      "Personalized responses that sound human",
      "Intelligent follow-up sequences",
      "Global reach with multilingual support"
    ],
    demoPrompt: "Hi! I'm interested in learning more about your services. Can you tell me about your pricing plans?"
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Meeting Scheduler",
    subtitle: "End Scheduling Headaches",
    description: "Say goodbye to endless email chains and timezone calculations. Our AI scheduler makes booking meetings as simple as a single click - anywhere in the world.",
    features: [
      "Universal calendar synchronization",
      "Smart availability detection",
      "Automated confirmations & reminders",
      "Intelligent timezone management",
      "Smart buffer time optimization",
      "Preference learning & adaptation",
      "Enterprise calendar integration",
      "Priority meeting handling"
    ],
    demoPrompt: "I'd like to schedule a meeting next week. What times are available?"
  },
  {
    icon: <PhoneCall className="w-8 h-8" />,
    title: "Virtual Receptionist",
    subtitle: "Never Miss a Call",
    description: "Transform your customer service with an AI receptionist that delivers five-star experiences around the clock. Enterprise-grade call handling at a fraction of the cost.",
    features: [
      "Premium call management",
      "Intelligent call prioritization",
      "Instant appointment scheduling",
      "Comprehensive message capture",
      "Emergency call escalation",
      "Branded voice experience",
      "Advanced call analytics",
      "Seamless phone integration"
    ],
    demoPrompt: "Hello, I'm calling to inquire about your business hours and location."
  }
];

const tools = [
  {
    icon: <Box className="w-6 h-6" />,
    title: "AI Builder Kit",
    description: "Build your own AI tools easily",
    features: ["Simple API Setup", "Quick Training", "Testing Made Easy"]
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Workflow Builder",
    description: "Create automations without coding",
    features: ["Drag & Drop", "Ready Templates", "Custom Rules"]
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Connect Hub",
    description: "Link with your favorite tools",
    features: ["200+ Tools", "Quick Setup", "Real-time Updates"]
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Smart Analytics",
    description: "See how your AI performs",
    features: ["Live Stats", "Easy Reports", "Growth Tips"]
  }
];

export const AISolutions = () => {
  return (
    <div className="min-h-screen bg-black">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute inset-0 bg-glow" />
          <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-3xl animate-pulse opacity-75" />
          <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000 opacity-75" />
          
          <div className="container mx-auto px-6 relative">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedTitle 
                text="AI Solutions for Modern Business"
                className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 tracking-tighter font-display leading-[1.1] text-white"
              />
              <p className="text-lg md:text-xl text-blue-200 leading-loose mb-12 font-light max-w-2xl mx-auto">
                Supercharge your business with AI that works as hard as you do. Our intelligent solutions 
                handle the heavy lifting, so you can focus on what matters most - growing your business.
              </p>
              <a 
                href="https://ove9zyb57n9.typeform.com/to/MNfUmmyF"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-500 transition-all duration-300 group hover:scale-105 shadow-lg shadow-indigo-500/25"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 gap-16">
              {solutions.map((solution, index) => (
                <SolutionDetailCard key={index} {...solution} />
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <ToolsSection tools={tools} />

        {/* Try Out Section */}
        <TryOutSection solutions={solutions} />
      </main>
    </div>
  );
};