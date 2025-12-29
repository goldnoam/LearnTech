import React, { useState } from 'react';
import { ArrowRight, Twitter, Linkedin, Link as LinkIcon, Check, Loader2, Info, List } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ProjectData, ProjectDetails } from '../types';

interface ProjectCardProps {
  data: ProjectData;
  details: ProjectDetails;
  buttonText: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ data, details, buttonText }) => {
  const [copied, setCopied] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  // Unique IDs for accessibility associations
  const titleId = `project-title-${data.id}`;
  const descId = `project-desc-${data.id}`;

  const handleShare = (e: React.MouseEvent, platform: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    const shareUrl = `${window.location.origin}/#/project/${data.id}`;
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

  const handleQuickJump = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/project/${data.id}#${sectionId}`);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) {
      return;
    }
    navigate(`/project/${data.id}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      // If the target is a sub-interactive element, don't trigger card navigation
      if ((e.target as HTMLElement).closest('button, a')) return;
      
      e.preventDefault();
      navigate(`/project/${data.id}`);
    }
  };

  return (
    <article 
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
      aria-labelledby={titleId}
      aria-describedby={descId}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-[1.03] border border-gray-100 dark:border-gray-700 hover:border-primary-500/50 flex flex-col h-full cursor-pointer focus-within:ring-2 focus-within:ring-primary-500 focus:outline-none"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700 z-20">
            <Loader2 className="w-8 h-8 text-gray-400 animate-spin" aria-hidden="true" />
          </div>
        )}
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors z-10" />
        <img
          src={data.image}
          alt={`Thumbnail for ${details.title}`}
          loading="lazy"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* Share Buttons Overlay */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 translate-y-2 group-hover:translate-y-0">
          <button 
            onClick={(e) => handleShare(e, 'twitter')}
            className="p-2.5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-full text-gray-600 dark:text-gray-300 hover:text-[#1DA1F2] hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-125 active:scale-95 shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            title="Share on Twitter"
            aria-label={`Share ${details.title} on Twitter`}
          >
            <Twitter className="w-4 h-4 transition-colors" />
          </button>
          <button 
            onClick={(e) => handleShare(e, 'linkedin')}
            className="p-2.5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-full text-gray-600 dark:text-gray-300 hover:text-[#0A66C2] hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-125 active:scale-95 shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            title="Share on LinkedIn"
            aria-label={`Share ${details.title} on LinkedIn`}
          >
            <Linkedin className="w-4 h-4 transition-colors" />
          </button>
          <button 
            onClick={(e) => handleShare(e, 'copy')}
            className={`p-2.5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-full transition-all duration-300 transform hover:scale-125 active:scale-95 shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${copied ? 'text-green-500 bg-white dark:bg-gray-800' : 'text-gray-600 dark:text-gray-300 hover:text-primary-500 hover:bg-white dark:hover:bg-gray-800'}`}
            title="Copy Link"
            aria-label={copied ? "Link copied to clipboard" : `Copy link for ${details.title}`}
          >
            {copied ? (
              <Check className="w-4 h-4 transition-all scale-110" />
            ) : (
              <LinkIcon className="w-4 h-4 transition-colors" />
            )}
          </button>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 
          id={titleId}
          className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300"
        >
          {details.title}
        </h3>
        <p 
          id={descId}
          className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow line-clamp-3"
        >
          {details.description}
        </p>

        {/* Quick Jump Links */}
        <div className="flex flex-wrap gap-2 mb-6" aria-label="Direct navigation to sections">
          <button
            onClick={(e) => handleQuickJump(e, 'about')}
            className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label={`Jump to About section for ${details.title}`}
          >
            <Info className="w-3.5 h-3.5" />
            About
          </button>
          <button
            onClick={(e) => handleQuickJump(e, 'features')}
            className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label={`Jump to Features section for ${details.title}`}
          >
            <List className="w-3.5 h-3.5" />
            Features
          </button>
        </div>
        
        {/* Visual Button */}
        <div 
          aria-hidden="true"
          className="inline-flex items-center justify-center w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white font-medium rounded-xl group-hover:bg-primary-600 group-hover:text-white dark:group-hover:bg-primary-500 transition-all duration-500 gap-2 border border-transparent group-hover:shadow-lg group-hover:shadow-primary-500/20 mt-auto"
        >
          {buttonText}
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </article>
  );
};