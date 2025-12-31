import React, { useState } from 'react';
import { Mail, Heart, Twitter, Linkedin, Facebook, Link as LinkIcon, Check } from 'lucide-react';
import { Translation } from '../types';

interface FooterProps {
  translation: Translation;
}

export const Footer: React.FC<FooterProps> = ({ translation }) => {
  const [copied, setCopied] = useState(false);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = translation.title;

  const handleShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(currentUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return;
    }
    if (url) window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <footer className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 transition-colors duration-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-gray-900 dark:text-white font-semibold text-lg mb-2">
                {translation.footerRights}
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1">
                Made with <Heart className="w-3 h-3 text-red-500 fill-current animate-pulse" aria-hidden="true" /> by Noam Gold
              </span>
            </div>
            
            <a
              href="mailto:goldnoamai@gmail.com"
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-500 transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <Mail className="w-4 h-4 transition-transform group-hover:-rotate-12" />
              <span className="font-medium">{translation.feedback}</span>
            </a>
          </div>

          <div className="w-full h-px bg-gray-100 dark:bg-gray-800" aria-hidden="true" />

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-500 dark:text-gray-400">
            <span className="text-sm font-medium uppercase tracking-wider">{translation.share}</span>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => handleShare('twitter')} 
                className="p-2.5 rounded-full hover:bg-[#1DA1F2]/10 hover:text-[#1DA1F2] transition-all duration-300 transform hover:scale-110 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-[#1DA1F2]" 
                aria-label="Share Hub on Twitter"
              >
                <Twitter className="w-5 h-5 transition-transform group-hover:rotate-12" />
              </button>
              <button 
                onClick={() => handleShare('linkedin')} 
                className="p-2.5 rounded-full hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] transition-all duration-300 transform hover:scale-110 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-[#0A66C2]" 
                aria-label="Share Hub on LinkedIn"
              >
                <Linkedin className="w-5 h-5 transition-transform group-hover:-rotate-12" />
              </button>
              <button 
                onClick={() => handleShare('facebook')} 
                className="p-2.5 rounded-full hover:bg-[#1877F2]/10 hover:text-[#1877F2] transition-all duration-300 transform hover:scale-110 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-[#1877F2]" 
                aria-label="Share Hub on Facebook"
              >
                <Facebook className="w-5 h-5 transition-transform group-hover:rotate-12" />
              </button>
              <button 
                onClick={() => handleShare('copy')} 
                className={`p-2.5 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary-500 ${copied ? 'bg-green-500/10 text-green-500 shadow-inner' : 'hover:bg-primary-500/10 hover:text-primary-500'}`} 
                aria-label="Copy Hub Link"
              >
                {copied ? <Check className="w-5 h-5" /> : <LinkIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};