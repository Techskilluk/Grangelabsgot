import React, { useState } from 'react';
import { Send, Bot } from 'lucide-react';
import { ParallaxCard } from '../ParallaxCard';

interface Solution {
  title: string;
  demoPrompt: string;
}

interface TryOutSectionProps {
  solutions: Solution[];
}

export const TryOutSection: React.FC<TryOutSectionProps> = ({ solutions }) => {
  const [selectedSolution, setSelectedSolution] = useState(solutions[0]);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: input, isUser: true }]);

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Thanks for trying out our demo! To experience the full capabilities of our AI solutions, please start a free trial.",
        isUser: false 
      }]);
    }, 1000);

    setInput('');
  };

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-glow" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Try Our AI Solutions
          </h2>

          <ParallaxCard className="p-6 md:p-8 rounded-2xl bg-black/40 backdrop-blur-lg border border-indigo-500/20">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Solution Selector */}
              <div className="w-full md:w-1/3">
                <h3 className="text-lg font-semibold mb-4">Select Solution</h3>
                <div className="space-y-2">
                  {solutions.map((solution, index) => (
                    <button
                      key={index}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        selectedSolution.title === solution.title
                          ? 'bg-indigo-600 text-white'
                          : 'bg-indigo-950/50 text-gray-300 hover:bg-indigo-900/50'
                      }`}
                      onClick={() => {
                        setSelectedSolution(solution);
                        setMessages([]);
                      }}
                    >
                      {solution.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Interface */}
              <div className="flex-1 flex flex-col">
                <div className="bg-black/20 rounded-lg p-4 mb-4 h-[400px] overflow-y-auto">
                  <div className="space-y-4">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex items-start gap-3 ${
                          message.isUser ? 'flex-row-reverse' : ''
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          message.isUser ? 'bg-indigo-600' : 'bg-gray-700'
                        }`}>
                          {message.isUser ? (
                            <div className="w-4 h-4 rounded-full bg-white" />
                          ) : (
                            <Bot className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <div className={`px-4 py-2 rounded-lg max-w-[80%] ${
                          message.isUser
                            ? 'bg-indigo-600 text-white'
                            : 'bg-gray-800 text-gray-300'
                        }`}>
                          {message.text}
                        </div>
                      </div>
                    ))}
                    {messages.length === 0 && (
                      <div className="text-center text-gray-500 mt-4">
                        Try the suggested prompt or type your own message
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-sm text-gray-400 mb-4">
                  Suggested: "{selectedSolution.demoPrompt}"
                </div>

                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </ParallaxCard>
        </div>
      </div>
    </section>
  );
};