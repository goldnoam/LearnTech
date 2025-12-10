import React, { ReactNode } from 'react';

interface TooltipProps {
  content: string;
  children: ReactNode;
  position?: 'top' | 'bottom';
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children, position = 'bottom' }) => {
  return (
    <div className="group relative flex items-center justify-center">
      {children}
      <div 
        role="tooltip"
        className={`
          absolute ${position === 'bottom' ? 'top-full mt-2' : 'bottom-full mb-2'} 
          px-2.5 py-1.5 
          bg-gray-900 dark:bg-gray-700 
          text-white text-xs font-medium 
          rounded-md shadow-lg 
          opacity-0 group-hover:opacity-100 group-focus-within:opacity-100
          transition-opacity duration-200 
          pointer-events-none whitespace-nowrap z-50
        `}
      >
        {content}
        {/* Arrow */}
        <div className={`
          absolute left-1/2 -translate-x-1/2 
          border-4 border-transparent
          ${position === 'bottom' ? 'bottom-full border-b-gray-900 dark:border-b-gray-700' : 'top-full border-t-gray-900 dark:border-t-gray-700'}
        `} />
      </div>
    </div>
  );
};
