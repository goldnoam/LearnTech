import React, { useState } from 'react';
import { ArrowRight, Twitter, Linkedin, Link as LinkIcon, Check, Loader2 } from 'lucide-react';
import { ProjectData, ProjectDetails } from '../types';

interface ProjectCardProps {
  data: ProjectData;
  details: ProjectDetails;
  buttonText: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ data, details, buttonText }) => {
  const [copied, setCopied] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Unique IDs for accessibility associations
  const titleId = `project-title-${data.id}`;
  const descId = `project-desc-${data.id}`;

  const handleShare = (e: React.MouseEvent, platform: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    const shareUrl = data.link;
    const shareText = details.title;

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
    }
  };

  const handleCardClick = (e: React.MouseEvent) => {
    // Check if user is selecting text - if so, don't trigger navigation
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) {
      return;
    }
    window.open(data.link, '_blank', 'noopener,noreferrer');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.open(data.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
      aria-labelledby={titleId}
      aria-describedby={descId}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-out transform hover:scale-[1.02] border border-gray-100 dark:border-gray-700 flex flex-col h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700 z-20">
            <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
          </div>
        )}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
        <img
          src={data.image}
          alt="" // Decorative since the title describes the destination
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* Share Buttons Overlay */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 translate-y-2 group-hover:translate-y-0">
          <button 
            onClick={(e) => handleShare(e, 'twitter')}
            className="p-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-200 hover:text-[#1DA1F2] hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 ease-out shadow-sm hover:shadow-md transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary-500"
            title="Share on Twitter"
            aria-label="Share on Twitter"
          >
            <Twitter className="w-4 h-4" />
          </button>
          <button 
            onClick={(e) => handleShare(e, 'linkedin')}
            className="p-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-200 hover:text-[#0A66C2] hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 ease-out shadow-sm hover:shadow-md transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary-500"
            title="Share on LinkedIn"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </button>
          <button 
            onClick={(e) => handleShare(e, 'copy')}
            className="p-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 ease-out shadow-sm hover:shadow-md transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary-500"
            title="Copy Link"
            aria-label="Copy Link"
          >
            {copied ? <Check className="w-4 h-4" /> : <LinkIcon className="w-4 h-4" />}
          </button>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 
          id={titleId}
          className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
        >
          {details.title}
        </h3>
        <p 
          id={descId}
          className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-grow line-clamp-3"
        >
          {details.description}
        </p>
        
        {/* Visual Button - Click is handled by parent container */}
        {/* aria-hidden because the link action is already described by the card container */}
        <div 
          aria-hidden="true"
          className="inline-flex items-center justify-center w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white font-medium rounded-xl hover:bg-primary-600 hover:text-white dark:hover:bg-primary-500 transition-all duration-300 gap-2 group/btn border border-transparent hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/20 mt-auto"
        >
          {buttonText}
          <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};