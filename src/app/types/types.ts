export interface Project {
  slug: string;
  name: string;
  description: string;
  techStack: string[];
  demoLink?: string;
  githubLink?: string;
  image?: string;
}

export interface ProjectCardProps {
  project: Project;
}
