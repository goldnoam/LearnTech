
import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Moon, Sun, Globe, CircuitBoard, Search, X, Check, ArrowUp, Type as TypeIcon, Download } from 'lucide-react';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { ProjectDetail } from './components/ProjectDetail';
import { PROJECTS, TRANSLATIONS } from './constants';
import { Language, FontSize } from './types';
import { Tooltip } from './components/Tooltip';
import { OnboardingTour } from './components/OnboardingTour';

// Language display names for the switcher
const languageNames: Record<Language, string> = {
  [Language.EN]: 'English',
  [Language.HE]: 'עברית',
  [Language.ZH]: '中文',
  [Language.HI]: 'Indy',
  [Language.RU]: 'Русский',
  [Language.DE]: 'Deutsch',
  [Language.ES]: 'Español',
  [Language.FR]: 'Français'
};

function App() {
  const navigate = useNavigate();
  // Theme State - Default to Dark as requested
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return true; // Default dark
    }
    return true;
  });

  // Font Size State
  const [fontSize, setFontSize] = useState<FontSize>(() => {
    return (localStorage.getItem('fontSize') as FontSize) || 'base';
  });

  // Language State
  const [lang, setLang] = useState<Language>(Language.EN);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  // Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Scroll to top state
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Onboarding State
  const [showTour, setShowTour] = useState(false);

  const { pathname } = useLocation();
  const t = TRANSLATIONS[lang];
  const isRTL = lang === Language.HE;

  // TTS Helper using browser's native Synthesis for button/action feedback
  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.1;
      utterance.pitch = 1;
      // Basic language detection support
      if (lang === Language.HE) utterance.lang = 'he-IL';
      else if (lang === Language.ZH) utterance.lang = 'zh-CN';
      else if (lang === Language.ES) utterance.lang = 'es-ES';
      else if (lang === Language.FR) utterance.lang = 'fr-FR';
      else utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

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

  // Handle Font Size
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('text-sm', 'text-base', 'text-lg');
    const classMap: Record<FontSize, string> = { sm: 'text-sm', base: 'text-base', lg: 'text-lg' };
    root.classList.add(classMap[fontSize]);
    localStorage.setItem('fontSize', fontSize);
  }, [fontSize]);

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check for first-time visit
  useEffect(() => {
    const hasSeenTour = localStorage.getItem('hasSeenTour');
    if (!hasSeenTour) {
      const timer = setTimeout(() => setShowTour(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowAutocomplete(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToTop = () => {
    speak("Scrolling to top");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExport = () => {
    speak("Exporting results");
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(filteredProjects, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "search_results.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const cycleFontSize = () => {
    const sizes: FontSize[] = ['sm', 'base', 'lg'];
    const next = sizes[(sizes.indexOf(fontSize) + 1) % sizes.length];
    setFontSize(next);
    speak(`Font size set to ${next === 'sm' ? 'small' : next === 'base' ? 'normal' : 'large'}`);
  };

  const filteredProjects = PROJECTS.filter(project => {
    const details = t.projects[project.translationKey];
    const query = searchQuery.toLowerCase();
    return (
      details.title.toLowerCase().includes(query) ||
      details.description.toLowerCase().includes(query)
    );
  });

  const autocompleteSuggestions = PROJECTS
    .filter(p => t.projects[p.translationKey].title.toLowerCase().includes(searchQuery.toLowerCase()))
    .slice(0, 5);

  return (
    <div 
      className={`min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 transition-colors duration-300 ${isRTL ? 'rtl font-hebrew' : 'ltr font-sans'}`} 
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Skip Navigation for Accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg">Skip to main content</a>
      
      {showTour && <OnboardingTour onComplete={() => setShowTour(false)} />}

      <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/70 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300 shadow-sm" role="banner">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main Navigation">
          <div className="flex justify-between items-center h-16 gap-4">
            {/* Logo */}
            <div 
              className="flex-shrink-0 flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg p-1" 
              onClick={() => { navigate('/'); speak("Home"); }}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate('/')}
            >
              <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center text-white shadow-lg">
                <CircuitBoard className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white hidden sm:block">LearnTech</span>
            </div>

            {/* Search Section */}
            <div ref={searchRef} id="nav-search" className="flex-1 max-w-md mx-auto relative hidden md:block" role="search">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400 group-focus-within:text-primary-500" />
                </div>
                <input
                  type="search"
                  value={searchQuery}
                  onFocus={() => { setShowAutocomplete(true); speak("Search input"); }}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    const droppedText = e.dataTransfer.getData("text");
                    setSearchQuery(droppedText);
                    speak(`Searching for ${droppedText}`);
                  }}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-11 pr-24 py-2.5 border border-gray-200 dark:border-gray-700 rounded-full bg-gray-100/50 dark:bg-gray-800/50 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white dark:focus:bg-gray-800 transition-all shadow-inner"
                  placeholder={t.searchPlaceholder}
                  aria-label={t.searchPlaceholder}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center gap-1.5">
                  {searchQuery && (
                    <button 
                      onClick={() => { setSearchQuery(''); speak(t.clear); }} 
                      className="p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                      aria-label={t.clear}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                  <Tooltip content={t.exportResults}>
                    <button 
                      onClick={handleExport} 
                      className="p-1.5 text-gray-400 hover:text-primary-500 transition-colors rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                      aria-label={t.exportResults}
                    >
                      <Download className="h-4 w-4" />
                    </button>
                  </Tooltip>
                </div>
              </div>
              
              {/* Autocomplete */}
              {showAutocomplete && searchQuery.length > 0 && autocompleteSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl overflow-hidden z-[60] animate-in fade-in slide-in-from-top-2">
                  {autocompleteSuggestions.map(p => (
                    <button
                      key={p.id}
                      onClick={() => { 
                        setSearchQuery(t.projects[p.translationKey].title); 
                        setShowAutocomplete(false); 
                        speak(`Selected ${t.projects[p.translationKey].title}`); 
                      }}
                      className="w-full text-left px-5 py-3 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors flex items-center justify-between group"
                    >
                      <span>{t.projects[p.translationKey].title}</span>
                      <Search className="w-3 h-3 opacity-0 group-hover:opacity-40 transition-opacity" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Actions Section */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Font Size Button */}
              <Tooltip content={t.fontSize}>
                <button 
                  onClick={cycleFontSize} 
                  className="p-2.5 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:text-primary-500 active:scale-90"
                  aria-label={t.fontSize}
                >
                  <TypeIcon className="w-5 h-5" />
                </button>
              </Tooltip>

              {/* Language Switcher */}
              <div id="nav-lang" className="relative">
                <Tooltip content="Change Language">
                  <button 
                    onClick={() => { setIsLangMenuOpen(!isLangMenuOpen); speak("Select language"); }} 
                    className="p-2.5 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:text-primary-500 active:scale-90"
                    aria-expanded={isLangMenuOpen}
                    aria-haspopup="true"
                  >
                    <Globe className="w-5 h-5" />
                  </button>
                </Tooltip>
                {isLangMenuOpen && (
                  <div className={`absolute ${isRTL ? 'left-0' : 'right-0'} mt-3 w-52 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 z-50 animate-in zoom-in-95 duration-200`}>
                    {Object.values(Language).map(l => (
                      <button 
                        key={l} 
                        onClick={() => { 
                          setLang(l); 
                          setIsLangMenuOpen(false); 
                          speak(`Language set to ${languageNames[l]}`); 
                        }} 
                        className={`w-full text-left px-5 py-2.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200 transition-colors flex items-center justify-between ${lang === l ? 'text-primary-600 font-bold bg-primary-50 dark:bg-primary-900/20' : ''}`}
                      >
                        <span>{languageNames[l]}</span>
                        {lang === l && <Check className="w-4 h-4" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Theme Toggle Switch */}
              <div className="flex items-center gap-2">
                <Sun className={`w-4 h-4 transition-colors ${!isDark ? 'text-yellow-500' : 'text-gray-400'}`} />
                <button 
                  onClick={() => { 
                    setIsDark(!isDark); 
                    speak(`Theme set to ${!isDark ? 'dark' : 'light'}`); 
                  }} 
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 ${isDark ? 'bg-primary-600' : 'bg-gray-300'}`}
                  role="switch"
                  aria-checked={isDark}
                  aria-label="Toggle dark mode"
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 shadow-md ${isDark ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
                <Moon className={`w-4 h-4 transition-colors ${isDark ? 'text-primary-400' : 'text-gray-400'}`} />
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main id="main-content" className="flex-grow focus:outline-none scroll-mt-20" tabIndex={-1} role="main">
        <Routes>
          <Route path="/" element={<Home t={t} projects={filteredProjects} onClearSearch={() => { setSearchQuery(''); speak("Search cleared"); }} />} />
          <Route path="/project/:id" element={<ProjectDetail t={t} projects={PROJECTS} />} />
        </Routes>
      </main>

      <Footer translation={t} />

      {/* Scroll to Top FAB */}
      <div className={`fixed bottom-10 right-10 z-50 transition-all duration-500 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <button 
          onClick={scrollToTop} 
          className="p-4 rounded-full bg-primary-600 text-white shadow-2xl hover:bg-primary-500 transition-all transform hover:-translate-y-2 hover:scale-110 active:scale-90 focus:ring-4 focus:ring-primary-500/50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default App;
