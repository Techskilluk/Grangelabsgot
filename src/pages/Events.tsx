import React, { useState } from 'react';
import { AnimatedTitle } from '../components/AnimatedTitle';
import { ParallaxCard } from '../components/ParallaxCard';
import { Calendar, MapPin, Users, Share2, ArrowRight, Trophy, Newspaper, Bell, Briefcase, GraduationCap, Award, X } from 'lucide-react';
import { NavisaCaseStudy } from '../components/cases/NavisaCaseStudy';

interface Event {
  title: string;
  date: string;
  location: string;
  description: string;
  registrationUrl: string;
  capacity: string;
}

interface PastEvent {
  title: string;
  year: string;
  winner: string;
  innovation: string;
  imageUrl: string;
}

interface Judge {
  name: string;
  title: string;
  company: string;
  expertise: string;
  imageUrl: string;
  bio: string;
}

const judges: Judge[] = [
  {
    name: "Ayo Okusi Daniels",
    title: "Creative Director",
    company: "Grange Labs",
    expertise: "AR/VR & Generative AI",
    imageUrl: "https://res.cloudinary.com/dglkzetmj/image/upload/v1741020002/nmgsh07cqtmchnjdgg1s.png",
    bio: "Ayo Okusi Daniels is a visionary creative leader with extensive experience in digital innovation and design thinking with specialty in AR/VR and generative AI in film making. As the Creative Director of Grange Labs, he spearheads groundbreaking initiatives that bridge the gap between technology and human-centered design. His expertise spans across interactive media, user experience design, and emerging technologies."
  },
  {
    name: "Dr. Aisha Patel",
    title: "Research Director",
    company: "AI Institute",
    expertise: "Machine Learning & NLP",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    bio: "A pioneer in NLP research, Dr. Patel has published numerous papers on advanced language models and their practical applications."
  }
];

const upcomingEvents: Event[] = [
  {
    title: "ByteFest Spring 2024",
    date: "March 15-17, 2024",
    location: "San Francisco, CA",
    description: "Join us for a weekend of AI innovation focused on transforming business operations through intelligent automation.",
    registrationUrl: "https://bytefest2024.typeform.com/spring",
    capacity: "500 participants"
  },
  {
    title: "ByteFest Europe",
    date: "May 20-22, 2024",
    location: "Berlin, Germany",
    description: "European edition focusing on AI solutions for sustainability and clean tech innovation.",
    registrationUrl: "https://bytefest2024.typeform.com/europe",
    capacity: "400 participants"
  },
  {
    title: "ByteFest Asia",
    date: "July 8-10, 2024",
    location: "Singapore",
    description: "Bringing together Asia's brightest minds to develop AI solutions for the future of finance.",
    registrationUrl: "https://bytefest2024.typeform.com/asia",
    capacity: "450 participants"
  }
];

const pastEvents: PastEvent[] = [
  {
    title: "ByteFest 2023",
    year: "2023",
    winner: "NAVISA",
    innovation: "AI-Powered Business Intelligence Platform",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87"
  },
  {
    title: "ByteFest 2022",
    year: "2022",
    winner: "EcoAI",
    innovation: "Sustainable Supply Chain Optimization",
    imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b"
  },
  {
    title: "ByteFest 2021",
    year: "2021",
    winner: "HealthTech AI",
    innovation: "Predictive Healthcare Analytics",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998"
  }
];

const mediaHighlights = [
  {
    source: "The Guardian",
    title: "ByteFest 2023 Awards NAVISA for Top Innovation in Business",
    date: "December 15, 2023",
    url: "https://guardian.ng/technology/tech/bytefest-2023-awards-navisa-for-top-innovation-in-business/"
  },
  {
    source: "TechCrunch",
    title: "ByteFest Emerges as Leading AI Innovation Platform",
    date: "November 30, 2023",
    url: "#"
  },
  {
    source: "Forbes",
    title: "How ByteFest is Shaping the Future of AI",
    date: "October 25, 2023",
    url: "#"
  }
];

export const Events = () => {
  const [email, setEmail] = useState('');
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribe:', email);
    setEmail('');
  };

  const handleViewCaseStudy = () => {
    setShowCaseStudy(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseCaseStudy = () => {
    setShowCaseStudy(false);
    document.body.style.overflow = 'unset';
  };

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
              text="ByteFest: AI Innovation Hackathon"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            />
            <p className="text-xl text-primary-300 max-w-2xl mx-auto">
              Join the world's premier AI hackathon series, where innovation meets opportunity
            </p>
          </div>

          <section className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Innovation Challenge Judges</h2>
            <p className="text-center text-primary-300 max-w-2xl mx-auto mb-12">
              Meet our distinguished panel of judges for ByteFest 2023, bringing decades of combined experience in AI innovation and business transformation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {judges.map((judge, index) => (
                <ParallaxCard
                  key={index}
                  className="p-6 rounded-xl bg-black/40 backdrop-blur-lg border border-primary-500/20 hover:shadow-[0_0_30px_-12px_rgba(124,58,237,0.3)] transition-all duration-500 group"
                >
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-xl overflow-hidden mb-4">
                      <img
                        src={judge.imageUrl}
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
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <ParallaxCard
                  key={index}
                  className="p-6 rounded-xl bg-black/40 backdrop-blur-lg border border-indigo-500/20 hover:shadow-[0_0_30px_-12px_rgba(99,102,241,0.3)] transition-all duration-500 group"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-indigo-950/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-indigo-500/30">
                      <Calendar className="w-6 h-6 text-indigo-400" />
                    </div>
                    <button className="text-gray-400 hover:text-indigo-400 transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {event.title}
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Users className="w-4 h-4" />
                      <span>{event.capacity}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-6">
                    {event.description}
                  </p>

                  <a
                    href={event.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-4 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-500 transition-all duration-300 text-center group/button"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Register Now
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                    </span>
                  </a>
                </ParallaxCard>
              ))}
            </div>
          </section>

          <section className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Past Events Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <ParallaxCard
                  key={index}
                  className="overflow-hidden rounded-xl bg-black/40 backdrop-blur-lg border border-primary-500/20 hover:shadow-[0_0_30px_-12px_rgba(124,58,237,0.3)] transition-all duration-500 group"
                >
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-white">{event.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Trophy className="w-5 h-5 text-yellow-500" />
                      <span className="text-yellow-500 font-medium">{event.winner}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{event.innovation}</p>
                    {event.winner === 'NAVISA' && (
                      <button 
                        onClick={handleViewCaseStudy}
                        className="text-primary-400 hover:text-primary-300 transition-colors text-sm flex items-center gap-2 group/button cursor-pointer"
                      >
                        View Case Study
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                      </button>
                    )}
                  </div>
                </ParallaxCard>
              ))}
            </div>
          </section>

          <section className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Case Study</h2>
            <NavisaCaseStudy />
          </section>

          <section className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Media Coverage</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mediaHighlights.map((article, index) => (
                <ParallaxCard
                  key={index}
                  className="p-6 rounded-xl bg-black/40 backdrop-blur-lg border border-primary-500/20 hover:shadow-[0_0_30px_-12px_rgba(124,58,237,0.3)] transition-all duration-500 group"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-primary-950/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-primary-500/30">
                      <Newspaper className="w-6 h-6 text-primary-400" />
                    </div>
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                      <Share2 className="w-5 h-5" />
                    </a>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {article.title}
                  </h3>

                  <div className="flex items-center gap-2 text-gray-300 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-primary-400">{article.source}</span>
                  </div>
                </ParallaxCard>
              ))}
            </div>
          </section>

          <section className="max-w-2xl mx-auto">
            <ParallaxCard className="p-8 rounded-2xl bg-black/40 backdrop-blur-lg border border-primary-500/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-950/50 rounded-xl flex items-center justify-center border border-primary-500/30">
                  <Bell className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Stay Updated</h3>
                  <p className="text-gray-400">Get notified about upcoming events and hackathon news</p>
                </div>
              </div>
              <form onSubmit={handleSubscribe} className="flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-black/40 border border-primary-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-500 transition-all duration-300 flex items-center gap-2"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </ParallaxCard>
          </section>
        </div>
      </div>

      {showCaseStudy && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="min-h-screen px-4 text-center">
            <div 
              className="fixed inset-0 bg-black/90 backdrop-blur-lg transition-opacity"
              onClick={handleCloseCaseStudy}
            />

            <div className="inline-block w-full max-w-6xl my-8 text-left align-middle transition-all transform relative">
              <button
                onClick={handleCloseCaseStudy}
                className="absolute -top-4 -right-4 w-12 h-12 bg-primary-950/80 border border-primary-500/30 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="animate-fade-in">
                <NavisaCaseStudy />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};