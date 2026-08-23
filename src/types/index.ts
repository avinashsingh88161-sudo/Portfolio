export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  features?: string[];
  image?: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface TimelineItem {
  id: number;
  date: string;
  title: string;
  description: string;
  icon?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}
