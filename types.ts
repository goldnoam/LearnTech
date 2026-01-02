export enum Language {
  EN = 'en',
  ZH = 'zh',
  HI = 'hi',
  RU = 'ru',
  HE = 'he',
  DE = 'de',
  ES = 'es',
  FR = 'fr'
}

export type FontSize = 'sm' | 'base' | 'lg';

export interface Translation {
  title: string;
  subtitle: string;
  footerRights: string;
  feedback: string;
  visitSite: string;
  goToSite: string;
  searchPlaceholder: string;
  noResults: string;
  share: string;
  exportResults: string;
  clear: string;
  fontSize: string;
  projects: {
    networking: ProjectDetails;
    aiTools: ProjectDetails;
    sbc: ProjectDetails;
    python: ProjectDetails;
    machineLearning: ProjectDetails;
    designPatterns: ProjectDetails;
    agenticStack: ProjectDetails;
    testingTools: ProjectDetails;
    masterCpp: ProjectDetails;
  };
}

export interface ProjectDetails {
  title: string;
  description: string;
  longDescription: string;
  features: string[];
}

export interface ProjectData {
  id: string;
  image: string;
  link: string;
  translationKey: 'networking' | 'aiTools' | 'sbc' | 'python' | 'machineLearning' | 'designPatterns' | 'agenticStack' | 'testingTools' | 'masterCpp';
}