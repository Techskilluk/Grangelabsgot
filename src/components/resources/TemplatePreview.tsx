import React from 'react';
import { Code2, Bot, Workflow } from 'lucide-react';

export const TemplatePreview = () => {
  const templates = [
    {
      icon: <Bot className="w-5 h-5" />,
      name: "Customer Service Bot",
      description: "Automated support agent template"
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      name: "Code Assistant",
      description: "AI pair programming helper"
    },
    {
      icon: <Workflow className="w-5 h-5" />,
      name: "Workflow Automator",
      description: "Process automation template"
    }
  ];

  return (
    <div className="bg-black/40 backdrop-blur-lg border border-indigo-500/20 rounded-xl p-6 max-w-2xl mx-auto">
      <div className="text-sm font-medium text-indigo-400 mb-4">
        Featured Templates
      </div>
      
      <div className="space-y-4">
        {templates.map((template, index) => (
          <div 
            key={index}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-indigo-500/10 transition-colors group"
          >
            <div className="w-8 h-8 bg-indigo-950/50 rounded-lg flex items-center justify-center border border-indigo-500/30">
              {template.icon}
            </div>
            <div>
              <div className="font-medium text-white group-hover:text-indigo-400 transition-colors">
                {template.name}
              </div>
              <div className="text-sm text-gray-400">
                {template.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};