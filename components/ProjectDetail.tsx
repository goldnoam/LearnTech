import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react';
import { Translation, ProjectData } from '../types';

interface ProjectDetailProps {
  t: Translation;
  projects: ProjectData[];
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ t, projects }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h2>
        <button
          onClick={() => navigate('/')}
          className="text-primary-600 hover:text-primary-700 font-medium"
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
        className="group flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
        <span className="font-medium">Back to Projects</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Image & Actions */}
        <div className="space-y-8">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 bg-gray-100 dark:bg-gray-800">
             <img
              src={project.image}
              alt={details.title}
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-primary-500/30 transform hover:-translate-y-1"
            >
              <span>Visit Website</span>
              <ExternalLink className="w-5 h-5" />
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
          
          <div className="prose dark:prose-invert max-w-none mb-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About the Project</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {details.longDescription}
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {details.features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-200 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};