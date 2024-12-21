// lib/skills.ts

import {
  SiJavascript,
  SiTypescript,
  SiC,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import { Skill } from "../types/types";

export const skills: Skill[] = [
  // プログラミング言語
  {
    name: "JavaScript",
    category: "プログラミング言語",
    level: 40,
    icon: SiJavascript,
  },
  {
    name: "TypeScript",
    category: "プログラミング言語",
    level: 40,
    icon: SiTypescript,
  },
  {
    name: "C",
    category: "プログラミング言語",
    level: 20,
    icon: SiC,
  },
  // フレームワーク
  {
    name: "React.js",
    category: "フレームワーク",
    level: 50,
    icon: SiReact,
  },
  {
    name: "Next.js",
    category: "フレームワーク",
    level: 60,
    icon: SiNextdotjs,
  },
  // ツール
  {
    name: "Git",
    category: "ツール",
    level: 80,
    icon: SiGit,
  },
  {
    name: "GitHub",
    category: "ツール",
    level: 80,
    icon: SiGithub,
  },
  {
    name: "Vercel",
    category: "ツール",
    level: 70,
    icon: SiVercel,
  },
  {
    name: "Netlify",
    category: "ツール",
    level: 70,
    icon: SiNetlify,
  },
];
