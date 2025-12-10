import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { ProjectData, ProjectDetails } from '../types';

interface ProjectCardProps {
  data: ProjectData;
  details: ProjectDetails;
  buttonText: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ data, details, buttonText }) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-100 dark:border-gray-700 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
        <img
          src={data.image}
          alt={details.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {details.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
          {details.description}
        </p>
        
        <a 
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white font-medium rounded-xl hover:bg-primary-600 hover:text-white dark:hover:bg-primary-500 transition-all duration-300 gap-2 group/btn"
        >
          {buttonText}
          <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
        </a>
      </div>
      
      <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm z-20 pointer-events-none">
        <ExternalLink className="w-4 h-4 text-gray-900 dark:text-white" />
      </div>
    </div>
  );
};