// Create comprehensive type definitions
export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  excerpt: string;
  content: string;
  author?: string;
  tags?: string[];
  slug?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  link: string;
  featured?: boolean;
  completionDate?: string;
  client?: string;
}

export interface SiteConfig {
  title: string;
  subtitle: string;
  description: string;
  url: string;
  language: string;
  themeColor: string;
  banner: {
    enable: boolean;
    src: string;
    position: string;
    credit: {
      enable: boolean;
      text: string;
      url: string;
    };
  };
  profile: ProfileConfig;
  // Other site settings
}

export interface ProfileConfig {
  avatar: string;
  name: string;
  bio: string;
  location: string;
  company: string;
  links: ProfileLink[];
  skills: SkillCategory[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
}

// Other interfaces as needed 