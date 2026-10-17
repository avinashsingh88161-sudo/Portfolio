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
  tag?: string; // e.g. "Runtime", "Framework", "NoSQL"
}

export interface SkillCategory {
  title: string;
  description?: string;
  icon?: string;
  skills: Skill[];
}

export interface TimelineItem {
  id: number;
  date: string;
  title: string;
  company?: string;
  location?: string;
  description: string;
  icon?: string;
  tags?: string[];
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
