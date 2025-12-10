import { Language, Translation, ProjectData } from './types';

export const PROJECTS: ProjectData[] = [
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
  }
];

export const TRANSLATIONS: Record<Language, Translation> = {
  [Language.EN]: {
    title: "Learn Tech Hub",
    subtitle: "Your gateway to mastering modern technology, from networking to AI and hardware.",
    footerRights: "© Noam Gold AI 2025",
    feedback: "Send Feedback",
    visitSite: "Start Learning",
    searchPlaceholder: "Search topics...",
    noResults: "No projects found matching your search.",
    share: "Share Hub",
    projects: {
      networking: {
        title: "Learn Networking",
        description: "Deep dive into network protocols, architecture, and security fundamentals."
      },
      aiTools: {
        title: "Master AI Coding Tools",
        description: "Unlock the power of AI-assisted development and boost your productivity."
      },
      sbc: {
        title: "Master SBC",
        description: "Explore the world of Single Board Computers like Raspberry Pi and Arduino."
      }
    }
  },
  [Language.ZH]: {
    title: "科技学习中心",
    subtitle: "您掌握现代技术的门户，从网络到人工智能和硬件。",
    footerRights: "© Noam Gold AI 2025",
    feedback: "发送反馈",
    visitSite: "开始学习",
    searchPlaceholder: "搜索主题...",
    noResults: "未找到匹配的项目。",
    share: "分享中心",
    projects: {
      networking: {
        title: "学习网络技术",
        description: "深入了解网络协议、架构和安全基础知识。"
      },
      aiTools: {
        title: "精通 AI 编程工具",
        description: "解锁 AI 辅助开发的潜力，提高您的工作效率。"
      },
      sbc: {
        title: "精通单板计算机",
        description: "探索 Raspberry Pi 和 Arduino 等单板计算机的世界。"
      }
    }
  },
  [Language.HI]: {
    title: "लर्न टेक हब",
    subtitle: "नेटवर्किंग से लेकर एआई और हार्डवेयर तक आधुनिक तकनीक में महारत हासिल करने का आपका प्रवेश द्वार।",
    footerRights: "© Noam Gold AI 2025",
    feedback: "प्रतिक्रिया भेजें",
    visitSite: "सीखना शुरू करें",
    searchPlaceholder: "विषय खोजें...",
    noResults: "आपकी खोज से मेल खाने वाला कोई प्रोजेक्ट नहीं मिला।",
    share: "साझा करें",
    projects: {
      networking: {
        title: "नेटवर्किंग सीखें",
        description: "नेटवर्क प्रोटोकॉल, आर्किटेक्चर और सुरक्षा बुनियादी बातों में गहराई से उतरें।"
      },
      aiTools: {
        title: "मास्टर एआई कोडिंग टूल्स",
        description: "एआई-सहायता प्राप्त विकास की शक्ति को अनलॉक करें और अपनी उत्पादकता बढ़ाएं।"
      },
      sbc: {
        title: "मास्टर SBC",
        description: "रास्पबेरी पाई और अरडुनो जैसे सिंगल बोर्ड कंप्यूटर की दुनिया का अन्वेषण करें।"
      }
    }
  },
  [Language.RU]: {
    title: "Центр Изучения Технологий",
    subtitle: "Ваш путь к освоению современных технологий: от сетей до ИИ и оборудования.",
    footerRights: "© Noam Gold AI 2025",
    feedback: "Отправить отзыв",
    visitSite: "Начать обучение",
    searchPlaceholder: "Поиск тем...",
    noResults: "Проекты по вашему запросу не найдены.",
    share: "Поделиться",
    projects: {
      networking: {
        title: "Изучение сетей",
        description: "Погружение в сетевые протоколы, архитектуру и основы безопасности."
      },
      aiTools: {
        title: "Инструменты ИИ для кодинга",
        description: "Раскройте возможности разработки с помощью ИИ и повысьте свою продуктивность."
      },
      sbc: {
        title: "Мастер SBC",
        description: "Исследуйте мир одноплатных компьютеров, таких как Raspberry Pi и Arduino."
      }
    }
  },
  [Language.HE]: {
    title: "מרכז למידת טכנולוגיה",
    subtitle: "השער שלך לשליטה בטכנולוגיה מודרנית, מרשתות ועד בינה מלאכותית וחומרה.",
    footerRights: "© נעם גולד AI 2025",
    feedback: "שלח משוב",
    visitSite: "התחל ללמוד",
    searchPlaceholder: "חפש נושאים...",
    noResults: "לא נמצאו פרויקטים תואמים לחיפוש שלך.",
    share: "שתף",
    projects: {
      networking: {
        title: "למד רשתות",
        description: "צלילה עמוקה לפרוטוקולי רשת, ארכיטקטורה ויסודות אבטחת מידע."
      },
      aiTools: {
        title: "כלי פיתוח AI",
        description: "שחרר את כוחו של הפיתוח בסיוע בינה מלאכותית והגבר את הפרודוקטיביות שלך."
      },
      sbc: {
        title: "מומחה מחשבי לוח יחיד",
        description: "חקור את עולם מחשבי הלוח היחיד (SBC) כמו Raspberry Pi ו-Arduino."
      }
    }
  },
  [Language.DE]: {
    title: "Tech-Lernzentrum",
    subtitle: "Ihr Tor zur Beherrschung moderner Technologien, von Netzwerken bis hin zu KI und Hardware.",
    footerRights: "© Noam Gold AI 2025",
    feedback: "Feedback senden",
    visitSite: "Jetzt lernen",
    searchPlaceholder: "Themen suchen...",
    noResults: "Keine Projekte gefunden.",
    share: "Teilen",
    projects: {
      networking: {
        title: "Netzwerke lernen",
        description: "Tauchen Sie tief in Netzwerkprotokolle, Architektur und Sicherheitsgrundlagen ein."
      },
      aiTools: {
        title: "KI-Coding-Tools meistern",
        description: "Nutzen Sie die Kraft der KI-gestützten Entwicklung und steigern Sie Ihre Produktivität."
      },
      sbc: {
        title: "SBC meistern",
        description: "Entdecken Sie die Welt der Einplatinencomputer wie Raspberry Pi und Arduino."
      }
    }
  },
  [Language.ES]: {
    title: "Centro de Aprendizaje Tecnológico",
    subtitle: "Tu puerta de entrada para dominar la tecnología moderna, desde redes hasta IA y hardware.",
    footerRights: "© Noam Gold AI 2025",
    feedback: "Enviar comentarios",
    visitSite: "Empezar a aprender",
    searchPlaceholder: "Buscar temas...",
    noResults: "No se encontraron proyectos.",
    share: "Compartir",
    projects: {
      networking: {
        title: "Aprender Redes",
        description: "Profundiza en protocolos de red, arquitectura y fundamentos de seguridad."
      },
      aiTools: {
        title: "Dominar Herramientas de IA",
        description: "Desbloquea el poder del desarrollo asistido por IA y aumenta tu productividad."
      },
      sbc: {
        title: "Dominar SBC",
        description: "Explora el mundo de los ordenadores de placa única como Raspberry Pi y Arduino."
      }
    }
  },
  [Language.FR]: {
    title: "Hub d'Apprentissage Tech",
    subtitle: "Votre passerelle pour maîtriser la technologie moderne, des réseaux à l'IA et au matériel.",
    footerRights: "© Noam Gold AI 2025",
    feedback: "Envoyer des commentaires",
    visitSite: "Commencer à apprendre",
    searchPlaceholder: "Rechercher...",
    noResults: "Aucun projet trouvé.",
    share: "Partager",
    projects: {
      networking: {
        title: "Apprendre les Réseaux",
        description: "Plongez dans les protocoles réseau, l'architecture et les fondamentaux de la sécurité."
      },
      aiTools: {
        title: "Maîtriser les Outils IA",
        description: "Libérez la puissance du développement assisté par IA et boostez votre productivité."
      },
      sbc: {
        title: "Maîtriser les SBC",
        description: "Explorez le monde des ordinateurs à carte unique comme Raspberry Pi et Arduino."
      }
    }
  }
};
