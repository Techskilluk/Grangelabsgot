import React, { useState } from 'react';
import { AnimatedTitle } from '../components/AnimatedTitle';
import { ParallaxCard } from '../components/ParallaxCard';
import { Sparkles, Brain, Zap, Send, Bot } from 'lucide-react';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const LearnMore = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi! I'm Freya, your AI assistant. How can I help you learn more about GrangeLabs?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      text: input,
      isUser: true,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        text: "Thanks for your interest! I'd be happy to tell you more about how GrangeLabs can help transform your business with AI. Would you like to learn about our specific solutions or schedule a consultation?",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-black pt-24 pb-32">
      <div className="relative">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-glow" />
        
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <AnimatedTitle 
              text="Meet Freya, Your AI Guide"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            />
            <p className="text-xl text-indigo-300 max-w-2xl mx-auto">
              Have a conversation with our AI assistant and discover how GrangeLabs can transform your business
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ParallaxCard className="p-6 rounded-2xl bg-black/40 backdrop-blur-lg border border-indigo-500/20 overflow-hidden">
              <div className="h-[600px] flex flex-col">
                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto mb-4 space-y-4 p-4">
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
                  {isTyping && (
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300">
                        <div className="flex gap-1">
                          <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input Form */}
                <form onSubmit={handleSubmit} className="flex gap-2 p-4 border-t border-indigo-500/20">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 rounded-lg bg-black/40 border border-indigo-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </ParallaxCard>

            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <ParallaxCard className="p-6 rounded-xl bg-black/40 backdrop-blur-lg border border-indigo-500/20 group">
                <div className="w-12 h-12 bg-indigo-950/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-indigo-500/30">
                  <Sparkles className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Natural Conversations</h3>
                <p className="text-gray-300 text-sm">
                  Experience human-like interactions powered by advanced language models
                </p>
              </ParallaxCard>

              <ParallaxCard className="p-6 rounded-xl bg-black/40 backdrop-blur-lg border border-indigo-500/20 group">
                <div className="w-12 h-12 bg-indigo-950/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-indigo-500/30">
                  <Brain className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Continuous Learning</h3>
                <p className="text-gray-300 text-sm">
                  Our AI systems evolve and improve with every interaction
                </p>
              </ParallaxCard>

              <ParallaxCard className="p-6 rounded-xl bg-black/40 backdrop-blur-lg border border-indigo-500/20 group">
                <div className="w-12 h-12 bg-indigo-950/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-indigo-500/30">
                  <Zap className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Real-time Insights</h3>
                <p className="text-gray-300 text-sm">
                  Get instant answers and actionable insights for your business
                </p>
              </ParallaxCard>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};