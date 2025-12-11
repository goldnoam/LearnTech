export enum Language {
  EN = 'en',
  ZH = 'zh', // Chinese
  HI = 'hi', // Hindi (Indy)
  RU = 'ru',
  HE = 'he',
  DE = 'de',
  ES = 'es',
  FR = 'fr'
}

export interface Translation {
  title: string;
  subtitle: string;
  footerRights: string;
  feedback: string;
  visitSite: string;
  searchPlaceholder: string;
  noResults: string;
  share: string;
  projects: {
    networking: ProjectDetails;
    aiTools: ProjectDetails;
    sbc: ProjectDetails;
    python: ProjectDetails;
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
  translationKey: 'networking' | 'aiTools' | 'sbc' | 'python';
}