import React, { useState, useEffect } from 'react';
import { Users, X, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Notification {
  id: string;
  message: string;
  highlight?: string;
  link?: {
    text: string;
    url: string;
  };
  expiresAt?: Date;
}

export const NotificationBanner: React.FC = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [notification] = useState<Notification>({
    id: '1',
    message: "We're hiring! Join our team of AI innovators.",
    highlight: "Multiple positions available",
    link: {
      text: 'View Openings',
      url: '/careers'
    },
    expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
  });

  useEffect(() => {
    if (notification.expiresAt && new Date() > new Date(notification.expiresAt)) {
      setIsVisible(false);
    }
  }, [notification.expiresAt]);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  const handleViewOpenings = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/careers');
    handleDismiss();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-16 left-0 right-0 z-50">
      <div className="bg-gradient-to-r from-indigo-600/90 via-purple-600/90 to-indigo-600/90 backdrop-blur-lg border-y border-indigo-500/20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="py-3 sm:py-4 text-center relative">
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
              {/* Icon - Hidden on smallest screens */}
              <div className="hidden sm:flex w-10 h-10 rounded-xl bg-white/10 border border-white/20 items-center justify-center flex-shrink-0 animate-pulse">
                <Users className="w-5 h-5 text-white" />
              </div>
              
              {/* Message and Badge */}
              <div className="flex flex-col items-center sm:flex-row gap-2 sm:gap-3 flex-wrap justify-center px-8 sm:px-0">
                <p className="text-white text-sm sm:text-base font-medium leading-tight sm:leading-normal">
                  {notification.message}
                </p>
                {notification.highlight && (
                  <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 sm:px-3 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/20 whitespace-nowrap">
                    {notification.highlight}
                  </span>
                )}
              </div>

              {/* CTA Button */}
              <button
                onClick={handleViewOpenings}
                className="mt-3 sm:mt-0 flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20 transition-all duration-300 group whitespace-nowrap"
              >
                {notification.link?.text}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Close Button - Repositioned for mobile */}
            <button
              type="button"
              onClick={handleDismiss}
              className="absolute right-2 sm:right-4 top-2 sm:top-1/2 sm:-translate-y-1/2 flex-none rounded-lg p-1.5 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              <span className="sr-only">Dismiss</span>
              <X className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};