
import { Language, Translation, ProjectData } from './types';

export const PROJECTS: ProjectData[] = [
  {
    id: 'master-cpp',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800',
    link: 'https://cplusplus-master.vercel.app',
    translationKey: 'masterCpp'
  },
  {
    id: 'testing-tools',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800',
    link: 'https://ai-testing-hub.vercel.app/',
    translationKey: 'testingTools'
  },
  {
    id: 'agentic-stack',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    link: 'https://agentic-stack.vercel.app',
    translationKey: 'agenticStack'
  },
  {
    id: 'networking',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    link: 'https://net-learn.vercel.app',
    translationKey: 'networking'
  },
  {
    id: 'ai-tools',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
    link: 'https://master-ai-code-tools.vercel.app',
    translationKey: 'aiTools'
  },
  {
    id: 'sbc',
    image: 'https://images.unsplash.com/photo-1555679427-1f6dfcce943b?auto=format&fit=crop&q=80&w=800',
    link: 'https://maker-forge.vercel.app',
    translationKey: 'sbc'
  },
  {
    id: 'python',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=800',
    link: 'https://master-python.vercel.app',
    translationKey: 'python'
  },
  {
    id: 'machine-learning',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800',
    link: 'https://edge-ai-masterclass.vercel.app/',
    translationKey: 'machineLearning'
  },
  {
    id: 'design-patterns',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=800',
    link: 'https://designpatterns.vercel.app',
    translationKey: 'designPatterns'
  }
];

// Helper to get common project details for missing translations
const getProjectFallback = (lang: string) => ({
  masterCpp: { title: "Master C++", description: "C++ Programming", longDescription: "High-performance programming.", features: ["Modern C++"] },
  testingTools: { title: "Testing Tools", description: "QA Tools", longDescription: "Software testing toolkit.", features: ["Automation"] },
  agenticStack: { title: "Agentic Stack", description: "AI Agents", longDescription: "Autonomous AI systems.", features: ["Orchestration"] },
  networking: { title: "Networking", description: "Network Protocols", longDescription: "Deep dive into networks.", features: ["TCP/IP"] },
  aiTools: { title: "AI Tools", description: "AI for Coding", longDescription: "Productivity with AI.", features: ["Prompt Engineering"] },
  sbc: { title: "Master SBC", description: "Single Board Computers", longDescription: "Hardware programming.", features: ["IoT"] },
  python: { title: "Master Python", description: "Python Programming", longDescription: "Python from basics to advanced.", features: ["Data Science"] },
  machineLearning: { title: "Machine Learning", description: "ML & AI", longDescription: "Foundations of AI.", features: ["Neural Networks"] },
  designPatterns: { title: "Design Patterns", description: "Architecture", longDescription: "Software patterns.", features: ["SOLID"] }
});

export const TRANSLATIONS: Record<Language, Translation> = {
  [Language.EN]: {
    title: "Learn Tech Hub",
    subtitle: "Your gateway to mastering modern technology, from networking to AI and hardware.",
    footerRights: "(C) Noam Gold AI 2026",
    feedback: "Send Feedback",
    visitSite: "View Details",
    goToSite: "Go to Page",
    searchPlaceholder: "Search topics...",
    noResults: "No projects found matching your search.",
    share: "Share Hub",
    exportResults: "Export JSON",
    clear: "Clear",
    fontSize: "Font Size",
    projects: {
      masterCpp: {
        title: "Master C++",
        description: "Master high-performance programming with C++ from basics to system architecture.",
        longDescription: "Dive into the world of low-level programming. Learn memory management, OOP principles, and modern C++ features. This course covers everything from basic syntax to high-performance systems engineering.",
        features: ["Modern C++ (17/20/23)", "Memory Management", "STL & Generic Programming", "Systems Architecture"]
      },
      testingTools: {
        title: "Testing Tools Hub",
        description: "Comprehensive toolkit for modern software testing and quality assurance.",
        longDescription: "A central repository for the best AI-driven and manual testing tools. Learn about end-to-end testing, unit testing, and automation frameworks to ensure high-quality software delivery.",
        features: ["AI-Powered Test Generation", "End-to-End Automation", "Performance Benchmarking", "Quality Metrics Dashboard"]
      },
      agenticStack: {
        title: "Master Agentic Stack",
        description: "Build autonomous AI agents and intelligent multi-agent workflows.",
        longDescription: "Learn to build complex AI systems that can reason, plan, and execute tasks autonomously. This curriculum covers agent orchestration, tool use, memory management, and multi-agent collaboration frameworks.",
        features: ["Agent Orchestration", "Tool & Function Calling", "Memory & Context Management", "Autonomous Workflows"]
      },
      networking: {
        title: "Learn Networking",
        description: "Deep dive into network protocols, architecture, and security fundamentals.",
        longDescription: "Master the fundamental building blocks of the internet. This comprehensive course takes you from the basics of LANs and WANs to advanced routing protocols and network security. Perfect for aspiring network engineers and sysadmins.",
        features: ["TCP/IP & OSI Models", "Subnetting & Addressing", "Routing Protocols (OSPF, BGP)", "Network Security Basics"]
      },
      aiTools: {
        title: "Master AI Coding Tools",
        description: "Unlock the power of AI-assisted development and boost your productivity.",
        longDescription: "Learn how to leverage state-of-the-art AI tools to write cleaner code faster. We cover everything from GitHub Copilot and ChatGPT to specialized coding agents.",
        features: ["AI Prompt Engineering", "Automated Refactoring", "Code Generation Strategies", "Debugging with AI"]
      },
      sbc: {
        title: "Master SBC",
        description: "Explore the world of Single Board Computers like Raspberry Pi and Arduino.",
        longDescription: "Dive into the hardware world with Single Board Computers. Learn to interface with sensors, control actuators, and build IoT devices using platforms like Raspberry Pi and ESP32.",
        features: ["GPIO Programming", "Sensor Integration", "IoT Connectivity", "Linux for Embedded Systems"]
      },
      python: {
        title: "Master Python",
        description: "Comprehensive guide to Python programming, from basics to advanced topics.",
        longDescription: "From your first 'Hello World' to complex data science projects. This curriculum covers modern Python patterns, asynchronous programming, and popular frameworks.",
        features: ["Data Structures & Algorithms", "Object-Oriented Programming", "AsyncIO & Concurrency", "Web Frameworks (FastAPI/Django)"]
      },
      machineLearning: {
        title: "Machine Learning Masterclass",
        description: "Master the foundations of Machine Learning and Edge AI.",
        longDescription: "A deep dive into the world of Machine Learning, focusing on algorithms, data processing, and deploying models to edge devices. This masterclass bridges the gap between theory and real-world application.",
        features: ["Neural Networks", "Edge AI Deployment", "Data Preprocessing", "TensorFlow & PyTorch"]
      },
      designPatterns: {
        title: "Master Design Patterns",
        description: "Master software architecture with essential design patterns and best practices.",
        longDescription: "Explore the fundamental blueprints of software engineering. This guide covers classic Gang of Four patterns, modern architectural styles, and principles for writing maintainable, scalable code.",
        features: ["Creational Patterns", "Structural Patterns", "Behavioral Patterns", "SOLID Principles"]
      }
    }
  },
  [Language.HE]: {
    title: "מרכז למידת טכנולוגיה",
    subtitle: "השער שלך לשליטה בטכנולוגיה מודרנית, מרשתות ועד בינה מלאכותית וחומרה.",
    footerRights: "(C) נעם גולד AI 2026",
    feedback: "שלח משוב",
    visitSite: "הצג פרטים",
    goToSite: "עבור לאתר",
    searchPlaceholder: "חפש נושאים...",
    noResults: "לא נמצאו פרויקטים תואמים לחיפוש שלך.",
    share: "שתף",
    exportResults: "ייצא JSON",
    clear: "נקה",
    fontSize: "גודל גופן",
    projects: {
      masterCpp: {
        title: "מומחה C++",
        description: "שלטו בתכנות ביצועים גבוהים עם C++ מהיסודות ועד ארכיטקטורת מערכות.",
        longDescription: "צללו לעולם התכנות ברמה נמוכה. למדו ניהול זיכרון, עקרונות OOP ותכונות C++ מודרניות.",
        features: ["C++ מודרני (17/20/23)", "ניהול זיכרון", "STL ותכנות גנרי", "ארכיטקטורת מערכות"]
      },
      testingTools: {
        title: "מרכז כלי בדיקה",
        description: "ערכת כלים מקיפה לבדיקות תוכנה מודרניות ואבטחת איכות.",
        longDescription: "מאגר מרכזי לכלי הבדיקה הטובים ביותר, מונעי AI וידניים. למדו על בדיקות מקצה לקצה, בדיקות יחידה ומסגרות אוטומציה להבטחת תוכנה באיכות גבוהה.",
        features: ["יצירת בדיקות מונעת AI", "אוטומציה מקצה לקצה", "בדיקות ביצועים", "לוח מדדי איכות"]
      },
      agenticStack: {
        title: "מומחה Agentic Stack",
        description: "בניית סוכני AI אוטונומיים ותהליכי עבודה אינטליגנטיים מרובי סוכנים.",
        longDescription: "למדו לבנות מערכות בינה מלאכותית מורכבות שיכולות להסיק, לתכנן ולבצע משימות באופן אוטונומי.",
        features: ["ניהול סוכנים (Orchestration)", "קריאה לכלים ופונקציות", "ניהול זיכרון והקשר", "תהליכי עבודה אוטונומיים"]
      },
      networking: {
        title: "למד רשתות",
        description: "צלילה עמוקה לפרוטוקולי רשת, ארכיטקטורה ויסודות אבטחת מידע.",
        longDescription: "שלטו באבני היסוד של האינטרנט.",
        features: ["מודלי TCP/IP ו-OSI", "תת-רשתות וכתובות", "פרוטוקולי ניתוב (OSPF, BGP)", "יסודות אבטחת רשת"]
      },
      aiTools: {
        title: "כלי פיתוח AI",
        description: "שחרר את כוחו של הפיתוח בסיוע בינה מלאכותית.",
        longDescription: "למדו כיצד לנצל כלי בינה מלאכותית מתקדמים לכתיבת קוד נקי ומהיר יותר.",
        features: ["הנדסת פרומפטים ל-AI", "Refactoring אוטומטי", "אסטרטגיות יצירת קוד", "דיבאגינג עם AI"]
      },
      sbc: {
        title: "מומחה מחשבי לוח יחיד",
        description: "חקור את עולם מחשבי הלוח היחיד (SBC) כמו Raspberry Pi ו-Arduino.",
        longDescription: "צללו לעולם החומרה עם מחשבי לוח יחיד.",
        features: ["תכנות GPIO", "אינטגרציה עם חיישנים", "קישוריות IoT", "לינוקס למערכות משובצות"]
      },
      python: {
        title: "שלוט בפייתון",
        description: "מדריך מקיף לתכנות בפייתון, מהיסודות ועד לנושאים מתקדמים.",
        longDescription: "מה-'Hello World' הראשון שלכם ועד פרויקטים מורכבים במדעי הנתונים.",
        features: ["מבני נתונים ואלגוריתמים", "תכנות מונחה עצמים", "AsyncIO ומקביליות", "פריימוורקים ל-Web (FastAPI/Django)"]
      },
      machineLearning: {
        title: "מאסטר בקורס למידת מכונה",
        description: "שלטו ביסודות של למידת מכונה ו-Edge AI.",
        longDescription: "צלילה עמוקה לעולם של למידת מכונה.",
        features: ["רשתות עצביות", "פריסת Edge AI", "עיבוד מקדים של נתונים", "TensorFlow & PyTorch"]
      },
      designPatterns: {
        title: "תבניות עיצוב",
        description: "שלוט בארכיטקטורת תוכנה עם תבניות עיצוב חיוניות.",
        longDescription: "חקור את אבני היסוד של הנדסת תוכנה.",
        features: ["תבניות יצירה", "תבניות מבנה", "תבניות התנהגות", "עקרונות SOLID"]
      }
    }
  },
  [Language.ZH]: {
    title: "学习技术中心",
    subtitle: "掌握现代技术的门户，从网络到人工智能和硬件。",
    footerRights: "(C) Noam Gold AI 2026",
    feedback: "发送反馈",
    visitSite: "查看详情",
    goToSite: "前往页面",
    searchPlaceholder: "搜索话题...",
    noResults: "未找到符合搜索条件的项目。",
    share: "分享中心",
    exportResults: "导出 JSON",
    clear: "清除",
    fontSize: "字体大小",
    projects: getProjectFallback('zh') as any
  },
  [Language.HI]: {
    title: "लर्न टेक हब",
    subtitle: "नेटवर्किंग से लेकर एआई और हार्डवेयर तक, आधुनिक तकनीक में महारत हासिल करने का आपका प्रवेश द्वार।",
    footerRights: "(C) Noam Gold AI 2026",
    feedback: "प्रतिक्रिया भेजें",
    visitSite: "विवरण देखें",
    goToSite: "पेज पर जाएं",
    searchPlaceholder: "विषय खोजें...",
    noResults: "आपकी खोज से मेल खाने वाला कोई प्रोजेक्ट नहीं मिला।",
    share: "हब साझा करें",
    exportResults: "JSON निर्यात करें",
    clear: "साף करें",
    fontSize: "फ़ॉन्ट आकार",
    projects: getProjectFallback('hi') as any
  },
  [Language.RU]: {
    title: "Технологический учебный центр",
    subtitle: "Ваш путь к освоению современных технологий: от сетей до ИИ и оборудования.",
    footerRights: "(C) Noam Gold AI 2026",
    feedback: "Отправить отзыв",
    visitSite: "Подробнее",
    goToSite: "Перейти на страницу",
    searchPlaceholder: "Поиск тем...",
    noResults: "Проекты не найдены.",
    share: "Поделиться",
    exportResults: "Экспорт JSON",
    clear: "Очистить",
    fontSize: "Размер шрифта",
    projects: getProjectFallback('ru') as any
  },
  [Language.DE]: {
    title: "Tech-Lernzentrum",
    subtitle: "Ihr Tor zur Beherrschung moderner Technologien, von Netzwerken bis hin zu KI und Hardware.",
    footerRights: "(C) Noam Gold AI 2026",
    feedback: "Feedback senden",
    visitSite: "Details anzeigen",
    goToSite: "Zur Seite",
    searchPlaceholder: "Themen suchen...",
    noResults: "Keine Projekte gefunden.",
    share: "Teilen",
    exportResults: "JSON exportieren",
    clear: "Löschen",
    fontSize: "Schriftgröße",
    projects: getProjectFallback('de') as any
  },
  [Language.ES]: {
    title: "Centro de Aprendizaje Tech",
    subtitle: "Su puerta de entrada para dominar la tecnología moderna, desde redes hasta IA y hardware.",
    footerRights: "(C) Noam Gold AI 2026",
    feedback: "Enviar comentarios",
    visitSite: "Ver detalles",
    goToSite: "Ir a la página",
    searchPlaceholder: "Buscar temas...",
    noResults: "No se encontraron proyectos.",
    share: "Compartir",
    exportResults: "Exportar JSON",
    clear: "Limpiar",
    fontSize: "Tamaño de fuente",
    projects: getProjectFallback('es') as any
  },
  [Language.FR]: {
    title: "Hub d'Apprentissage Tech",
    subtitle: "Votre porte d'entrée vers la maîtrise des technologies modernes, des réseaux à l'IA et au matériel.",
    footerRights: "(C) Noam Gold AI 2026",
    feedback: "Envoyer des commentaires",
    visitSite: "Voir les détails",
    goToSite: "Aller à la page",
    searchPlaceholder: "Rechercher des sujets...",
    noResults: "Aucun projet trouvé.",
    share: "Partager",
    exportResults: "Exporter JSON",
    clear: "Effacer",
    fontSize: "Taille de police",
    projects: getProjectFallback('fr') as any
  }
};
