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

export const TRANSLATIONS: Record<Language, Translation> = {
  [Language.EN]: {
    title: "Learn Tech Hub",
    subtitle: "Your gateway to mastering modern technology, from networking to AI and hardware.",
    footerRights: "© Noam Gold AI 2025",
    feedback: "Send Feedback",
    visitSite: "View Details",
    searchPlaceholder: "Search topics...",
    noResults: "No projects found matching your search.",
    share: "Share Hub",
    projects: {
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
  [Language.ZH]: {
    title: "科技学习中心",
    subtitle: "您掌握现代技术的门户，从网络到人工智能和硬件。",
    footerRights: "© Noam Gold AI 2025",
    feedback: "发送反馈",
    visitSite: "查看详情",
    searchPlaceholder: "搜索主题...",
    noResults: "未找到匹配的项目。",
    share: "分享中心",
    projects: {
      networking: {
        title: "学习网络技术",
        description: "深入了解网络协议、架构和安全基础知识。",
        longDescription: "掌握互联网的基础构建块。本综合课程带您从局域网和广域网的基础知识到高级路由协议和网络安全。",
        features: ["TCP/IP 和 OSI 模型", "子网划分和寻址", "路由协议 (OSPF, BGP)", "网络安全基础"]
      },
      aiTools: {
        title: "精通 AI 编程工具",
        description: "解锁 AI 辅助开发的潜力，提高您的工作效率。",
        longDescription: "学习如何利用最先进的 AI 工具更快地编写更干净的代码。我们涵盖了从 GitHub Copilot 和 ChatGPT 到专用编码代理的所有内容。",
        features: ["AI 提示工程", "自动重构", "代码生成策略", "使用 AI 调试"]
      },
      sbc: {
        title: "精通单板计算机",
        description: "探索 Raspberry Pi 和 Arduino 等单板计算机的世界。",
        longDescription: "使用单板计算机深入硬件世界。学习使用 Raspberry Pi 和 ESP32 等平台与传感器接口、控制执行器和构建物联网设备。",
        features: ["GPIO 编程", "传感器集成", "物联网连接", "嵌入式 Linux"]
      },
      python: {
        title: "精通 Python",
        description: "Python 编程综合指南，从基础知识到高级主题。",
        longDescription: "从您的第一个 'Hello World' 到复杂的数据科学项目。本课程涵盖现代 Python 模式、异步编程和流行框架。",
        features: ["数据结构与算法", "面向对象编程", "AsyncIO 和并发", "Web 框架 (FastAPI/Django)"]
      },
      machineLearning: {
        title: "机器学习大师班",
        description: "掌握机器学习和边缘人工智能的基础。",
        longDescription: "深入研究机器学习世界，重点关注算法、数据处理以及将模型部署到边缘设备。 这种大师班弥合了理论与实际应用之间的差距。",
        features: ["神经网络", "边缘人工智能部署", "数据预处理", "TensorFlow 和 PyTorch"]
      },
      designPatterns: {
        title: "精通设计模式",
        description: "通过基本设计模式和最佳实践掌握软件架构。",
        longDescription: "探索软件工程的基本蓝图。本指南涵盖了经典的 GoF 模式、现代架构风格以及编写可维护、可扩展代码的原则。",
        features: ["创建型模式", "结构型模式", "行为型模式", "SOLID 原则"]
      }
    }
  },
  [Language.HI]: {
    title: "लर्न टेक हब",
    subtitle: "नेटवर्किंग से लेकर एआई और हार्डवेयर तक आधुनिक तकनीक में महारत हासिल करने का आपका प्रवेश द्वार।",
    footerRights: "© Noam Gold AI 2025",
    feedback: "प्रतिक्रिया भेजें",
    visitSite: "विवरण देखें",
    searchPlaceholder: "विषय खोजें...",
    noResults: "आपकी खोज से मेल खाने वाला कोई प्रोजेक्ट नहीं मिला।",
    share: "साझा करें",
    projects: {
      networking: {
        title: "नेटवर्किंग सीखें",
        description: "नेटवर्क प्रोटोकॉल, आर्किटेक्चर और सुरक्षा बुनियादी बातों में गहराई से उतरें।",
        longDescription: "इंटरनेट के मूलभूत निर्माण खंडों में महारत हासिल करें। यह व्यापक पाठ्यक्रम आपको LAN और WAN की बुनियादी बातों से लेकर उन्नत रूटिंग प्रोटोकॉल और नेटवर्क सुरक्षा तक ले जाता है।",
        features: ["TCP/IP और OSI मॉडल", "सबनेटिंग और एड्रेसिंग", "रूटिंग प्रोटोकॉल (OSPF, BGP)", "नेटवर्क सुरक्षा मूल बातें"]
      },
      aiTools: {
        title: "मास्टर एआई कोडिंग टूल्स",
        description: "एआई-सहायता प्राप्त विकास की शक्ति को अनलॉक करें और अपनी उत्पादकता बढ़ाएं।",
        longDescription: "तेजी से स्वच्छ कोड लिखने के लिए अत्याधुनिक एआई उपकरणों का लाभ उठाने का तरीका जानें। हम GitHub Copilot और ChatGPT से लेकर विशेष कोडिंग एजेंटों तक सब कुछ कवर करते हैं।",
        features: ["एआई प्रॉम्प्ट इंजीनियरिंग", "स्वचालित रीफैक्टरिंग", "कोड जनरेशन रणनीतियाँ", "एआई के साथ डिबगिंग"]
      },
      sbc: {
        title: "मास्टर SBC",
        description: "रास्पबेरी पाई और अरडुनो जैसे सिंगल बोर्ड कंप्यूटर की दुनिया का अन्वेषण करें।",
        longDescription: "सिंगल बोर्ड कंप्यूटर के साथ हार्डवेयर की दुनिया में उतरें। रास्पबेरी पाई और ESP32 जैसे प्लेटफार्मों का उपयोग करके सेंसर के साथ इंटरफेस करना, एक्चुएटर्स को नियंत्रित करना और IoT डिवाइस बनाना सीखें।",
        features: ["GPIO प्रोग्रामिंग", "सेंसर एकीकरण", "IoT कनेक्टिविटी", "एम्बेडेड सिस्टम के लिए लिनक्स"]
      },
      python: {
        title: "मास्टर पायथन",
        description: "पायथन प्रोग्रामिंग के लिए व्यापक गाइड, बुनियादी से उन्नत विषयों तक।",
        longDescription: "आपके पहले 'हैलो वर्ल्ड' से लेकर जटिल डेटा साइंस प्रोजेक्ट्स तक। यह पाठ्यक्रम आधुनिक पायथन पैटर्न, एसिंक्रोनस प्रोग्रामिंग और लोकप्रिय फ्रेमवर्क को शामिल करता है।",
        features: ["डेटा स्ट्रक्चर्स और एल्गोरिदम", "ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग", "AsyncIO और समवर्ती", "वेब फ्रेमवर्क (FastAPI/Django)"]
      },
      machineLearning: {
        title: "मशीन लर्निंग मास्टरक्लास",
        description: "मशीन लर्निंग और एज एआई की नींव में महारत हासिल करें।",
        longDescription: "मशीन लर्निंग की दुनिया में एक गहरा गोता, एल्गोरिदम, डेटा प्रोसेसिंग और एज डिवाइस पर मॉडल तैनात करने पर ध्यान केंद्रित करना। यह मास्टरक्लास सिद्धांत और वास्तविक दुनिया के अनुप्रयोग के बीच की खाई को पाटता है।",
        features: ["न्यूरल नेटवर्क", "एज एआई डिप्लॉयमेंट", "डेटा प्रीप्रोसेसिंग", "TensorFlow और PyTorch"]
      },
      designPatterns: {
        title: "मास्टर डिज़ाइन पैटर्न",
        description: "आवश्यक डिज़ाइन पैटर्न और सर्वोत्तम प्रथाओं के साथ सॉफ़्टवेयर आर्किटेक्चर में महारत हासिल करें।",
        longDescription: "सॉफ़्टवेयर इंजीनियरिंग के मूलभूत ब्लूप्रिंट का अन्वेषण करें। यह मार्गदर्शिका क्लासिक GoF पैटर्न, आधुनिक वास्तुशिल्प शैलियों और बनाए रखने योग्य, स्केलेबल कोड लिखने के सिद्धांतों को कवर करती है।",
        features: ["रचनात्मक पैटर्न", "संरचनात्मक पैटर्न", "व्यवहार पैटर्न", "SOLID सिद्धांत"]
      }
    }
  },
  [Language.RU]: {
    title: "Центр Изучения Технологий",
    subtitle: "Ваш путь к освоению современных технологий: от сетей до ИИ и оборудования.",
    footerRights: "© Noam Gold AI 2025",
    feedback: "Отправить отзыв",
    visitSite: "Подробнее",
    searchPlaceholder: "Поиск тем...",
    noResults: "Проекты по вашему запросу не найдены.",
    share: "Поделиться",
    projects: {
      networking: {
        title: "Изучение сетей",
        description: "Погружение в сетевые протоколы, архитектуру и основы безопасности.",
        longDescription: "Освойте фундаментальные строительные блоки интернета. Этот всесторонний курс проведет вас от основ LAN и WAN до продвинутых протоколов маршрутизации и сетевой безопасности.",
        features: ["Модели TCP/IP и OSI", "Подсети и адресация", "Протоколы маршрутизации (OSPF, BGP)", "Основы сетевой безопасности"]
      },
      aiTools: {
        title: "Инструменты ИИ для кодинга",
        description: "Раскройте возможности разработки с помощью ИИ и повысьте свою продуктивность.",
        longDescription: "Узнайте, как использовать современные инструменты ИИ для более быстрого написания чистого кода. Мы охватываем все: от GitHub Copilot и ChatGPT до специализированных агентов кодирования.",
        features: ["Промпт-инжиниринг", "Автоматический рефакторинг", "Стратегии генерации кода", "Отладка с помощью ИИ"]
      },
      sbc: {
        title: "Мастер SBC",
        description: "Исследуйте мир одноплатных компьютеров, таких как Raspberry Pi и Arduino.",
        longDescription: "Погрузитесь в мир аппаратного обеспечения с одноплатными компьютерами. Научитесь взаимодействовать с датчиками, управлять приводами и создавать устройства IoT.",
        features: ["Программирование GPIO", "Интеграция датчиков", "IoT подключение", "Linux для встраиваемых систем"]
      },
      python: {
        title: "Мастер Python",
        description: "Полное руководство по программированию на Python: от основ до продвинутых тем.",
        longDescription: "От вашего первого 'Hello World' до сложных проектов по науке о данных. Этот учебный план охватывает современные паттерны Python и асинхронное программирование.",
        features: ["Структуры данных и алгоритмы", "Объектно-ориентированное программирование", "AsyncIO и многопоточность", "Веб-фреймворки (FastAPI/Django)"]
      },
      machineLearning: {
        title: "Мастер-класс по машинному обучению",
        description: "Освойте основы машинного обучения и Edge AI.",
        longDescription: "Глубокое погружение в мир машинного обучения с акцентом на алгоритмы, обработку данных и развертывание моделей на граничных устройствах. Этот мастер-класс устраняет разрыв между теорией и реальным применением.",
        features: ["Нейронные сети", "Развертывание Edge AI", "Предобработка данных", "TensorFlow и PyTorch"]
      },
      designPatterns: {
        title: "Мастер паттернов проектирования",
        description: "Освойте архитектуру программного обеспечения с помощью основных паттернов проектирования.",
        longDescription: "Изучите фундаментальные чертежи программной инженерии. Это руководство охватывает классические паттерны GoF, современные архитектурные стили и принципы написания поддерживаемого кода.",
        features: ["Порождающие паттерны", "Структурные паттерны", "Поведенческие паттерны", "Принципы SOLID"]
      }
    }
  },
  [Language.HE]: {
    title: "מרכז למידת טכנולוגיה",
    subtitle: "השער שלך לשליטה בטכנולוגיה מודרנית, מרשתות ועד בינה מלאכותית וחומרה.",
    footerRights: "© נעם גולד AI 2025",
    feedback: "שלח משוב",
    visitSite: "הצג פרטים",
    searchPlaceholder: "חפש נושאים...",
    noResults: "לא נמצאו פרויקטים תואמים לחיפוש שלך.",
    share: "שתף",
    projects: {
      networking: {
        title: "למד רשתות",
        description: "צלילה עמוקה לפרוטוקולי רשת, ארכיטקטורה ויסודות אבטחת מידע.",
        longDescription: "שלטו באבני היסוד של האינטרנט. קורס מקיף זה לוקח אתכם מהבסיס של רשתות מקומיות ומרחביות ועד לפרוטוקולי ניתוב מתקדמים ואבטחת רשת.",
        features: ["מודלי TCP/IP ו-OSI", "תת-רשתות וכתובות", "פרוטוקולי ניתוב (OSPF, BGP)", "יסודות אבטחת רשת"]
      },
      aiTools: {
        title: "כלי פיתוח AI",
        description: "שחרר את כוחו של הפיתוח בסיוע בינה מלאכותית והגבר את הפרודוקטיביות שלך.",
        longDescription: "למדו כיצד לנצל כלי בינה מלאכותית מתקדמים לכתיבת קוד נקי ומהיר יותר. אנו מכסים הכל מ-GitHub Copilot ו-ChatGPT ועד סוכני קידוד מיוחדים.",
        features: ["הנדסת פרומפטים ל-AI", "Refactoring אוטומטי", "אסטרטגיות יצירת קוד", "דיבאגינג עם AI"]
      },
      sbc: {
        title: "מומחה מחשבי לוח יחיד",
        description: "חקור את עולם מחשבי הלוח היחיד (SBC) כמו Raspberry Pi ו-Arduino.",
        longDescription: "צללו לעולם החומרה עם מחשבי לוח יחיד. למדו להתממשק עם חיישנים, לשלוט במפעילים ולבנות התקני IoT באמצעות פלטפורמות כמו Raspberry Pi ו-ESP32.",
        features: ["תכנות GPIO", "אינטגרציה עם חיישנים", "קישוריות IoT", "לינוקס למערכות משובצות"]
      },
      python: {
        title: "שלוט בפייתון",
        description: "מדריך מקיף לתכנות בפייתון, מהיסודות ועד לנושאים מתקדמים.",
        longDescription: "מה-'Hello World' הראשון שלכם ועד פרויקטים מורכבים במדעי הנתונים. תוכנית הלימודים מכסה תבניות פייתון מודרניות, תכנות אסינכרוני ופריימוורקים פופולריים.",
        features: ["מבני נתונים ואלגוריתמים", "תכנות מונחה עצמים", "AsyncIO ומקביליות", "פריימוורקים ל-Web (FastAPI/Django)"]
      },
      machineLearning: {
        title: "מאסטר בקורס למידת מכונה",
        description: "שלטו ביסודות של למידת מכונה ו-Edge AI.",
        longDescription: "צלילה עמוקה לעולם של למידת מכונה, תוך התמקדות באלגוריתמים, עיבוד נתונים ופריסת מודלים למכשירי קצה. הקורס מגשר על הפער בין תיאוריה ליישום בעולם האמיתי.",
        features: ["רשתות עצביות", "פריסת Edge AI", "עיבוד מקדים של נתונים", "TensorFlow & PyTorch"]
      },
      designPatterns: {
        title: "תבניות עיצוב",
        description: "שלוט בארכיטקטורת תוכנה עם תבניות עיצוב חיוניות ושיטות עבודה מומלצות.",
        longDescription: "חקור את אבני היסוד של הנדסת תוכנה. המדריך מכסה תבניות GoF קלאסיות, סגנונות ארכיטקטורה מודרניים ועקרונות לכתיבת קוד תחזוקתי וניתן להרחבה.",
        features: ["תבניות יצירה", "תבניות מבנה", "תבניות התנהגות", "עקרונות SOLID"]
      }
    }
  },
  [Language.DE]: {
    title: "Tech-Lernzentrum",
    subtitle: "Ihr Tor zur Beherrschung moderner Technologien, von Netzwerken bis hin zu KI and Hardware.",
    footerRights: "© Noam Gold AI 2025",
    feedback: "Feedback senden",
    visitSite: "Details anzeigen",
    searchPlaceholder: "Themen suchen...",
    noResults: "Keine Projekte gefunden.",
    share: "Teilen",
    projects: {
      networking: {
        title: "Netzwerke lernen",
        description: "Tauchen Sie tief in Netzwerkprotokolle, Architektur und Sicherheitsgrundlagen ein.",
        longDescription: "Beherrschen Sie die fundamentalen Bausteine des Internets. Dieser umfassende Kurs führt Sie von den Grundlagen von LANs und WANs bis zu fortgeschrittenen Routing-Protokollen.",
        features: ["TCP/IP & OSI Modelle", "Subnetting & Adressierung", "Routing-Protokolle (OSPF, BGP)", "Netzwerksicherheits-Grundlagen"]
      },
      aiTools: {
        title: "KI-Coding-Tools meistern",
        description: "Nutzen Sie die Kraft der KI-gestützten Entwicklung und steigern Sie Ihre Produktivität.",
        longDescription: "Lernen Sie, wie Sie modernste KI-Tools nutzen, um schneller sauberen Code zu schreiben. Wir behandeln alles von GitHub Copilot bis hin zu spezialisierten Coding-Agenten.",
        features: ["KI Prompt Engineering", "Automatisches Refactoring", "Code-Generierungs-Strategien", "Debugging mit KI"]
      },
      sbc: {
        title: "SBC meistern",
        description: "Entdecken Sie die Welt der Einplatinencomputer wie Raspberry Pi und Arduino.",
        longDescription: "Tauchen Sie mit Einplatinencomputern in die Hardware-Welt ein. Lernen Sie Schnittstellen zu Sensoren, Aktorensteuerung und den Bau von IoT-Geräten.",
        features: ["GPIO-Programmierung", "Sensor-Integration", "IoT-Konnektivität", "Linux für eingebettete Systeme"]
      },
      python: {
        title: "Python meistern",
        description: "Umfassender Leitfaden zur Python-Programmierung, von den Grundlagen bis zu fortgeschrittenen Themen.",
        longDescription: "Von Ihrem ersten 'Hello World' bis zu komplexen Data-Science-Projekten. Dieser Lehrplan behandelt moderne Python-Muster und asynchrone Programmierung.",
        features: ["Datenstrukturen & Algorithmen", "Objektorientierte Programmierung", "AsyncIO & Nebenläufigkeit", "Web-Frameworks (FastAPI/Django)"]
      },
      machineLearning: {
        title: "Maschinelles Lernen Masterclass",
        description: "Meistern Sie die Grundlagen von Machine Learning and Edge AI.",
        longDescription: "Ein tiefes Eintauchen in die Welt des maschinellen Lernens, mit Schwerpunkt auf Algorithmen, Datenverarbeitung und der Bereitstellung von Modellen auf Edge-Geräten. Diese Masterclass schließt die Lücke zwischen Theorie und realer Anwendung.",
        features: ["Neuronale Netze", "Edge-KI-Bereitstellung", "Datenvorverarbeitung", "TensorFlow & PyTorch"]
      },
      designPatterns: {
        title: "Design Patterns meistern",
        description: "Meistern Sie die Softwarearchitektur mit den wichtigsten Entwurfsmustern.",
        longDescription: "Erforschen Sie die grundlegenden Blaupausen des Software Engineering. Dieser Leitfaden deckt klassische GoF-Muster, moderne Architekturstile und Prinzipien ab.",
        features: ["Erzeugungsmuster", "Strukturmuster", "Verhaltensmuster", "SOLID-Prinzipien"]
      }
    }
  },
  [Language.ES]: {
    title: "Centro de Aprendizaje Tecnológico",
    subtitle: "Tu puerta de entrada para dominar la tecnología moderna, desde redes hasta IA y hardware.",
    footerRights: "© Noam Gold AI 2025",
    feedback: "Enviar comentarios",
    visitSite: "Ver detalles",
    searchPlaceholder: "Buscar temas...",
    noResults: "No se encontraron proyectos.",
    share: "Compartir",
    projects: {
      networking: {
        title: "Aprender Redes",
        description: "Profundiza en protocolos de red, arquitectura y fundamentos de seguridad.",
        longDescription: "Domina los bloques de construcción fundamentales de Internet. Este curso integral te lleva desde los conceptos básicos de LAN y WAN hasta protocolos de enrutamiento avanzados.",
        features: ["Modelos TCP/IP y OSI", "Subredes y Direccionamiento", "Protocolos de Enrutamiento", "Conceptos básicos de seguridad"]
      },
      aiTools: {
        title: "Dominar Herramientas de IA",
        description: "Desbloquea el poder del desarrollo asistido por IA y aumenta tu productividad.",
        longDescription: "Aprende a aprovechar las herramientas de IA de última generación para escribir código limpio más rápido. Cubrimos desde GitHub Copilot hasta agentes de codificación.",
        features: ["Ingeniería de Prompts de IA", "Refactorización Automatizada", "Estrategias de Generación de Código", "Depuración con IA"]
      },
      sbc: {
        title: "Dominar SBC",
        description: "Explora el world de los ordenadores de placa única como Raspberry Pi y Arduino.",
        longDescription: "Sumérgete en el mundo del hardware con ordenadores de placa única. Aprende a interactuar con sensores, controlar actuadores y construir dispositivos IoT.",
        features: ["Programación GPIO", "Integración de Sensores", "Conectividad IoT", "Linux para Sistemas Embebidos"]
      },
      python: {
        title: "Dominar Python",
        description: "Guía completa de programación en Python, desde temas básicos hasta avanzados.",
        longDescription: "Desde tu primer 'Hola Mundo' hasta complejos proyectos de ciencia de datos. Este plan de estudios cubre patrones modernos de Python y programación asíncrona.",
        features: ["Estructuras de Datos y Algoritmos", "Programación Orientada a Objetos", "AsyncIO y Concurrencia", "Frameworks Web (FastAPI/Django)"]
      },
      machineLearning: {
        title: "Masterclass de Aprendizaje Automático",
        description: "Domina los fundamentos del aprendizaje automático y la IA perimetral.",
        longDescription: "Una inmersión profunda en el mundo del aprendizaje automático, centrándose en algoritmos, procesamiento de datos y despliegue de modelos en dispositivos perimetrales. Esta masterclass cierra la brecha entre la teoría y la aplicación en el mundo real.",
        features: ["Redes Neuronales", "Despliegue de IA Perimetral", "Preprocesamiento de Datos", "TensorFlow y PyTorch"]
      },
      designPatterns: {
        title: "Dominar Patrones de Diseño",
        description: "Domina la arquitectura de software con patrones de diseño esenciales.",
        longDescription: "Explora los planos fundamentales de la ingeniería de software. Esta guía cubre los patrones clásicos de GoF, los estilos arquitectónicos modernos y los principios de código.",
        features: ["Patrones Creacionales", "Patrones Estructurales", "Patrones de Comportamiento", "Principios SOLID"]
      }
    }
  },
  [Language.FR]: {
    title: "Hub d'Apprentissage Tech",
    subtitle: "Votre passerelle pour maîtriser la technologie moderne, des réseaux à l'IA et au matériel.",
    footerRights: "© Noam Gold AI 2025",
    feedback: "Envoyer des commentaires",
    visitSite: "Voir les détails",
    searchPlaceholder: "Rechercher...",
    noResults: "Aucun projet trouvé.",
    share: "Partager",
    projects: {
      networking: {
        title: "Apprendre les Réseaux",
        description: "Plongez dans les protocoles réseau, l'architecture et les fondamentaux de la sécurité.",
        longDescription: "Maîtrisez les éléments fondamentaux d'Internet. Ce cours complet vous emmène des bases des LAN et WAN aux protocoles de routage avancés et à la sécurité réseau.",
        features: ["Modèles TCP/IP & OSI", "Sous-réseaux et Adressage", "Protocoles de Routage", "Bases de la Sécurité Réseau"]
      },
      aiTools: {
        title: "Maîtriser les Outils IA",
        description: "Libérez la puissance du développement assisté par IA et boostez votre productivité.",
        longDescription: "Apprenez à tirer parti des outils d'IA de pointe pour écrire un code plus propre plus rapidement. Nous couvrons tout, de GitHub Copilot aux agents de codage spécialisés.",
        features: ["Ingénierie de Prompt IA", "Refactoring Automatisé", "Stratégies de Génération de Code", "Débogage avec l'IA"]
      },
      sbc: {
        title: "Maîtriser les SBC",
        description: "Explorez le monde des ordinateurs à carte unique comme Raspberry Pi et Arduino.",
        longDescription: "Plongez dans le monde du matériel avec les ordinateurs à carte unique. Apprenez à interfacer avec des capteurs, contrôler des actionneurs et construire des appareils IoT.",
        features: ["Programmation GPIO", "Intégration de Capteurs", "Connectivité IoT", "Linux pour Systèmes Embarqués"]
      },
      python: {
        title: "Maîtriser Python",
        description: "Guide complet de la programmation Python, des bases aux sujets avancés.",
        longDescription: "De votre premier 'Hello World' aux projets complexes de science des données. Ce programme couvre les modèles Python modernes et la programmation asynchrone.",
        features: ["Structures de Données & Algorithmes", "Programmation Orientée Objet", "AsyncIO & Concurrence", "Frameworks Web (FastAPI/Django)"]
      },
      machineLearning: {
        title: "Masterclass en Apprentissage Automatique",
        description: "Maîtrisez les fondements de l'apprentissage automatique et de l'Edge AI.",
        longDescription: "Une plongée profonde dans le monde de l'apprentissage automatique, axée sur les algorithmes, le traitement des données et le déploiement de modèles sur des appareils périphériques. Cette masterclass comble le fossé entre la théorie et l'application réelle.",
        features: ["Réseaux Neuronaux", "Déploiement Edge AI", "Prétraitement des Données", "TensorFlow & PyTorch"]
      },
      designPatterns: {
        title: "Maîtriser les Design Patterns",
        description: "Maîtrisez l'architecture logicielle avec les modèles de conception essentiels.",
        longDescription: "Explorez les plans fondamentaux du génie logiciel. Ce guide couvre les modèles GoF classiques, les styles architecturaux modernes et les principes de code.",
        features: ["Patrons de création", "Patrons de structure", "Patrons de comportement", "Principes SOLID"]
      }
    }
  }
};