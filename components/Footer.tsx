
import React, { useState } from 'react';
import { Mail, Heart, Twitter, Linkedin, Facebook, Link as LinkIcon, Check } from 'lucide-react';
import { Translation } from '../types';

interface FooterProps {
  translation: Translation;
}

export const Footer: React.FC<FooterProps> = ({ translation }) => {
  const [copied, setCopied] = useState(false);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'twitter': url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(translation.title)}&url=${encodeURIComponent(currentUrl)}`; break;
      case 'linkedin': url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`; break;
      case 'facebook': url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`; break;
      case 'copy':
        navigator.clipboard.writeText(currentUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return;
    }
    if (url) window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <footer className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 transition-colors duration-300 mt-auto" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              {/* Strictly matching requested copyright string */}
              <span className="text-gray-900 dark:text-white font-bold text-xl mb-2 tracking-tight">
                (C) Noam Gold AI 2026
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1.5 font-medium">
                Made with <Heart className="w-3 h-3 text-red-500 fill-current animate-pulse" aria-hidden="true" /> by Noam Gold
              </span>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-3">
              <span className="text-gray-400 dark:text-gray-500 text-xs font-bold uppercase tracking-widest">Contact Support</span>
              <a 
                href="mailto:goldnoamai@gmail.com" 
                className="group flex items-center gap-3 px-8 py-3.5 rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-primary-600 hover:text-white transition-all shadow-sm hover:shadow-lg hover:shadow-primary-500/20 transform hover:-translate-y-1"
                aria-label="Send feedback via email to goldnoamai@gmail.com"
              >
                <Mail className="w-5 h-5 transition-transform group-hover:-rotate-12" />
                <div className="flex flex-col items-start">
                  <span className="font-bold text-sm leading-none">{translation.feedback}</span>
                  <span className="text-xs opacity-70">goldnoamai@gmail.com</span>
                </div>
              </a>
            </div>
          </div>

          <div className="w-full h-px bg-gray-100 dark:bg-gray-800" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-gray-500 dark:text-gray-400">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{translation.share}</span>
              <div className="flex items-center gap-2">
                {[ 
                  {id: 'twitter', icon: Twitter, color: '#1DA1F2', label: 'Twitter'}, 
                  {id: 'linkedin', icon: Linkedin, color: '#0A66C2', label: 'LinkedIn'}, 
                  {id: 'facebook', icon: Facebook, color: '#1877F2', label: 'Facebook'} 
                ].map(p => (
                  <button 
                    key={p.id} 
                    onClick={() => handleShare(p.id)} 
                    className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all transform hover:scale-110 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    aria-label={`Share on ${p.label}`}
                  >
                    <p.icon className="w-5 h-5" />
                  </button>
                ))}
                <button 
                  onClick={() => handleShare('copy')} 
                  className={`p-3 rounded-xl transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500 ${copied ? 'text-green-500 bg-green-500/10' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                  aria-label="Copy site URL"
                >
                  {copied ? <Check className="w-5 h-5" /> : <LinkIcon className="w-5 h-5" />}
                </button>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-xs font-medium">
              <a href="#" className="hover:text-primary-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
