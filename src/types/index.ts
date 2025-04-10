export type Language = 'en' | 'nl' | 'fr' | 'de' | 'el' | 'sq';

export interface LanguageOption {
  code: Language;
  name: string;
  flag: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Experience {
  company: {
    [key in Language]: string;
  };
  position: {
    [key in Language]: string;
  };
  period: {
    [key in Language]: string;
  };
  location: {
    [key in Language]: string;
  };
  logo: string;
  achievements: {
    [key in Language]: string[];
  };
}

export interface Education {
  school: {
    [key in Language]: string;
  };
  degree: {
    [key in Language]: string;
  };
  period: {
    [key in Language]: string;
  };
  specialization: {
    [key in Language]: string;
  };
  logo: string;
  skills: string[];
}