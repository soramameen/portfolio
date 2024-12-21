import { IconType } from "react-icons";
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

export interface Skill {
  name: string;
  category: string;
  level: number; // 熟練度を0〜100の範囲で表現
  icon: IconType;
}
