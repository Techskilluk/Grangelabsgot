import React from 'react';
import { ParallaxCard } from '../components/ParallaxCard';
import { AnimatedTitle } from '../components/AnimatedTitle';
import { Briefcase, Code, Users, LineChart, Mail, Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    name: "John Onifade",
    role: "Director",
    image: "https://res.cloudinary.com/dz0b5eqof/image/upload/v1741621154/IMG_2740_4_gnasu5.jpg",
    bio: "John leads our strategic vision and overall direction, driving innovation and growth through strategic partnerships and market expansion.",
    expertise: ["Strategic Leadership", "Business Development", "Market Strategy"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "john@grangelabs.com"
    }
  },
  {
    name: "Timilehin Makinde",
    role: "Director of Automation",
    image: "https://res.cloudinary.com/dz0b5eqof/image/upload/v1741621155/IMG_1480_2_jszpxv.jpg",
    bio: "Leading the automation strategy and technical direction at Grangelabs, Timilehin brings extensive experience in AI and automation technologies.",
    expertise: ["AI Strategy", "Technical Leadership", "Innovation"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "timilehin@grangelabs.com"
    }
  },
  {
    name: "Folashade Francisco",
    role: "Product Manager",
    image: "https://res.cloudinary.com/dz0b5eqof/image/upload/v1741621165/PHOTO-2025-03-10-15-15-16_me13na.jpg",
    bio: "Folashade oversees product strategy and development, ensuring our solutions meet client needs and market demands effectively.",
    expertise: ["Product Strategy", "User Experience", "Market Analysis"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "folashade@grangelabs.com"
    }
  }
];

export const About = () => {
  return (
    <main className="min-h-screen bg-black pt-24 pb-32">
      <div className="relative">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-glow" />
        
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-primary-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <AnimatedTitle 
              text="Meet Our Leadership Team"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            />
            <p className="text-xl text-primary-300 max-w-2xl mx-auto">
              Driving innovation and excellence in AI automation
            </p>
          </div>

          <section className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Innovation Challenge Judges</h2>
            <p className="text-center text-primary-300 max-w-2xl mx-auto mb-12">
              Meet our distinguished panel of judges for ByteFest 2023, bringing decades of combined experience in AI innovation and business transformation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((judge, index) => (
                <ParallaxCard
                  key={index}
                  className="p-6 rounded-xl bg-black/40 backdrop-blur-lg border border-primary-500/20 hover:shadow-[0_0_30px_-12px_rgba(124,58,237,0.3)] transition-all duration-500 group"
                >
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-xl overflow-hidden mb-4">
                      <img
                        src={judge.image}
                        alt={judge.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary-950/50 rounded-xl flex items-center justify-center border border-primary-500/30">
                      <Award className="w-6 h-6 text-primary-400" />
                    </div>
                  </div>

                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                      {judge.name}
                    </h3>
                    <div className="text-primary-400 font-medium mb-1">{judge.title}</div>
                    <div className="text-gray-400 text-sm mb-2">{judge.company}</div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                      <GraduationCap className="w-4 h-4" />
                      <span>{judge.expertise}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm text-center">
                    {judge.bio}
                  </p>

                  <div className="mt-6 flex justify-center">
                    <button className="text-primary-400 hover:text-primary-300 transition-colors text-sm flex items-center gap-2 group/button">
                      Full Profile
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                    </button>
                  </div>
                </ParallaxCard>
              ))}
            </div>
          </section>

          <section className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Impact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Code className="w-6 h-6" />, stat: "500+", label: "Automation Solutions" },
                { icon: <Users className="w-6 h-6" />, stat: "200+", label: "Enterprise Clients" },
                { icon: <Briefcase className="w-6 h-6" />, stat: "50+", label: "Industry Partners" },
                { icon: <LineChart className="w-6 h-6" />, stat: "85%", label: "Efficiency Increase" }
              ].map((item, index) => (
                <ParallaxCard
                  key={index}
                  className="p-6 rounded-xl bg-black/40 backdrop-blur-lg border border-indigo-500/20 text-center group"
                >
                  <div className="w-12 h-12 mx-auto bg-indigo-950/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-indigo-500/30">
                    <div className="text-indigo-400">
                      {item.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{item.stat}</div>
                  <div className="text-gray-400">{item.label}</div>
                </ParallaxCard>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};