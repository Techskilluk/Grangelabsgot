import React, { useState, useEffect } from 'react';
import { AnimatedTitle } from '../components/AnimatedTitle';
import { JobCard } from '../components/careers/JobCard';
import { Brain, Code, Users, HeartHandshake } from 'lucide-react';
import { ParallaxCard } from '../components/ParallaxCard';
import { useLocation, useNavigate } from 'react-router-dom';

const values = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Innovation First",
    description: "Push boundaries and create the future of AI technology"
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Technical Excellence",
    description: "Build robust, scalable solutions that make an impact"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Collaborative Culture",
    description: "Work with talented individuals who share your passion"
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: "Growth Mindset",
    description: "Continuous learning and development opportunities"
  }
];

const openings = [
  {
    title: "Business Prompt Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Join our team to design and develop intelligent, prompt-driven solutions that transform business processes.",
    details: {
      about: "Grange Labs is revolutionizing how businesses integrate AI into their operations. We design custom AI agents and automation solutions that redefine business flows and roles. In our innovative environment, you'll have the opportunity to transform traditional business processes by developing intelligent, prompt-driven solutions that align with our clients' strategic objectives.",
      responsibilities: [
        "Collaborate with teams to design and refine business prompts",
        "Map and optimize business flows for AI integration",
        "Translate business needs into prompt requirements",
        "Develop and test prompt strategies",
        "Create clear documentation and frameworks"
      ],
      requirements: [
        "Bachelor's degree in Business, Communication, Computer Science, or related field",
        "2+ years of experience in business analysis or process design",
        "Familiarity with prompt engineering or conversational AI",
        "Strong analytical and problem-solving skills",
        "Excellent communication abilities"
      ],
      benefits: [
        "Hybrid/remote working model",
        "Competitive salary package",
        "Health and wellness benefits",
        "Professional development",
        "Flexible work arrangements"
      ]
    }
  },
  {
    title: "AI Product Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build innovative AI-driven products and tools that streamline operations and drive business growth.",
    details: {
      about: "At Grange Labs, we empower businesses through innovative AI integrations. We specialize in building custom AI agents and automation solutions that streamline operations and drive growth. Our team values creativity and technical expertise, empowering engineers to build simple, end-to-end products and tools that make a significant impact.",
      responsibilities: [
        "End-to-End Product Development: Design, build, and deploy AI-driven products and tools from concept to launch",
        "AI Tool Utilization: Develop solutions using AI tools such as Lovable Bolt and Cursor",
        "Technical Leadership: Work closely with product management and engineering teams",
        "Integration & Optimization: Ensure seamless integration with existing systems",
        "Innovation & Support: Stay updated with latest AI/ML trends"
      ],
      requirements: [
        "Bachelor's or Master's degree in Computer Science, Engineering, or related field",
        "3+ years of experience in software engineering with AI/ML focus",
        "Proficiency in programming languages such as Python, JavaScript, or similar",
        "Hands-on experience with AI tools (including Lovable Bolt and Cursor)",
        "Demonstrated ability to build products end-to-end",
        "Familiarity with Agile development practices",
        "Effective communication skills and collaborative mindset"
      ],
      benefits: [
        "Flexible work arrangements with remote options",
        "Competitive compensation package",
        "Health and wellness benefits",
        "Professional growth opportunities",
        "Collaborative work environment"
      ]
    }
  },
  {
    title: "Growth Manager – Business & Partnerships",
    department: "Business",
    location: "Remote",
    type: "Full-time",
    description: "Drive strategic growth initiatives and build valuable partnerships to expand our market presence.",
    details: {
      about: "Grange Labs is a leading innovator in custom AI agents and automation solutions. We empower businesses to scale efficiently by integrating advanced AI tools into their operations. Our dynamic and collaborative environment fosters innovation and continuous improvement, positioning us at the forefront of transformative business solutions.",
      responsibilities: [
        "Strategic Growth Planning: Develop and execute comprehensive growth strategies",
        "Partnership Development: Identify and secure strategic partnerships",
        "Market Expansion: Analyze trends and identify new business opportunities",
        "Cross-Functional Collaboration: Work with sales, marketing, and technical teams",
        "Performance Analysis: Utilize data-driven insights to measure effectiveness",
        "Industry Engagement: Represent Grange Labs at industry events"
      ],
      requirements: [
        "Bachelor's degree in Business, Marketing, or related field (MBA is a plus)",
        "3+ years of experience in growth management or partnership roles",
        "Demonstrated success in driving business growth",
        "Strong analytical skills with data-driven decision making",
        "Excellent communication and negotiation skills",
        "Proficiency in CRM and analytics tools"
      ],
      benefits: [
        "Flexible hybrid/remote working arrangements",
        "Competitive compensation package",
        "Health and wellness benefits",
        "Professional development opportunities",
        "Travel opportunities for industry events"
      ]
    }
  }
];

export const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle shared job URLs
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const roleSlug = params.get('role');
    
    if (roleSlug) {
      const jobIndex = openings.findIndex(job => {
        const jobSlug = job.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return jobSlug === roleSlug;
      });
      
      if (jobIndex !== -1) {
        setSelectedJob(jobIndex);
        // Scroll to job details
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleCloseJobDetails = () => {
    setSelectedJob(null);
    // Remove the role parameter from URL
    navigate('/careers', { replace: true });
  };

  return (
    <main className="min-h-screen bg-black pt-24 pb-32">
      <div className="relative">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-glow" />
        
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <AnimatedTitle 
              text="Join Our Mission"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            />
            <p className="text-xl text-indigo-300 max-w-2xl mx-auto">
              Help us shape the future of AI and business automation
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <section className="mb-24">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Join Grangelabs?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <ParallaxCard
                    key={index}
                    className="p-6 rounded-xl bg-black/40 backdrop-blur-lg border border-indigo-500/20 hover:shadow-[0_0_30px_-12px_rgba(99,102,241,0.3)] transition-all duration-500 group"
                  >
                    <div className="w-12 h-12 bg-indigo-950/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-indigo-500/30">
                      <div className="text-indigo-400 transition-transform duration-300 group-hover:rotate-12">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {value.description}
                    </p>
                  </ParallaxCard>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Open Positions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {openings.map((job, index) => (
                  <div key={index} onClick={() => setSelectedJob(index)}>
                    <JobCard {...job} />
                  </div>
                ))}
              </div>
            </section>

            {/* Job Details Modal */}
            {selectedJob !== null && openings[selectedJob].details && (
              <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                <div className="bg-black/90 border border-indigo-500/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{openings[selectedJob].title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span>{openings[selectedJob].location}</span>
                      <span>•</span>
                      <span>{openings[selectedJob].type}</span>
                      <span>•</span>
                      <span className="text-indigo-400">Apply by email: business@grangelabs.com</span>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">About Grange Labs</h4>
                      <p className="text-gray-300 leading-relaxed">
                        {openings[selectedJob].details.about}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Key Responsibilities</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {openings[selectedJob].details.responsibilities.map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Requirements</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {openings[selectedJob].details.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">What We Offer</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {openings[selectedJob].details.benefits.map((benefit, i) => (
                          <li key={i}>{benefit}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <a
                        href="https://ove9zyb57n9.typeform.com/to/e6qdPC18"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-500 transition-all duration-300 w-full text-center"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCloseJobDetails}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};