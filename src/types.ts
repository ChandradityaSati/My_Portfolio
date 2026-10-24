export interface Project {
  id: string;
  title: string;
  category: string;
  status: 'In Progress' | 'Completed' | 'Live';
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  icon: string;
  iconType: 'fa-brand' | 'fa-solid' | 'svg';
  logoUrl?: string;
  desc: string;
  proficiency: number;
}

export interface TechItem {
  name: string;
  iconUrl: string;
  isLight?: boolean;
}

export interface EducationItem {
  id: string;
  year: string;
  degree: string;
  school: string;
  location: string;
  affiliation: string;
  board?: string;
  levelBadge?: string;
  score: string;
  scoreBadge?: string;
  statusBadge: string;
  logo: string;
  logoAlt: string;
  websiteUrl?: string;
  highlights: string[];
}

export interface HobbyItem {
  icon: string;
  title: string;
  description: string;
}

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  timestamp: any;
}
