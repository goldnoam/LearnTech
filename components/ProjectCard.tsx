import React, { useState } from 'react';
import { ArrowRight, Twitter, Linkedin, Link as LinkIcon, Check, Loader2, Info, List, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ProjectData, ProjectDetails } from '../types';
import { Tooltip } from './Tooltip';

interface ProjectCardProps {
  data: ProjectData;
  details: ProjectDetails;
  buttonText: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ data, details, buttonText }) => {
  const [copied, setCopied] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  // Unique IDs for accessibility
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

  const handleVisitSite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(data.link, '_blank', 'noopener,noreferrer');
  };

  const handleQuickJump = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/project/${data.id}#${sectionId}`);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    // Prevent navigation if user is selecting text
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) return;
    
    // Check if the click target is an interactive element to avoid double triggers
    if ((e.target as HTMLElement).closest('button, a')) return;
    
    navigate(`/project/${data.id}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
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
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 ease-out transform hover:-translate-y-1 hover:scale-[1.01] border border-gray-100 dark:border-gray-700 hover:border-primary-500/30 flex flex-col h-full cursor-pointer focus-within:ring-2 focus-within:ring-primary-500 focus:outline-none"
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
          alt={details.title}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* Actions Overlay */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 translate-y-2 group-hover:translate-y-0">
          <Tooltip content="Launch External Site" position="top">
            <button 
              onClick={handleVisitSite}
              className="p-2.5 bg-primary-600 text-white rounded-full hover:bg-primary-500 transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
              aria-label={`Open ${details.title} website`}
            >
              <ExternalLink className="w-4 h-4" />
            </button>
          </Tooltip>
          
          <div className="w-px h-6 bg-white/20 my-auto mx-1" />

          <button 
            onClick={(e) => handleShare(e, 'twitter')}
            className="p-2.5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-full text-gray-500 dark:text-gray-400 hover:text-[#1DA1F2] hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1DA1F2]"
            aria-label="Share on Twitter"
          >
            <Twitter className="w-4 h-4" />
          </button>
          <button 
            onClick={(e) => handleShare(e, 'linkedin')}
            className="p-2.5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-full text-gray-500 dark:text-gray-400 hover:text-[#0A66C2] hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </button>
          <button 
            onClick={(e) => handleShare(e, 'copy')}
            className={`p-2.5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 ${copied ? 'text-green-500' : 'text-gray-500 dark:text-gray-400 hover:text-primary-500'}`}
            aria-label="Copy link"
          >
            {copied ? <Check className="w-4 h-4" /> : <LinkIcon className="w-4 h-4" />}
          </button>
        </div>
      </div>
      
      {/* Content Area */}
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

        {/* Anchor Jump Links */}
        <div className="flex flex-wrap gap-2 mb-6" aria-label="Direct section links">
          <button
            onClick={(e) => handleQuickJump(e, 'about')}
            className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
          >
            <Info className="w-3 h-3" />
            About
          </button>
          <button
            onClick={(e) => handleQuickJump(e, 'features')}
            className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
          >
            <List className="w-3 h-3" />
            Features
          </button>
        </div>
        
        {/* Call to Action Visual */}
        <div 
          aria-hidden="true"
          className="inline-flex items-center justify-center w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white font-medium rounded-xl group-hover:bg-primary-600 group-hover:text-white dark:group-hover:bg-primary-500 transition-all duration-300 gap-2 mt-auto"
        >
          {buttonText}
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </article>
  );
};