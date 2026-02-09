import React, { useState, useEffect } from 'react';
import { X, Link, Mail, Twitter, Linkedin, Check, AlertTriangle } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShare: () => void;
  jobTitle: string;
  jobUrl: string;
}

interface LinkError {
  type: 'validation' | 'permission' | 'network' | 'expired' | 'notFound';
  message: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  onShare,
  jobTitle,
  jobUrl
}) => {
  const [showCopySuccess, setShowCopySuccess] = useState(false);
  const [linkError, setLinkError] = useState<LinkError | null>(null);
  const [isValidatingLink, setIsValidatingLink] = useState(false);

  useEffect(() => {
    if (isOpen) {
      validateShareLink();
    }
  }, [isOpen, jobUrl]);

  const validateShareLink = async () => {
    setIsValidatingLink(true);
    setLinkError(null);

    try {
      // Validate URL format
      const url = new URL(jobUrl);
      
      // Check if URL is complete (not truncated)
      if (url.pathname.length < 2) {
        throw new Error('incomplete_url');
      }

      // Simulate link validation (replace with actual validation logic)
      const response = await fetch(jobUrl, { 
        method: 'HEAD',
        mode: 'no-cors' // Fallback for CORS restrictions
      });

      // Additional validation can be added here
      
      setIsValidatingLink(false);
    } catch (error) {
      let linkError: LinkError;

      switch (error.message) {
        case 'incomplete_url':
          linkError = {
            type: 'validation',
            message: 'The share link appears to be incomplete or malformed.'
          };
          break;
        case 'TypeError: Failed to fetch':
          linkError = {
            type: 'network',
            message: 'Unable to validate the link. Please check your internet connection.'
          };
          break;
        default:
          linkError = {
            type: 'validation',
            message: 'There was an issue with the share link. Please try again.'
          };
      }

      setLinkError(linkError);
      setIsValidatingLink(false);
    }
  };

  const handleCopyLink = async () => {
    if (linkError) {
      return; // Prevent copying invalid links
    }

    try {
      await navigator.clipboard.writeText(jobUrl);
      setShowCopySuccess(true);
      setTimeout(() => setShowCopySuccess(false), 2000);
      onShare();
    } catch (err) {
      setLinkError({
        type: 'permission',
        message: 'Unable to copy link. Please check clipboard permissions.'
      });
      console.error('Failed to copy:', err);
    }
  };

  const handleShare = async (platform: string) => {
    if (linkError) {
      return; // Prevent sharing invalid links
    }

    let shareUrl = '';
    const text = `Check out this job opportunity at GrangeLabs: ${jobTitle}`;

    try {
      switch (platform) {
        case 'twitter':
          shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(jobUrl)}`;
          break;
        case 'linkedin':
          shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(jobUrl)}`;
          break;
        case 'email':
          shareUrl = `mailto:?subject=${encodeURIComponent(`Job Opportunity: ${jobTitle}`)}&body=${encodeURIComponent(`${text}\n\n${jobUrl}`)}`;
          break;
      }

      if (shareUrl) {
        const windowRef = window.open(shareUrl, '_blank');
        if (!windowRef) {
          throw new Error('popup_blocked');
        }
        onShare();
      }
    } catch (error) {
      if (error.message === 'popup_blocked') {
        setLinkError({
          type: 'permission',
          message: 'Pop-up blocked. Please allow pop-ups to share on social media.'
        });
      } else {
        setLinkError({
          type: 'network',
          message: 'Unable to open sharing dialog. Please try again.'
        });
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-black/90 border border-indigo-500/20 rounded-xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-bold text-white mb-6">Share this position</h3>

        {/* Link Status/Error Message */}
        {(linkError || isValidatingLink) && (
          <div className={`mb-4 p-3 rounded-lg flex items-start gap-2 ${
            isValidatingLink 
              ? 'bg-indigo-950/50 border border-indigo-500/30 text-indigo-300'
              : 'bg-red-950/50 border border-red-500/30 text-red-300'
          }`}>
            {isValidatingLink ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-indigo-500 border-t-transparent" />
                <span>Validating share link...</span>
              </>
            ) : (
              <>
                <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="font-medium">{linkError.message}</p>
                  <p className="text-sm mt-1 text-gray-400">
                    Try refreshing the page or contact support if the issue persists.
                  </p>
                </div>
              </>
            )}
          </div>
        )}

        <div className="space-y-4">
          {/* Copy Link Button */}
          <button
            onClick={handleCopyLink}
            disabled={!!linkError || isValidatingLink}
            className={`w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-between group ${
              linkError || isValidatingLink
                ? 'bg-gray-950/50 text-gray-500 cursor-not-allowed'
                : 'bg-indigo-950/50 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-900/50'
            }`}
          >
            <div className="flex items-center gap-2">
              <Link className="w-5 h-5" />
              <span>Copy link</span>
            </div>
            {showCopySuccess ? (
              <Check className="w-5 h-5 text-green-500" />
            ) : (
              <span className="text-sm text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Click to copy
              </span>
            )}
          </button>

          {/* Social Share Buttons */}
          <div className="flex gap-2">
            {[
              { platform: 'email', icon: Mail, label: 'Email' },
              { platform: 'twitter', icon: Twitter, label: 'Twitter' },
              { platform: 'linkedin', icon: Linkedin, label: 'LinkedIn' }
            ].map(({ platform, icon: Icon, label }) => (
              <button
                key={platform}
                onClick={() => handleShare(platform)}
                disabled={!!linkError || isValidatingLink}
                className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  linkError || isValidatingLink
                    ? 'bg-gray-950/50 text-gray-500 cursor-not-allowed'
                    : 'bg-indigo-950/50 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-900/50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {showCopySuccess && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg text-sm">
            Link copied to clipboard!
          </div>
        )}
      </div>
    </div>
  );
};