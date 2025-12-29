import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Moon, Sun, Globe, CircuitBoard, Search, X, Check, ArrowUp } from 'lucide-react';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { ProjectDetail } from './components/ProjectDetail';
import { PROJECTS, TRANSLATIONS } from './constants';
import { Language } from './types';
import { Tooltip } from './components/Tooltip';

function App() {
  // Theme State
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) {
        return saved === 'dark';
      }
      return true; // Default dark
    }
    return true;
  });

  // Language State
  const [lang, setLang] = useState<Language>(Language.EN);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  // Search State
  const [searchQuery, setSearchQuery] = useState('');

  // Scroll to top state
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Route location for scrolling
  const { pathname } = useLocation();

  const t = TRANSLATIONS[lang];
  const isRTL = lang === Language.HE;

  // Handle Theme Change
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Handle Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Handle Close Menu on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLangMenuOpen(false);
      }
    };

    if (isLangMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isLangMenuOpen]);

  // Handle Scroll listener for ScrollToTop button
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Language Map for Display
  const languageNames: Record<Language, string> = {
    [Language.EN]: 'English',
    [Language.ZH]: 'Chinese (中文)',
    [Language.HI]: 'Hindi (हिन्दी)',
    [Language.RU]: 'Russian (Русский)',
    [Language.HE]: 'Hebrew (עברית)',
    [Language.DE]: 'German (Deutsch)',
    [Language.ES]: 'Spanish (Español)',
    [Language.FR]: 'French (Français)',
  };

  // Filter Projects
  const filteredProjects = PROJECTS.filter(project => {
    const details = t.projects[project.translationKey];
    const query = searchQuery.toLowerCase();
    return (
      details.title.toLowerCase().includes(query) ||
      details.description.toLowerCase().includes(query)
    );
  });

  return (
    <div className={`min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 transition-colors duration-300 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/70 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 gap-4">
            
            {/* Logo Area */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center text-white shadow-lg shadow-primary-500/30">
                <CircuitBoard className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white hidden sm:block">
                LearnTech
              </span>
            </div>

            {/* Search Bar - Center */}
            <div className="flex-1 max-w-md mx-auto hidden md:block">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Tooltip content="Search Projects">
                    <Search className="h-4 w-4 text-gray-400 group-focus-within:text-primary-500 transition-all duration-300 transform group-hover:scale-110 cursor-default" />
                  </Tooltip>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-10 py-2 border border-gray-200 dark:border-gray-700 rounded-full leading-5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white dark:focus:bg-gray-800 transition-all duration-300 sm:text-sm"
                  placeholder={t.searchPlaceholder}
                />
                {searchQuery && (
                  <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                    <Tooltip content="Clear Search">
                      <button
                        onClick={() => setSearchQuery('')}
                        className="p-1 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-110 hover:rotate-90"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </Tooltip>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Search Input Compact */}
            <div className="flex md:hidden flex-1 justify-end mr-2">
                 <div className="relative w-full max-w-[160px]">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <input 
                      type="text" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="block w-full pl-9 pr-8 py-1.5 border border-transparent rounded-full leading-5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary-500 text-sm"
                      placeholder={t.searchPlaceholder}
                    />
                    {searchQuery && (
                      <div className="absolute inset-y-0 right-0 pr-1 flex items-center">
                        <button onClick={() => setSearchQuery('')} className="p-1 text-gray-400 hover:text-gray-600 transition-transform hover:scale-110">
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    )}
                 </div>
            </div>


            {/* Controls */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              
              {/* Language Selector */}
              <div className="relative">
                <Tooltip content="Select Language">
                  <button
                    onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                    className={`p-2 rounded-full transition-all duration-200 transform hover:scale-110 hover:rotate-12 focus:outline-none focus:ring-2 focus:ring-primary-500 ${isLangMenuOpen ? 'bg-gray-100 dark:bg-gray-800 text-primary-600 dark:text-primary-400' : 'text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'}`}
                    aria-label="Select Language"
                    aria-expanded={isLangMenuOpen}
                  >
                    <Globe className="w-5 h-5" />
                  </button>
                </Tooltip>
                
                {isLangMenuOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-10 cursor-default" 
                      onClick={() => setIsLangMenuOpen(false)}
                    />
                    <div className={`absolute ${isRTL ? 'left-0' : 'right-0'} mt-2 w-56 rounded-xl bg-white dark:bg-gray-800 shadow-xl ring-1 ring-black ring-opacity-5 py-1 z-20 max-h-96 overflow-y-auto transform origin-top-right transition-all`}>
                      {Object.entries(languageNames).map(([key, name]) => (
                        <button
                          key={key}
                          onClick={() => {
                            setLang(key as Language);
                            setIsLangMenuOpen(false);
                          }}
                          className={`flex items-center justify-between w-full px-4 py-2 text-sm transition-colors ${
                            lang === key 
                              ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 font-medium' 
                              : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                          } ${isRTL ? 'text-right flex-row-reverse' : 'text-left'}`}
                        >
                          <span>{name}</span>
                          {lang === key && <Check className="w-4 h-4" />}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Theme Toggle */}
              <Tooltip content={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}>
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:rotate-45 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  aria-label="Toggle Theme"
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-gray-700" />}
                </button>
              </Tooltip>

            </div>
          </div>
        </div>
      </nav>

      {/* Main Content with Routing */}
      <main className="flex-grow">
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                t={t} 
                projects={filteredProjects} 
                onClearSearch={() => setSearchQuery('')} 
              />
            } 
          />
          <Route 
            path="/project/:id" 
            element={<ProjectDetail t={t} projects={PROJECTS} />} 
          />
        </Routes>
      </main>

      <Footer translation={t} />

      {/* Scroll To Top Button - Fixed container with static child for proper Tooltip positioning */}
      <div className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ease-out transform ${showScrollTop ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-75 pointer-events-none'}`}>
        <Tooltip content="Scroll to Top" position="top">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-700 hover:shadow-primary-500/30 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        </Tooltip>
      </div>

    </div>
  );
}

export default App;