import React, { useState, useEffect } from 'react';
import { X, ChevronRight, ChevronLeft, Check } from 'lucide-react';

interface TourStep {
  target: string; // CSS Selector
  title: string;
  content: string;
  position: 'top' | 'bottom' | 'left' | 'right' | 'center';
}

interface OnboardingTourProps {
  onComplete: () => void;
}

export const OnboardingTour: React.FC<OnboardingTourProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0, height: 0 });

  const steps: TourStep[] = [
    {
      target: 'body',
      title: 'Welcome to Learn Tech Hub!',
      content: 'Your premium gateway to mastering modern technology. Let us show you around.',
      position: 'center'
    },
    {
      target: '#nav-search',
      title: 'Find Your Interests',
      content: 'Use the search bar to filter projects by topic, technology, or keywords.',
      position: 'bottom'
    },
    {
      target: '#project-grid',
      title: 'Explore Projects',
      content: 'Each card leads to a dedicated learning page or directly to the project website.',
      position: 'top'
    },
    {
      target: '#nav-lang',
      title: 'Global Learning',
      content: 'Switch between 8 supported languages to learn in the way that suits you best.',
      position: 'bottom'
    },
    {
      target: '#nav-theme',
      title: 'Your Preferences',
      content: 'Toggle between dark and light modes for the most comfortable reading experience.',
      position: 'bottom'
    }
  ];

  useEffect(() => {
    const updateTargetCoords = () => {
      const step = steps[currentStep];
      if (step.target === 'body') {
        setCoords({ top: 0, left: 0, width: 0, height: 0 });
        return;
      }

      const element = document.querySelector(step.target);
      if (element) {
        const rect = element.getBoundingClientRect();
        setCoords({
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
          width: rect.width,
          height: rect.height
        });
        
        // Ensure element is visible
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    updateTargetCoords();
    window.addEventListener('resize', updateTargetCoords);
    return () => window.removeEventListener('resize', updateTargetCoords);
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const step = steps[currentStep];

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
      {/* Dimmed Backdrop with Spotlight hole */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-[2px] pointer-events-auto transition-all duration-500">
        {step.target !== 'body' && (
          <div 
            className="absolute bg-transparent shadow-[0_0_0_9999px_rgba(0,0,0,0.75)] dark:shadow-[0_0_0_9999px_rgba(0,0,0,0.85)] rounded-lg transition-all duration-500 ease-in-out"
            style={{
              top: coords.top - 8,
              left: coords.left - 8,
              width: coords.width + 16,
              height: coords.height + 16,
              boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.7)',
            }}
          />
        )}
      </div>

      {/* Tooltip/Dialog */}
      <div 
        className={`absolute pointer-events-auto w-[320px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 p-6 transition-all duration-500 ease-in-out transform ${step.target === 'body' ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-110' : ''}`}
        style={step.target !== 'body' ? {
          top: step.position === 'bottom' ? coords.top + coords.height + 24 : step.position === 'top' ? coords.top - 200 : coords.top,
          left: Math.max(20, Math.min(window.innerWidth - 340, coords.left + (coords.width / 2) - 160))
        } : {}}
      >
        <button 
          onClick={onComplete}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
          aria-label="Skip tour"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-4">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
            <span className="font-bold">{currentStep + 1}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {step.content}
          </p>
        </div>

        <div className="flex items-center justify-between mt-8">
          <div className="flex gap-1">
            {steps.map((_, i) => (
              <div 
                key={i} 
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentStep ? 'w-4 bg-primary-600' : 'bg-gray-300 dark:bg-gray-600'}`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            {currentStep > 0 && (
              <button 
                onClick={handlePrev}
                className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            <button 
              onClick={handleNext}
              className="flex items-center gap-2 px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-primary-500/20 active:scale-95"
            >
              {currentStep === steps.length - 1 ? (
                <>
                  <span>Finish</span>
                  <Check className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};