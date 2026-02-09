import React, { useState, useEffect } from 'react';
import { Youtube, Twitter, Linkedin, Mail, Menu, Search, X, Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80' : 'bg-black/50'
      } backdrop-blur-lg border-b border-indigo-500/20`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {[
              { path: '/solutions', label: 'My AI Solutions' },
              { path: '/templates', label: 'Free AI Templates' },
              { path: '/events', label: 'Events' },
              { path: '/blog', label: 'Blog & Videos' },
              { path: '/careers', label: 'Careers' },
              { path: '/about', label: 'About Us' }
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(path)
                    ? 'bg-indigo-600/20 text-indigo-400'
                    : 'text-gray-300 hover:text-indigo-400 hover:bg-indigo-600/10'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-gray-300 hover:text-indigo-400 transition-colors p-2 rounded-lg hover:bg-indigo-600/10"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <a href="https://www.youtube.com/@GrangeLabs" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://x.com/thegrangelabs?s=21" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/grangelabs/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3BtzN7PgluR%2FC2KSnubs0u9g%3D%3D" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/grange.labs?igsh=MTRpdDJscnN3YzF4ZA==" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:hello@grangelabs.io" className="text-gray-300 hover:text-indigo-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <a
              href="https://grangelabsapp.lovable.app/login"
              target="_blank"
              rel="noopener noreferrer" 
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-500 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_0_rgba(99,102,241,0.3)]"
            >
              Get Access
            </a>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-gray-300 hover:text-indigo-400 transition-colors p-2"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-indigo-400 transition-colors p-2"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}>
          <nav className="py-4 space-y-2">
            {[
              { path: '/solutions', label: 'My AI Solutions' },
              { path: '/templates', label: 'Free AI Templates' },
              { path: '/events', label: 'Events' },
              { path: '/blog', label: 'Blog & Videos' },
              { path: '/careers', label: 'Careers' },
              { path: '/about', label: 'About Us' }
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(path)
                    ? 'bg-indigo-600/20 text-indigo-400'
                    : 'text-gray-300 hover:text-indigo-400 hover:bg-indigo-600/10'
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href="https://grangelabsapp.lovable.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-500 transition-all duration-300 text-center shadow-[0_0_20px_0_rgba(99,102,241,0.3)]"
            >
              Get Access
            </a>
          </nav>

          <div className="flex items-center gap-6 py-4 px-4 border-t border-indigo-500/20">
            <a href="https://www.youtube.com/@GrangeLabs" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400 transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="https://x.com/thegrangelabs?s=21" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/company/grangelabs/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3BtzN7PgluR%2FC2KSnubs0u9g%3D%3D" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/grange.labs?igsh=MTRpdDJscnN3YzF4ZA==" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="mailto:hello@grangelabs.io" className="text-gray-300 hover:text-indigo-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center pt-24">
          <div className="w-full max-w-2xl mx-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full px-4 py-3 bg-black/40 backdrop-blur-lg border border-indigo-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};