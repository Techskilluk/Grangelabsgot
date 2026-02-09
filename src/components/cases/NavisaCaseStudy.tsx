import React from 'react';
import { ParallaxCard } from '../ParallaxCard';
import { Globe, CheckCircle2, Rocket, Target, Clock, Users, ArrowUpRight, Award } from 'lucide-react';

export const NavisaCaseStudy = () => {
  return (
    <ParallaxCard className="p-8 md:p-12 rounded-2xl bg-black/40 backdrop-blur-lg border border-primary-500/20 hover:shadow-[0_0_30px_-12px_rgba(124,58,237,0.3)] transition-all duration-500">
      {/* Executive Summary */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-primary-950/50 rounded-xl flex items-center justify-center border border-primary-500/30">
            <Globe className="w-6 h-6 text-primary-400" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Revolutionizing Global Mobility with AI
          </h2>
        </div>
        <p className="text-lg text-gray-300 leading-relaxed">
          Navisa's AI-powered visa processing platform is transforming the global immigration landscape by making visa applications smarter, faster, and more accessible for everyone.
        </p>
      </div>

      {/* Market Challenges */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-white mb-6">Market Challenges</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-black/40 border border-primary-500/10">
            <div className="text-3xl font-bold text-primary-400 mb-2">47%</div>
            <div className="text-gray-300">Average visa rejection rate due to application errors</div>
          </div>
          <div className="p-6 rounded-xl bg-black/40 border border-primary-500/10">
            <div className="text-3xl font-bold text-primary-400 mb-2">$12B</div>
            <div className="text-gray-300">Global visa processing market size</div>
          </div>
          <div className="p-6 rounded-xl bg-black/40 border border-primary-500/10">
            <div className="text-3xl font-bold text-primary-400 mb-2">68%</div>
            <div className="text-gray-300">Applicants struggle with documentation</div>
          </div>
        </div>
      </div>

      {/* Solution Sections */}
      <div className="space-y-12 mb-12">
        {/* AI-Powered Eligibility Assessment */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-primary-400" />
            <h3 className="text-xl font-bold text-white">AI-Powered Eligibility Assessment</h3>
          </div>
          <div className="bg-black/20 rounded-xl p-6">
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>Support for 50+ visa types across 30 countries</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>Real-time eligibility scoring using advanced ML models</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>Personalized recommendations based on applicant profiles</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI-Generated Document Checklist */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle2 className="w-6 h-6 text-primary-400" />
            <h3 className="text-xl font-bold text-white">Smart Document Assistance</h3>
          </div>
          <div className="bg-black/20 rounded-xl p-6">
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>Dynamic document checklists based on visa type and country</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>Automated document validation and quality checks</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>Smart formatting suggestions and error detection</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI-Driven Application Tracking */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-6 h-6 text-primary-400" />
            <h3 className="text-xl font-bold text-white">Real-time Application Tracking</h3>
          </div>
          <div className="bg-black/20 rounded-xl p-6">
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>Live status updates and progress tracking</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>Predictive timeline estimates using historical data</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>Automated notifications for critical updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results & Metrics */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Award className="w-6 h-6 text-primary-400" />
          <h3 className="text-xl font-bold text-white">ByteFest 2023 Results</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-primary-950/50 border border-primary-500/20">
            <div className="text-3xl font-bold text-primary-400 mb-2">85%</div>
            <div className="text-gray-300">Reduction in abandoned applications ✅</div>
          </div>
          <div className="p-6 rounded-xl bg-primary-950/50 border border-primary-500/20">
            <div className="text-3xl font-bold text-primary-400 mb-2">92%</div>
            <div className="text-gray-300">Improvement in approval rates ✅</div>
          </div>
          <div className="p-6 rounded-xl bg-primary-950/50 border border-primary-500/20">
            <div className="text-3xl font-bold text-primary-400 mb-2">75%</div>
            <div className="text-gray-300">Faster processing time ✅</div>
          </div>
          <div className="p-6 rounded-xl bg-primary-950/50 border border-primary-500/20">
            <div className="text-3xl font-bold text-primary-400 mb-2">10k+</div>
            <div className="text-gray-300">Applications processed ✅</div>
          </div>
        </div>
      </div>

      {/* Future Roadmap */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Rocket className="w-6 h-6 text-primary-400" />
          <h3 className="text-xl font-bold text-white">Future Innovations</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-gray-300">
            <ArrowUpRight className="w-5 h-5 text-primary-400" />
            <span>🚀 Blockchain-based document verification system</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <ArrowUpRight className="w-5 h-5 text-primary-400" />
            <span>🚀 Multi-language support with AI translation</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <ArrowUpRight className="w-5 h-5 text-primary-400" />
            <span>🚀 Biometric verification integration</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <ArrowUpRight className="w-5 h-5 text-primary-400" />
            <span>🚀 Predictive visa success probability scoring</span>
          </div>
        </div>
      </div>
    </ParallaxCard>
  );
};