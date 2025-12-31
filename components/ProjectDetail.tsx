import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react';
import { Translation, ProjectData } from '../types';

interface ProjectDetailProps {
  t: Translation;
  projects: ProjectData[];
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ t, projects }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { hash } = useLocation();

  const project = projects.find(p => p.id === id);

  // Effect to handle scrolling to hash sections
  useEffect(() => {
    if (hash) {
      const elementId = hash.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [hash, project]);

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h2>
        <button
          onClick={() => navigate('/')}
          className="text-primary-600 hover:text-primary-700 font-medium focus:ring-2 focus:ring-primary-500 px-2 rounded"
        >
          Return Home
        </button>
      </div>
    );
  }

  const details = t.projects[project.translationKey];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in-up">
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="group flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-8 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg px-2"
        aria-label="Back to project list"
      >
        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
        <span className="font-medium">Back to Projects</span>
      </button>

      <article className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Image & Actions */}
        <div className="space-y-8">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 bg-gray-100 dark:bg-gray-800">
             <img
              src={project.image}
              alt={`${details.title} showcase interface screenshot`}
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-primary-500/30 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-primary-500/50"
              aria-label={`Visit ${details.title} website (opens in new tab)`}
            >
              <span>Visit Website</span>
              <ExternalLink className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            {details.title}
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 font-light mb-8 leading-relaxed">
            {details.description}
          </p>
          
          <section id="about" className="prose dark:prose-invert max-w-none mb-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About the Project</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {details.longDescription}
            </p>
          </section>

          <section id="features" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {details.features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-gray-700 dark:text-gray-200 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>
    </div>
  );
};