import React from 'react';
import { Search } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { Translation, ProjectData } from '../types';

interface HomeProps {
  t: Translation;
  projects: ProjectData[];
  onClearSearch: () => void;
}

export const Home: React.FC<HomeProps> = ({ t, projects, onClearSearch }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 animate-fade-in-up">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-primary-800 to-gray-900 dark:from-white dark:via-primary-300 dark:to-white tracking-tight mb-6">
          {t.title}
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
          {t.subtitle}
        </p>
      </div>

      {/* Grid */}
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id}
              data={project}
              details={t.projects[project.translationKey]}
              detailsBtnText={t.visitSite}
              launchBtnText={t.goToSite}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{t.noResults}</h3>
          <p className="text-gray-500 dark:text-gray-400">Try adjusting your search terms</p>
          <button 
            onClick={onClearSearch}
            className="mt-4 text-primary-600 dark:text-primary-400 font-medium hover:underline"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
};