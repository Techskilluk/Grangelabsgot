import React from 'react';
import { Youtube, Twitter, Linkedin, Mail, Instagram } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="relative bg-black py-8">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-glow" />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-lg" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="relative flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          
          <div className="flex flex-wrap gap-12">
            <div>
              <h3 className="text-white font-semibold mb-3">Solutions</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">AI Sales Agent</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Automated Scheduler</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">AI Receptionist</a></li>
              </ul>
            </div>
          
            <div>
              <h3 className="text-white font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Contact</a></li>
              </ul>
            </div>
          
            <div>
              <h3 className="text-white font-semibold mb-3">Connect</h3>
              <div className="flex gap-3">
                <a 
                  href="https://www.youtube.com/@GrangeLabs" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a 
                  href="https://x.com/thegrangelabs?s=21" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/grangelabs/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3BtzN7PgluR%2FC2KSnubs0u9g%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/grange.labs?igsh=MTRpdDJscnN3YzF4ZA==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:hello@grangelabs.io" 
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-8 pt-6">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Grangelabs. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};